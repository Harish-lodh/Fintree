
import './App.css'
import Header from './component/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import LoanApplicationForm from './LoanApplicationForm/Index.tsx'
import LAP from './Products/LAP.tsx';
import FinTechFinance from './Products/FinTech.tsx';
import Footer from './component/footer/index.tsx';
export default function App() {
  return (
<>
<Router>
      <Header />
      <main className="mt-16 lg:mt-18">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/Form" element={<LoanApplicationForm />} />
          <Route path="/products/loan-against-property" element={< LAP/>} />
          <Route path="/products/fintech" element={< FinTechFinance/>} />
          <Route path="/products/nach-cancellation" element={< LAP/>} />
          <Route path="/products/supply-chain-finance" element={< LAP/>} />

        </Routes>
        <Footer/>
      </main>
    </Router>
</>
  );
}

