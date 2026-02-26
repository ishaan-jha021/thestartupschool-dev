import { Manifesto } from "@/components/sections/Manifesto";
import { FounderProof } from "@/components/sections/FounderProof";
import { Features } from "@/components/sections/Features";

export const metadata = {
    title: 'About | The Startup School',
    description: 'The philosophy and the foundation behind The Startup School.',
};

export default function AboutPage() {
    return (
        <div className="pt-24 pb-20 min-h-screen bg-bg-main flex flex-col items-center">
            {/* Editorial Header */}
            <div className="max-w-4xl mx-auto px-6 mb-20 text-center">
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-[-0.04em] mb-6">
                    Our <span className="text-white/40">Philosophy.</span>
                </h1>
                <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
                    We believe tactical, hands-on support in the first 100 days is more valuable than a seed check in the first 300.
                </p>
            </div>

            <Features />
            <Manifesto />
            <FounderProof />
        </div>
    );
}
