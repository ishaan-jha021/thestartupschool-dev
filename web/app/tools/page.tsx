import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Startup Tools Ecosystem | The Startup School',
    description: 'Explore the definitive list of tools and resources for the startup ecosystem.',
};

export default function ToolsPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-bg-main flex items-center justify-center relative overflow-hidden">
            {/* Extremely Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="text-center px-6 relative z-10">
                <span className="text-accent-blue text-sm font-bold tracking-[0.2em] uppercase mb-4 block animate-pulse">Ecosystem Hub</span>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-[-0.04em]">
                    Startup <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">Tools.</span>
                </h1>
                <p className="text-xl md:text-2xl text-text-secondary font-light max-w-2xl mx-auto mb-10">
                    A curated ecosystem of resources, platforms, and frameworks to accelerate your build.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto text-left relative z-10 w-full font-light">
                    {/* Active Tool 1: Directory */}
                    <Link href="/tools/ecosystem/directory" className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 hover:border-accent-blue/50 transition-colors group relative overflow-hidden bg-[#050505]">
                        <span className="bg-accent-blue/10 text-accent-blue text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block border border-accent-blue/20">Live Now</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-accent-blue transition-colors">Ecosystem Directory</h3>
                        <p className="text-text-secondary leading-relaxed font-light mb-8">An AI-native mapping tool to discover everything across the startup landscape.</p>
                        <span className="text-accent-blue font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">Access Tool <span className="text-lg">&rarr;</span></span>
                    </Link>

                    {/* Active Tool 2: Grants */}
                    <Link href="/tools/ecosystem/grants" className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 hover:border-accent-blue/50 transition-colors group relative overflow-hidden bg-[#050505]">
                        <span className="bg-accent-blue/10 text-accent-blue text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block border border-accent-blue/20">Live Now</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-accent-blue transition-colors">Grants & Schemes</h3>
                        <p className="text-text-secondary leading-relaxed font-light mb-8">Explore government-backed hubs, universities, and pure grants asking for 0% equity.</p>
                        <span className="text-accent-blue font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">Access Tool <span className="text-lg">&rarr;</span></span>
                    </Link>

                    {/* Active Tool 3: Incubators */}
                    <Link href="/tools/ecosystem/incubators" className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 hover:border-accent-blue/50 transition-colors group relative overflow-hidden bg-[#050505]">
                        <span className="bg-accent-blue/10 text-accent-blue text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block border border-accent-blue/20">Live Now</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-accent-blue transition-colors">Incubators Search</h3>
                        <p className="text-text-secondary leading-relaxed font-light mb-8">Find the best coworking spaces, hardware labs, and accelerators to scale your startup.</p>
                        <span className="text-accent-blue font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">Access Tool <span className="text-lg">&rarr;</span></span>
                    </Link>

                    {/* Active Tool 4: Investors */}
                    <Link href="/tools/ecosystem/investors" className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 hover:border-accent-blue/50 transition-colors group relative overflow-hidden bg-[#050505]">
                        <span className="bg-accent-blue/10 text-accent-blue text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block border border-accent-blue/20">Live Now</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-accent-blue transition-colors">Investors Match</h3>
                        <p className="text-text-secondary leading-relaxed font-light mb-8">Discover hubs with the highest investor density and direct seed funding guarantees.</p>
                        <span className="text-accent-blue font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">Access Tool <span className="text-lg">&rarr;</span></span>
                    </Link>

                    {/* Coming Soon Tool 1 */}
                    <div className="glass-card p-8 md:p-10 rounded-3xl border border-dashed border-white/10 bg-[#020202] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]"></div>
                        <span className="bg-white/5 border border-white/10 text-text-secondary text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Coming Soon</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-400 mb-4 tracking-tight">Pitch Deck Repo</h3>
                        <p className="text-gray-500 leading-relaxed font-light mb-8 relative z-10">A massive curated collection of winning pitch decks from YC startups and global unicorns to study.</p>
                        <span className="text-gray-600 font-bold text-sm tracking-widest uppercase relative z-10">In Development</span>
                    </div>

                    {/* Coming Soon Tool 2 */}
                    <div className="glass-card p-8 md:p-10 rounded-3xl border border-dashed border-white/10 bg-[#020202] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]"></div>
                        <span className="bg-white/5 border border-white/10 text-text-secondary text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Coming Soon</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-400 mb-4 tracking-tight">Financial Modeler</h3>
                        <p className="text-gray-500 leading-relaxed font-light mb-8 relative z-10">Automated financial projections and runway estimation templates for SaaS and Hardware.</p>
                        <span className="text-gray-600 font-bold text-sm tracking-widest uppercase relative z-10">In Development</span>
                    </div>

                    {/* Coming Soon Tool 3 */}
                    <div className="glass-card p-8 md:p-10 rounded-3xl border border-dashed border-white/10 bg-[#020202] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]"></div>
                        <span className="bg-white/5 border border-white/10 text-text-secondary text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Coming Soon</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-400 mb-4 tracking-tight">Term Sheet AI</h3>
                        <p className="text-gray-500 leading-relaxed font-light mb-8 relative z-10">AI tool designed to instantly spotlight red flags and non-standard clauses in investor term sheets.</p>
                        <span className="text-gray-600 font-bold text-sm tracking-widest uppercase relative z-10">In Development</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
