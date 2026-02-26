"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed w-full z-50 bg-[#0F111A]/80 backdrop-blur-2xl border-b border-white/5 saturate-[1.8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 md:h-16">
                    <div className="flex items-center flex-shrink-0">
                        <Link href="/" className="text-xl md:text-2xl font-black text-white tracking-tighter whitespace-nowrap hidden md:block">
                            THE <span className="text-accent-blue">STARTUP</span> SCHOOL
                        </Link>
                        <Link href="/" className="text-xl font-black text-white tracking-tighter whitespace-nowrap md:hidden">
                            <span className="text-accent-blue">TSS</span>
                        </Link>
                    </div>
                    {/* Desktop Menu - High contrast, small text, dense tracking */}
                    <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-wide">
                        <Link href="/about" className={`${isActive('/about') ? 'text-white' : 'text-text-secondary'} hover:text-white transition duration-300`}>ABOUT</Link>
                        <Link href="/programs" className={`${isActive('/programs') ? 'text-white' : 'text-text-secondary'} hover:text-white transition duration-300`}>PROGRAMS</Link>
                        <Link href="/mentors" className={`${isActive('/mentors') ? 'text-white' : 'text-text-secondary'} hover:text-white transition duration-300`}>MENTORS</Link>
                        <Link href="/events" className={`${isActive('/events') ? 'text-white' : 'text-text-secondary'} hover:text-white transition duration-300`}>EVENTS</Link>
                        <Link href="/tools" className={`${isActive('/tools') || pathname.startsWith('/tools/') ? 'text-white' : 'text-text-secondary'} hover:text-white transition duration-300`}>TOOLS</Link>
                        <Link href="/#contact">
                            <button className="bg-white/10 hover:bg-white text-white hover:text-black px-4 py-1.5 rounded-full font-medium transition duration-300 border border-white/10">
                                Connect
                            </button>
                        </Link>
                    </div>
                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-text-primary hover:text-white focus:outline-none transition-colors">
                            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu - Full screen overlay style */}
            <div className={`${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:hidden fixed inset-0 top-[56px] bg-[#0F111A] z-40 transition-opacity duration-300 overflow-y-auto`}>
                <div className="px-6 py-8 flex flex-col space-y-6 text-2xl font-bold tracking-tight">
                    <Link href="/about" onClick={closeMenu} className="text-text-primary hover:text-accent-blue transition-colors border-b border-white/10 pb-4">About</Link>
                    <Link href="/programs" onClick={closeMenu} className="text-text-primary hover:text-accent-blue transition-colors border-b border-white/10 pb-4">Programs</Link>
                    <Link href="/mentors" onClick={closeMenu} className="text-text-primary hover:text-accent-blue transition-colors border-b border-white/10 pb-4">Mentors</Link>
                    <Link href="/events" onClick={closeMenu} className="text-text-primary hover:text-accent-blue transition-colors border-b border-white/10 pb-4">Events</Link>
                    <Link href="/tools" onClick={closeMenu} className="text-text-primary hover:text-accent-blue transition-colors border-b border-white/10 pb-4">Tools</Link>
                    <Link href="/#contact" onClick={closeMenu} className="text-accent-blue mt-4">Connect &rarr;</Link>
                </div>
            </div>
        </nav>
    );
}
