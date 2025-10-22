import React, { useState } from 'react';
import sadhanaAppIcon from '../assets/icon.png'; 

// --- Animated SVG Blobs for Background ---
const BackgroundBlobs = () => (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
);


// --- SVG Icons ---
const PaletteIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3" /><path d="M6.5 10a5.5 5.5 0 1 0 11 0" /><path d="M12 17.5a2.5 2.5 0 0 1-2.5-2.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5A2.5 2.5 0 0 1 12 17.5z" /></svg>;
const CodeIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>;
const RocketIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.05-.64-.75-2.15-.75-2.95-.05zM19.5 4.5c1.5-1.26 2-5 2-5s-3.74-.5-5 2c-.71.84-.7 2.3-.05 3.05.64.75 2.15-.75 2.95-.05z" /><path d="M15 9.5c.71.84.7 2.3.05 3.05-.64-.75-2.15-.75-2.95-.05L2 22l5.5-5.5Z" /><path d="m22 2-5.5 5.5" /></svg>;
const AppleIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>;
const PlayStoreIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.33 2.33 22 12 2.33 21.67V2.33zM22 12l-10 6V6l10 6z"/></svg>;
const TwitterIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
const LinkedinIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 .09 .38V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.31.8 3.31 4.5z" /></svg>;
const SparkleIcon = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,0 C12,0 12.375,3.375 15,4.5 C17.625,5.625 21,6 21,6 C21,6 17.625,6.375 15,7.5 C12.375,8.625 12,12 12,12 C12,12 11.625,8.625 9,7.5 C6.375,6.375 3,6 3,6 C3,6 6.375,5.625 9,4.5 C11.625,3.375 12,0 12,0 Z M12,12 C12,12 12.375,15.375 15,16.5 C17.625,17.625 21,18 21,18 C21,18 17.625,18.375 15,19.5 C12.375,20.625 12,24 12,24 C12,24 11.625,20.625 9,19.5 C6.375,18.375 3,18 3,18 C3,18 6.375,17.625 9,16.5 C11.625,15.375 12,12 12,12 Z" /></svg>;
const IphoneIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>;
const AndroidIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 9.5H7M12 17.5v-8"/><path d="M6 14.5c0 3.31 2.69 6 6 6s6-2.69 6-6V9c0-3.31-2.69-6-6-6s-6 2.69-6 6v5.5z"/><path d="M9 4.5 7.5 3M15 4.5l1.5-1.5"/></svg>;
const DesignIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>;
const HandshakeIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18s-2 1-3 1-3-1-3-1l-3 3v-3l-2-2m-1-1v3l3 3 2 2 3-3 2-2 3-3V6l-3-3-2-2-3 3-2 2z"></path></svg>;
const MailIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;

// --- Components ---

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [{ href: '#apps', label: 'Our Apps' }, { href: '#expertise', label: 'Expertise'}, { href: '#transform', label: 'Transform'}, { href: '#our-story', label: 'Our Story' }, { href: '#contact', label: 'Contact' }];

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
            <nav className="bg-white/40 backdrop-blur-md rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 px-6 py-3 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-orange-500">Sagittix</a>
                <div className="hidden md:flex space-x-8">
                    {navLinks.map(link => <a key={link.href} href={link.href} className="text-gray-700 hover:text-fuchsia-600 font-medium transition-colors">{link.label}</a>)}
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg></button>
                </div>
            </nav>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white/80 backdrop-blur-md mt-2 rounded-lg shadow-lg`}><div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-fuchsia-500 transition-colors">{link.label}</a>)}
            </div></div>
        </header>
    );
};

const HeroSection = () => (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-28">
        <BackgroundBlobs />
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-gray-800">
                Crafting Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-orange-500">Digital World</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                We are Sagittix, a product-first company. We design and build our own portfolio of apps to solve real-world problems and captivate users.
            </p>
            <a href="#transform" className="text-lg bg-gradient-to-r from-fuchsia-600 to-orange-500 hover:from-fuchsia-700 hover:to-orange-600 text-white font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                Let's Build Something Together
            </a>
        </div>
    </section>
);

const AppsSection = () => {
    const apps = [
        { 
            // 💡 Action: Replace the string path ("./assets/icon.png") with the imported variable
            icon: sadhanaAppIcon, 
            description: "Discover inner tranquility with guided meditations, relaxing soundscapes, and personal mindfulness journeys.", 
            name: "SadhanaApp", 
                links: {
              appStore: "https://apps.apple.com/in/app/sadhana-jap-mala-meditation/id6751780381",
              googlePlay: "https://play.google.com/store/apps/details?id=com.sumitmaggie.sadhana&pcampaignid=web_share"
            }
        },
        { icon: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=100&h=100&fit=crop&q=80", name: "ConnectSphere", description: "A revolutionary social networking app bringing people closer through shared interests.", links: { appStore: true, googlePlay: true },comingSoon: true},
        { icon: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=100&h=100&fit=crop&q=80", name: "FinanceFlow", description: "Simplify your budgeting and expense tracking with our intuitive and powerful finance manager.", links: { appStore: true, googlePlay: true },comingSoon: true}
        //{ icon: "../assets/icon.png", description: "Discover inner tranquility with guided meditations, relaxing soundscapes, and personal mindfulness journeys.", name: "SadhanaApp", links: { appStore: true, googlePlay: false } },
        
    
    ];

    return (
        <section id="apps" className="py-20 bg-white/50">
            <div className="container mx-auto px-6"><h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Flagship Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {apps.map(app => (
                        <div key={app.name} className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
                            <img src={app.icon} alt={`${app.name} icon`} className="w-24 h-24 rounded-3xl mb-6 shadow-md"/>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{app.name}</h3>
                            <p className="text-gray-600 mb-6 flex-grow">{app.description}</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {app.links.appStore && (
                                <a
                                    href={app.links.appStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors"
                                >
                                    <AppleIcon className="w-5 h-5" />
                                    <span>App Store</span>
                                </a>
                                )}
                                {app.links.googlePlay && (
                                <a
                                    href={app.links.googlePlay}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                                >
                                    <PlayStoreIcon className="w-5 h-5" />
                                    <span>Google Play</span>
                                </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExpertiseSection = () => {
    const services = [
        { icon: <IphoneIcon className="w-12 h-12 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-orange-500" />, title: "iOS Development", description: "We build stunning, high-performance native iOS apps for iPhone and iPad using Swift and SwiftUI." },
        { icon: <AndroidIcon className="w-12 h-12 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-orange-500" />, title: "Android Development", description: "Crafting scalable and secure native Android applications with Kotlin for a seamless user experience." },
        { icon: <DesignIcon className="w-12 h-12 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-orange-500" />, title: "UI/UX Design", description: "Creating intuitive, beautiful, and engaging user interfaces that users love to interact with." }
    ];

    return (
        <section id="expertise" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Expertise in Action</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map(service => (
                        <div key={service.title} className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 text-center transition-transform transform hover:-translate-y-2">
                            <div className="flex justify-center mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TransformSection = () => (
    <section id="transform" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
            <HandshakeIcon className="w-16 h-16 mx-auto mb-4 text-white"/>
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your World?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                We're always seeking a new challenge. If you have a brilliant idea for an app that can change how people interact with a real-world product or service, we're ready to listen.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <a href="#ideahub" className="text-lg bg-gradient-to-r from-fuchsia-600 to-orange-500 hover:from-fuchsia-700 hover:to-orange-600 text-white font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                    Pitch Your Idea
                </a>
            </div>
        </div>
    </section>
);


const ResultsModal = ({ isOpen, onClose, concepts, isLoading }) => {
    if (!isOpen) return null;

    const ParsedContent = () => {
        if (!concepts || typeof concepts !== 'string') return <p>No concepts generated yet.</p>;
        const parts = concepts.split('**').filter(p => p.trim());
        const content = {};
        for (let i = 0; i < parts.length; i += 2) {
            const key = parts[i].replace(':', '').trim();
            const value = parts[i + 1] ? parts[i + 1].trim() : '';
            if (key && value) content[key] = value;
        }

        return (
            <div>
                {content['App Name'] && <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-orange-500 mb-4">{content['App Name']}</h3>}
                {content['Target Audience'] && <div className="mb-4"><h4 className="font-semibold text-lg text-gray-700">Target Audience</h4><p className="text-gray-600">{content['Target Audience']}</p></div>}
                {content['Key Features'] && <div><h4 className="font-semibold text-lg text-gray-700">Key Features</h4><ul className="list-disc list-inside text-gray-600 space-y-1">{content['Key Features'].split('- ').filter(item => item.trim()).map((feature, index) => <li key={index}>{feature.trim()}</li>)}</ul></div>}
            </div>
        );
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex justify-center items-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full transform transition-all duration-300 scale-95 animate-scale-in">
                <div className="flex justify-between items-center mb-4"><h2 className="text-2xl font-bold text-gray-800">✨ AI-Generated Concept</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-800 text-3xl">&times;</button>
                </div>
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center h-48">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fuchsia-600"></div>
                        <p className="mt-4 text-gray-600">Our AI is brainstorming...</p>
                    </div>
                ) : <ParsedContent />}
            </div>
        </div>
    );
};


const IdeaHubSection = () => {
    const [idea, setIdea] = useState('');
    const [concepts, setConcepts] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!idea.trim()) { setError('Please enter an idea first.'); return; }
        setError(''); setIsLoading(true); setIsModalOpen(true); setConcepts('');

        const apiKey = ""; // API key is handled by the environment
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        const systemPrompt = "You are an expert app development consultant. Based on the user's idea, generate a concise concept for a new mobile app. Provide an 'App Name', 'Target Audience', and three 'Key Features'. Format the response clearly with markdown, like this: **App Name:** [Name] **Target Audience:** [Audience] **Key Features:** - [Feature 1] - [Feature 2] - [Feature 3]";
        const userQuery = `Brainstorm an app concept for this idea: "${idea}"`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: userQuery }] }],
                    systemInstruction: { parts: [{ text: systemPrompt }] },
                }),
            });

            if (!response.ok) throw new Error(`API error: ${response.statusText}`);
            const result = await response.json();
            const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) setConcepts(text); else throw new Error("No content received from API.");
        } catch (err) {
            console.error(err);
            setConcepts("Sorry, we couldn't generate an idea right now. Please try again later.");
        } finally { setIsLoading(false); }
    };

    return (
        <section id="ideahub" className="py-20 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/30 to-orange-900/30"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <SparkleIcon className="w-12 h-12 mx-auto text-orange-400 mb-4" />
                <h2 className="text-4xl font-bold mb-4">Unleash Your Next Big Idea</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                    Have a spark of an idea? Describe it below and let our AI brainstorm a full app concept for you in seconds.
                </p>
                <div className="max-w-xl mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            value={idea}
                            onChange={(e) => setIdea(e.target.value)}
                            placeholder="e.g., An app that identifies plants from a photo"
                            className="w-full text-lg p-4 pr-48 rounded-full bg-gray-800/50 border-2 border-transparent focus:border-fuchsia-500 focus:ring-fuchsia-500 focus:outline-none transition-all duration-300 shadow-inner"
                        />
                        <button
                            onClick={handleGenerate}
                            disabled={isLoading}
                            className="absolute top-1/2 -translate-y-1/2 right-2 flex items-center space-x-2 text-md font-bold text-white bg-gradient-to-r from-fuchsia-600 to-orange-500 py-3 px-6 rounded-full hover:from-fuchsia-700 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 animate-pulse-slow"
                        >
                            <SparkleIcon className="w-5 h-5" />
                            <span>Generate</span>
                        </button>
                    </div>
                    {error && <p className="text-red-400 mt-2">{error}</p>}
                </div>
            </div>
            <ResultsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} concepts={concepts} isLoading={isLoading} />
        </section>
    );
};

const OurStorySection = () => (
    <section id="our-story" className="py-20 bg-white/50">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Journey of Creation</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
                At Sagittix, we are passionate about the entire product lifecycle, from the first spark of inspiration to the final, polished application. This is our process for bringing our own apps to life.
            </p>
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 text-center">
                <div className="flex flex-col items-center">
                    <SparkleIcon className="w-12 h-12 text-fuchsia-600 mb-4"/>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">1. Ideation</h3>
                    <p className="text-gray-600">We start with a real-world problem and brainstorm innovative app-based solutions that can solve it.</p>
                </div>
                <div className="flex flex-col items-center">
                    <DesignIcon className="w-12 h-12 text-orange-500 mb-4"/>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">2. Design & Refinement</h3>
                    <p className="text-gray-600">Our design team creates intuitive user experiences and interfaces that are both beautiful and functional.</p>
                </div>
                <div className="flex flex-col items-center">
                    <CodeIcon className="w-12 h-12 text-fuchsia-600 mb-4"/>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">3. Development & Launch</h3>
                    <p className="text-gray-600">We write clean, robust code to transform our designs into high-performance, market-ready applications.</p>
                </div>
            </div>
        </div>
    </section>
);

const ContactSection = () => {
    // State to hold form data and manage UI messages
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [messageSent, setMessageSent] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevents the form from submitting and refreshing the page
        
        const { name, email, message } = formData;

        // Basic validation
        if (!name.trim() || !email.trim() || !message.trim()) {
            setError('Please fill in all fields.');
            setMessageSent(false); // Reset message sent state
            return;
        }

        // Simulate a successful form submission
        setError('');
        setMessageSent(true);
        setFormData({ name: '', email: '', message: '' }); // Clear the form
        
    };

    return (
        <section id="contact" className="py-20 bg-white/50">
            <div className="container mx-auto px-6 max-w-2xl">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    Whether you have a product idea or a question about our apps, we'd love to hear from you.
                </p>
                <div className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                    {messageSent ? (
                        <div className="text-center p-8">
                            <h3 className="text-2xl font-bold text-fuchsia-600 mb-2">Message Sent!</h3>
                            <p className="text-gray-600">Thank you for reaching out. We will get back to you soon.</p>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleFormSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-colors" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-colors" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-colors"></textarea>
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <button type="submit" className="w-full text-lg bg-gradient-to-r from-fuchsia-600 to-orange-500 hover:from-fuchsia-700 hover:to-orange-600 text-white font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Sagittix Inc. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" aria-label="Twitter" className="hover:text-fuchsia-400 transition-colors"><TwitterIcon className="w-6 h-6" /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-fuchsia-400 transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
            </div>
        </div>
    </footer>
);


export default function App() {
    return (
        <>
            <style>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }

                @keyframes scale-in {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
                
                @keyframes pulse-slow {
                    50% { opacity: 0.85; transform: scale(0.98); }
                }
                .animate-pulse-slow { animation: pulse-slow 3s infinite cubic-bezier(0.4, 0, 0.6, 1); }
            `}</style>
            <div className="bg-gray-50 text-gray-800 antialiased relative">
                <Header />
                <main>
                    <HeroSection />
                    <AppsSection />
                    <ExpertiseSection />
                    <TransformSection />
                    <IdeaHubSection />
                    <OurStorySection />
                    <ContactSection />
                    <Footer />
                </main>
            </div>
        </>
    );
}
