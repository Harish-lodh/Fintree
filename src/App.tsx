import './App.css'

import Header from './component/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import LoanApplicationForm from './LoanApplicationForm/Index.tsx'
import LAP from './Products/LAP.tsx';
import FinTechFinance from './Products/FinTech.tsx';
import Footer from './component/footer/index.tsx';
// import NachCancellationForm from './Products/NachCancellation.tsx';
import SCF from './Products/SCF.tsx';
import About from './AboutUs/index.tsx';
import ResignationOfDirector from './CorparateGovernance/ResignationOfDirector.tsx';
import AGMNotices from './CorparateGovernance/notice.tsx';
import LSPTable from './component/LSPtable/index.tsx';
import MGTNotices from './CorparateGovernance/MGT.tsx';

import TermsOfServices from './component/termsOfServices/index.tsx';
import CKYC from './CorparateGovernance/CKYC.tsx';
import Policies from './CorparateGovernance/Policies.tsx';
import CustomerEducation from './CorparateGovernance/Customereducation.tsx';
import Ombudsman from './CorparateGovernance/Ombudsman.tsx';
import Compromise from './CorparateGovernance/Compromise.tsx';
import Corporatesocialres from './CorparateGovernance/corporatesocialres.tsx';
import DSA from './CorparateGovernance/DSA.tsx';
import Grievance from './CorparateGovernance/Grievance.tsx';
import ContactUs from './component/contact/index.tsx';
import PrivacyPolicy from './component/privacy/index.tsx';
import Riskmanagements from './CorparateGovernance/risk-managements.tsx';
import Releaseofproperty from './CorparateGovernance/Release-of-property.tsx';
import CollectionPrivacyPolicy from "../src/component/privacy/zypay.tsx"
export default function App() {
    return (
        <>
            <Router>
                <Header />
                <main className="mt-16 lg:mt-18  ">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Form" element={<LoanApplicationForm />} />
                        <Route path="/products/loan-against-property" element={< LAP />} />
                        <Route path="/products/fintech" element={< FinTechFinance />} />
                        {/* <Route path="/products/nach-cancellation" element={< NachCancellationForm />} /> */}
                        <Route path="/products/supply-chain-finance" element={< SCF />} />


                        //corporate-governance routes
                        <Route path="corporate-governance/resignation-of-director" element={<ResignationOfDirector />} />
                        <Route path="corporate-governance/AGMNotices" element={<AGMNotices />} />
                        <Route path="corporate-governance/MGT-7" element={<MGTNotices />} />
                        <Route path="corporate-governance/ckyc" element={<CKYC />} />
                        <Route path="corporate-governance/policies" element={<Policies />} />
                        <Route path="corporate-governance/customer-education" element={<CustomerEducation />} />
                        <Route path="corporate-governance/ombudsman-scheme" element={<Ombudsman />} />
                        <Route path="corporate-governance/compromise-settlement" element={<Compromise />} />
                        <Route path="corporate-governance/csr" element={<Corporatesocialres />} />
                        <Route path="corporate-governance/dsa-code" element={<DSA />} />
                        <Route path="corporate-governance/grievance-redressal" element={<Grievance />} />
                        <Route path="corporate-governance/risk-management" element={<Riskmanagements />} />
                        <Route path="corporate-governance/Release-of-property" element={<Releaseofproperty />} />


                        <Route path='lending-service-provider' element={<LSPTable />} />
                        <Route path='/terms-of-service' element={<TermsOfServices />} />
                        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                        <Route path='/collection/privacy-policy' element={<CollectionPrivacyPolicy />} />
                        <Route path='/contact-us' element={<ContactUs />} />
                        <Route path='/about-us' element={<About />} />
                    </Routes>
                    <Footer />
                </main>
            </Router>
        </>
    );
}

