import React from 'react';
import '../../style.css';
import './footer.css';

function Footer () {
    return (
        <div className="footer wrapper-inner-footer">
            <div className="footer__section">
                <ul>
                    <li className="footer-item footer-span"><a href="#" className="footer-item-linc">Airbnb</a></li>
                    <li className="footer-item"><a href="#" className="footer-item-linc">About</a></li>
                    <li className="footer-item"><a href="#" className="footer-item-linc">Press</a></li>
                    <li className="footer-item"><a href="#" className="footer-item-linc">Help</a></li>
                </ul>
            </div>
            <div className="footer__section">
                <ul>
                    <li className="footer-item footer-span"><a href="#" className="footer-item-linc">Discover</a></li>
                    <li className="footer-item"><a href="#" className="footer-item-linc">Travel credit</a></li>
                    <li className="footer-item"><a href="#" className="footer-item-linc">Business</a></li>
                    <li className="footer-item"><a href="#" className="footer-item-linc">Guidebooks</a></li>
                </ul>
            </div>
            <div className="footer__section">
                <ul>
                    <li className="footer-item footer-span"><a href="#" className="footer-item-linc">Hosting</a></li>
                    <li className="footer-item"><a href="#" className="footer-item-linc">Why host</a></li>
                    <li className="footer-item"><a href="#" className="footer-item-linc">Hospitality</a></li>
                    <li className="footer-item"><a href="#" className="footer-item-linc">Community</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;