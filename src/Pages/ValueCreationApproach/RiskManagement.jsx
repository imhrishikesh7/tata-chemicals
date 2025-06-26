import React, { useState, useEffect } from 'react';
import HeaderWRedBottom from '../../Components/HeaderWRedBottom';
import MitigationStrategies from '../../Components/MitigationStrategies';

const RiskManagemant = () => {
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
                            Risk Management
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] mx-auto rounded-full"></div>
                        <div className="w-32 h-1 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] mx-auto rounded-full"></div>
                        <div className='text-center mt-5'>
                            <p className='text-2xl text-[#432c87]'>Sustainable growth depends on the ability to manage both internal and external risks, including
                                market volatility, regulatory developments and operational disruptions. TCL has implemented a
                                defined risk management framework aimed at identifying material risks early, supporting timely
                                responses and reducing potential impacts on business performance.</p>
                            <p className='text-xl mt-5'>
                                This framework operates under the governance of the Risk Management Committee, which regularly reviews risk
                                exposures, evaluates mitigation measures and ensures integration with overall strategic planning.
                            </p>
                        </div>

                        {/* Smooth scroll navigation */}
                        <div className="flex justify-center mt-12 space-x-4">
                            <button
                                onClick={() => scrollToSection('framework')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Risk Management Framework
                            </button>
                            {/* <button
                                onClick={() => scrollToSection('message-section')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Mitigation Strategies
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                <div
                    id="framework"
                    data-animate
                    className={`transition-all duration-1000 delay-100 transform ${isVisible['framework'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                            {/* Risk Management Framework */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-[#1368b4] inline-block">
                                    Risk Management Framework
                                </h2>
                                <HeaderWRedBottom/>
                                <p className="text-gray-700 text-lg leading-relaxed mb-8 mt-10">
                                    In a volatile, uncertain, complex and ambiguous (VUCA) business environment,
                                    effective risk management is essential for the realisation of long-term organisational
                                    objectives. With the governance oversight of Risk Management Committee, we
                                    prioritise the structured identification, assessment and mitigation of risks
                                    that could potentially affect financial, operational, or strategic performance.
                                    <br />
                                    <br />
                                    Enterprise Risk Management (ERM) framework is integrated into the daily
                                    operations of business units. The timely visibility of both key and emerging risks
                                    is ensured by this integrated framework, which supports decision-making and
                                    resource allocation.
                                    <br />
                                    <br />
                                    We adhere to internationally recognised standards, such as the Committee of
                                    Sponsoring Organisations' (COSO) Enterprise Risk Management Framework
                                    and ISO 31000:2018. These standards establish a consistent and robust risk
                                    management strategy that is applicable to all business functions and geographies.

                                </p>
                            </div>

                            {/* Key Components Grid */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-[#1368b4] mb-8">
                                    Key components of our Risk Management Framework
                                </h3>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Environmental Scanning */}
                                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                        <h4 className="text-xl font-semibold text-[#1368b4] mb-4 border-b-2 border-[#ed1a3b] pb-2 inline-block">
                                            Environmental Scanning
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Risk management team monitors the external environment for geopolitical,
                                            economic, regulatory and environmental developments. Identified risks are validated
                                            by senior management and the Risk Management Committee (RMC), ensuring a
                                            proactive approach.
                                        </p>
                                    </div>

                                    {/* Integration Across Organisation */}
                                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                        <h4 className="text-xl font-semibold text-[#1368b4] mb-4 border-b-2 border-[#ed1a3b] pb-2 inline-block">
                                            Integration Across the Organisation
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Risk mitigation plans are developed and executed at functional levels and tracked regularly.
                                            Each entity and function is responsible for identifying, owning, and addressing risks relevant
                                            to its operations.
                                        </p>
                                    </div>

                                    {/* Benchmarking */}
                                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                        <h4 className="text-xl font-semibold text-[#1368b4] mb-4 border-b-2 border-[#ed1a3b] pb-2 inline-block">
                                            Benchmarking with Global Best Practices
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            We benchmark our risk identification and mitigation strategies against global
                                            standards. Expert consultations are sought to refine methodologies and strengthen
                                            the overall risk management framework.
                                        </p>
                                    </div>

                                    {/* Audit and Review */}
                                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                        <h4 className="text-xl font-semibold text-[#1368b4] mb-4 border-b-2 border-[#ed1a3b] pb-2 inline-block">
                                            Audit and Review Mechanisms
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Extensive internal audit process includes a thorough review of risk management
                                            practices, providing assurance on framework effectiveness and identifying
                                            areas for improvement.
                                        </p>
                                    </div>

                                    {/* Business Continuity Planning */}
                                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                        <h4 className="text-xl font-semibold text-[#1368b4] mb-4 border-b-2 border-[#ed1a3b] pb-2 inline-block">
                                            Comprehensive Business Continuity Planning (BCP)
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Certified under ISO 22301:2019, our Business Continuity Plans for TCL India
                                            operations and offices ensure organisational resilience against disruptions. These plans
                                            are reviewed periodically and aligned with operational realities.
                                        </p>
                                    </div>

                                    {/* Training */}
                                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                        <h4 className="text-xl font-semibold text-[#1368b4] mb-4 border-b-2 border-[#ed1a3b] pb-2 inline-block">
                                            Training and Capacity Building
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            A digital e-learning module has been developed for all management-grade
                                            employees, enhancing awareness and understanding of the ERM framework
                                            and enabling consistent application across the company.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Risk Mapping Section */}
                            <div id="message-section" className="mb-12">
                                <h3 className="text-2xl m-semi-bold text-[#1368b4] mb-8 border-b-2 border-[#ed1a3b] pb-2 inline-block">
                                    Risk Mapping
                                </h3>
                                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-tr-[50px]">
                                    <div className="bg-white p-6 rounded-tr-[40px] shadow-inner">
                                        <img src="ValueCreationApproach/RiskManagement/26-Page-IMG.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <MitigationStrategies/>
                            <img src="ValueCreationApproach\RiskManagement\India13.png" alt=""
                            className='mt-5' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiskManagemant;