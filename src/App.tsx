
import './App.css'
import Header from './component/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import LoanApplicationForm from './LoanApplicationForm/Index.jsx'
export default function App() {
  return (
<>
<Router>
      <Header />
      <main className="mt-16 lg:mt-18">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/Form" element={<LoanApplicationForm />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
    </Router>
</>
  );
}

