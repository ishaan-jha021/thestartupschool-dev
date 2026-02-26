export function Features() {
    return (
        <>
            {/* Introduction Section */}
            <section id="about" className="py-24 relative overflow-hidden bg-bg-main border-t border-white/5">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-accent-violet font-bold tracking-widest uppercase text-sm mb-4 block animate-pulse">Introducing</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        "THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">STARTUP</span> SCHOOL"
                    </h2>
                    <p className="text-2xl text-text-primary font-light mb-12">
                        An alternate B-School for all Aspiring Founders.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center text-accent-violet text-2xl shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                                <i className="fas fa-wallet"></i>
                            </div>
                            <span className="text-lg font-bold text-white whitespace-nowrap">Highly Affordable</span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center text-accent-violet text-2xl shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                                <i className="fas fa-hourglass-half"></i>
                            </div>
                            <span className="text-lg font-bold text-white whitespace-nowrap">Extremely Time-Saving</span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center text-accent-blue text-2xl shadow-[0_0_15px_rgba(41,151,255,0.15)]">
                                <i className="fas fa-chalkboard"></i>
                            </div>
                            <span className="text-lg font-bold text-white whitespace-nowrap">Live Classroom Programs</span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center text-accent-blue text-2xl shadow-[0_0_15px_rgba(41,151,255,0.15)]">
                                <i className="fas fa-book-reader"></i>
                            </div>
                            <span className="text-lg font-bold text-white whitespace-nowrap">Rigorous and In-depth</span>
                        </div>
                    </div>

                    <div className="mt-16">
                        <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet font-bold italic">
                            "Your Idea shapes into a Startup here."
                        </p>
                    </div>
                </div>
            </section>

            {/* The Core Alignment (4 Deadly Gaps) */}
            <section className="py-20 bg-bg-main">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">We Close The 4 Deadly Gaps</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Gap 1 */}
                        <div className="p-6 bg-bg-surface rounded-xl border border-functional-border hover:border-accent-blue transition duration-300 text-center">
                            <div className="text-3xl text-accent-blue mb-4"><i className="fas fa-chalkboard-teacher"></i></div>
                            <h3 className="text-xl font-bold mb-2 text-text-primary">Learning</h3>
                            <p className="text-text-secondary text-sm">Experiential, Live, In-depth, Outcome-driven.</p>
                        </div>
                        {/* Gap 2 */}
                        <div className="p-6 bg-bg-surface rounded-xl border border-functional-border hover:border-accent-violet transition duration-300 text-center">
                            <div className="text-3xl text-accent-violet mb-4"><i className="fas fa-network-wired"></i></div>
                            <h3 className="text-xl font-bold mb-2 text-text-primary">Access</h3>
                            <p className="text-text-secondary text-sm">To world-class tools, industry network, and intel.</p>
                        </div>
                        {/* Gap 3 */}
                        <div className="p-6 bg-bg-surface rounded-xl border border-functional-border hover:border-accent-blue transition duration-300 text-center">
                            <div className="text-3xl text-accent-blue mb-4"><i className="fas fa-user-astronaut"></i></div>
                            <h3 className="text-xl font-bold mb-2 text-text-primary">Mentoring</h3>
                            <p className="text-text-secondary text-sm">By industry titans.</p>
                        </div>
                        {/* Gap 4 */}
                        <div className="p-6 bg-bg-surface rounded-xl border border-functional-border hover:border-accent-violet transition duration-300 text-center">
                            <div className="text-3xl text-accent-violet mb-4"><i className="fas fa-users"></i></div>
                            <h3 className="text-xl font-bold mb-2 text-text-primary">Community</h3>
                            <p className="text-text-secondary text-sm">Of believers and co-builders.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
