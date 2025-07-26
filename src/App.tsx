import './App.css'

import Header from './component/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import LoanApplicationForm from './LoanApplicationForm/Index.tsx'
import LAP from './Products/LAP.tsx';
import FinTechFinance from './Products/FinTech.tsx';
import Footer from './component/footer/index.tsx';
import NachCancellationForm from './Products/NachCancellation.tsx';
import SCF from './Products/SCF.tsx';
import About from './AboutUs/index.tsx';
import ResignationOfDirector from './CorparateGovernance/ResignationOfDirector.tsx';
import AGMNotices from './CorparateGovernance/notice.tsx';
import LSPTable from './component/LSPtable/index.tsx';
import MGTNotices from './CorparateGovernance/MGT.tsx';

import TermsOfServices from './component/termsOfServices/index.tsx';
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
            <Route path="/products/nach-cancellation" element={< NachCancellationForm />} />
            <Route path="/products/supply-chain-finance" element={< SCF />} />
            {/* <Route path="corporate-governance/loan-application-form" element={<LoanApplicationForm />} /> */}
            <Route path="corporate-governance/resignation-of-director" element={<ResignationOfDirector />} />
            <Route path="corporate-governance/AGMNotices" element={<AGMNotices />} />
            <Route path="corporate-governance/MGT-7" element={<MGTNotices/>} />
            <Route path='lending-service-provider' element={<LSPTable/>}/>
            <Route path='/terms-of-service' element={<TermsOfServices/>}/>
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </>
  );
}

