"use client";

import Link from 'next/link';
import { mentorsData, MentorProfile } from '@/lib/mentors';

const MentorCard = ({ mentor }: { mentor: MentorProfile }) => (
    <div className="flex-shrink-0 w-[280px] glass-card rounded-3xl p-6 flex flex-col items-center text-center group bg-[#0a0a0a]/60 border border-white/5 hover:border-accent-blue/30 hover:-translate-y-2 transition-all duration-300 ease-out mx-3">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-5 border-2 border-white/10 group-hover:border-accent-blue/50 transition-colors duration-500 p-1">
            <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full rounded-full object-cover filter grayscale group-hover:grayscale-0 transition duration-700"
                onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&background=1E293B&color=8B5CF6&size=200&font-size=0.33`; }}
            />
        </div>
        <h4 className="text-base font-bold text-white mb-1 tracking-tight">{mentor.name}</h4>
        <p className="text-accent-blue font-semibold text-[10px] tracking-widest uppercase mb-3 leading-tight">{mentor.title}</p>
        <p className="text-text-secondary text-xs leading-relaxed line-clamp-3 mb-4">{mentor.credentials.join(" ")}</p>
        {mentor.linkedinUrl && (
            <a
                href={mentor.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-xs"
                onClick={(e) => e.stopPropagation()}
            >
                <i className="fab fa-linkedin-in"></i>
            </a>
        )}
    </div>
);

export function MentorsPreview() {
    // Duplicate for seamless infinite loop
    const track = [...mentorsData, ...mentorsData];

    return (
        <section id="mentors-preview" className="py-32 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">THE NETWORK</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-[-0.04em] mb-6">
                        Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">Operators.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-text-secondary font-light max-w-2xl mx-auto">
                        Meet the industry titans guiding our cohorts.
                    </p>
                </div>
            </div>

            {/* Carousel — full bleed */}
            <div className="relative w-full overflow-hidden">
                {/* Left fade */}
                <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-bg-main to-transparent" />
                {/* Right fade */}
                <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-bg-main to-transparent" />

                <div className="flex mentors-marquee">
                    {track.map((mentor, idx) => (
                        <MentorCard key={`marquee-mentor-${idx}`} mentor={mentor} />
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center relative z-10">
                <Link href="/mentors" className="group inline-flex items-center text-accent-blue hover:text-white font-bold text-lg transition duration-300">
                    View All Mentors
                    <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                </Link>
            </div>

            <style jsx>{`
                .mentors-marquee {
                    display: flex;
                    width: max-content;
                    animation: mentors-scroll 50s linear infinite;
                    will-change: transform;
                }
                .mentors-marquee:hover {
                    animation-play-state: paused;
                }
                @keyframes mentors-scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
