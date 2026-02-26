"use client";

import { useState } from 'react';
import { mentorsData, MentorProfile } from '@/lib/mentors';

// Single clean card for the mentor
const MentorCard = ({ mentor }: { mentor: MentorProfile }) => (
    <div className="flex-shrink-0 w-72 md:w-80 glass-card hover-glow rounded-3xl p-6 mr-6 flex flex-col items-center text-center group bg-[#0a0a0a]/50">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-accent-blue/50 transition-colors duration-500 p-1">
            <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full rounded-full object-cover filter grayscale group-hover:grayscale-0 transition duration-700"
                onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&background=1E293B&color=8B5CF6&size=200&font-size=0.33`; }}
            />
        </div>
        <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{mentor.name}</h4>
        <p className="text-accent-blue font-medium text-sm tracking-wide uppercase mb-4 h-10 flex items-center justify-center">{mentor.title}</p>
        <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">{mentor.credentials.join(" ")}</p>
        {mentor.linkedinUrl && (
            <a
                href={mentor.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
                <i className="fab fa-linkedin-in"></i>
            </a>
        )}
    </div>
);

export function Mentors() {
    const [isPaused, setIsPaused] = useState(false);
    const togglePause = () => setIsPaused(!isPaused);

    // Single seamless row for a cleaner look
    const displayMentors = [...mentorsData, ...mentorsData, ...mentorsData];

    return (
        <section id="mentors" className="py-32 bg-[#000000] relative overflow-hidden w-full border-t border-white/5">
            {/* Extremely Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent-violet/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20 text-center">
                <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">THE NETWORK</span>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-[-0.04em] mb-6">
                    Learn from <span className="text-white/40">Operators.</span>
                </h2>
                <p className="text-xl md:text-2xl text-text-secondary font-light max-w-2xl mx-auto mb-10">
                    No academicians. Only founders and leaders who have actually built and scaled businesses.
                </p>

                <button
                    onClick={togglePause}
                    className="mx-auto px-6 py-2 rounded-full border border-white/10 bg-white/5 text-text-secondary text-xs uppercase tracking-[0.2em] font-bold backdrop-blur-md hover:text-white transition-colors flex items-center gap-3 cursor-pointer z-20 relative"
                >
                    {isPaused ? <><i className="fas fa-play text-xs text-accent-blue"></i> Resume Scroll</> : <><i className="fas fa-pause text-xs text-accent-blue"></i> Pause Scroll</>}
                </button>
            </div>

            {/* Seamless Infinite Scroller - Single Row High Elegance */}
            <div className={`relative w-[200vw] ml-[-50vw] overflow-hidden ${isPaused ? 'is-paused' : ''}`}>
                <div
                    className="pause-on-hover relative flex overflow-visible w-full cursor-pointer py-4"
                    onClick={togglePause}
                >
                    <div className="flex animate-scroll-left w-max pr-6">
                        {displayMentors.map((mentor, idx) => (
                            <MentorCard key={`mentor-${idx}`} mentor={mentor} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-20 text-center relative z-10 hidden md:block">
                <p className="text-text-secondary text-sm tracking-wide font-light">Hover over the cards to pause the scrolling.</p>
            </div>
        </section>
    );
}
