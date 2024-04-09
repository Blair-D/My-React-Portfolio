import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const PortfolioNav = () => {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <header>
         <div>
          <div className='nav navTab fixed-top justify-item-end'> 
            <Nav className=" " defaultActiveKey="/home">
                <Nav.Item className='navItem'>
                    <Nav.Link className={currentPage === 'home' ? 'navLink active' : 'navLink'} onClick={() => setCurrentPage('home')} as={Link} to="/">About me</Nav.Link>
                </Nav.Item>

                <Nav.Item className='navItem'>
                    <Nav.Link className={currentPage === 'portfolio' ? 'navLink active' : 'navLink'} onClick={() => setCurrentPage('portfolio')} as={Link} to='/portfolio'>Portfolio</Nav.Link>
                </Nav.Item>

                <Nav.Item className='navItem'>
                    <Nav.Link className={currentPage === 'resume' ? 'navLink active' : 'navLink'} onClick={() => setCurrentPage('resume')} as={Link} to='/resume'>Resume</Nav.Link>
                </Nav.Item>

                <Nav.Item className='navItem'>
                    <Nav.Link className={currentPage === 'contact' ? 'navLink active' : 'navLink'} onClick={() => setCurrentPage('contact')} as={Link} to='/contact'>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
         </div>
         </div>

        </header>
  );
        // <Container>
            
            
        // </Container>
    // );
};

export default PortfolioNav;
