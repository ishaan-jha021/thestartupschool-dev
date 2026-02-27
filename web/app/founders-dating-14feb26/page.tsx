import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Founder's Dating | The Startup School",
    description: "A curated offline meetup for founders & builders looking to co-build. Hosted on 14th Feb.",
};

export default function FoundersDatingPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-[#000000] relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none"></div>

            <main className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Back Navigation Header */}
                <div className="mb-12 flex items-center justify-between border-b border-white/5 pb-6">
                    <Link href="/events" className="group text-text-secondary hover:text-white flex items-center gap-2 transition duration-300 font-medium text-sm">
                        <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i> Back to Events
                    </Link>
                    <Link href="/events" className="text-xl font-black text-white tracking-tighter hidden md:block group">
                        THE <span className="text-accent-blue group-hover:text-white transition-colors">STARTUP</span> SCHOOL <span className="text-text-secondary font-light">EVENTS</span>
                    </Link>
                </div>

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8">
                        Past Event
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                        Founder's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">Dating.</span>
                    </h1>
                    <p className="text-xl text-text-secondary font-light max-w-2xl mx-auto leading-relaxed">
                        A curated offline meetup for founders & builders looking to co-build. Connect, collaborate, and create the next big thing.
                    </p>
                </div>

                {/* Event Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="glass-card p-10 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-blue mb-8">
                            <i className="far fa-calendar-alt text-2xl"></i>
                        </div>
                        <h3 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">WHEN</h3>
                        <p className="text-white text-2xl font-bold tracking-tight mb-2">Friday, 14th Feb</p>
                        <p className="text-text-secondary text-lg font-light">10:00 AM – 1:00 PM</p>
                    </div>

                    <div className="glass-card p-10 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-violet mb-8">
                            <i className="fas fa-map-marker-alt text-2xl"></i>
                        </div>
                        <h3 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">WHERE</h3>
                        <p className="text-white text-2xl font-bold tracking-tight mb-2">DevX, Andheri East</p>
                        <p className="text-text-secondary text-lg font-light leading-relaxed">10th Floor, B Wing, 215 Atrium, Vijay Nagar Colony, J B Nagar, Mumbai</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="glass-card p-10 md:p-16 rounded-3xl border border-white/5 mb-20">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-10 tracking-tight text-center">What You Experienced</h2>

                        <div className="space-y-12">
                            <div className="flex gap-6 items-start">
                                <div className="text-accent-blue mt-1"><i className="fas fa-check-circle text-xl"></i></div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Ice-Breaking Introductions</h4>
                                    <p className="text-text-secondary font-light leading-relaxed">Skipped the awkward small talk with highly structured and efficient intros.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="text-accent-blue mt-1"><i className="fas fa-check-circle text-xl"></i></div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Expert Session</h4>
                                    <p className="text-text-secondary font-light leading-relaxed">Learned from Gaurav Bansal's expansive experience mentoring at IITs and IIMs.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="text-accent-blue mt-1"><i className="fas fa-check-circle text-xl"></i></div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Match Making</h4>
                                    <p className="text-text-secondary font-light leading-relaxed">Dedicated focused time to find founders with complementary skills to build together.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="text-accent-blue mt-1"><i className="fas fa-check-circle text-xl"></i></div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Breakout Sessions</h4>
                                    <p className="text-text-secondary font-light leading-relaxed">Deep dive discussions on specific industries, technologies, and go-to-market strategies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="text-center pb-10">
                    <h3 className="text-2xl font-bold text-white mb-6">Want to attend the next one?</h3>
                    <Link href="/events" className="group inline-flex items-center bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-full font-bold transition duration-300">
                        View Upcoming Events
                        <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>
            </main>
        </div>
    );
}
