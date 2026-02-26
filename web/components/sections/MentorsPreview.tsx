"use client";

import { mentorsData, MentorProfile } from '@/lib/mentors';

const MentorCard = ({ mentor }: { mentor: MentorProfile }) => (
    <div className="flex-1 min-w-[280px] max-w-[320px] glass-card hover-glow rounded-3xl p-6 flex flex-col items-center text-center group bg-[#0a0a0a]/50">
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

export function MentorsPreview() {
    // Select 3 top mentors for the preview
    const previewMentors = mentorsData.slice(0, 3);

    return (
        <section id="mentors-preview" className="py-32 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">THE NETWORK</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-[-0.04em] mb-6">
                        Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">Operators.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-text-secondary font-light max-w-2xl mx-auto mb-10">
                        Meet the industry titans guiding our cohorts.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {previewMentors.map((mentor, idx) => (
                        <MentorCard key={`preview-mentor-${idx}`} mentor={mentor} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="/mentors" className="group inline-flex items-center text-accent-blue hover:text-white font-bold text-lg transition duration-300">
                        View All Mentors
                        <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
