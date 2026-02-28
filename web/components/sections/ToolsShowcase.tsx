"use client";

import Link from 'next/link';
import { westernLineData } from '@/lib/data/western_line';
import { eventsData } from '@/lib/data/events';
import { pitchDecksData, PitchDeck } from '@/lib/data/pitchDecks';

// ─── Shared Marquee wrapper ────────────────────────────────────────────
function Marquee({ children, reverse = false, speed = 50 }: { children: React.ReactNode; reverse?: boolean; speed?: number }) {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-bg-main to-transparent" />
            <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-bg-main to-transparent" />
            <div
                className="marquee-track"
                style={{ animationDuration: `${speed}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
            >
                {children}
                {children}
            </div>
            <style jsx>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll var(--duration, 50s) linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}

// ─── 1. Incubator Cards ───────────────────────────────────────────────
function IncubatorCard({ item }: { item: typeof westernLineData[0] }) {
    return (
        <div className="flex-shrink-0 w-[300px] mx-3 glass-card rounded-2xl p-6 bg-[#0a0a0a]/60 border border-white/5 hover:border-accent-blue/30 hover:-translate-y-2 transition-all duration-300 ease-out cursor-default">
            <div className="flex items-start justify-between mb-3 gap-2">
                <span className="text-[10px] font-bold text-accent-blue tracking-widest uppercase bg-accent-blue/10 px-2.5 py-1 rounded-full border border-accent-blue/20 flex-shrink-0">
                    {item.subRegion}
                </span>
                <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border flex-shrink-0 ${item.equityCategory === 'Zero Equity' ? 'text-green-400 bg-green-400/10 border-green-400/20' : 'text-amber-400 bg-amber-400/10 border-amber-400/20'}`}>
                    {item.equityCategory}
                </span>
            </div>
            <h4 className="text-white font-bold text-base mb-1 leading-snug">{item.name}</h4>
            <p className="text-text-secondary text-xs mb-4 leading-relaxed">{item.type}</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-text-secondary text-[10px] uppercase tracking-wider mb-0.5">Funding</p>
                    <p className="text-white font-semibold text-xs leading-tight">{item.fundingGuarantee}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-text-secondary text-[10px] uppercase tracking-wider mb-0.5">Stage</p>
                    <p className="text-white font-semibold text-xs leading-tight">{item.idealStage}</p>
                </div>
            </div>
            {item.website && (
                <a href={item.website} target="_blank" rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-1.5 text-accent-blue text-xs font-semibold hover:text-white transition-colors"
                    onClick={e => e.stopPropagation()}>
                    <i className="fas fa-external-link-alt text-[10px]"></i> Visit
                </a>
            )}
        </div>
    );
}

// ─── 2. Investor Cards ─────────────────────────────────────────────────
const INVESTORS = [
    { name: 'Sequoia Capital India', stage: 'Series A → Growth', focus: 'SaaS, FinTech, Consumer', check: '$500K – $10M' },
    { name: 'Accel India', stage: 'Seed → Series B', focus: 'Deep Tech, EdTech, SaaS', check: '$1M – $50M' },
    { name: 'Blume Ventures', stage: 'Pre-Seed → Seed', focus: 'B2B, DeepTech, FinTech', check: '$250K – $2M' },
    { name: 'Nexus Venture Partners', stage: 'Seed → Series A', focus: 'Enterprise SaaS, Consumer', check: '$500K – $5M' },
    { name: 'Kalaari Capital', stage: 'Seed → Series B', focus: 'D2C, HealthTech, B2B', check: '$250K – $3M' },
    { name: 'Matrix Partners India', stage: 'Seed → Series B', focus: 'SaaS, Marketplace, Consumer', check: '$500K – $5M' },
    { name: 'Elevation Capital', stage: 'Pre-Seed → Series C', focus: 'Consumer Internet, FinTech', check: '$1M – $30M' },
    { name: 'India Quotient', stage: 'Pre-Seed → Seed', focus: 'Bharat-first, D2C', check: '₹1Cr – ₹10Cr' },
    { name: 'Lightspeed India', stage: 'Seed → Series B', focus: 'Consumer, Enterprise, FinTech', check: '$1M – $20M' },
    { name: 'Saama Capital', stage: 'Series A → B', focus: 'B2B SaaS, Analytics', check: '$2M – $10M' },
    { name: '100Unicorns', stage: 'Pre-Seed → Seed', focus: 'Sector Agnostic', check: '₹50L – ₹2Cr' },
    { name: 'IIFL Seed Ventures', stage: 'Seed', focus: 'FinTech, B2B Tech', check: '₹1Cr – ₹5Cr' },
];

function InvestorCard({ item }: { item: typeof INVESTORS[0] }) {
    return (
        <div className="flex-shrink-0 w-[280px] mx-3 glass-card rounded-2xl p-6 bg-[#0a0a0a]/60 border border-white/5 hover:border-amber-400/30 hover:-translate-y-2 transition-all duration-300 ease-out cursor-default">
            <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-amber-400 text-sm"></i>
            </div>
            <h4 className="text-white font-bold text-base mb-1">{item.name}</h4>
            <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-3">{item.stage}</p>
            <p className="text-text-secondary text-xs mb-4 leading-relaxed">{item.focus}</p>
            <div className="bg-white/5 rounded-lg px-3 py-2">
                <p className="text-text-secondary text-[10px] uppercase tracking-wider mb-0.5">Typical Cheque</p>
                <p className="text-white font-bold text-sm">{item.check}</p>
            </div>
        </div>
    );
}

// ─── 3. Grant Cards ────────────────────────────────────────────────────
const GRANTS = [
    { name: 'Startup India Seed Fund', org: 'DPIIT / Govt of India', amount: '₹20 Lakh', type: 'Central Govt' },
    { name: 'BIRAC BIG Grant', org: 'Biotech Industrial Research', amount: '₹50 Lakh', type: 'Biotech' },
    { name: 'NIDHI PRAYAS Grant', org: 'DST / NSTEDB', amount: '₹10 Lakh', type: 'Deep Tech' },
    { name: 'MSME CHAMPIONS', org: 'Ministry of MSME', amount: '₹1 Crore', type: 'MSME' },
    { name: 'Atal Innovation Mission', org: 'NITI Aayog', amount: 'Up to ₹1Cr', type: 'Innovation' },
    { name: 'TIDE 2.0', org: 'MeitY', amount: '₹25 Lakh', type: 'Tech Startup' },
    { name: 'Maharashtra Startup Week', org: 'MahaStartup', amount: '₹10 Lakh', type: 'State Govt' },
    { name: 'Elevate 100', org: 'Govt of Karnataka', amount: '₹50 Lakh', type: 'State Govt' },
    { name: 'NIDHI-TBI Program', org: 'DST India', amount: '₹15 Lakh', type: 'Research' },
    { name: 'Kerala Startup Mission', org: 'KSUM', amount: '₹5 Lakh', type: 'State Govt' },
];

function GrantCard({ item }: { item: typeof GRANTS[0] }) {
    return (
        <div className="flex-shrink-0 w-[280px] mx-3 glass-card rounded-2xl p-6 bg-[#0a0a0a]/60 border border-white/5 hover:border-green-400/30 hover:-translate-y-2 transition-all duration-300 ease-out cursor-default">
            <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-green-400 tracking-widest uppercase bg-green-400/10 px-2.5 py-1 rounded-full border border-green-400/20">
                    {item.type}
                </span>
                <span className="text-green-400 font-black text-xs">0% Equity</span>
            </div>
            <h4 className="text-white font-bold text-base mb-1 leading-snug">{item.name}</h4>
            <p className="text-text-secondary text-xs mb-4">{item.org}</p>
            <div className="bg-green-400/5 border border-green-400/10 rounded-lg px-3 py-2">
                <p className="text-text-secondary text-[10px] uppercase tracking-wider mb-0.5">Grant Amount</p>
                <p className="text-white font-black text-lg">{item.amount}</p>
            </div>
        </div>
    );
}

// ─── 4. Event Cards ───────────────────────────────────────────────────
function EventCard({ item }: { item: typeof eventsData[0] }) {
    return (
        <div className="flex-shrink-0 w-[300px] mx-3 glass-card rounded-2xl p-6 bg-[#0a0a0a]/60 border border-white/5 hover:border-accent-violet/30 hover:-translate-y-2 transition-all duration-300 ease-out cursor-default">
            <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-accent-violet tracking-widest uppercase bg-accent-violet/10 px-2.5 py-1 rounded-full border border-accent-violet/20">
                    {item.tag}
                </span>
                <span className="text-text-secondary text-xs">{item.startDate} {item.month}</span>
            </div>
            <h4 className="text-white font-bold text-sm mb-2 leading-snug line-clamp-2">{item.eventName}</h4>
            <div className="flex items-center gap-1.5 text-text-secondary text-xs mb-1">
                <i className="fas fa-map-marker-alt text-accent-violet text-[10px]"></i>
                <span>{item.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-secondary text-xs">
                <i className="fas fa-building text-accent-violet text-[10px]"></i>
                <span className="line-clamp-1">{item.exhibitionCentre}</span>
            </div>
            {item.weblink && (
                <a href={item.weblink} target="_blank" rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-1.5 text-accent-violet text-xs font-semibold hover:text-white transition-colors"
                    onClick={e => e.stopPropagation()}>
                    <i className="fas fa-external-link-alt text-[10px]"></i> Event Details
                </a>
            )}
        </div>
    );
}

function PitchDeckCard({ item }: { item: PitchDeck }) {
    return (
        <div className="flex-shrink-0 w-[300px] mx-3 glass-card rounded-2xl p-5 bg-[#0a0a0a]/60 border border-white/5 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 ease-out cursor-default relative">
            <div className="absolute top-3 right-3">
                <span className="text-[9px] font-bold text-white/30 tracking-widest uppercase bg-white/5 px-2 py-0.5 rounded-full border border-white/10">Coming Soon</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-file-powerpoint text-white/40 text-sm"></i>
                </div>
                <div>
                    <h4 className="text-white font-black text-base leading-tight">{item.company}</h4>
                    <p className="text-text-secondary text-[10px]">{item.sector} · {item.year}</p>
                </div>
            </div>
            <p className="text-text-secondary text-[11px] leading-relaxed mb-3 line-clamp-2 italic">&ldquo;{item.keyLesson}&rdquo;</p>
            <div className="flex gap-2 flex-wrap">
                <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase bg-white/5 px-2 py-1 rounded-full border border-white/10">{item.round}</span>
                <span className="text-[10px] font-bold text-green-400 tracking-widest uppercase bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">{item.raisedThisRound}</span>
            </div>
        </div>
    );
}

// ─── Main export ───────────────────────────────────────────────────────
export function ToolsShowcase() {
    const incubators = westernLineData.slice(0, 20);
    const pitchDecks = pitchDecksData;
    const events = eventsData.slice(0, 30);

    return (
        <>
            {/* 1. Incubator Search */}
            <section className="py-28 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
                    <span className="text-accent-blue text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Incubator Search</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] mb-5">
                        We&apos;ve mapped 50+ top spaces across{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-cyan-400">Mumbai.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto">
                        Coworking spaces, accelerators & incubators across West, East, Central, and South Mumbai — compare equity, fees, and funding in one place.
                    </p>
                </div>
                <Marquee speed={45}>
                    {incubators.map((item, i) => <IncubatorCard key={`inc-${i}`} item={item} />)}
                </Marquee>
                <div className="mt-14 text-center relative z-10">
                    <Link href="/tools/incubator-search/incubators" className="group inline-flex items-center text-accent-blue hover:text-white font-bold text-base transition duration-300">
                        Explore All Incubators <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>
            </section>

            {/* 2. Investor Match */}
            <section className="py-28 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
                    <span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Investor Match</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] mb-5">
                        150+ Active Investors.{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Zero Noise.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto">
                        Discover seed to growth-stage investors matched to your sector, stage, and check size.
                    </p>
                </div>
                <Marquee reverse speed={40}>
                    {INVESTORS.map((item, i) => <InvestorCard key={`inv-${i}`} item={item} />)}
                </Marquee>
                <div className="mt-14 text-center relative z-10">
                    <Link href="/tools/incubator-search/investors" className="group inline-flex items-center text-amber-400 hover:text-white font-bold text-base transition duration-300">
                        Find Your Investor <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>
            </section>

            {/* 3. Grants & Schemes */}
            <section className="py-28 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-400/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
                    <span className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Grants &amp; Schemes</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] mb-5">
                        ₹50Cr+ in Funding.{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">0% Equity.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto">
                        Government-backed grants, DST schemes, and state-level funding programs — all curated for Indian founders.
                    </p>
                </div>
                <Marquee speed={42}>
                    {GRANTS.map((item, i) => <GrantCard key={`grant-${i}`} item={item} />)}
                </Marquee>
                <div className="mt-14 text-center relative z-10">
                    <Link href="/tools/incubator-search/grants" className="group inline-flex items-center text-green-400 hover:text-white font-bold text-base transition duration-300">
                        Explore All Grants <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>
            </section>

            {/* 4. Founder Events */}
            <section className="py-28 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
                    <span className="text-accent-violet text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Founder Events Calendar</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] mb-5">
                        Never Miss an{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet to-purple-400">Opportunity.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto">
                        A curated monthly list of top B2B events, trade exhibitions, and startup summits across India.
                    </p>
                </div>
                <Marquee reverse speed={55}>
                    {events.map((item, i) => <EventCard key={`ev-${i}`} item={item} />)}
                </Marquee>
                <div className="mt-14 text-center relative z-10">
                    <Link href="/tools/founder-calendar" className="group inline-flex items-center text-accent-violet hover:text-white font-bold text-base transition duration-300">
                        View Events Calendar <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>
            </section>

            {/* 5. Pitch Deck Repo — Coming Soon */}
            <section className="py-28 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/3 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
                    <span className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Coming Soon</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] mb-5">
                        Study How the{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/30">Greats Pitched.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto">
                        A massive curated collection of winning pitch decks from YC startups, unicorns, and top global founders — to study, not copy.
                    </p>
                </div>
                <Marquee speed={35}>
                    {pitchDecks.map((item, i) => <PitchDeckCard key={`pitch-${i}`} item={item} />)}
                </Marquee>
                <div className="mt-14 text-center relative z-10">
                    <Link href="/tools" className="group inline-flex items-center text-white/40 hover:text-white font-bold text-base transition duration-300">
                        Notify Me When Live <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>
            </section>
        </>
    );
}
