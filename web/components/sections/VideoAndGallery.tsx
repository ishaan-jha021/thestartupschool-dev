"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// ─── Gallery photos from /public/gallery/ ─────────────────────────────
const GALLERY_PHOTOS = [
    "/gallery/IMG_0845.JPG",
    "/gallery/IMG_1280.JPG",
    "/gallery/IMG_1318.JPG",
    "/gallery/IMG_1319.JPG",
    "/gallery/IMG_1342.JPG",
    "/gallery/IMG_1371.JPG",
    "/gallery/IMG_1378.JPG",
    "/gallery/IMG_1380.JPG",
];

// ─── Simple inline marquee ─────────────────────────────────────────────
function PhotoMarquee({ photos, reverse = false }: { photos: string[]; reverse?: boolean }) {
    return (
        <div className="relative overflow-hidden w-full">
            <div className="absolute left-0 top-0 h-full w-40 z-10 pointer-events-none bg-gradient-to-r from-bg-main to-transparent" />
            <div className="absolute right-0 top-0 h-full w-40 z-10 pointer-events-none bg-gradient-to-l from-bg-main to-transparent" />
            <div
                className="photo-marquee-track"
                style={{ animationDirection: reverse ? "reverse" : "normal" }}
            >
                {[...photos, ...photos].map((src, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-72 h-52 mx-2 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 hover:-translate-y-1.5 transition-all duration-300 group"
                    >
                        <Image
                            src={src}
                            alt={`Community moment ${i + 1}`}
                            width={288}
                            height={208}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        />
                    </div>
                ))}
            </div>
            <style jsx>{`
        .photo-marquee-track {
          display: flex;
          width: max-content;
          animation: photo-scroll 30s linear infinite;
          will-change: transform;
        }
        .photo-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes photo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}

// ─── Main export ───────────────────────────────────────────────────────
export function VideoAndGallery() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(!isMuted);
    };

    // Row 1: first 8, Row 2: reversed for visual contrast
    const row2 = [...GALLERY_PHOTOS].reverse();

    return (
        <>
            {/* ── Video Section ───────────────────────────────────────────── */}
            <section className="py-28 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent-violet/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-14">
                        <span className="text-accent-violet text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                            Our Community
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] mb-5">
                            What Happens When{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet to-accent-blue">
                                Founders Meet.
                            </span>
                        </h2>
                        <p className="text-lg text-text-secondary font-light max-w-xl mx-auto">
                            Real conversations. Real connections. Real startups getting better together.
                        </p>
                    </div>

                    {/* Video Player */}
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-accent-violet/10 group">
                        <video
                            ref={videoRef}
                            src="/founder-dating.mp4"
                            muted
                            loop
                            playsInline
                            className="w-full aspect-video object-cover"
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                        {/* Controls */}
                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                            <button
                                onClick={togglePlay}
                                className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-5 py-2.5 hover:bg-white/20 transition-all duration-200 font-semibold text-sm"
                            >
                                <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"} text-xs`}></i>
                                {isPlaying ? "Pause" : "Play"}
                            </button>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={toggleMute}
                                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all flex items-center justify-center"
                                >
                                    <i className={`fas ${isMuted ? "fa-volume-mute" : "fa-volume-up"} text-xs`}></i>
                                </button>
                            </div>
                        </div>

                        {/* Center play button when paused */}
                        {!isPlaying && (
                            <button
                                onClick={togglePlay}
                                className="absolute inset-0 flex items-center justify-center group/play"
                            >
                                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover/play:bg-white/20 transition-all duration-300 group-hover/play:scale-110">
                                    <i className="fas fa-play text-white text-xl ml-1"></i>
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* ── Gallery Marquee Section ─────────────────────────────────── */}
            <section className="py-20 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

                {/* Header */}
                <div className="max-w-7xl mx-auto px-6 relative z-10 mb-14 text-center">
                    <span className="text-accent-blue text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Community Gallery
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] mb-5">
                        300+ Leaders at Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-cyan-400">
                            Gatherings.
                        </span>
                    </h2>
                    <p className="text-lg text-text-secondary font-light max-w-xl mx-auto">
                        Bootcamps, founder dating sessions, investor meetups — captured in the moment.
                    </p>
                </div>

                {/* Row 1 — left to right */}
                <div className="mb-4">
                    <PhotoMarquee photos={GALLERY_PHOTOS} />
                </div>

                {/* Row 2 — right to left */}
                <div className="mb-14">
                    <PhotoMarquee photos={row2} reverse />
                </div>

                {/* CTA */}
                <div className="text-center relative z-10">
                    <Link
                        href="/events"
                        className="group inline-flex items-center text-accent-blue hover:text-white font-bold text-base transition duration-300"
                    >
                        View Full Gallery
                        <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>
            </section>
        </>
    );
}
