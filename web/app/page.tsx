"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { MentorsPreview } from "@/components/sections/MentorsPreview";
import { ToolsShowcase } from "@/components/sections/ToolsShowcase";
import { VideoAndGallery } from "@/components/sections/VideoAndGallery";
import { Contact } from "@/components/sections/Contact";
import { mentorsData } from "@/lib/mentors";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Pre-Login View (The Original Landing Page)
  if (!isLoggedIn) {
    return (
      <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

        {/* Temporary Developer Toggle */}
        <div className="fixed top-24 right-6 z-50">
          <button
            onClick={() => setIsLoggedIn(true)}
            className="bg-accent-blue/20 hover:bg-accent-blue/40 border border-accent-blue text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase backdrop-blur-md transition-all flex items-center gap-2"
          >
            <i className="fas fa-sign-in-alt"></i> Login Demo
          </button>
        </div>

        <main className="flex min-h-screen flex-col items-center justify-between">
          <Hero />
          <MentorsPreview />
          <VideoAndGallery />
          <ToolsShowcase />
          <Contact />
        </main>
      </>
    );
  }

  // Slice the first 3 mentors for the "Top Members" spotlight
  const topMembers = mentorsData.slice(0, 3);

  // Hardcoded preview array of the event gallery
  const galleryGlance = [
    "/gallery/photo4.jpg",
    "/gallery/photo2.jpg",
    "/gallery/photo6.jpg",
    "/gallery/photo8.jpg"
  ];

  // Post-Login View (Minimalist Sleek Dashboard)
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* Temporary Developer Toggle */}
      <div className="fixed top-24 right-6 z-50">
        <button
          onClick={() => setIsLoggedIn(false)}
          className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/50 text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase backdrop-blur-md transition-all flex items-center gap-2"
        >
          <i className="fas fa-sign-out-alt"></i> Logout Demo
        </button>
      </div>

      <main className="min-h-screen pt-32 pb-32 bg-[#000000] w-full text-center flex flex-col items-center">

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none"></div>

        {/* 1. Massive Header */}
        <div className="px-6 relative z-10 w-full max-w-4xl mt-12 mb-20 text-center">
          <span className="text-accent-violet text-xs font-bold tracking-[0.2em] uppercase mb-6 block">FOUNDER COMMAND CENTER</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
            Map the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">Ecosystem.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed">
            Discover <strong className="text-white">60+</strong> grants, <strong className="text-white">35+</strong> incubators, and <strong className="text-white">150+</strong> investors perfectly matched to your profile with our AI advisor.
          </p>
        </div>

        {/* 2. Sleek Dark Stats Division */}
        <div className="w-full max-w-6xl mx-auto px-6 mb-32 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-y border-white/5">
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">135+</span>
              <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase">RESOURCES</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">60+</span>
              <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase">GRANTS & SCHEMES</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">35+</span>
              <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase">INCUBATORS</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">40+</span>
              <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase">INVESTORS</span>
            </div>
          </div>
        </div>

        {/* 3. Refined Tools & Content Matrix */}
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 text-left relative z-10">

          {/* Left Column: Tools */}
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-2xl font-bold text-white tracking-tight border-b border-white/5 pb-4 mb-2 flex justify-between items-center">
              4 Core Ecosystem Tools
              <Link href="/tools" className="text-accent-blue text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">View All Directory</Link>
            </h3>

            <Link href="/tools/ecosystem/directory" className="group flex items-center justify-between p-6 rounded-2xl bg-[#050505] border border-white/5 hover:border-accent-blue/40 transition-all w-full">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform flex-shrink-0">
                  <i className="fas fa-network-wired"></i>
                </div>
                <div>
                  <h4 className="text-white text-lg font-bold mb-1">Founder Directory</h4>
                  <p className="text-text-secondary text-sm font-light">Mapping <strong className="text-white">100+</strong> verified operators & startups.</p>
                </div>
              </div>
              <i className="fas fa-arrow-right text-white/20 group-hover:text-white transition-colors"></i>
            </Link>

            <Link href="/tools/ecosystem/grants" className="group flex items-center justify-between p-6 rounded-2xl bg-[#050505] border border-white/5 hover:border-functional-success/40 transition-all w-full">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-functional-success/10 border border-functional-success/20 flex items-center justify-center text-functional-success group-hover:scale-110 transition-transform flex-shrink-0">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <div>
                  <h4 className="text-white text-lg font-bold mb-1">Government Grants</h4>
                  <p className="text-text-secondary text-sm font-light"><strong className="text-white">₹50Cr+</strong> in 0% equity funding resources.</p>
                </div>
              </div>
              <i className="fas fa-arrow-right text-white/20 group-hover:text-white transition-colors"></i>
            </Link>

            <Link href="/tools/ecosystem/investors" className="group flex items-center justify-between p-6 rounded-2xl bg-[#050505] border border-white/5 hover:border-amber-500/40 transition-all w-full">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform flex-shrink-0">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div>
                  <h4 className="text-white text-lg font-bold mb-1">Investor Network</h4>
                  <p className="text-text-secondary text-sm font-light">Matching with <strong className="text-white">150+</strong> active seed/series investors.</p>
                </div>
              </div>
              <i className="fas fa-arrow-right text-white/20 group-hover:text-white transition-colors"></i>
            </Link>

            <Link href="/tools/ecosystem/incubators" className="group flex items-center justify-between p-6 rounded-2xl bg-[#050505] border border-white/5 hover:border-accent-violet/40 transition-all w-full">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center text-accent-violet group-hover:scale-110 transition-transform flex-shrink-0">
                  <i className="fas fa-building"></i>
                </div>
                <div>
                  <h4 className="text-white text-lg font-bold mb-1">Incubator Spaces</h4>
                  <p className="text-text-secondary text-sm font-light">Access <strong className="text-white">35+</strong> premium co-working & lab facilities.</p>
                </div>
              </div>
              <i className="fas fa-arrow-right text-white/20 group-hover:text-white transition-colors"></i>
            </Link>
          </div>

          {/* Right Column: Mentors & Gallery */}
          <div className="flex flex-col gap-12 w-full">

            {/* Mentors Minimal */}
            <div className="w-full">
              <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                <h3 className="text-2xl font-bold text-white tracking-tight">Top 12 Elite Mentors</h3>
                <Link href="/mentors" className="text-accent-blue text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">View All</Link>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full">
                {topMembers.map((member, idx) => (
                  <Link href="/mentors" key={idx} className="group flex flex-col items-center text-center gap-4 bg-[#050505] p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-white/10 group-hover:border-accent-blue/50 transition-colors shrink-0">
                      <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="80px" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold tracking-tight mb-1">{member.name}</h4>
                      <p className="text-text-secondary text-[10px] uppercase tracking-wider line-clamp-2 w-24 mx-auto">{member.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Gallery Minimal */}
            <div className="w-full">
              <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                <h3 className="text-2xl font-bold text-white tracking-tight">300+ Leaders at Latest Gatherings</h3>
                <Link href="/events" className="text-accent-blue text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">View Gallery</Link>
              </div>
              <div className="grid grid-cols-3 gap-4 h-32 w-full">
                {galleryGlance.slice(0, 3).map((src, i) => (
                  <Link href="/events" key={i} className="relative w-full h-full rounded-2xl overflow-hidden group border border-white/5 bg-[#050505]">
                    <Image src={src} alt="Event highlight" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" sizes="(max-width: 768px) 33vw, 20vw" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
