import { Metadata } from 'next';
import Link from 'next/link';
import { CalendarPlus, MapPin, ExternalLink, Download } from 'lucide-react';
import { eventsData, FounderEvent } from '@/lib/data/events';
import { IcsDownloadButton } from '@/components/ecosystem/IcsDownloadButton';

export const metadata: Metadata = {
    title: 'Founder Events Calendar | The Startup School',
    description: 'Never miss an important event. A curated list of monthly events for founders.',
};

function generateGoogleCalendarUrl(event: FounderEvent) {
    const text = encodeURIComponent(event.eventName);
    const details = encodeURIComponent(`Find out more: ${event.weblink || 'No link provided.'}\n\nDates: ${event.startDate} ${event.month}`);
    const location = encodeURIComponent(`${event.exhibitionCentre}, ${event.location}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&location=${location}`;
}

export default function FounderCalendar() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-bg-main relative overflow-hidden">
            {/* Extremely Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <Link href="/tools" className="text-text-secondary hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                            <span>&larr;</span> Back to Tools
                        </Link>
                        <span className="text-white/20">|</span>
                        <span className="bg-accent-violet/20 text-accent-violet text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-accent-violet/30 animate-pulse">New Active Tool</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                        Founder <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">Events Calendar.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-text-secondary font-light max-w-3xl leading-relaxed">
                        Never miss a crucial opportunity. We've mapped out the highest-leverage B2B events, exhibitions, and networking hubs for this month.
                        Add them to your calendar so you always know where you need to be.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventsData.map((event, idx) => (
                        <div key={idx} className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 hover:border-accent-blue/40 transition-all group flex flex-col bg-[#050505]">
                            <div className="flex justify-between items-start mb-6">
                                <span className="bg-white/5 border border-white/10 text-text-secondary text-xs px-3 py-1 rounded-full">{event.tag || 'Event'}</span>
                                <span className="text-accent-blue font-bold text-sm bg-accent-blue/10 border border-accent-blue/20 px-3 py-1 rounded-full whitespace-nowrap">{event.startDate} {event.month}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-accent-blue transition-colors line-clamp-3">{event.eventName}</h3>

                            <div className="space-y-3 mb-8 flex-1 text-sm text-text-secondary font-light">
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-5 h-5 text-accent-violet shrink-0 mt-0.5" />
                                    <span>{event.exhibitionCentre}<br /><span className="text-white/40">{event.location}</span></span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                                <a
                                    href={generateGoogleCalendarUrl(event)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-blue to-accent-violet hover:opacity-90 text-white py-3 px-4 rounded-xl text-sm font-bold transition-opacity"
                                >
                                    <CalendarPlus className="w-4 h-4" />
                                    Google Calendar
                                </a>
                                <div className="grid grid-cols-2 gap-3">
                                    <IcsDownloadButton event={event} />
                                    {event.weblink ? (
                                        <a
                                            href={event.weblink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-2.5 px-4 rounded-xl text-sm font-medium transition-colors border border-white/5 hover:border-white/10"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Details
                                        </a>
                                    ) : (
                                        <div className="flex items-center justify-center gap-2 bg-white/5 opacity-50 text-white py-2.5 px-4 rounded-xl text-sm font-medium border border-white/5 cursor-not-allowed">
                                            No Link
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
