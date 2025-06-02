import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      
      <div className='Footerdiv'>
        {/* Column 1 */}
        <div >
          <h3 >Plan My Day</h3>
          <p>Plan events, parties, and special moments effortlessly.</p>
        </div>

        {/* Column 2 */}
        <div >
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#" >Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#" >Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div >
          <h4 >Help</h4>
          <ul >
            <li><a href="#" >FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
  <h4>Connect with Us</h4>
  <div className='FooterIcons'>
    <a href="#"><FontAwesomeIcon icon={faFacebook} size='xl' style={{ color: "#3dabff" }} /></a>
    <a href="#"><FontAwesomeIcon icon={faInstagram} size='xl' style={{ color: "#ef50f2" }} /></a>
    <a href="#"><FontAwesomeIcon icon={faTwitter} size='xl'style={{ color: "#60b8fb" }} /></a>
  </div>
</div>


      </div>

      
    <div style={{textAlign:"center"}}>  <p >&copy; 2025 Plan My Day. All Rights Reserved.</p> </div>
    </footer>
  );
};


export default Footer