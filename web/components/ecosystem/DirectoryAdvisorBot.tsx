'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { westernLineData } from '@/lib/data/western_line';
import { eventsData } from '@/lib/data/events';
import { useRouter } from 'next/navigation';

export default function DirectoryAdvisorBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hi! I'm your ecosystem AI advisor. Ask me anything about our top incubators, spaces, and grants, or tell me where you'd like to go on the platform." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const contextText = westernLineData.map(item =>
                `- **${item.name}** (${item.broadType} ${item.type} in ${item.subRegion}, ${item.area}): Equity: ${item.equityTaken} (${item.equityCategory}), Ideal Stage: ${item.idealStage}, Fee: ${item.fee}, Funding: ${item.fundingGuarantee}, Contact: ${item.contactDetails}${item.website ? `, Website: ${item.website}` : ''}`
            ).join('\n');

            const eventsContextText = eventsData.map(event =>
                `- **${event.eventName}** (${event.tag} Event on ${event.startDate} ${event.month} at ${event.exhibitionCentre}, ${event.location})`
            ).join('\n');

            const systemPrompt = `You are the Global AI Advisor for The Startup School. 
You can answer questions using the directory data below, OR redirect users to specific pages on our platform if they explicitly ask to go somewhere or want a specific tool.

Core Platform Sections available for redirection:
- Main Tools Hub: /tools
- Founder Events Calendar: /tools/founder-calendar
- Grants & Government Schemes Tool: /tools/ecosystem/grants
- Incubators & Coworking Tool: /tools/ecosystem/incubators
- Investors & Accelerators Tool: /tools/ecosystem/investors
- Ecosystem Directory Directory: /tools/ecosystem/directory
- Home Page: /
- Events: /events
- Mentors: /mentors
- Programs: /programs
- About: /about

CRITICAL RULE: *If* the user explicitly asks to go to, find, navigate to, or wants to see one of these core sections (e.g., "I want government grants", "take me to incubators", "show me investors", "go to events", "take me home"), you MUST output EXACTLY this string and nothing else: __REDIRECT:URL__ (replacing URL with the actual path, e.g., __REDIRECT:/tools/ecosystem/grants__).

If they are just asking a conversational question about the data, answer them conversationally and DO NOT use the redirect code. Use markdown to bold names. Note that we have data for BOTH "Incubators & Spaces" AND "Upcoming Events".

DIRECTORY DATA:
[Incubators & Spaces]
${contextText}

[Upcoming Events]
${eventsContextText}`;

            const res = await fetch('/api/directory-chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [
                        { role: 'system', content: systemPrompt },
                        ...messages.filter(m => m.role !== 'system'),
                        { role: 'user', content: userMessage }
                    ]
                })
            });

            if (!res.ok) throw new Error('API Error');

            const data = await res.json();
            const reply = data.reply;

            // Intercept Redirection Command
            const redirectMatch = reply.match(/__REDIRECT:(.*?)__/);
            if (redirectMatch) {
                const targetUrl = redirectMatch[1].trim();
                setMessages(prev => [...prev, { role: 'assistant', content: `Redirecting you to ${targetUrl}... 🚀` }]);
                router.push(targetUrl);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
            }
        } catch (err) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, the network went cold. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* FAB */}
            {!isOpen && (
                <div className="fixed bottom-8 right-8 w-14 h-14 z-[999] group">
                    <div className="absolute inset-0 rounded-full bg-accent-blue opacity-50 animate-ping" style={{ animationDuration: '3s' }}></div>
                    <button
                        className="absolute inset-0 w-full h-full rounded-full bg-[#0a0a0a] border border-white/10 text-accent-blue shadow-[0_0_30px_rgba(45,212,191,0.2)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-accent-blue hover:text-black z-10"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open AI Advisor"
                    >
                        <MessageSquare size={24} />
                    </button>
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-8 right-8 w-[380px] max-w-[calc(100vw-32px)] h-[550px] max-h-[80vh] glass-card border border-white/10 rounded-2xl shadow-2xl flex flex-col z-[1000] overflow-hidden backdrop-blur-xl bg-black/60">
                    <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center text-accent-blue shadow-[0_0_15px_rgba(45,212,191,0.2)]">
                                <Bot size={20} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white tracking-wide">Ecosystem AI</h3>
                                <span className="text-xs text-accent-blue/80 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></span> Online
                                </span>
                            </div>
                        </div>
                        <button className="text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-2" onClick={() => setIsOpen(false)}>
                            <X size={16} />
                        </button>
                    </div>

                    <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 scrollbar-thin scrollbar-thumb-white/10">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex items-end gap-2 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                                {msg.role === 'assistant' && (
                                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 text-accent-blue flex items-center justify-center shrink-0">
                                        <Bot size={12} />
                                    </div>
                                )}
                                <div
                                    className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-accent-blue text-black rounded-br-sm font-medium'
                                        : 'bg-white/5 text-text-primary border border-white/10 rounded-bl-sm font-light'
                                        }`}
                                    dangerouslySetInnerHTML={{ __html: msg.content.replace(/\n/g, '<br/>') }}
                                />
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-end gap-2 max-w-[85%] self-start">
                                <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 text-accent-blue flex items-center justify-center shrink-0">
                                    <Bot size={12} />
                                </div>
                                <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 rounded-bl-sm flex gap-1 items-center h-[44px]">
                                    <span className="w-1.5 h-1.5 bg-accent-blue/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                    <span className="w-1.5 h-1.5 bg-accent-blue/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                    <span className="w-1.5 h-1.5 bg-accent-blue/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSubmit} className="p-3 bg-black/40 border-t border-white/10 flex gap-2">
                        <input
                            type="text"
                            placeholder="Find a space in Bandra..."
                            className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all font-light"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="w-11 h-11 shrink-0 bg-accent-blue text-black rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
