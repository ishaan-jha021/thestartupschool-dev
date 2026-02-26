import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Upcoming Workshop | The Startup School',
    description: 'Register for the exclusive upcoming 3-Day Ignition Sprint workshop.',
};

export default function WorkshopPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-[#000000] relative overflow-hidden">
            {/* Extremely Subtle Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

            {/* Hero Section */}
            <section className="relative pt-12 pb-24 border-b border-white/5">
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-10">
                        <span className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_10px_rgba(41,151,255,0.8)] animate-pulse"></span> Registration Open
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-[-0.04em] leading-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-white/80">Spark.</span><br />
                        <span className="text-3xl md:text-5xl font-bold tracking-tight text-white/60">3-Day Ignition Sprint</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed font-light">
                        Stop overthinking. Start executing. Validate your startup idea over one intense weekend with rigorous teardowns and expert mentorship.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="#register" className="group bg-white hover:bg-gray-200 text-black px-10 py-4 rounded-full font-bold text-lg transition duration-300 flex items-center justify-center">
                            Secure Your Spot
                            <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                        </Link>
                        <a href="#details" className="bg-white/5 border border-white/10 hover:border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-full font-bold text-lg transition duration-300">
                            View Schedule
                        </a>
                    </div>
                </div>
            </section>

            {/* Details Grid */}
            <section id="details" className="py-24 border-b border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-card hover-glow p-10 rounded-3xl text-center border border-white/5 flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-white/5 text-white flex items-center justify-center border border-white/10 mb-8 transition duration-300 group-hover:border-white/30">
                                <i className="far fa-calendar-alt text-2xl"></i>
                            </div>
                            <h3 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">WHEN</h3>
                            <p className="text-white text-xl font-medium tracking-tight">Next Weekend<br /><span className="text-text-secondary text-lg font-light">Fri - Sun, 9AM to 6PM</span></p>
                        </div>

                        <div className="glass-card hover-glow p-10 rounded-3xl text-center border border-white/5 flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-white/5 text-white flex items-center justify-center border border-white/10 mb-8 transition duration-300 group-hover:border-white/30">
                                <i className="fas fa-map-marker-alt text-2xl"></i>
                            </div>
                            <h3 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">WHERE</h3>
                            <p className="text-white text-xl font-medium tracking-tight">WeWork BKC<br /><span className="text-text-secondary text-lg font-light">Mumbai, Maharashtra</span></p>
                        </div>

                        <div className="glass-card hover-glow p-10 rounded-3xl text-center border border-white/5 flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-white/5 text-white flex items-center justify-center border border-white/10 mb-8 transition duration-300 group-hover:border-white/30">
                                <i className="far fa-user text-2xl"></i>
                            </div>
                            <h3 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">WHO</h3>
                            <p className="text-white text-xl font-medium tracking-tight">25 Founders<br /><span className="text-text-secondary text-lg font-light">High-intent individuals only</span></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-32 relative z-10">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">THE AGENDA</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">What You Will Build.</h2>
                        <p className="text-xl text-text-secondary font-light">A practical, outcome-driven agenda designed to save you 6 months of wasted effort.</p>
                    </div>

                    <div className="space-y-8">
                        <div className="glass-card hover-glow p-8 md:p-12 rounded-3xl border border-white/5 flex flex-col md:flex-row gap-8 items-start group">
                            <div className="flex-shrink-0 text-white/10 text-6xl font-black tracking-tighter leading-none group-hover:text-accent-blue/20 transition duration-500">01</div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-[-0.02em]">The Brutal Validation</h3>
                                <p className="text-text-secondary text-lg leading-relaxed font-light">Tear down your core assumptions. Is the problem real? Are people willing to pay? We use the Mom Test framework and rapid customer interviews to find out.</p>
                            </div>
                        </div>

                        <div className="glass-card hover-glow p-8 md:p-12 rounded-3xl border border-white/5 flex flex-col md:flex-row gap-8 items-start group">
                            <div className="flex-shrink-0 text-white/10 text-6xl font-black tracking-tighter leading-none group-hover:text-accent-violet/20 transition duration-500">02</div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-[-0.02em]">The MV-Pitch & GTM</h3>
                                <p className="text-text-secondary text-lg leading-relaxed font-light">Crafting your Minimum Viable Pitch. Identify your absolute best first-customer segment and design a zero-cost Go-To-Market strategy to acquire them.</p>
                            </div>
                        </div>

                        <div className="glass-card hover-glow p-8 md:p-12 rounded-3xl border border-white/5 flex flex-col md:flex-row gap-8 items-start group">
                            <div className="flex-shrink-0 text-white/10 text-6xl font-black tracking-tighter leading-none group-hover:text-functional-success/20 transition duration-500">03</div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-[-0.02em]">The Hot Seat</h3>
                                <p className="text-text-secondary text-lg leading-relaxed font-light">Present your refined thesis to our panel of seasoned founders and investors. Receive unfiltered feedback and a 30-day execution roadmap.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTAs */}
            <section id="register" className="py-32 border-t border-white/5 relative z-10">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">APPLY</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Commit to Your Idea.</h2>
                    <p className="text-xl text-text-secondary font-light mb-12">Application deadline is approaching. We review applications on a rolling basis to ensure a high-quality cohort.</p>

                    <div className="glass-card p-12 rounded-3xl border border-white/5">
                        <p className="text-lg text-white font-medium mb-10">Use our general inquiry form to request the application link.</p>
                        <Link href="/#contact" className="group inline-flex items-center bg-white hover:bg-gray-200 text-black px-10 py-4 rounded-full font-bold text-lg transition duration-300">
                            Go to Application Form
                            <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
