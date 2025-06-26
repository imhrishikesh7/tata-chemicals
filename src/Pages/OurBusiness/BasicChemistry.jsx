import React, { useState, useEffect } from 'react';
import HeadingWRedCorner from '../../Components/HeadingWRedCorner';

const BasicChemistry = () => {
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

    const columns = [
        [
            `Market leadership in India for Sodium
            Bicarbonate (#1) and Soda Ash (#3)`,
            `Strong brand recognition and longstanding customer relationships`,
            "High product quality and performance",
            `Innovation Centre at Pune,
            enabling product development and
            customer collaboration`
        ],
        [
            `Strong culture of safety
            to target zero harm`,
            `Integrated energy and resource management, ensuring cost efficiency`,
            `Deep commitment to sustainability and ESG principles`
        ],
        [
            `Robust and flexible supply chain, leveraging multimodal logistics`,
            `Strategic global presence, ensuring
            competitive pricing and availability`,
            `Stringent safety standards, ensuring
            Compliance and enhancing
            Process Efficiency`
        ]
    ];

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
                            Basic Chemistry Business
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] mx-auto rounded-full"></div>
                        <div className='text-center mt-5'>
                            <p className='text-2xl text-[#432c87]'>Tata Chemicals’ Basic Chemistry Business focuses on the production of essential inorganic
                                chemicals such as soda ash, sodium bicarbonate, and salt, which are used across glass,
                                detergents, food, and industrial sectors.</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-12 space-x-4">
                        <button
                            onClick={() => scrollToSection('value')}
                            className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                        >
                            Value Proposition
                        </button>
                        <button
                            onClick={() => scrollToSection('india-ops')}
                            className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                        >
                            India
                        </button>
                        <button
                            onClick={() => scrollToSection('case-study')}
                            className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                        >
                            Case Study
                        </button>
                        <button
                            onClick={() => scrollToSection('us-ops')}
                            className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                        >
                            US
                        </button>
                        <button
                            onClick={() => scrollToSection('uk-ops')}
                            className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                        >
                            UK
                        </button>
                        <button
                            onClick={() => scrollToSection('africa-ops')}
                            className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                        >
                            Kenya
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                {/* Value Proposition Section */}
                <div
                    id="value"
                    data-animate
                    className={`transition-all duration-1000 delay-100 transform ${isVisible['value'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <h1 className="text-3xl font-semibold text-[#1368b4] text-center mb-8">Value Proposition</h1>

                        <div className="bg-[#f4f9f8] p-6 md:p-10 rounded-2xl">
                            <div className="flex flex-col border border-[#dcdcdc] rounded-2xl overflow-hidden">
                                {/* Text Columns */}
                                <div className="flex flex-col md:flex-row">
                                    {columns.map((group, idx) => (
                                        <div key={idx} className="w-full md:w-1/2 p-4 space-y-6">
                                            {group.map((text, i) => (
                                                <div key={i} className="flex items-start space-x-2">
                                                    <div className="w-6 h-1 bg-[#1368b4] mt-2 shrink-0"></div>
                                                    <p className="text-[#4d4d4f] text-sm md:text-xl">{text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>

                                {/* Image Column - Now at bottom and full width */}
                                <div className="w-full p-4 flex justify-center items-center">
                                    <div className="w-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center p-2">
                                        <img src="OurBusiness/BasicChemistry/Image10.webp" alt="" className="w-full h-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* India Operations Section */}
                <div
                    id="india-ops"
                    data-animate
                    className={`transition-all duration-1000 delay-200 transform ${isVisible['india-ops'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className="mb-8">
                            <div className="w-full flex items-center justify-center mb-6">
                                <img src="OurBusiness/BasicChemistry/India11.webp" alt="" />
                            </div>
                        </div>
                        <HeadingWRedCorner title='India' />
                        <div className="flex flex-col md:flex-row text-[#4d4d4f] gap-10">
                            {/* Column 1 */}
                            <div className="w-full md:w-1/3">
                                <p className="text-xl mt-5">
                                    Even with an oversupplied domestic soda
                                    ash market, Tata Chemicals remained
                                    competitive in India during the 2024–25
                                    fiscal year. The headwinds were addressed
                                    by strengthening customer partnerships
                                    and an expanded supply chain footprint.
                                    Sodium bicarbonate was a key factor in
                                    propelling our growth in the initial years,
                                    particularly in industries with evolving
                                    sustainability requirements. The salt
                                    business contributed to portfolio stability by
                                    addressing sustained demand across salt.
                                </p>

                                <h1 className="font-semibold text-2xl text-[#1368b4] mt-5">Trends</h1>
                                <ul className="list-disc list-inside text-xl text-[#4d4d4f] marker:text-[#40b2a2] space-y-3">
                                    <li>Soda ash market faced oversupply with
                                        stable overall demand in other materials</li>
                                    <li>Sodium bicarbonate
                                        demand grew driven by
                                        sustainability-focused segments</li>
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div className="w-full md:w-1/3 flex flex-col space-y-4">
                                <h1 className="font-semibold text-2xl text-[#1368b4] mt-5">Operational Highlights</h1>

                                <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                                <p className="text-xl">Improved multimodal logistics by
                                    adding container rake motions,
                                    resulting in faster delivery, increased
                                    visibility and market share.</p>

                                <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                                <p className="text-xl">Process twin implemented across plants,
                                    improving quality and efficiency.</p>

                                <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                                <p className="text-xl">Improved customer interactions
                                    by implementing proactive
                                    engagement strategies.</p>

                                <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                                <p className="text-xl">Extended Saarthi platform to include
                                    in-plant movement and inbound logistics
                                    for key raw materials.</p>
                            </div>

                            {/* Column 3 */}
                            <div className="w-full md:w-1/3 bg-[#e7f6fd] rounded-md shadow-sm px-4 py-5 space-y-6">
                                <h1 className="font-semibold text-2xl text-[#1368b4]">Roadmap Ahead</h1>

                                {[
                                    "Bring sharper focus on safety management, risk control and sustainability in operations.",
                                    "Digitise and automate projects to increase operational efficiency and yield from products.",
                                    "Expand sodium bicarbonate market leadership by targeting new customer segments and geographies.",
                                    "Streamline logistics strategies to reduce costs and improve customer service.",
                                    "Exercise IIoT, AI and data analytics to enhance production efficiency.",
                                    "Work towards carbon neutrality by adopting renewable energy sources such as solar, wind and biomass fuels."
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-4 h-[2px] bg-[#1368b4] mt-2 flex-shrink-0"></div>
                                        <p className="text-[#4d4d4f] text-xl">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study Section */}
                <div
                    id="case-study"
                    data-animate
                    className={`transition-all duration-1000 delay-300 transform ${isVisible['case-study'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    >
                    <div className="bg-[#003f84] text-white rounded-br-[50px] p-4 sm:p-6 md:p-8 w-full">
                        {/* Header Section */}
                        <div className="bg-gradient-to-r from-[#1368b4] to-transparent p-4 mb-5">
                            <div className="bg-[#ed1a3b] text-white text-sm font-semibold inline-block px-3 py-1 rounded-br-2xl mb-2">
                                Case Study
                            </div>
                            <h1 className="font-semibold text-2xl sm:text-3xl">Elevating Technology and Sustainability</h1>
                        </div>

                        {/* Main Content Box */}
                        <div className="bg-white text-black rounded-br-[40px] mt-0 flex flex-col md:flex-row divide-x-[1px] divide-gray-300">
                            {/* Left: Paragraph */}
                            <div className="w-full md:w-1/2 p-6 text-[#0057a0] text-xl font-medium leading-7">
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
                            </div>

                            {/* Middle: Challenges */}
                            <div className="w-full md:w-1/4 p-6 space-y-4">
                                <h2 className="text-[#ed1a3b] text-2xl font-bold mb-2">Challenges</h2>
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
                                <h2 className="text-[#ed1a3b] text-2xl font-bold mb-2">Actions Taken</h2>
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
                    </div>
                </div>

                {/* US Operations Section */}
                <div
                    id="us-ops"
                    data-animate
                    className={`transition-all duration-1000 delay-400 transform ${isVisible['us-ops'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className="w-full flex items-center justify-center mb-8">
                            <img src="OurBusiness/BasicChemistry/US.webp" alt="" />
                        </div>
                        <HeadingWRedCorner title='US' />
                        <div className='flex flex-col lg:flex-row text-[#4d4d4f] gap-10'>
                            {/* Left Column */}
                            <div className='w-full lg:w-1/3'>
                                <p className='text-xl mt-5'>
                                    Soda ash operations in the United States
                                    operated efficiently, utilising the energyefficient trona mining process to ensure
                                    production stability. Despite the ongoing
                                    challenges in export markets, the North
                                    American market remained stable due to
                                    strong domestic demand. We maintained
                                    operational continuity by means of
                                    effective planning and response.
                                </p>
                                <h1 className='font-semibold text-2xl text-[#1368b4] mt-5'>Trends</h1>
                                <ul className="list-disc list-inside text-xl text-[#4d4d4f] marker:text-[#40b2a2] space-y-3">
                                    <li>Stable domestic demand for soda
                                        ash in North America</li>
                                    <li>Export prices under stress,
                                        particularly in South East (SE) Asia</li>
                                </ul>
                            </div>

                            {/* Middle Column */}
                            <div className='w-full lg:w-1/3 flex flex-col space-y-4'>
                                <h1 className='font-semibold text-2xl text-[#1368b4] mt-5'>Operational Highlights</h1>

                                <div className='bg-[#ed1a3b] h-[2px] w-[20%]'></div>
                                <p className='text-xl'>Mine operations exceeded performance
                                    targets, improving over FY 2023–24
                                    by more than 9% and supporting
                                    strong soda ash demand.</p>

                                <div className='bg-[#ed1a3b] h-[2px] w-[20%]'></div>
                                <p className='text-xl'>Surface operations met targets and
                                    delivered strong annual performance
                                    despite external market pressures.</p>

                                <div className='bg-[#ed1a3b] h-[2px] w-[20%]'></div>
                                <p className='text-xl'>Post ANSAC exit, direct sales into
                                    international markets were expanded.</p>
                            </div>

                            {/* Right Column */}
                            <div className="w-full lg:w-1/3 bg-[#e7f6fd] rounded-md shadow-sm px-4 py-5 space-y-6 mt-5 lg:mt-0">
                                <h1 className="font-semibold text-2xl text-[#1368b4]">Roadmap Ahead</h1>

                                {[
                                    "Fixed Costs optimisation and debt reduction.",
                                    "Advance efforts to reduce carbon emissions through the ongoing transition from coal to less carbonintensive energy sources.",
                                    "Further optimise production processes to minimise environmental impact.",
                                    "Expand market presence in emerging economies.",
                                    "Invest in digital technologies to enhance efficiency across operations.",
                                    "Continued collaboration with external partners on the small modular nuclear reactor initiative."
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-4 h-[2px] bg-[#1368b4] mt-2 flex-shrink-0"></div>
                                        <p className="text-[#4d4d4f] text-xl">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* UK Operations Section */}
                <div
                    id="uk-ops"
                    data-animate
                    className={`transition-all duration-1000 delay-500 transform ${isVisible['uk-ops'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className="mb-8">
                            <HeadingWRedCorner title='UK' />
                        </div>

                        <div className="flex flex-col md:flex-row text-[#4d4d4f] gap-10">
                            {/* Column 1 */}
                            <div className="w-full md:w-1/3">
                                <p className="text-xl mt-5">
                                    UK soda ash demand declined.
                                    Performance in salt and sodium
                                    bicarbonate remained strong, driven
                                    by sustainability-focused initiatives and
                                    operational efficiency.
                                </p>

                                <h1 className="font-semibold text-2xl text-[#1368b4] mt-5">Trends</h1>
                                <ul className="list-disc list-inside text-xl text-[#4d4d4f] marker:text-[#40b2a2] space-y-3">
                                    <li>Muted demand for soda
                                        ash in the UK market</li>
                                    <li>Sustained demand for salt and
                                        sodium bicarbonate products</li>
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div className="w-full md:w-1/3 flex flex-col space-y-4">
                                <h1 className="font-semibold text-2xl text-[#1368b4] mt-5">Operational Highlights</h1>

                                <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                                <p className="text-xl">For the production of sodium
                                    bicarbonate, UK successfully
                                    continued to operate its new 40 KT
                                    carbon capture unit, producing CO2
                                    in accordance with EIGA (European
                                    Industrial Gases Association)
                                    standard. The future sales will focus
                                    more on premium products such as
                                    pharma-grade, sodium bicarbonate.</p>

                                <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                                <p className="text-xl">A new pharmaceutical-grade salt
                                    manufacturing facility and related
                                    warehousing were completed
                                    and started operations. </p>

                                <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                                <p className="text-xl">The Lostock soda ash production facility
                                    was closed in Q4 FY25.</p>
                            </div>

                            {/* Column 3 */}
                            <div className="w-full md:w-1/3 bg-[#e7f6fd] rounded-md shadow-sm px-4 py-5 space-y-6">
                                <h1 className="font-semibold text-2xl text-[#1368b4]">Roadmap Ahead</h1>

                                {[
                                    "Fixed Costs optimisation and debt reduction.",
                                    "Facilitate the launch of an energyfrom-waste plant in collaboration with a third party at the Lostock site in late FY 2026 as part of decarbonisation efforts",
                                    "The first sales of EP/USP pharma salt are expected in FY26. This will allow to strengthen export capabilities in high-end applications.",
                                    "Future involvement in hydrogen storage and supply will align with emerging energy transition requirements and infrastructure readiness."
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-4 h-[2px] bg-[#1368b4] mt-2 flex-shrink-0"></div>
                                        <p className="text-[#4d4d4f] text-xl">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Africa Operations Section */}
                <div
                    id="africa-ops"
                    data-animate
                    className={`transition-all duration-1000 delay-600 transform ${isVisible['africa-ops'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className="mb-8">
                            <div>
                                <HeadingWRedCorner title='Kenya' />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row text-[#4d4d4f] gap-10">
                            {/* Column 1 */}
                            <div className="w-full md:w-1/3">
                                <p className="text-xl mt-5">
                                    Standard Ash Magadi (SAM), comes
                                    naturally from trona deposits in Lake
                                    Magadi and is widely used in container
                                    glass, silicates and detergents. Steady sales
                                    and stronger pricing helped retain market
                                    leadership in Africa.
                                    Over the past year, we expanded in
                                    the domestic market, grew presence
                                    in Kenya, and strengthened position
                                    as a key exporter.
                                </p>

                                <h1 className="font-semibold text-2xl text-[#1368b4] mt-5">Trends</h1>
                                <ul className="list-disc list-inside text-xl text-[#4d4d4f] marker:text-[#40b2a2] space-y-3">
                                    <li>Growing customer preference for
                                        sustainable soda ash alternatives</li>
                                    <li>Increasing demand within Africa</li>
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div className="w-full md:w-1/3 flex flex-col space-y-4">
                                <h1 className="font-semibold text-2xl text-[#1368b4] mt-5">Operational Highlights</h1>

                                <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                                <p className="text-xl">Started trials of Eco Ash using solar ponds
                                    to meet growing demand for sustainable
                                    materials in Africa’s float glass sector</p>

                                <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                                <p className="text-xl">Commenced the Project of Electric Calciner
                                    to expand capacity by about 50,000 TPA,
                                    meeting the increasing demand for greener
                                    soda ash worldwide.</p>

                                <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                                <p className="text-xl">Strengthened focus on the local
                                    market, increasing sales in Kenya and
                                    strengthening our regional position.</p>
                            </div>

                            {/* Column 3 */}
                            <div className="w-full md:w-1/3 bg-[#e7f6fd] rounded-md shadow-sm px-4 py-5 space-y-6">
                                <h1 className="font-semibold text-2xl text-[#1368b4]">Roadmap Ahead</h1>

                                {[
                                    "Increase production of eco-friendly soda ash by rolling out the Electric Calciner and a solar Photovoltaic Thermal plant, aiming to lower CO2 emissions per tonne by about 20%.",
                                    "Improve efficiency across operations and logistics",
                                    "Expand sodium carbonate sales into new regional markets.",
                                    "Accelerate the shift to renewable energy, including solar and biomass, to support more sustainable production."
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-4 h-[2px] bg-[#1368b4] mt-2 flex-shrink-0"></div>
                                        <p className="text-[#4d4d4f] text-xl">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicChemistry;