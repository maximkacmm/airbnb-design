import React from 'react';
import '../../style.css';
import './footer.css';

function Footer () {
    return (
        <div className="footer footer-wrapper">
            <div className="footer-section">
                <ul>
                    <li className="footer-section__title"><a href="#" className="footer-section__linc">Airbnb</a></li>
                    <li className="footer-section__item"><a href="#" className="footer-section__linc">About</a></li>
                    <li className="footer-section__item"><a href="#" className="footer-section__linc">Press</a></li>
                    <li className="footer-section__item"><a href="#" className="footer-section__linc">Help</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <ul>
                    <li className="footer-section__title"><a href="#" className="footer-section__linc">Discover</a></li>
                    <li className="footer-section__item"><a href="#" className="footer-section__linc">Travel credit</a></li>
                    <li className="footer-section__item"><a href="#" className="footer-section__linc">Business</a></li>
                    <li className="footer-section__item"><a href="#" className="footer-section__linc">Guidebooks</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <ul>
                    <li className="footer-section__title"><a href="#" className="footer-section__linc">Hosting</a></li>
                    <li className="footer-section__item"><a href="#" className="footer-section__linc">Why host</a></li>
                    <li className="footer-section__item"><a href="#" className="footer-section__linc">Hospitality</a></li>
                    <li className="footer-section__item"><a href="#" className="footer-section__linc">Community</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;