export function Manifesto() {
    return (
        <section id="manifesto" className="py-32 bg-black relative overflow-hidden w-full border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Minimalist Profile & Intro */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="mb-8 p-1 rounded-full bg-gradient-to-b from-white/20 to-transparent">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-[#0a0a0a] p-1 border border-white/10">
                            <img
                                src="/gaurav.jpg"
                                alt="Gaurav Bansal"
                                className="w-full h-full rounded-full object-cover filter grayscale hover:grayscale-0 transition duration-700"
                            />
                        </div>
                    </div>
                    <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4">THE FOUNDER’S MANIFESTO</span>
                    <h4 className="text-3xl font-bold text-white tracking-tight">Gaurav Bansal</h4>
                    <a href="https://www.linkedin.com/in/gauravbansal2/" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:text-white transition inline-flex items-center gap-2 mt-4 text-sm font-medium">
                        Connect on LinkedIn <i className="fab fa-linkedin"></i>
                    </a>
                </div>

                {/* Editorial Typography Area */}
                <div className="w-full relative">
                    {/* Massive Drop Quote Mark */}
                    <div className="absolute -top-16 -left-8 md:-left-16 text-[150px] font-serif text-white/5 pointer-events-none leading-none">
                        “
                    </div>

                    <div className="manifesto-font text-xl md:text-2xl lg:text-[28px] text-[#A1A1A6] leading-[1.8] space-y-10 font-light">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-16 tracking-[-0.02em]">
                            “दिल में हो आग तो जलती रहनी चाहिए,<br />
                            तेरा हो चाहे मेरा,<br />
                            <span className="gradient-text">सपना ज़िंदा रहना चाहिए!</span>”
                        </h3>

                        <p>Startups in India aren't built in garages; they are built at <strong className="text-white font-medium">kitchen tables</strong> amidst family debates, silent sacrifices, and financial anxiety.</p>

                        <p>In a country like <strong className="text-white font-medium">BHARAT</strong>, the “Opportunity Cost” isn't just a line on a spreadsheet — it is a weight on a founder’s soul.</p>

                        <p>For the middle-class dreamer, choosing a startup over a steady paycheck is an act of war against social security.</p>

                        <div className="w-12 h-[1px] bg-white/20 my-16 mx-auto"></div>

                        <p>A startup’s greatest enemy isn't competition — it’s the <strong className="text-white font-medium">“Initial Days Vacuum”</strong>. We talk about “funding”, but we forget about “foundation”.</p>

                        <p>Many have the <em className="text-white italic">‘Keeda’</em> (the itch) and the <em className="text-white italic">‘Himmat’</em> (the courage), but courage without a compass is just a slow way to get lost.</p>

                        <p>The ecosystem treats early-stage startups like athletes; in reality, they need to be treated like infants.</p>

                        <p>If you don't hold the hand that is trying to build, that hand will eventually reach for a corporate cubicle just to survive.</p>

                        <div className="w-12 h-[1px] bg-white/20 my-16 mx-auto"></div>

                        <p className="text-2xl md:text-3xl text-white font-medium tracking-tight">I believe tactical, hands-on support in the first 100 days is more valuable than a seed check in the first 300.</p>

                        <p>Outliers don’t die because they lack talent — they die because they lack a map.</p>

                        <p>If we provide the right scaffolding to the aspiring founder, we won't just see more startups — we will unlock an era of <strong className="text-white font-bold">unstoppable builders.</strong></p>

                        <p>It doesn’t matter whose hand holds the torch, as long as the darkness is defeated. I am not here to just invest; I am here to ensure the fire doesn't go out before the sun rises.</p>

                        <div className="mt-24 p-8 md:p-12 border border-white/10 rounded-3xl bg-white/[0.02] text-center">
                            <p className="font-medium text-white text-2xl md:text-3xl tracking-tight leading-relaxed">
                                “I lost my startup so that you don't have to lose yours.<br />
                                My failure was a lesson;<br />
                                <span className="text-accent-blue">My mission is your success.</span>”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
