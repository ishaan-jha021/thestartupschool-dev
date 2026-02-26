"use client";

import { useState } from 'react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        phone: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id === 'form-name' ? 'name' :
                id === 'form-city' ? 'city' :
                    id === 'form-contact' ? 'phone' : 'email']: value
        }));
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const subject = "Inquiry for The Startup School";
        const body = `Name: ${formData.name}%0D%0ACity: ${formData.city}%0D%0AEmail: ${formData.email}%0D%0AContact Number: ${formData.phone}`;

        window.location.href = `mailto:info@thestartupschool.in?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-32 w-full bg-[#000000] border-t border-white/5 relative overflow-hidden">
            {/* Extremely Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">APPLY NOW</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-[-0.04em] mb-6">
                        Ready to <span className="text-white/40">Build?</span>
                    </h2>
                    <p className="text-xl text-text-secondary font-light">
                        Drop your details below and we will get back to you.
                    </p>
                </div>

                <div className="glass-card rounded-[2rem] p-8 md:p-14 border border-white/5 relative overflow-hidden shadow-2xl">
                    <form id="inquiry-form" onSubmit={handleFormSubmit} className="space-y-8 relative z-10">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="form-name" className="block text-xs font-bold tracking-[0.1em] text-text-secondary uppercase mb-3 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    id="form-name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent-blue focus:bg-white/[0.05] transition duration-300 placeholder-white/20"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="form-city" className="block text-xs font-bold tracking-[0.1em] text-text-secondary uppercase mb-3 ml-1">City</label>
                                <input
                                    type="text"
                                    id="form-city"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent-blue focus:bg-white/[0.05] transition duration-300 placeholder-white/20"
                                    placeholder="Mumbai, Bengaluru, etc."
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="form-contact" className="block text-xs font-bold tracking-[0.1em] text-text-secondary uppercase mb-3 ml-1">Contact Number</label>
                                <input
                                    type="tel"
                                    id="form-contact"
                                    required
                                    pattern="[0-9]{10}"
                                    title="Please enter a valid 10 digit mobile number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent-blue focus:bg-white/[0.05] transition duration-300 placeholder-white/20"
                                    placeholder="9876543210"
                                />
                            </div>
                            <div>
                                <label htmlFor="form-email" className="block text-xs font-bold tracking-[0.1em] text-text-secondary uppercase mb-3 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    id="form-email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent-blue focus:bg-white/[0.05] transition duration-300 placeholder-white/20"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="pt-8 text-center flex justify-center">
                            <button type="submit" className="group w-full md:w-auto bg-white hover:bg-gray-100 text-black px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center">
                                Submit Inquiry
                                <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <footer className="mt-32 pt-10 text-center text-text-secondary text-sm font-medium tracking-wide border-t border-white/5 mx-6">
                <p>&copy; {new Date().getFullYear()} The Startup School. All rights reserved.</p>
            </footer>
        </section>
    );
}
