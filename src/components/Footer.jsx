import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';

// this function displays links to my pages
function FooterLinks () {
    const iconSize = 31; 
    return (
        <footer className="fixed-bottom nav justify-content-center">
            <a href='https://www.linkedin.com/in/blair-dowling-884b75302/' className='icon'><FaLinkedin size={iconSize}/></a>
            <a href='https://github.com/Blair-D' className='icon'><FaGithub size={iconSize}/></a>
            <a href='mailto:Blair.A.R.Dowling@gmail.com' className='icon'><FaEnvelope size={iconSize}/></a>
            {/* <h4 className="text-white">
             Created by Blair Dowling
            </h4> */}
        </footer>
    )
}

export default FooterLinks;
