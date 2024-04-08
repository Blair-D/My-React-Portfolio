import { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortCont() {
  const [currentPage, setCurrPg] = useState('About');

  const render = () => {
     if (currentPage === 'Portfolio') {
     return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume  />;
    }
    if (currentPage === 'Contact')
    return <Contact />;
  };

  const processPgChange = (page) => setCurrPg(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} processPgChange={processPgChange} />
      <main>{render()}</main>
    </div>
  );
}
