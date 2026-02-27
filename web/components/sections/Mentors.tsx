"use client";

import { mentorsData, MentorProfile } from '@/lib/mentors';

// 3D Flip Card for the mentor
const MentorCard = ({ mentor }: { mentor: MentorProfile }) => (
    <div className="group w-full h-[400px] perspective-1000 cursor-pointer">
        <div className="relative w-full h-full duration-700 preserve-3d group-hover:rotate-y-180">

            {/* Front Face: Portrait & Highlight */}
            <div className="absolute inset-0 backface-hidden glass-card rounded-3xl p-6 flex flex-col items-center justify-center text-center bg-[#050505] border border-white/5 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

                {/* Massive Portrait */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&background=1E293B&color=8B5CF6&size=400&font-size=0.33`; }}
                    />
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 mt-auto w-full transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
                    <h4 className="text-2xl font-black text-white mb-1 tracking-tight drop-shadow-lg">{mentor.name}</h4>
                    <p className="text-accent-blue font-bold text-xs tracking-widest uppercase truncate drop-shadow-md">{mentor.title}</p>
                </div>

                {/* Hover Cue */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/50 group-hover:text-accent-blue group-hover:border-accent-blue transition-all">
                    <i className="fas fa-sync-alt text-xs drop-shadow-lg"></i>
                </div>
            </div>

            {/* Back Face: Details & LinkedIn */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 glass-card rounded-3xl p-8 flex flex-col justify-center text-center bg-[#0a0a0a] border border-accent-blue/30 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                <div className="mb-6">
                    <h4 className="text-xl font-bold text-white tracking-tight leading-tight">{mentor.name}</h4>
                    <span className="text-accent-blue text-xs uppercase tracking-widest font-bold">{mentor.title}</span>
                </div>

                <p className="text-text-primary text-sm leading-relaxed mb-8 flex-grow overflow-y-auto font-light no-scrollbar text-white/90">
                    {mentor.credentials.join(" ")}
                </p>

                {mentor.linkedinUrl && (
                    <a
                        href={mentor.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-full bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-accent-blue hover:text-white transition-colors duration-300 flex justify-center items-center gap-2"
                        onClick={(e) => e.stopPropagation()} // Prevent card flip toggling if on mobile tap
                    >
                        Connect on LinkedIn <i className="fab fa-linkedin-in text-sm"></i>
                    </a>
                )}
            </div>
        </div>
    </div>
);

export function Mentors() {
    return (
        <section id="mentors" className="py-20 bg-[#000000] relative w-full border-t border-white/5">
            {/* Extremely Subtle Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-accent-violet/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16 text-center">
                <p className="text-text-secondary font-light text-sm max-w-2xl mx-auto hidden md:block">
                    Hover over any mentor to flip their card and view detailed credentials.
                </p>
                <p className="text-text-secondary font-light text-sm max-w-2xl mx-auto block md:hidden">
                    Tap on any mentor to view their detailed credentials.
                </p>
            </div>

            {/* 3D Static Grid */}
            <div className="max-w-[1400px] mx-auto px-6 w-full relative z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {mentorsData.map((mentor, idx) => (
                        <MentorCard key={`mentor-${idx}`} mentor={mentor} />
                    ))}
                </div>
            </div>
        </section>
    );
}
