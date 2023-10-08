import React from 'react'
import batmanFlècheImg from '../assets/logo/logo_bat_flèche.png';
import facebookImg from '../assets/logo/icon_facebook.png';
import instagramImg from '../assets/logo/icon_ig.png';
import twitterImg from '../assets/logo/icon_tw.png';
import batmanFlèche2Img from '../assets/logo/logo_bat_flèche_2.png';

function SideSocial() {
        //Arrow scroll top/bottom
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };
    
        const scrollToBottom = () => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth', 
            });
        };
    
    return (
        <aside>
            <figure>
                <div>
                    <a className="scrollArrow" onClick={scrollToTop}><img src={batmanFlècheImg} alt="Scroll to top" /></a>
                </div>
                <div>
                    <a href="https://www.facebook.com/frdccomics/?locale=fr_FR"><img src={facebookImg} alt="facebook DC" title="FB DC Comics" /></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/dcofficial/?hl=fr"><img src={instagramImg} alt="instagram" title="Insta DC Comics" /></a>
                </div>
                <div>
                    <a href="https://twitter.com/DCComics"><img src={twitterImg} alt="twitter" title="Twitter DC Comics" /></a>
                </div>
                <div>
                    <a className="scrollArrow" onClick={scrollToBottom}><img src={batmanFlèche2Img} alt="Scroll to Bottom" /></a>
                </div>
            </figure>
        </aside>
    )
}

export default SideSocial