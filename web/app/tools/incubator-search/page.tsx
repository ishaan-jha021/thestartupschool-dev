import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Startup Tools Ecosystem | The Startup School',
    description: 'Explore the definitive list of tools and resources for the startup ecosystem.',
};

const STATS = [
    { value: '135+', label: 'Resources' },
    { value: '60+', label: 'Grants & Schemes' },
    { value: '35+', label: 'Incubators' },
    { value: '40+', label: 'Investors' },
];

export default function EcosystemPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-[#000000]">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <span className="text-accent-blue text-xs font-bold tracking-[0.2em] uppercase mb-4 block">AI NATIVE DIRECTORY</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-[-0.04em] leading-tight">
                        Map the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">Ecosystem.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary font-light">
                        Discover grants, incubators, and investors perfectly matched to your profile with our AI advisor.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32 border-y border-white/5 py-12">
                    {STATS.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">{stat.value}</div>
                            <div className="text-sm font-bold text-text-secondary tracking-widest uppercase">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Western Line Exclusive */}
                <section className="mb-32">
                    <div className="glass-card hover-glow rounded-3xl p-10 md:p-16 border border-brand/20 relative group text-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none"></div>
                        <span className="bg-accent-blue text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">
                            Mumbai Exclusive
                        </span>
                        <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Mumbai Ecosystem Directory</h2>
                        <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                            We've natively mapped out 50+ top coworking spaces, accelerators, and incubators across Mumbai. Compare equity models, desks, fees, and funding prospects instantly.
                        </p>
                        <Link href="/tools/incubator-search/directory" className="inline-block bg-white hover:bg-gray-200 text-black px-10 py-4 rounded-full font-bold transition duration-300">
                            Explore The Directory
                        </Link>
                    </div>
                </section>

                {/* Categories Grid */}
                <section>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Link href="/tools/incubator-search/grants" className="glass-card p-10 rounded-3xl border border-white/5 relative group hover:border-accent-blue/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-blue font-bold mb-6 group-hover:scale-110 transition-transform">1</div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-blue transition-colors">Grants & Schemes</h3>
                            <p className="text-text-secondary leading-relaxed font-light">Explore government-backed hubs, universities, and pure grants asking for 0% equity.</p>
                        </Link>
                        <Link href="/tools/incubator-search/incubators" className="glass-card p-10 rounded-3xl border border-white/5 relative group hover:border-accent-blue/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-blue font-bold mb-6 group-hover:scale-110 transition-transform">2</div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-blue transition-colors">Incubators</h3>
                            <p className="text-text-secondary leading-relaxed font-light">Find the best coworking spaces, hardware labs, and accelerators to scale your startup.</p>
                        </Link>
                        <Link href="/tools/incubator-search/investors" className="glass-card p-10 rounded-3xl border border-white/5 relative group hover:border-accent-blue/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-blue font-bold mb-6 group-hover:scale-110 transition-transform">3</div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-blue transition-colors">Investors</h3>
                            <p className="text-text-secondary leading-relaxed font-light">Discover hubs with the highest investor density and direct seed funding guarantees.</p>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

