import React, { useState, useEffect } from 'react';

const AboutTataChemicals = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});

    const data = [
        {
            title: 'Mission',
            img: 'CorporateOverview/AboutChemicals/06-icon-img-1.webp',
            desc: 'Serving Society through Science',
        },
        {
            title: 'Vision',
            img: 'CorporateOverview/AboutChemicals/06-icon-img-2.webp',
            desc: 'Be a leading sustainable chemistry solutions company',
        },
        {
            title: 'Leadership',
            img: 'CorporateOverview/AboutChemicals/06-icon-img-3.webp',
            desc: 'We have become the preferred choice for customers seeking sustainable chemistry solutions worldwide',
        },
        {
            title: 'Values',
            img: 'CorporateOverview/AboutChemicals/06-icon-img-4.webp',
            desc: '',
            img1: 'CorporateOverview/AboutChemicals/Values.webp'
        },
    ];

    const achievements = [
        '3rd largest Soda Ash producer globally (ex. China)',
        '5th largest Sodium Bicarbonate producer globally',
        'Leading Producer of salt in India and the UK',
        'Zero freshwater withdrawal and zero waste to landfill at Mithapur',
        'Pioneer in fermentation product technologies in India'
    ];

    const regions = [
        { title: 'Asia', value: '7,104 crore', employee: '3,471' },
        { title: 'America', value: '5,261 crore', employee: '612' },
        { title: 'Europe', value: '2,007 crore', employee: '377' },
        { title: 'Africa', value: '669 crore', employee: '329' }
    ];

    const highlights = [
        {
            title: 'Financial',
            value1: '₹ 14,887 crore',
            des1: 'Revenue',
            value2: '₹ 1,953 crore',
            des2: 'EBITDA',
            bgcolor: '#1368b4',
        },
        {
            title: 'Customer',
            value1: '86',
            des1: 'Customer Satisfaction Index (CSI)',
            value2: '90',
            des2: 'Net Promoter Score (NPS)',
            bgcolor: '#40b2a2',
        },
        {
            heading: 'Production Volume (MT)',
            title: 'Operations',
            value1: '36,76,780',
            des1: 'Soda Ash',
            value2: '16,83,320',
            des2: 'Salt',
            value3: '2,37,489',
            des3: 'Bicarbonate',
            bgcolor: '#a088ad',
        },
        {
            title: 'Social',
            value1: '72%',
            des1: 'Employee Engagement Score',
            value2: '34%',
            des2: 'Increase in Renewable Energy',
            value3: '₹ 22.54 crore',
            des3: 'CSR Spend',
            bgcolor: '#06aeef',
        }
    ];

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
                            About Tata Chemicals
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] mx-auto rounded-full"></div>

                        <div className="flex justify-center mt-12 space-x-4">
                            <button
                                onClick={() => scrollToSection('core-verticals')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Our Core Verticals
                            </button>
                            <button
                                onClick={() => scrollToSection('mission-vision')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Mission & Vision
                            </button>
                            <button
                                onClick={() => scrollToSection('global-presence')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Global Presence
                            </button>
                            <button
                                onClick={() => scrollToSection('highlights')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                FY 2025 Highlights
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 space-y-20 mt-10">

                  {/* Our Core Verticals */}
                <div
                    id="core-verticals"
                    data-animate
                    className={` scroll-mt-40 transition-all duration-1000 delay-200 transform ${isVisible['mission-vision'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div >
                        <h1 className='text-3xl md:text-4xl font-bold text-[#1368b4] text-center mb-12'>Our Core Verticals</h1>
                        <div className='flex md:flex-row items-stretch gap-4 flex-col w-full'>
                            <div className='md:w-1/2 bg-[#40b2a2]/5  p-4 rounded-3xl '>
                                <h3 className='text-[#ed1a3b] text-2xl font-bold'>Basic Chemistry Products</h3>
                                <div className='flex my-6 flex-col gap-3'>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <div className='bg-[#40b2a2] flex items-center rounded-full py-1 px-3'>
                                            <p className='text-white text-xl font-bold'>1</p>
                                        </div>
                                        <p className='text-xl'>
                                        Soda Ash (Sodium Carbonate)
                                        </p>
                                    </div>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <div className='bg-[#40b2a2] flex items-center rounded-full py-1 px-3'>
                                            <p className='text-white text-xl font-bold'>2</p>
                                        </div>
                                        <p className='text-xl'>
                                        Sodium Bicarbonate
                                        </p>
                                    </div>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <div className='bg-[#40b2a2] flex items-center rounded-full py-1 px-3'>
                                            <p className='text-white text-xl font-bold'>3</p>
                                        </div>
                                        <p className='text-xl'>
                                        Salt
                                        </p>
                                    </div>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <div className='bg-[#40b2a2] flex items-center rounded-full py-1 px-3'>
                                            <p className='text-white text-xl font-bold'>4</p>
                                        </div>
                                        <p className='text-xl'>
                                        Other inorganic products (Bromine,
                                            Caustic Soda, Cement)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-1/2 bg-[#40b2a2]/5 p-4 rounded-3xl'>
                                <h3 className='text-[#ed1a3b] text-2xl font-bold'>Specialty Products</h3>
                                <div className='flex my-6 flex-col gap-3'>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <div className='bg-[#40b2a2] flex items-center rounded-full py-1 px-3'>
                                            <p className='text-white text-xl font-bold'>1</p>
                                        </div>
                                        <p className='text-xl'>
                                        Agrochemicals and Seeds
                                        </p>
                                    </div>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <div className='bg-[#40b2a2] flex items-center rounded-full py-1 px-3'>
                                            <p className='text-white text-xl font-bold'>2</p>
                                        </div>
                                        <p className='text-xl'>
                                        Specialty Silica
                                        </p>
                                    </div>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <div className='bg-[#40b2a2] flex items-center rounded-full py-1 px-3'>
                                            <p className='text-white text-xl font-bold'>3</p>
                                        </div>
                                        <p className='text-xl'>
                                        Prebiotics (FOS)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>              
                {/* Mission, Vision, Leadership, Values */}
                <div
                    id="mission-vision"
                    data-animate
                    className={` scroll-mt-40 transition-all duration-1000 delay-200 transform ${isVisible['mission-vision'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`transform transition-all duration-700 delay-${(index + 1) * 100} ${isVisible['mission-vision'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                            >
                                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center h-full flex flex-col hover:transform hover:scale-105 transition-all duration-300">
                                    <div className="relative mb-6">
                                        <div className="absolute -inset-2 bg-gradient-to-r from-[#40b2a2]/20 to-[#40b2a2]/10 rounded-full blur-lg"></div>
                                        <div className="relative w-20 h-20 mx-auto bg-white rounded-full p-3 shadow-lg">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#40b2a2] mb-4">{item.title}</h3>
                                    {item.desc && (
                                        <p className="text-gray-700 leading-relaxed flex-1">{item.desc}</p>
                                    )}
                                    
                                    {/* Only show img1 for Values card */}
                                    {item.title === 'Values' && item.img1 && (
                                        <div className='relative w-full h-25 mx-auto my-4'>
                                            <img
                                                src={item.img1}
                                                alt="Values"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    )}
                                    
                                    <div className="w-10 h-1 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] mx-auto rounded-full mt-4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div
                    id="achievements"
                    data-animate
                    className={`transition-all duration-1000 delay-100 transform ${isVisible['achievements'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1368b4] text-center mb-12">
                            Our Global Leadership
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className={`transform transition-all duration-700 delay-${(index + 1) * 150} ${isVisible['achievements'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                        }`}
                                >
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 text-center h-full flex items-center justify-center hover:shadow-lg transition-all duration-300">
                                        <p className="text-gray-700 font-medium leading-relaxed">
                                            {achievement}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Global Presence */}
                <div
                    id="global-presence"
                    data-animate
                    className={`scroll-mt-30 transition-all duration-1000 delay-400 transform ${isVisible['global-presence'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1368b4] text-center mb-12">
                            Our Global Presence
                        </h2>

                        {/* Regions */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            {regions.map((region, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200/50"
                                >
                                    <h3 className="text-2xl font-bold text-[#ed1a3b] mb-4 pb-2 border-b-2 border-[#1368b4]">
                                        {region.title}
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-2xl font-bold text-[#432c87] border-b border-gray-400 inline-block">
                                                ₹ {region.value}
                                            </div>
                                            <p className="text-gray-600 font-medium">Revenue</p>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-[#432c87] border-b border-gray-400 inline-block">
                                                {region.employee}
                                            </div>
                                            <p className="text-gray-600 font-medium">Employees</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Stats */}
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#432c87] mb-2">3</div>
                                <p className="text-xl text-gray-600 font-medium">R&D Centers</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#432c87] mb-2">15</div>
                                <p className="text-xl text-gray-600 font-medium">Plants</p>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#432c87] mb-2">Mumbai, India</div>
                                <p className="text-xl text-gray-600 font-medium">Head Office</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FY 2025 Highlights */}
                <div
                    id="highlights"
                    data-animate
                    className={`scroll-mt-30 transition-all duration-1000 delay-500 transform ${isVisible['highlights'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1368b4] text-center mb-12">
                            Highlights of FY 2025
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className={`transform transition-all duration-700 delay-${(index + 1) * 100} ${isVisible['highlights'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                        }`}
                                >
                                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl overflow-hidden shadow-lg border border-slate-200/50 h-full">
                                        {/* Header */}
                                        <div
                                            className="text-white text-2xl font-bold px-6 py-4 rounded-tr-2xl"
                                            style={{ backgroundColor: highlight.bgcolor }}
                                        >
                                            {highlight.title}
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 space-y-6">
                                            {highlight.heading && (
                                                <h4 className="text-gray-600 text-lg font-bold mb-4">
                                                    {highlight.heading}
                                                </h4>
                                            )}

                                            {['value1', 'value2', 'value3'].map((valKey, i) =>
                                                highlight[valKey] ? (
                                                    <div key={i}>
                                                        <div
                                                            className="text-3xl font-bold mb-2"
                                                            style={{ color: highlight.bgcolor }}
                                                        >
                                                            {highlight[valKey]}
                                                        </div>
                                                        <div className="w-4/5 h-0.5 bg-gray-400 mb-2"></div>
                                                        <p className="text-gray-600 font-medium">
                                                            {highlight[`des${i + 1}`]}
                                                        </p>
                                                    </div>
                                                ) : null
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTataChemicals;