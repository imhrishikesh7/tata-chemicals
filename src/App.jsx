import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import "./App.css"
import LenisScroll from './Components/LenisScroll';

// Corporate Overview
import BOD from './Pages/CorporateOverview/BOD'
import AboutChemicals from './Pages/CorporateOverview/AboutChemicals'
import Performance from './Pages/CorporateOverview/Performance'
import CEO from './Pages/CorporateOverview/CEO'
import Saftey from './Pages/CorporateOverview/Saftey'
// Our Business
import BasicChemistry from './Pages/OurBusiness/BasicChemistry'
import SpecialtyProducts from './Pages/OurBusiness/SpecialtyProducts'
// Value Creation Approach
import A360Degree from './Pages/ValueCreationApproach/A360Degree'
import BusinessStrategy from './Pages/ValueCreationApproach/BusinessStrategy';
import BusinessModel from './Pages/ValueCreationApproach/BusinessModel'
import RiskManagemant from './Pages/ValueCreationApproach/RiskManagement'
import StakeholderEngagement from './Pages/ValueCreationApproach/StakeholderEngagement';
import Materiality from './Pages/ValueCreationApproach/Materiality';
//Functions
import Research from './Pages/Function/Research';
import Technology from './Pages/Function/Technology'
//ESG
import Environment from './Pages/ESG/Environment'
import HumanResources from './Pages/ESG/HumanResources'
import ValueChain from './Pages/ESG/ValueChain'
import Stakeholder from './Pages/ESG/Stakeholder'
import Community from './Pages/ESG/Community'
import Governance from './Pages/ESG/Governance'

function App() {
  return (
    <LenisScroll>
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
          <Navbar />
          <div className="flex-grow mt-10">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Corporate Overview */}
              <Route path="/board_of_directors" element={<BOD />} />
              <Route path="/about_tata_chemicals" element={<AboutChemicals />} />
              <Route path="/performance_review" element={<Performance />} />
              <Route path="/ceos_message" element={<CEO />} />
              <Route path="/safety_at_the_core" element={<Saftey />} />
              {/* Our Business */}
              <Route path="/basic_chemistry_business" element={<BasicChemistry />} />
              <Route path="/speciality_product_business" element={<SpecialtyProducts />} />
              {/* Value Creation Approach */}
              <Route path="/a_360degree_view_of_operating_landscape" element={<A360Degree />} />
              <Route path="/business_strategy" element={< BusinessStrategy/>}/>
              <Route path="/a_resilient_business_model" element={< BusinessModel/>}/>
              <Route path="/risk_management" element={< RiskManagemant/>}/>
              <Route path="/stakeholder_engagement" element={< StakeholderEngagement/>}/>
              <Route path="/materiality_assessment" element={< Materiality/>}/>
              {/* Function */}
              <Route path="/research_and_development" element={< Research/>}/>
              <Route path="/technology" element={< Technology/>}/>
              {/* ESG */}
              <Route path="/environment" element={< Environment/>}/>
              <Route path="/value_chain_partners" element={< ValueChain/>}/>
              <Route path="/human_resources" element={< HumanResources/>}/>
              <Route path="/engaging_with_our_shareholders_information_and_grievance_redressal" element={< Stakeholder/>}/>
              <Route path="/community" element={< Community/>}/>
              <Route path="/governance" element={< Governance/>}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </LenisScroll>
  )
}

export default App
