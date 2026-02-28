'use client';

import { useState } from 'react';
import { westernLineData } from '@/lib/data/western_line';
import { ExternalLink, ChevronDown, ChevronUp, Search, MapPin, Building2, TrendingUp, Filter } from 'lucide-react';

function ScoreBadge({ score }: { score: number }) {
    let color = 'text-gray-400 border-gray-400';
    if (score >= 70) color = 'text-accent-blue border-accent-blue/50 bg-accent-blue/10';
    else if (score >= 40) color = 'text-[#FFF] border-[#FFF]/50 bg-[#FFF]/10';
    else if (score >= 20) color = 'text-accent-violet border-accent-violet/50 bg-accent-violet/10';

    return (
        <span className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0 ${color}`}>
            {score}
        </span>
    );
}

function DirectoryCard({ item }: { item: any }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="glass-card hover-glow p-6 md:p-8 rounded-3xl border border-white/5 h-full flex flex-col relative group transition-all duration-300 bg-[#050505] hover:bg-white/5">
            <div className="flex justify-between items-start gap-4 mb-6">
                <div>
                    <span className="bg-white/10 text-text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-3 inline-block">
                        {item.type}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-accent-blue transition-colors">{item.name}</h3>
                    <p className="flex items-center gap-1.5 text-sm text-text-secondary font-light">
                        <MapPin size={12} className="text-accent-blue/60" /> {item.area}
                    </p>
                </div>
                <ScoreBadge score={parseInt(item.brandValue) * 10 || 50} />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Equity</span>
                    <strong className="text-sm text-white font-medium">{item.equityTaken}</strong>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Fee</span>
                    <strong className="text-sm text-white font-medium">{item.fee}</strong>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Stage</span>
                    <strong className="text-sm text-white font-medium">{item.idealStage}</strong>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Freedom</span>
                    <strong className="text-sm text-white font-medium">{item.founderFreedom}/10</strong>
                </div>
            </div>

            <button
                className="inline-flex items-center gap-2 text-sm font-bold text-accent-blue hover:text-white transition-colors mb-6 pb-2 border-b border-white/5 w-fit"
                onClick={() => setOpen(!open)}
            >
                {open ? 'Hide details' : 'View all parameters'} {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {open && (
                <div className="mb-8 pt-4 border-t border-white/10 animate-fade-in">
                    <ul className="space-y-3">
                        <li className="text-sm text-text-secondary font-light flex justify-between gap-4 border-b border-white/5 pb-2">
                            <span className="shrink-0 text-white font-medium">Program:</span>
                            <span className="text-right">{item.programStructure}</span>
                        </li>
                        <li className="text-sm text-text-secondary font-light flex justify-between gap-4 border-b border-white/5 pb-2">
                            <span className="shrink-0 text-white font-medium">Investors:</span>
                            <span className="text-right">{item.investorAccess}/10</span>
                        </li>
                        <li className="text-sm text-text-secondary font-light flex justify-between gap-4 border-b border-white/5 pb-2">
                            <span className="shrink-0 text-white font-medium">Funding:</span>
                            <span className="text-right">{item.fundingGuarantee}</span>
                        </li>
                    </ul>
                </div>
            )}

            <div className="mt-auto flex flex-col gap-3">
                <a
                    href={item.website || '#'}
                    target={item.website ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="w-full bg-white hover:bg-gray-200 text-black py-3 rounded-full font-bold transition duration-300 flex justify-center items-center gap-2 text-sm"
                    onClick={(e) => { if (!item.website) e.preventDefault(); }}
                >
                    Link to Space <ExternalLink size={14} />
                </a>
            </div>
        </div>
    );
}

export default function InvestorsPage() {
    const [search, setSearch] = useState('');
    const [regionFilter, setRegionFilter] = useState('All');
    const [showFilters, setShowFilters] = useState(false);

    // Mock filtering logic for now to specifically find Investors / Funding sources
    // In reality, this dataset is mostly incubators, so we'll filter on equity taken/funding terms
    const allData = westernLineData.filter(item =>
        item.fundingGuarantee.toLowerCase().includes('seed') ||
        Number(item.investorAccess) > 7 ||
        item.type.toLowerCase().includes('accelerator')
    );
    const regions = ['All', 'West Mumbai', 'East Mumbai', 'South Mumbai', 'Central Mumbai', 'Navi Mumbai', 'Thane / MMR'];

    const filteredData = allData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.area.toLowerCase().includes(search.toLowerCase());
        const matchesRegion = regionFilter === 'All' || item.subRegion === regionFilter;
        return matchesSearch && matchesRegion;
    });

    const resetFilters = () => {
        setSearch(''); setRegionFilter('All');
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-[#000000]">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto border-b border-white/10 pb-12">
                    <span className="text-accent-blue text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Investors & Accelerators</span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-[-0.04em]">
                        Raise Capital.
                    </h1>
                    <p className="text-lg md:text-xl text-text-secondary font-light">
                        Discover hubs with the highest investor density and direct seed funding guarantees.
                    </p>
                </div>

                <div className="mb-8 flex justify-between items-center text-sm">
                    <p className="text-text-secondary font-light">
                        Showing <strong className="text-white font-bold">{filteredData.length}</strong> parameters.
                    </p>
                    <button
                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-white font-medium transition-colors"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <Filter size={14} /> {showFilters ? 'Hide Config' : 'Adjust Config'}
                    </button>
                </div>

                {showFilters && (
                    <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 mb-12 bg-[#050505]">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="flex flex-col gap-3">
                                <label className="flex items-center gap-2 text-xs font-bold text-text-secondary tracking-widest uppercase"><Search size={14} className="text-accent-blue" /> Query</label>
                                <input
                                    type="text"
                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all font-light"
                                    placeholder="e.g. Bandra, WeWork..."
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="flex items-center gap-2 text-xs font-bold text-text-secondary tracking-widest uppercase"><MapPin size={14} className="text-accent-blue" /> Geometry</label>
                                <div className="flex flex-wrap gap-2">
                                    {regions.map(r => (
                                        <button key={r} onClick={() => setRegionFilter(r)} className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${regionFilter === r ? 'bg-white text-black border-white font-bold' : 'bg-transparent text-text-secondary border-white/20 hover:border-white/50'}`}>
                                            {r}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {filteredData.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredData.map((item, i) => (
                            <DirectoryCard key={item.id || i} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className="glass-card p-16 rounded-3xl border border-dashed border-white/10 text-center flex flex-col items-center justify-center min-h-[400px]">
                        <h3 className="text-2xl font-bold text-white mb-2">Null Parameters</h3>
                        <p className="text-text-secondary mb-8">No investors matched this specific query setup.</p>
                        <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors" onClick={resetFilters}>Clear Memory Matrix</button>
                    </div>
                )}
            </div>
        </div>
    );
}
