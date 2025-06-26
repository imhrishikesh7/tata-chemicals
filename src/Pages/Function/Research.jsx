import React, { useState, useEffect } from 'react';
import HeadingWRedCorner from '../../Components/HeadingWRedCorner';
import { motion } from 'framer-motion';

const Research = () => {
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
                        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-[#1368b4] to-[#0f4c75] bg-clip-text text-transparent mb-6">
                            Research and Development
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] mx-auto rounded-full"></div>
                        <div className='text-center mt-5'>
                            <p className='text-2xl text-[#432c87]'>R&D focus on developing
                                green sustainable solutions
                                through advanced green
                                chemistry principles and
                                cutting-edge research. In the
                                past year, our R&D team has
                                made strides in developing
                                specialty products, bio-based
                                products and advanced
                                agrochemicals, contributing
                                to both business growth and
                                achieving sustainability goals.
                                Tata Chemicals operates three
                                Innovation Centres, located
                                in Pune and Bengaluru. These
                                centres conduct research
                                and development activities
                                focused on specialty products,
                                bio-based products and
                                agricultural biotechnology.</p>
                        </div>

                        {/* Smooth scroll navigation */}
                        <div className="flex justify-center mt-12 space-x-4">
                            <button
                                onClick={() => scrollToSection('key')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] m-semi-bold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Key Developments
                            </button>
                            <button
                                onClick={() => scrollToSection('products')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] m-semi-bold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Innovative Products, Harnessing Green Chemistry
                            </button>
                            <button
                                onClick={() => scrollToSection('way')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] m-semi-bold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Way Forward
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                <div
                    data-animate
                    className={`transition-all duration-1000 delay-100 transform ${isVisible[''] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div>
                            <div className='bg-[#dbe9fe] p-3 rounded-tr-[60px]'>
                                <img src="Function/Research/38.webp" alt=""
                                    className='rounded-tr-[50px]' />
                            </div>
                            <div id="key" className="bg-gray-50 p-6 scroll-mt-30">
                                {/* Header */}
                                <div className=" border-l-4 border-[#ed1a3b] pl-1">
                                    <div className="bg-[#1368b4] text-white px-4 py-2 rounded-tr-[15px] inline-block">
                                        <h1 className="text-xl m-semi-bold">Key Developments</h1>
                                    </div>
                                </div>

                                {/* Grid Container */}
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                                    {/* Nutrition Solutions */}
                                    <div className="bg-[#f6f6ec] rounded-tr-[40px] p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="w-15 h-15 flex items-center justify-center mr-4">
                                                <img src="Function/Research/Icon.webp" alt="" />
                                            </div>
                                        </div>

                                        <div className="border-l-4 border-red-500 pl-4 mb-4">
                                            <h2 className="text-xl m-semi-bold text-[#1368b4] mb-2">Nutrition Solutions</h2>
                                        </div>

                                        <div className="text-[#1368b4] mb-3">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>

                                        <p className="text-gray-600 text-xl">
                                            Developed a process to produce fructo-oligosaccharides with longer chain length from sugar
                                        </p>
                                    </div>

                                    {/* Bio-Based Surfactants */}
                                    <div className="bg-[#f6f6ec] rounded-tr-[40px] p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="w-15 h-15 flex items-center justify-center mr-4">
                                                <img src="Function/Research/Icon2.webp" alt="" />
                                            </div>
                                        </div>

                                        <div className="border-l-4 border-red-500 pl-4 mb-4">
                                            <h2 className="text-xl m-semi-bold text-[#1368b4] mb-2">Bio-Based Surfactants</h2>
                                        </div>

                                        <div className="text-[#1368b4] mb-3">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>

                                        <p className="text-gray-600 text-xl">
                                            Achieved zero waste, solvent-free process with enhanced solubility and biodegradability
                                        </p>
                                    </div>

                                    {/* Highly-Dispersible Silica */}
                                    <div className="bg-[#f6f6ec] rounded-tr-[40px] p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="w-15 h-15 flex items-center justify-center mr-4">
                                                <img src="Function/Research/Icon3.webp" alt="" />
                                            </div>
                                        </div>

                                        <div className="border-l-4 border-red-500 pl-4 mb-4">
                                            <h2 className="text-xl m-semi-bold text-[#1368b4] mb-2">Highly-Dispersible Silica (HDS)</h2>
                                        </div>

                                        <div className="text-[#1368b4] mb-3">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>

                                        <p className="text-gray-600 text-xl">
                                            Developed high yield green highly dispersible silica (HDS) for tyres
                                        </p>
                                    </div>

                                    {/* Agrochemical Solutions */}
                                    <div className="bg-[#f6f6ec] rounded-tr-[40px] p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="w-13 h-13 flex items-center justify-center mr-4">
                                                <img src="Function/Research/Icon4.webp" alt="" />
                                            </div>
                                        </div>

                                        <div className="border-l-4 border-red-500 pl-4 mb-4 mt-7">
                                            <h2 className="text-xl m-semi-bold text-[#1368b4] mb-2">Agrochemical Solutions</h2>
                                        </div>

                                        <div className="text-[#1368b4] mb-3">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>

                                        <p className="text-gray-600 text-xl">
                                            Enhanced bio-efficacy with oil dispersible formulation
                                        </p>
                                    </div>

                                    {/* Digital Integration - Spans 2 columns */}
                                    <div className="bg-[#f6f6ec] rounded-tr-[40px] p-6 md:col-span-2">
                                        <div className="flex items-center mb-4">
                                            <div className="w-15 h-15 flex items-center justify-center mr-4">
                                                <img src="Function/Research/Icon5.webp" alt="" />
                                            </div>
                                        </div>

                                        <div className="border-l-4 border-red-500 pl-4 mb-4">
                                            <h2 className="text-xl m-semi-bold text-[#1368b4] mb-2">Digital Integration</h2>
                                        </div>

                                        <div className="text-[#1368b4] mb-3">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>

                                        <p className="text-gray-600 text-xl">
                                            Improved success rate of identifying hybrids with superior traits, making the selection process faster, more efficient and more accurate with machine learning system
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div id='products' className='mt-10 scroll-mt-35'>
                            <h1 className="text-3xl m-semi-bold text-[#1368b4] text-center">
                                Innovative Products, Harnessing Green Chemistry
                            </h1>
                        </div>
                        <div className='mt-5'>
                            <HeadingWRedCorner title='Nutrition Solutions' />
                            <p className='text-xl'>
                                Formulated an efficient synbiotic
                                (combination of probiotics and prebiotics)
                                for aqua feed applications. The formulation
                                uses an indigenous probiotic strain
                                paired with Tata Chemicals’ Fructooligosaccharides (FOS) and has been
                                successfully tested in shrimp farming. Trials
                                showed benefits such as improved feed
                                conversion ratio, better weight gain and overall healthier shrimps. Large-scale trials
                                are planned to further evaluation.
                            </p>
                        </div>
                        <div className='mt-5'>
                            <HeadingWRedCorner title='Specialty Materials' />
                            <p className='text-xl'>
                                We have made advancements in scaling
                                rice husk-derived Highly Dispersible Silica
                                (HDS), improving yields, performance
                                specifications and planning further
                                commercial-scale trials
                            </p>
                        </div>
                        <motion.div className="bg-[#003f84] text-white rounded-br-[50px] p-4 sm:p-6 md:p-4 w-full mt-10 mb-15"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            >
                            <div className="bg-gradient-to-r from-[#1368b4] to-transparent p-4 mb-5">
                                <div className="bg-[#ed1a3b] text-white text-sm font-semibold inline-block px-3 py-1 rounded-br-2xl mb-2">
                                    Case Study
                                </div>
                                <h3 className="font-semibold text-2xl sm:text-3xl">Bio-Based Rubber
                                    Coupling Agent</h3>
                            </div>

                            <div className="bg-white text-black rounded-br-[40px] mt-0 flex flex-col md:flex-row divide-x-[1px] divide-gray-300">
                                {/* Left: Paragraph */}
                                <div className="w-full md:w-1/2 p-6">
                                    <h1 className='text-3xl text-[#0057a0] m-semi-bold mb-5'>
                                        Cleaner Alternatives for Tyre Manufacturing
                                    </h1>
                                    <p className='text-[#0057a0] text-xl font-medium leading-7'>
                                        The ability to offer multimodal logistics is
                                        a major differentiator. This year presented
                                        both challenges and opportunities.
                                        We acted quickly by strengthening
                                        warehousing and delivery mechanisms,
                                        keeping inventory closer to core
                                        markets to enable faster distribution.
                                        We expanded loose-fill delivery options,
                                        in line with sustainability goals to
                                        reduce packaging waste.
                                    </p>
                                </div>

                                {/* Middle: Challenges */}
                                <div className="w-full md:w-1/4 p-6 space-y-4">
                                    <h2 className="text-[#ed1a3b] text-2xl font-bold mb-2">Benefits</h2>
                                    <ul className="space-y-4 text-[#4d4d4f] text-xl">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Managing increased supply
                                            quantities, while remaining
                                            cost efficient and ensuring
                                            timely deliveries.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Making packaging more
                                            sustainable by reducing reliance
                                            on traditional materials.
                                        </li>
                                    </ul>
                                </div>

                                {/* Right: Actions Taken */}
                                <div className="w-full md:w-1/4 p-6 space-y-4">
                                    <h2 className="text-[#ed1a3b] text-2xl font-bold mb-2">Impact</h2>
                                    <ul className="space-y-4 text-[#4d4d4f] text-xl">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Shifted more shipments to
                                            rail to reduce costs.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Set up warehouses closer to key
                                            markets to speed up shipping.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Bulk shipments
                                            were increased by 57%.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                        <div className='mt-5'>
                            <HeadingWRedCorner title='Agrochemical Solutions' />
                            <p className='text-xl'>
                                We pioneered a platform technology
                                for water-soluble fertilisers tailored to
                                specific crops and growth stages, marketed
                                under the AQUAFERT brand. During
                                the year under review, we introduced
                                specialised products such as AQUAFERT®
                                Foliar Pulso, AQUAFERT® Foliar Fruits,
                                AQUAFERT® Fertigation Pomegranate
                                and AQUAFERT® Fertigation Banana.
                                These formulations enable targeted
                                nutrient delivery either via foliar spray
                                or fertigation, enhancing nutrient use
                                efficiency and crop performance in an
                                environmentally friendly manner.
                            </p>
                        </div>
                        <div id='way' className='mt-1 scroll-mt-35'>
                            <h1 className="text-3xl m-semi-bold text-[#1368b4] text-center">
                                Way Forward
                            </h1>
                            <div className="w-full p-6 space-y-4">
                                <ul className="space-y-4 text-[#4d4d4f] text-xl">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                        Preparing for scale-up of enzymebased fructo-oligosaccharides (FOS)
                                        and other bio-based solutions,
                                        with a focus on delivering highperformance products that also
                                        adhere to sustainability standards.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                        Advancing solvent-free, zero-waste
                                        and embracing lower carbon
                                        footprint technologies to reduce
                                        environmental load across operations
                                        and product lines.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                        Leveraging increasing farmer adoption
                                        of bio-based agro-inputs to develop
                                        next-generation products that
                                        improve yield and crop quality while
                                        minimising environmental impact.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className='text-xl'>Scaled production of bio-based surfactants,
                            which generate zero waste and offer
                            improved water solubility, suitable for
                            home-care applications.
                            Optimised phase transfer catalyst and
                            solvent free process for organo-silane
                            production, ensuring minimal waste.
                        </p>
                        <motion.div
                            className="bg-[#003f84] text-white rounded-br-[50px] p-4 sm:p-6 md:p-4 w-full mt-10 mb-15"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="bg-gradient-to-r from-[#1368b4] to-transparent p-4 mb-5">
                                <div className="bg-[#ed1a3b] text-white text-sm font-semibold inline-block px-3 py-1 rounded-br-2xl mb-2">
                                    Case Study
                                </div>
                                <h3 className="font-semibold text-2xl sm:text-3xl">Broad-Spectrum
                                    Weed Control </h3>
                            </div>

                            <div className="bg-white text-black rounded-br-[40px] mt-0 flex flex-col md:flex-row divide-x-[1px] divide-gray-300">
                                {/* Left: Paragraph */}
                                <div className="w-full md:w-1/2 p-6">
                                    <h1 className='text-3xl text-[#0057a0] m-semi-bold mb-5'>
                                        Diclosulam + Pendimethalin (Mark Plus)
                                    </h1>
                                    <p className='text-[#0057a0] text-xl font-medium leading-7'>
                                        Rallis developed a suspo-emulsion
                                        formulation combining Diclosulam
                                        and Pendimethalin to target a broad
                                        range of weeds in soybean and
                                        groundnut crops. The formulation
                                        acts on both the root and shoot,
                                        improving efficacy to control weeds.
                                    </p>
                                </div>

                                {/* Middle: Challenges */}
                                <div className="w-full md:w-1/4 p-6 space-y-4">
                                    <h2 className="text-[#ed1a3b] text-2xl font-bold mb-2">Benefits</h2>
                                    <ul className="space-y-4 text-[#4d4d4f] text-xl">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Controls a wide range of
                                            grasses and broadleaf weeds.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Delivers long-lasting
                                            residual activity during early
                                            crop growth stages.
                                        </li>
                                    </ul>
                                </div>

                                {/* Right: Actions Taken */}
                                <div className="w-full md:w-1/4 p-6 space-y-4">
                                    <h2 className="text-[#ed1a3b] text-2xl font-bold mb-2">Impact</h2>
                                    <ul className="space-y-4 text-[#4d4d4f] text-xl">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Dual-action formulation reduces
                                            competition for nutrients,
                                            water and sunlight.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Maintains high
                                            soil and crop safety
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Achieved over 80% Weed
                                            Control Efficiency (WCE),
                                            outperforming existing
                                            herbicide combinations.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;