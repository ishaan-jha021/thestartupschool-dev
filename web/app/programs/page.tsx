import { Programs as ProgramsSection } from "@/components/sections/Programs";

export const metadata = {
    title: 'Programs | The Startup School',
    description: 'Explore our immersive cohorts and workshops designed for founders.',
};

export default function ProgramsPage() {
    return (
        <div className="pt-24 pb-20 min-h-screen bg-bg-main flex flex-col items-center">
            {/* Ultra-minimal Header */}
            <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-[-0.04em] mb-6">
                    Execution <span className="text-white/40">Engines.</span>
                </h1>
                <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
                    Zero theory. 100% practical validation and growth.
                </p>
            </div>

            <ProgramsSection />
        </div>
    );
}
