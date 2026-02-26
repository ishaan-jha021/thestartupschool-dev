"use client";

import { useState } from 'react';

export function FounderProof() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-20 bg-black text-text-primary border-t border-functional-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-text-secondary max-w-3xl mx-auto">
                        This school is not built on theory.<br />
                        It is built on lived experience, scars, and lessons earned the hard way.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Block 1: The Bootcamp */}
                    <div className="bg-bg-surface border border-functional-border rounded-xl p-6 hover:border-accent-blue transition group flex flex-col h-full">
                        <h3 className="text-xl font-bold text-white mb-4 text-center">Mentor Panel: E-Cell IIT Madras</h3>
                        <div className="aspect-video bg-bg-main rounded-lg mb-6 flex items-center justify-center border border-functional-border group-hover:border-accent-blue/50 transition relative overflow-hidden">
                            <img src="/bootcamp.jpeg" alt="Mentor Panel at IIT Madras" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300" />
                        </div>

                        <p className="text-text-secondary text-sm mb-6 flex-grow">
                            Invited as a Mentor at E-Cell IIT Madras. Mentoring early-stage founders, reviewing startup ideas, and providing practical guidance on execution and validation.
                        </p>
                        <a href="https://www.linkedin.com/posts/gauravbansal2_mentor-iit-startup-activity-7404790908174450688-P0G5" target="_blank" rel="noopener noreferrer" className="block w-full text-center border border-functional-border text-text-primary font-bold py-3 rounded-lg hover:bg-bg-main hover:text-accent-blue transition">
                            <i className="fab fa-linkedin mr-2"></i> Explore More
                        </a>
                    </div>

                    {/* Block 2: IIM Rohtak */}
                    <div className="bg-bg-surface border border-functional-border rounded-xl p-6 hover:border-accent-violet transition group flex flex-col h-full">
                        <h3 className="text-xl font-bold text-white mb-4 text-center">IIM ROHTAK: JUDGE & MENTOR</h3>
                        <div className="aspect-video bg-bg-main rounded-lg mb-6 flex items-center justify-center border border-functional-border group-hover:border-accent-violet/50 transition relative overflow-hidden">
                            <img src="/iimrohtak.jpg" alt="Judge and Mentor at IIM Rohtak" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300" />
                        </div>
                        <p className="text-text-secondary text-sm mb-6 flex-grow">
                            Invited as a Judge and Mentor at IIM Rohtak. Evaluating innovative startups, providing critical feedback on pitches, and guiding aspiring founders on their journey from concept to scale.
                        </p>
                        <a href="https://www.linkedin.com/in/gauravbansal2/details/featured/" target="_blank" rel="noopener noreferrer" className="block w-full text-center border border-functional-border text-text-primary font-bold py-3 rounded-lg hover:bg-bg-main hover:text-accent-violet transition">
                            <i className="fab fa-linkedin mr-2"></i> View on LinkedIn
                        </a>
                    </div>

                    {/* Block 3: YouTube Video */}
                    <div className="bg-bg-surface border border-functional-border rounded-xl p-6 hover:border-red-500 transition group flex flex-col h-full">
                        <h3 className="text-xl font-bold text-white mb-4 text-center">SESSION AT DOON B. SCHOOL</h3>

                        <div
                            onClick={() => setIsPlaying(true)}
                            className={`aspect-video bg-bg-main rounded-lg mb-6 flex items-center justify-center border border-functional-border group-hover:border-red-500/50 transition relative overflow-hidden ${!isPlaying ? 'cursor-pointer' : ''}`}
                        >
                            {isPlaying ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube-nocookie.com/embed/tt_PVE_A3wU?autoplay=1&modestbranding=1&rel=0"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                                </iframe>
                            ) : (
                                <>
                                    <img src="https://img.youtube.com/vi/tt_PVE_A3wU/hqdefault.jpg" alt="Session Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                                            <i className="fas fa-play text-white ml-1 text-lg"></i>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <p className="text-text-secondary text-sm mb-6 flex-grow">
                            How to Ideate, Build and Scale your Startup | Hacks and Mistakes.<br />
                            <span className="text-xs text-gray-500 mt-2 block">Conducted at Doon Business School.</span>
                        </p>
                        <a href="https://www.youtube.com/watch?v=tt_PVE_A3wU" target="_blank" rel="noopener noreferrer" className="block w-full text-center border border-functional-border text-text-primary font-bold py-3 rounded-lg hover:bg-bg-main hover:text-red-500 hover:border-red-500 transition">
                            <i className="fab fa-youtube mr-2"></i> Watch on YouTube
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
