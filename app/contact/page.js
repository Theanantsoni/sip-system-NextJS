"use client";

import { useState } from "react";
import {
    FaLinkedinIn,
    FaXTwitter,
    FaGithub,
    FaInstagram,
    FaYoutube,
    FaFacebookF,
} from "react-icons/fa6";


export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message submitted (UI demo only)");
    };

    function SocialLink({ icon, label, href }) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
        flex items-center gap-2
        px-3 py-2 rounded-lg border
        text-sm font-medium
        text-slate-600
        hover:text-indigo-600
        hover:border-indigo-300
        hover:bg-indigo-50
        transition
      "
            >
                <span className="text-base">{icon}</span>
                <span>{label}</span>
            </a>
        );
    }

    return (

        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* ================= HERO ================= */}
            <section className="relative bg-white border-b">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#e0e7ff_0%,_transparent_60%)]" />
                <div className="max-w-7xl mx-auto px-6 py-24 relative">
                    <h1 className="text-5xl font-extrabold">
                        Contact <span className="text-indigo-600">SIP-PLANNER</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-slate-600 text-lg">
                        Have questions about SIP investing, calculators, or the platform?
                        Reach out — we’re here to help you make smarter financial decisions.
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-16">
                {/* ================= LEFT INFO ================= */}
                <div className="space-y-10">
                    <InfoCard
                        title="Founder / Brand"
                        value="Anant Soni (SIP-PLANNER)"
                    />
                    <InfoCard
                        title="Email Support"
                        value="mranantsoni7@gmail.com"
                    />
                    <InfoCard
                        title="Phone / WhatsApp"
                        value="+91 81405 91020"
                    />
                    <InfoCard
                        title="Location"
                        value="Surat, India"
                    />
                    <InfoCard
                        title="Working Hours"
                        value="Mon–Fri: 10am – 6pm | Sat: 10am – 1pm"
                    />

                    {/* SOCIAL LINKS */}
                    <div className="bg-white border rounded-2xl p-6">
                        <h3 className="font-semibold text-lg mb-4">
                            Connect with Me
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            <SocialLink
                                icon={<FaLinkedinIn />}
                                label="LinkedIn"
                                href="https://www.linkedin.com/in/anant-soni-b737662a2"
                            />
                            <SocialLink
                                icon={<FaXTwitter />}
                                label="Twitter / X"
                                href="https://x.com/theanantsoni"
                            />
                            <SocialLink
                                icon={<FaGithub />}
                                label="GitHub"
                                href="https://github.com/Theanantsoni"
                            />
                            <SocialLink
                                icon={<FaInstagram />}
                                label="Instagram"
                                href="https://www.instagram.com/theanantsoni"
                            />
                            <SocialLink
                                icon={<FaYoutube />}
                                label="YouTube"
                                href="https://www.youtube.com/@Theanantsoni"
                            />
                            <SocialLink
                                icon={<FaFacebookF />}
                                label="Facebook"
                                href="https://www.facebook.com/theanantsoni"
                            />
                        </div>
                    </div>

                </div>

                {/* ================= CONTACT FORM ================= */}
                <div className="lg:col-span-2">
                    <div className="bg-white border rounded-3xl p-12 shadow-sm">
                        <h2 className="text-3xl font-bold mb-4">
                            Send Us a Message
                        </h2>
                        <p className="text-slate-600 mb-10">
                            Fill out the form below and we usually respond within
                            <span className="font-semibold text-indigo-600"> 24 hours</span>.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <Input
                                    label="Your Name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                />
                                <Input
                                    label="Email Address"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Input
                                    label="Phone Number"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Optional"
                                />
                                <Select
                                    label="Subject"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Write your message here..."
                                    className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1" required />
                                <p className="text-sm text-slate-600">
                                    I agree that my information may be used to contact me back.
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* ================= FOOTER NOTE ================= */}
            {/* <section className="text-center pb-10">
                <p className="text-sm text-slate-500">
                    © {new Date().getFullYear()} SIP-SYSTEM · Built with trust & transparency
                </p>
            </section> */}
            
        </main>
    );
}

/* ================= COMPONENTS ================= */

function InfoCard({ title, value }) {
    return (
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-slate-500">{title}</p>
            <p className="mt-2 font-semibold text-slate-900">{value}</p>
        </div>
    );
}

function SocialLink({ label, href }) {
    return (
        <a
            href={href}
            target="_blank"
            className="px-4 py-2 rounded-lg border text-sm hover:bg-indigo-50 hover:text-indigo-600 transition"
        >
            {label}
        </a>
    );
}

function Input({ label, ...props }) {
    return (
        <div>
            <label className="block text-sm font-medium mb-2">
                {label}
            </label>
            <input
                {...props}
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>
    );
}

function Select({ label, ...props }) {
    return (
        <div>
            <label className="block text-sm font-medium mb-2">
                {label}
            </label>
            <select
                {...props}
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                <option value="">Select a subject</option>
                <option>General Query</option>
                <option>SIP Investment Help</option>
                <option>Technical Issue</option>
                <option>Feedback</option>
                <option>Business Inquiry</option>
            </select>
        </div>
    );
}
