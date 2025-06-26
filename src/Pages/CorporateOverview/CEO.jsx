import React, { useState, useEffect } from 'react';
import Title from '../../Components/Title';

const CEO = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: true
                    }));
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Smooth scroll utility function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 scroll-smooth">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                />
                <div className="relative container mx-auto px-6 py-20">
                    <div
                        id="hero-title"
                        data-animate
                        className={`transition-all duration-1000 transform ${isVisible['hero-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center bg-gradient-to-r from-[#1368b4] to-[#0f4c75] bg-clip-text text-transparent mb-6">
                            CEO's Message
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] mx-auto rounded-full"></div>

                        {/* Smooth scroll navigation */}
                        <div className="flex justify-center mt-12 space-x-4">
                            <button
                                onClick={() => scrollToSection('ceo-quote')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Vision Statement
                            </button>
                            <button
                                onClick={() => scrollToSection('message-section')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Full Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">

                {/* CEO Quote Section with Image */}
                <div className='container border bg-slate-800 rounded-3xl py-6 mx-auto px-8 relative z-10'>
                <div className="max-w-7xl mx-auto">
                    
                    {/* Header */}
                    <div className="mb-16">
                        <Title text="CEO's Message" color='white' />
                    </div> 

                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        
                        {/* CEO Image Section */}
                        <div className="lg:col-span-4">
                            <div 
                             
                                className="relative group cursor-pointer"
                              
                            >
                                {/* Image container */}
                                <div className="relative overflow-hidden rounded-3xl bg-slate-800">
                                    <div className="aspect-[3/4] rounded-3xl relative">
                                        <img 
                                            src="/home/ceo.webp" 
                                            className={`w-full h-full rounded-3xl object-cover transition-all duration-500 `}
                                            alt="CEO R. Mukundan" 
                                        />
                                        
                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t  from-slate-900/40 to-transparent"></div>
                                    </div>
                                </div>
                                
                                {/* CEO Info */}
                                <div className="mt-6 pl-4 border-l-2 border-slate-600">
                                    <h3 className="text-white text-xl font-bold mb-1">R. Mukundan</h3>
                                    <p className="text-slate-300 text-sm font-medium uppercase tracking-wide">
                                        Managing Director & CEO
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Message Content */}
                        <div  className="lg:col-span-8">
                            <div className="space-y-8">
                                
                                {/* Quote */}
                                <div className="relative">
                                    {/* Opening Quote Icon */}
                                    <div className="absolute -top-6 -left-4 w-12 h-12 opacity-80">
                                        <img 
                                            src="/home/qt.webp" 
                                            alt="Quote start" 
                                            className="w-full h-full text-white"
                                        />
                                    </div>

                                    <blockquote className="space-y-6 p-8 ">
                                        <p 
                                           
                                            className="text-white text-xl lg:text-2xl leading-relaxed font-light"
                                        >
                                            Safety remains our first priority and our efforts are to create a zero harm work place.
                                        </p>
                                        <p 
                                            
                                            className="text-white text-xl lg:text-2xl leading-relaxed font-light"
                                        >
                                            Our focus on operational efficiencies and newly commissioned capacities is expected to contribute towards improved performance as well as delivering safe and sustainable growth.
                                        </p>
                                    </blockquote>

                                    {/* Closing Quote Icon */}
                                    <div className="absolute -bottom-2 -right-4 w-12 h-12 opacity-80">
                                        <img 
                                            src="/home/qt.webp" 
                                            alt="Quote end" 
                                            className="w-full h-full text-white rotate-180"
                                        />
                                    </div>
                                </div>

                                {/* CTA Section */}
                                <div 
                                    
                                    className="flex items-center justify-between pt-12 border-t border-slate-700"
                                >
                                  
                                    
                                    <div className="group">
                                        <button className="  px-8 py-4 font-semibold  transition-all duration-300 flex items-center space-x-3 group">
                                            
                                            {/* <svg 
                                                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg> */}
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
                {/* Message Section */}
                <div
                    id="message-section"
                    data-animate
                    className={`scroll-mt-30 transition-all duration-1000 delay-100 transform ${isVisible['message-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1368b4] mb-8">
                            Dear Shareholders,
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                            <p className="text-xl font-medium text-gray-800 mb-8">
                                I hope this message finds you and your families well. Thank you for your unwavering trust and support for Tata Chemicals.
                                <br />
                                <br />
                                Looking to the year passed by, Global Soda
                                Ash demand grew by 8.3% year-on -year
                                (5.3 mn MT), driven by an 18% increase
                                in China and a 4.5% rise in India. Demand
                                in the rest of the world declined by 2.3%.
                                However, capacity increased by 8.9% (6.5 mn
                                MT), leading to oversupplied markets with
                                an erosion of margins caused by a decline
                                in prices by over 25% from the previous
                                year, weighing heavily and impacting the
                                results of the company. Consequently,
                                our performance was substantially lower
                                than FY2024. Tata Chemicals saw Soda
                                Ash volume growth of 6% (+205 KT). Net
                                sales realisation across regions declined,
                                impacting contribution at consolidated level
                                (INR 5,969 crore CY Vs INR 6,867 crore PY).
                                Fixed cost was maintained at the last year’s
                                level (INR 4,016 crore CY Vs INR 4,020 crore
                                PY), resulting in a lower EBITDA (INR 1,953
                                crore CY Vs INR 2,847 crore PY).
                                <br />
                                <br />
                                Our operations were impacted by fluctuating
                                energy and feedstock costs, shipping costs and
                                logistical hurdles. We seamlessly met customer
                                needs through teamwork, efficient operations
                                and a resilient supply chain. Tata Chemicals
                                is focused on driving operational excellence
                                to improve its resilience aided by synergies
                                from our multi-geography presence. During
                                the year, UK soda ash Lostock plant ceased
                                operations due to lower product prices and
                                high gas costs resulting in sustained negative
                                margins. We will now pivot UK towards higher
                                value added businesses of food and pharma
                                grade salt and bicarbonates.
                                <br />
                                <br />
                                Sustainability is a fundamental driver of
                                industrial transformation and our vision
                                is aligned to Project Aalingana, Tata
                                Group’s flagship endeavour for a greener
                                sustainable future. Soda ash and bicarbonate
                                are increasingly relevant for sustainable
                                applications such as solar glass, EV batteries,
                                biodegradable packaging and industrial
                                flue gas treatment. These materials play a
                                foundational role in enabling low emission
                                technologies and energy transition.
                                The integration of artificial intelligence (AI)
                                and machine learning (ML) technologies
                                is revolutionising the chemical industry,
                                optimising processes, driving innovation in
                                new product development and enhancing
                                competitiveness in the digital age. SAP HANA
                                was successfully implemented during the
                                year. We have adopted the TCS Datom Data
                                Framework and Zero Trust security architecture
                                to protect our digital infrastructure against
                                cyber security threats.
                                <br />
                                <br />
                                The outlook for the company’s portfolio is
                                expected to remain stable in FY 2026. Global
                                demand for soda ash is expected to remain
                                flat with India forecasted to grow by 5.8%.
                                Bicarb, Salt and specialty portfolio which
                                serve the pharma, food and feed segments
                                will continue to show healthy growth rates.
                                Safety remains our first priority and our
                                efforts are to create a zero harm work place.
                                Our focus on operational efficiencies and
                                newly commissioned capacities is expected
                                to contribute towards improved performance
                                as well as delivering safe and sustainable
                                growth.
                                <br />
                                <br />
                                On behalf of Tata Chemicals, I thank you all
                                for your continued support in our ongoing
                                journey of transformation to deliver
                                chemistry of sustainable growth.
                            </p>
                            <div className="border-t-2 pt-4 pl-8 flex flex-col justify-end items-end">
                                <p className='text-2xl text-[#1368b4] m-bold'>
                                    R. Mukundan
                                </p>
                                <p className="text-lg font-semibold text-gray-700">
                                Managing Director & CEO
                                </p>
                                <p className="text-base text-gray-600">
                                    Tata Chemicals Limited
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CEO;