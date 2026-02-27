import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-20">
            {/* Extremely Subtle Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">

                {/* Minimalist Intro Tag */}
                <div className="mb-8">
                    <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-text-secondary text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-md">
                        The 100-Day Acceleration
                    </span>
                </div>

                {/* Massive Apple-style Typography */}
                <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-[-0.04em] text-white leading-[0.9] mb-8">
                    Stop <span className="text-white/40">Planning.</span><br />
                    Start <span className="gradient-text">Building.</span>
                </h1>

                <p className="text-xl md:text-3xl font-light text-text-secondary max-w-3xl mx-auto mb-20 tracking-tight leading-relaxed">
                    An alternate B-School for Bharat's aspiring founders. We bridge the deadly gaps in <span className="text-white font-medium">Learning</span>, <span className="text-white font-medium">Access</span>, <span className="text-white font-medium">Mentoring</span>, and <span className="text-white font-medium">Community</span>.
                </p>

                {/* Ultra-Clean Comparison */}
                <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
                    {/* Option A - The Traditional Route */}
                    <div className="glass-card hover-glow rounded-3xl p-10 md:p-14 text-left group">
                        <div className="text-text-secondary text-sm font-bold tracking-[0.2em] uppercase mb-8">Option A: The Wait</div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">2 Years & ₹20L+</h3>
                        <p className="text-text-secondary text-lg leading-relaxed mb-10">
                            A traditional MBA. Theoretical case studies, massive debt, and ultimately fighting for a corporate desk job.
                        </p>
                        <div className="w-full h-[1px] bg-gradient-to-r from-red-500/20 to-transparent mb-8"></div>
                        <div className="flex items-center text-text-secondary font-medium tracking-wide">
                            <span className="w-2 h-2 rounded-full bg-red-500 mr-3"></span> High Opportunity Cost
                        </div>
                    </div>

                    {/* Option B - The Builder Route */}
                    <div className="glass-card hover-glow rounded-3xl p-10 md:p-14 text-left border-accent-blue/30 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="text-accent-blue text-sm font-bold tracking-[0.2em] uppercase mb-8">Option B: The Build</div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">100 Days of Execution</h3>
                            <p className="text-text-secondary text-lg leading-relaxed mb-10">
                                Real-world validation. Mentorship from operators. Building a product people actually want to pay for.
                            </p>
                            <div className="w-full h-[1px] bg-gradient-to-r from-accent-blue/50 to-transparent mb-8"></div>
                            <div className="flex items-center text-white font-medium tracking-wide">
                                <span className="w-2 h-2 rounded-full bg-accent-blue mr-3 shadow-[0_0_10px_rgba(41,151,255,0.8)]"></span> Zero Worthless Theory
                            </div>
                        </div>
                    </div>
                </div>

                {/* Primary CTA */}
                <div className="flex flex-col items-center">
                    <Link href="/programs" className="group flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                        Explore Programs
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
