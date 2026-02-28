'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { CalendarPlus, MapPin, ExternalLink, Filter } from 'lucide-react';
import { eventsData, FounderEvent } from '@/lib/data/events';
import { IcsDownloadButton } from '@/components/ecosystem/IcsDownloadButton';

function generateGoogleCalendarUrl(event: FounderEvent) {
    const text = encodeURIComponent(event.eventName);
    const details = encodeURIComponent(`Find out more: ${event.weblink || 'No link provided.'}\n\nDates: ${event.startDate} ${event.month}`);
    const location = encodeURIComponent(`${event.exhibitionCentre}, ${event.location}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&location=${location}`;
}

// Map event names/tags to broad sectors
function getSectorFromEvent(event: FounderEvent): string {
    const name = event.eventName.toLowerCase();

    if (name.includes('tech') || name.includes('ai ') || name.includes('software') || name.includes('data') || name.includes('iot') || name.includes('internet of things') || name.includes('digital') || name.includes('cyber')) return 'Tech & AI';
    if (name.includes('health') || name.includes('medical') || name.includes('pharma') || name.includes('arogya') || name.includes('bio') || name.includes('neuro') || name.includes('radiology')) return 'Healthcare & Lifesciences';
    if (name.includes('auto') || name.includes('motor') || name.includes('ev ') || name.includes('mobility') || name.includes('vehicle')) return 'Automotive & Mobility';
    if (name.includes('startup') || name.includes('fintech') || name.includes('invest') || name.includes('fund') || name.includes('vc') || name.includes('pitch')) return 'Startups & Finance';
    if (name.includes('agri') || name.includes('food') || name.includes('horti') || name.includes('farm') || name.includes('gau')) return 'Agriculture & Food';
    if (name.includes('smart') || name.includes('city') || name.includes('infra') || name.includes('build') || name.includes('construct') || name.includes('real estate')) return 'Infrastructure & Real Estate';
    if (name.includes('manufactur') || name.includes('machine') || name.includes('equip') || name.includes('hardware') || name.includes('tool') || name.includes('plastic') || name.includes('pack') || name.includes('corr') || name.includes('paper') || name.includes('boiler') || name.includes('refractory')) return 'Manufacturing & Materials';
    if (name.includes('retail') || name.includes('fashion') || name.includes('garment') || name.includes('textile') || name.includes('life') || name.includes('wedding') || name.includes('shoe') || name.includes('footwear') || name.includes('sport')) return 'Retail & Lifestyle';
    if (name.includes('travel') || name.includes('tour') || name.includes('hotel') || name.includes('hospitality')) return 'Travel & Hospitality';
    if (name.includes('energy') || name.includes('power') || name.includes('electric') || name.includes('gas') || name.includes('oil')) return 'Energy & Utilities';
    if (name.includes('edu') || name.includes('learn') || name.includes('school')) return 'Education';
    if (name.includes('art') || name.includes('media') || name.includes('content') || name.includes('game') || name.includes('amuse')) return 'Media & Entertainment';

    return 'General B2B';
}

// Basic date parser for formats like "13-15 Mar", "29-Mar", "27 Feb To 1 Mar"
// Defaults to March 2026 if parsing fails so it doesn't break
function parseEventSortDate(event: FounderEvent): Date {
    const year = 2026;
    let day = 1;
    let monthIdx = 2; // March is 2 in JS (0-indexed)

    const str = `${event.startDate}`.toLowerCase().trim();

    // Extract first number found
    const match = str.match(/\d+/);
    if (match) {
        day = parseInt(match[0], 10);
    }

    if (str.includes('feb')) monthIdx = 1;
    if (str.includes('jan')) monthIdx = 0;
    if (str.includes('apr')) monthIdx = 3;

    // Fallback to the explicit month property if previous string checks failed
    if (monthIdx === 2 && event.month.toLowerCase().includes('feb')) monthIdx = 1;
    if (monthIdx === 2 && event.month.toLowerCase().includes('apr')) monthIdx = 3;

    return new Date(year, monthIdx, day);
}

export default function FounderCalendar() {
    const [selectedLocation, setSelectedLocation] = useState<string>('All Locations');
    const [selectedSector, setSelectedSector] = useState<string>('All Sectors');

    const mappedEvents = useMemo(() => {
        return eventsData.map(ev => ({
            ...ev,
            sector: getSectorFromEvent(ev),
            parsedDate: parseEventSortDate(ev)
        }));
    }, []);

    const uniqueLocations = useMemo(() => {
        const locs = Array.from(new Set(eventsData.map(e => e.location))).filter(Boolean).sort();
        return ['All Locations', ...locs];
    }, []);

    const uniqueSectors = useMemo(() => {
        const secs = Array.from(new Set(mappedEvents.map(e => e.sector))).filter(Boolean).sort();
        return ['All Sectors', ...secs];
    }, [mappedEvents]);

    const filteredAndSortedEvents = useMemo(() => {
        // 1. Filter
        let filtered = mappedEvents;
        if (selectedLocation !== 'All Locations') {
            filtered = filtered.filter(e => e.location === selectedLocation);
        }
        if (selectedSector !== 'All Sectors') {
            filtered = filtered.filter(e => e.sector === selectedSector);
        }

        // 2. Sort by date proximity
        // Instead of hardcoding "today", let's use current time or 1st March 2026 as a baseline
        // For demonstration, let's treat anything before Date.now() as "past". 
        // We will sort upcoming features closest to now first, and past features furthest from now last.

        const now = new Date('2026-03-01T00:00:00Z').getTime(); // Roughly start of march

        const upcoming = filtered.filter(e => e.parsedDate.getTime() >= now).sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());
        const past = filtered.filter(e => e.parsedDate.getTime() < now).sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime());

        return { upcoming, past };
    }, [mappedEvents, selectedLocation, selectedSector]);

    const EventCard = ({ event, isPast }: { event: ReturnType<typeof getSectorFromEvent> & FounderEvent & { sector: string }, isPast?: boolean }) => (
        <div className={`glass-card p-6 md:p-8 rounded-3xl border border-white/10 hover:border-accent-blue/40 transition-all group flex flex-col bg-[#050505] ${isPast ? 'opacity-60 saturate-50' : ''}`}>
            <div className="flex justify-between items-start mb-6">
                <span className="bg-white/5 border border-white/10 text-text-secondary text-xs px-3 py-1 rounded-full">{event.sector}</span>
                <span className={`font-bold text-sm px-3 py-1 rounded-full whitespace-nowrap ${isPast ? 'text-gray-400 bg-gray-500/10 border border-gray-500/20' : 'text-accent-blue bg-accent-blue/10 border border-accent-blue/20'}`}>
                    {event.startDate} {event.month}
                </span>
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
    );

    const hasEvents = filteredAndSortedEvents.upcoming.length > 0 || filteredAndSortedEvents.past.length > 0;

    return (
        <div className="pt-32 pb-20 min-h-screen bg-bg-main relative flex flex-col items-center">
            {/* Extremely Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10 w-full">
                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Link href="/tools" className="text-text-secondary hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                            <span>&larr;</span> Back to Tools
                        </Link>
                        <span className="text-white/20 hidden md:inline">|</span>
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

                {/* Filters */}
                <div className="glass-card p-4 md:p-6 mb-12 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-4 items-center bg-[#050505]/80 backdrop-blur-md sticky top-24 z-20">
                    <div className="flex items-center gap-3 text-text-secondary hidden md:flex min-w-fit">
                        <Filter className="w-5 h-5 text-accent-blue" />
                        <span className="font-bold uppercase tracking-widest text-xs">Filter Events</span>
                        <div className="h-6 w-px bg-white/10 mx-2"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <div className="flex-1 w-full">
                            <label className="text-[10px] uppercase tracking-widest text-text-secondary font-bold mb-2 block px-1">Location</label>
                            <select
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all font-light appearance-none cursor-pointer"
                            >
                                {uniqueLocations.map(loc => <option key={loc} value={loc} className="bg-[#050505]">{loc}</option>)}
                            </select>
                        </div>
                        <div className="flex-1 w-full">
                            <label className="text-[10px] uppercase tracking-widest text-text-secondary font-bold mb-2 block px-1">Sector</label>
                            <select
                                value={selectedSector}
                                onChange={(e) => setSelectedSector(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-violet/50 focus:bg-white/10 transition-all font-light appearance-none cursor-pointer"
                            >
                                {uniqueSectors.map(sec => <option key={sec} value={sec} className="bg-[#050505]">{sec}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                {!hasEvents && (
                    <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl bg-white/5">
                        <h3 className="text-2xl text-white font-bold mb-2">No events found</h3>
                        <p className="text-text-secondary font-light">Try adjusting your filters to see more results.</p>
                        <button
                            onClick={() => { setSelectedLocation('All Locations'); setSelectedSector('All Sectors'); }}
                            className="mt-6 text-accent-blue font-bold tracking-widest uppercase text-sm px-6 py-2 border border-accent-blue/20 rounded-full hover:bg-accent-blue/10 transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}

                {hasEvents && (
                    <div className="flex flex-col gap-16">
                        {/* Upcoming Events */}
                        {filteredAndSortedEvents.upcoming.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-4">
                                    Upcoming Events
                                    <span className="bg-white/10 text-white/50 text-xs px-3 py-1 rounded-full font-medium">{filteredAndSortedEvents.upcoming.length}</span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredAndSortedEvents.upcoming.map((event, idx) => (
                                        <EventCard key={`up-${idx}`} event={event as any} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Past Events */}
                        {filteredAndSortedEvents.past.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-black text-white/50 mb-6 flex items-center gap-4">
                                    Past Events
                                    <span className="bg-white/5 border border-white/5 text-white/30 text-xs px-3 py-1 rounded-full font-medium">{filteredAndSortedEvents.past.length}</span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredAndSortedEvents.past.map((event, idx) => (
                                        <EventCard key={`past-${idx}`} event={event as any} isPast={true} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
