import React from 'react';
import './footer.css';

function Footer () {
    return (
        <div className="footer wrapper-inner-footer">
            <div className="footer__section">
                <ul>
                    <li className="footer__list span"><a href="#" className="footer__list--linc">Airbnb</a></li>
                    <li className="footer__list"><a href="#" className="footer__list--linc">About</a></li>
                    <li className="footer__list"><a href="#" className="footer__list--linc">Press</a></li>
                    <li className="footer__list"><a href="#" className="footer__list--linc">Help</a></li>
                </ul>
            </div>
            <div className="footer__section">
                <ul>
                    <li className="footer__list span"><a href="#" className="footer__list--linc">Discover</a></li>
                    <li className="footer__list"><a href="#" className="footer__list--linc">Travel credit</a></li>
                    <li className="footer__list"><a href="#" className="footer__list--linc">Business</a></li>
                    <li className="footer__list"><a href="#" className="footer__list--linc">Guidebooks</a></li>
                </ul>
            </div>
            <div className="footer__section">
                <ul>
                    <li className="footer__list span"><a href="#" className="footer__list--linc">Hosting</a></li>
                    <li className="footer__list"><a href="#" className="footer__list--linc">Why host</a></li>
                    <li className="footer__list"><a href="#" className="footer__list--linc">Hospitality</a></li>
                    <li className="footer__list"><a href="#" className="footer__list--linc">Community</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;