import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Events & Workshops | The Startup School',
    description: 'Upcoming and past events, workshops, and startup testimonials at The Startup School.',
};

export default function EventsPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-[#000000]">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">THE GATHERINGS</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-[-0.04em] leading-tight">
                        Real <span className="text-white/40">Conversations.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary font-light">
                        Join our immersive sessions to learn from the best, network with peers, and accelerate your startup journey.
                    </p>
                </div>

                {/* Upcoming Workshops */}
                <section className="mb-32">
                    <h2 className="text-2xl font-bold text-white mb-10 tracking-tight pb-4 border-b border-white/10">Upcoming Workshops</h2>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Mock Workshop Card */}
                        <div className="glass-card hover-glow rounded-3xl p-8 md:p-10 border border-white/5 relative group h-full flex flex-col">
                            <div className="flex justify-between items-start mb-8">
                                <div className="bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    Registration Open
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-4 tracking-[-0.02em] leading-tight group-hover:text-accent-blue transition duration-300">The Art of Pitching: Seed Round</h3>
                            <p className="text-text-secondary text-lg leading-relaxed mb-10 flex-grow">Learn how to craft a narrative that resonates with angel investors and seed funds. Practical teardowns of successful pitch decks.</p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center mt-auto pt-8 border-t border-white/5">
                                <div className="space-y-2">
                                    <div className="flex items-center text-text-primary font-medium tracking-wide">
                                        <i className="far fa-calendar text-accent-blue w-6"></i> 15th December
                                    </div>
                                    <div className="flex items-center text-text-primary font-medium tracking-wide">
                                        <i className="fas fa-map-marker-alt text-accent-blue w-6"></i> WeWork, Andheri East
                                    </div>
                                </div>
                                <button className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full font-bold transition duration-300">
                                    RSVP Now
                                </button>
                            </div>
                        </div>

                        {/* Empty State */}
                        <div className="glass-card hover-glow rounded-3xl p-8 md:p-10 border border-dashed border-white/10 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary mb-6">
                                <i className="fas fa-bullhorn text-2xl"></i>
                            </div>
                            <p className="text-white font-bold text-xl mb-2 tracking-tight">More events being scheduled.</p>
                            <p className="text-text-secondary text-lg">Stay tuned for updates.</p>
                        </div>
                    </div>
                </section>

                {/* Past Events */}
                <section className="mb-32">
                    <h2 className="text-2xl font-bold text-white mb-10 tracking-tight pb-4 border-b border-white/10">Past Events</h2>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Past Event Card */}
                        <div className="glass-card hover-glow rounded-3xl p-8 md:p-10 border border-white/5 relative group h-full flex flex-col bg-[#050505]">
                            <div className="flex justify-between items-start mb-8">
                                <div className="bg-white/10 border border-white/20 text-text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    Concluded
                                </div>
                                <div className="text-accent-blue font-bold text-sm tracking-widest uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-[-8px] transition-all">View Details &rarr;</div>
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-4 tracking-[-0.02em] leading-tight group-hover:text-accent-blue transition duration-300">Founder's Dating</h3>
                            <p className="text-text-secondary text-lg leading-relaxed mb-10 flex-grow">A curated offline meetup for founders & builders. We skipped the awkward small talk, facilitated expert matchmaking, and ran rigorous breakout sessions to help builders find their exact business soulmates.</p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center mt-auto pt-8 border-t border-white/5">
                                <div className="space-y-2">
                                    <div className="flex items-center text-text-secondary font-medium tracking-wide">
                                        <i className="far fa-calendar text-white/50 w-6"></i> 14th February (Past)
                                    </div>
                                    <div className="flex items-center text-text-secondary font-medium tracking-wide">
                                        <i className="fas fa-map-marker-alt text-white/50 w-6"></i> DevX, Andheri East
                                    </div>
                                </div>
                                <Link href="/founders-dating-14feb26" className="w-full sm:w-auto bg-white/10 hover:bg-white text-white hover:text-black px-8 py-3 rounded-full font-bold transition duration-300 text-center">
                                    Read Highlights
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Past Events Gallery */}
                <section className="mb-32 selection:bg-accent-blue/30">
                    <div className="flex justify-between items-end mb-10 pb-4 border-b border-white/10">
                        <div>
                            <h2 className="text-4xl font-bold text-white tracking-tight">The Gallery.</h2>
                            <p className="text-text-secondary mt-2">Moments from our recent gatherings and extensive networking sessions.</p>
                        </div>
                    </div>

                    {/* Masonry-Style Bento Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4 md:gap-6">
                        {/* Video 1 - Large Feature */}
                        <div className="glass-card rounded-3xl border border-white/5 overflow-hidden relative group col-span-2 row-span-2 bg-[#050505] flex items-center justify-center h-full">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <video src="/founder-dating.mp4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" autoPlay muted loop playsInline></video>
                            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                                <span className="bg-accent-blue text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-black animate-pulse"></div> Live View</span>
                            </div>
                        </div>

                        {/* Photo 1 */}
                        <div className="glass-card rounded-3xl border border-white/5 overflow-hidden relative group col-span-2 md:col-span-1 row-span-1 border-t-accent-blue/30">
                            <Image src="/gallery/IMG_0845.JPG" alt="Event" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" quality={75} />
                            <div className="absolute inset-0 bg-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] pointer-events-none"></div>
                        </div>

                        {/* Photo 2 */}
                        <div className="glass-card rounded-3xl border border-white/5 overflow-hidden relative group col-span-2 md:col-span-1 row-span-1">
                            <Image src="/gallery/IMG_1280.JPG" alt="Event" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" quality={75} />
                            <div className="absolute inset-0 bg-accent-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] pointer-events-none"></div>
                        </div>

                        {/* Photo 3 */}
                        <div className="glass-card rounded-3xl border border-white/5 overflow-hidden relative group col-span-2 row-span-1">
                            <Image src="/gallery/IMG_1318.JPG" alt="Event" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" quality={75} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>

                        {/* Photo 8 - Replacing Video 2 to avoid duplications */}
                        <div className="glass-card rounded-3xl border border-white/5 overflow-hidden relative group col-span-2 md:col-span-1 row-span-2 bg-[#050505] border-b-accent-blue/30">
                            <Image src="/gallery/IMG_1380.JPG" alt="Event" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" quality={75} />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                        </div>

                        {/* Photo 4 */}
                        <div className="glass-card rounded-3xl border border-white/5 overflow-hidden relative group col-span-2 md:col-span-1 row-span-1">
                            <Image src="/gallery/IMG_1319.JPG" alt="Event" fill className="object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale-[50%] group-hover:grayscale-0" sizes="(max-width: 768px) 50vw, 25vw" quality={75} />
                        </div>

                        {/* Photo 5 */}
                        <div className="glass-card rounded-3xl border border-white/5 overflow-hidden relative group col-span-2 md:col-span-2 row-span-1">
                            <Image src="/gallery/IMG_1342.JPG" alt="Event" fill className="object-cover hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" quality={75} />
                        </div>

                        {/* Photo 6 */}
                        <div className="glass-card rounded-3xl border border-white/5 overflow-hidden relative group col-span-2 md:col-span-1 row-span-1 border-l-accent-violet/20">
                            <Image src="/gallery/IMG_1371.JPG" alt="Event" fill className="object-cover hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" quality={75} />
                        </div>

                        {/* Photo 7 - Replacing Video 3 */}
                        <div className="glass-card rounded-3xl border border-white/5 overflow-hidden relative group col-span-2 md:col-span-2 row-span-1 bg-[#050505]">
                            <Image src="/gallery/IMG_1378.JPG" alt="Event" fill className="object-cover hover:scale-110 transition-transform duration-700 filter brightness-75 hover:brightness-100" sizes="(max-width: 768px) 100vw, 50vw" quality={75} />
                        </div>

                    </div>
                </section>

                {/* Startup Testimonials */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-10 tracking-tight pb-4 border-b border-white/10">Word on the Street</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="glass-card hover-glow p-8 md:p-10 rounded-3xl border border-white/5 relative flex flex-col">
                            <div className="flex text-white/20 text-xs mb-8 gap-1">
                                <i className="fas fa-star text-white"></i><i className="fas fa-star text-white"></i><i className="fas fa-star text-white"></i><i className="fas fa-star text-white"></i><i className="fas fa-star text-white"></i>
                            </div>
                            <p className="text-text-primary text-lg leading-relaxed mb-10 flex-grow font-light">"The 100-day mentoring program completely shifted our go-to-market strategy. We avoided a costly mistake thanks to the rigorous teardowns."</p>
                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white tracking-widest border border-white/10">AS</div>
                                <div>
                                    <div className="font-bold text-white tracking-wide">Aman Sharma</div>
                                    <div className="text-sm text-text-secondary">Founder, LogiTech</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="glass-card hover-glow p-8 md:p-10 rounded-3xl border border-white/5 relative flex flex-col">
                            <div className="flex text-white/20 text-xs mb-8 gap-1">
                                <i className="fas fa-star text-white"></i><i className="fas fa-star text-white"></i><i className="fas fa-star text-white"></i><i className="fas fa-star text-white"></i><i className="fas fa-star text-white"></i>
                            </div>
                            <p className="text-text-primary text-lg leading-relaxed mb-10 flex-grow font-light">"Access to this network is unparalleled. Met my co-founder during the Spark intensive. Validated our idea in 48 hours instead of 4 months."</p>
                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white tracking-widest border border-white/10">RP</div>
                                <div>
                                    <div className="font-bold text-white tracking-wide">Riya Patel</div>
                                    <div className="text-sm text-text-secondary">Co-Builder, FinStack</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="glass-card hover-glow p-8 md:p-10 rounded-3xl border border-white/5 relative flex flex-col">
                            <div className="flex text-white/20 text-xs mb-8 gap-1">
                                <i className="fas fa-star text-white"></i><i className="fas fa-star text-white"></i><i className="fas fa-star text-white"></i><i className="fas fa-star text-white"></i><i className="fas fa-star text-white"></i>
                            </div>
                            <p className="text-text-primary text-lg leading-relaxed mb-10 flex-grow font-light">"Skip the MBA if you literally want to build a startup. The actionable advice you get here is worth 10x the investment. The real deal."</p>
                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white tracking-widest border border-white/10">KD</div>
                                <div>
                                    <div className="font-bold text-white tracking-wide">Karan Desai</div>
                                    <div className="text-sm text-text-secondary">CEO, EduVance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
