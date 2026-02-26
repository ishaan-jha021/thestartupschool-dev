import { Mentors as MentorsSection } from "@/components/sections/Mentors";

export const metadata = {
    title: 'Mentors | The Startup School',
    description: 'Learn from industry operators, founders, and experts.',
};

export default function MentorsPage() {
    return (
        <div className="pt-24 pb-20 min-h-screen bg-bg-main flex flex-col items-center">
            <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-[-0.04em] mb-6">
                    The <span className="text-white/40">Operators.</span>
                </h1>
                <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
                    Guidance from those who have actually built and scaled companies.
                </p>
            </div>

            <MentorsSection />
        </div>
    );
}
