import React from 'react';
import batmanFlècheImg from '../assets/logo/logo_bat_flèche.png';
import facebookImg from '../assets/logo/icon_facebook.png';
import instagramImg from '../assets/logo/icon_ig.png';
import twitterImg from '../assets/logo/icon_tw.png';
import batmanFlèche2Img from '../assets/logo/logo_bat_flèche_2.png';
import bathome2Img from '../assets/illustrations/Bathome2.png';
import bathome3Img from '../assets/illustrations/Bathome3.png';
import bathome4Img from '../assets/illustrations/Bathome4.png';
import bathome5Img from '../assets/illustrations/Bathome5.png';
import bathome6Img from '../assets/illustrations/Bathome6.png';
import bathome7Img from '../assets/illustrations/Bathome7.png';
import bathome8Img from '../assets/illustrations/Bathome8.png';
import bathome9Img from '../assets/illustrations/Bathome9.png';
import bathome10Img from '../assets/illustrations/Bathome10.png';
import bathome11Img from '../assets/illustrations/Bathome11.png';
import bathome12Img from '../assets/illustrations/Bathome12.png';
import bathome13Img from '../assets/illustrations/Bathome13.png';
import bathome_ba1Img from '../assets/illustrations/Bathome_ba1.png';
import bathome_ba2Img from '../assets/illustrations/Bathome_ba2.png';
import largeArrowImg from '../assets/logo/flèche_down_header.png'
import arrowLeftImg from '../assets/logo/icon_flèche_1.png'
import arrowRightImg from '../assets/logo/icon_flèche_2.png'
import { Link } from 'react-router-dom';

function Home() {
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

    //Scroll to Hero/enemies
    const scrollToAnchor = (anchorId) => {
        const anchorElement = document.getElementById(anchorId);

        if (anchorElement) {
            anchorElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }

        return (
            <main>
                {/* Icônes latéraux de réseaux sociaux */}
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

                {/* Section 1 Il est Batman */}
                <section className="reveal">
                    <div className="sect1">
                        <div className="sect1__contentDiv">
                            <p>
                                Au nom de ses parents assassinés, Bruce Wayne mène une guerre éternelle contre les criminels de Gotham City. <br />
                                Il est vengeur. Il est la nuit.
                            </p>
                        </div>
                        <div className="sect1__contentDiv sect1__isBatmanTxt">
                            <p>Il est Batman.</p>
                        </div>
                        <div className="sect1__contentDiv btnContain">
                            <div className="btnContain__btn">
                                <a id="seeHero" onClick={() => scrollToAnchor('sec2')}>VOIR LE HÉROS</a>
                            </div>
                            <div className="btnContain__btn">
                                <a id="seeEnemies" onClick={() => scrollToAnchor('sec3')}>LES ADVERSAIRES</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Batman au cinéma */}
                <section id="sec2" className="hero">
                    <div className="sec2">
                        <div className="sec2__firstBigArrow reveal">
                            <img src={largeArrowImg} alt="Grande flèche vers le bas" />
                        </div>
                        <h2 className="reveal">BATMAN AU CINÉMA</h2>
                        <div className="reveal">
                            <p>
                                Le personnage de Batman est un super héros de l’univers de DC Comics. Il a été créé par le dessinateur Bob Kane et le scénariste Bill Finger et apparaît pour la première fois dans le comic book Detective comics en 1939. Batman se différencie de Superman, alors héros majeur de DC, car il n’a aucun pouvoir. Il sera porté au cinéma pour la première fois en 1943 par Lewis Wilson et bénéficiera de nombreux reboot, donnant l’occasion à de multiples acteurs d’interpréter l’homme chauve-souris. Voici les trois derniers :
                            </p>
                            <div className="illPic">
                                <figure>
                                    <div className="zoom">
                                        <img src={bathome2Img} alt="Batman: Robert-Pattinson" />
                                        <figcaption>Robert Pattinson <br /> (2022)</figcaption>
                                    </div>
                                </figure>
                                <figure>
                                    <img className="zoom" src={bathome3Img} alt="Batman: Christian-Bale" />
                                    <figcaption>Christian Bale <br /> (2006 - 2008 - 2012)</figcaption>
                                </figure>
                                <figure>
                                    <img className="zoom" src={bathome4Img} alt="Batman: Ben-Affleck" />
                                    <figcaption>Ben Affleck <br /> (2016 2017/2020 - 2023)</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Ennemies */}
                <section className="reveal ennemies" id="sec3">
                    <div className="sec3">
                        <h2 id="sec3Title">NÉMÉSIS <img className="sec3__logo" src={bathome13Img} alt="Boomrang Batman" /></h2>
                        <p>
                            Batman souhaite éradiquer la criminalité de Gotham. C’est purquoi, il affrontera la plupart du temps, des vilains sans capacités surnaturelles mais particulièrement violents ou psychopathes. Avec son introduction dans la Justice League il aura l’occasion de se mesurer à des antagonistes qui défient l’imagination et les lois de la physique. Parmi les derniers ennemis emblématiques que nous avons pu voir au cinéma, on retrouve :
                        </p>
                        <div className="illPic">
                            <figure>
                                <img className="zoom" src={bathome5Img} alt="Enemmi: The Riddler" />
                                <figcaption>The Riddler <br /> (2022)</figcaption>
                            </figure>
                            <figure>
                                <img className="zoom" src={bathome6Img} alt="Enemmi: Le Joker" />
                                <figcaption>Le Joker - Heath Ledger <br /> (2008)</figcaption>
                            </figure>
                            <figure>
                                <img className="zoom" src={bathome7Img} alt="Enemmi: Darkseid" />
                                <figcaption>Darkseid - Ray Porter <br /> (2022)</figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* Section 4: Alliés */}
                <section>
                    <div className="sec4">
                        <div className="sec4__TitleSideImgContain">
                            <div className="sec4__TitleSideImgContain__divImg">
                                <img src={bathome12Img} alt="Batman assis" />
                            </div>
                            <h2 className="reveal">ALLIÉS</h2>
                        </div>
                        <div className="reveal">
                            <p>
                                Alfred est le majordome des Wayne. A leur mort il s’occupe de l’éducation du jeune Bruce avant de l’assister dans son rôle du Batman. Ce dernier rencontrera Catwoman dès le premier numéro des aventures de l’homme chauve-souris en 1940. Tantôt ennemie tantôt alliée la jeune femme fatale fera tourner la tête de Batman à maintes reprises. Du côté de la police, Bruce pourra compter sur l’aide infaillible de James Gordon, “Jim”, qui désire lui aussi nettoyer sa ville de la criminalité qui y règne.
                            </p>
                            <div className="illPic">
                                <figure>
                                    <img src={bathome9Img} alt="Alliés: Alfred Pennyworth" />
                                    <figcaption>Alfred Pennyworth - Michael Cain <br />(2006 - 2008 - 2012)</figcaption>
                                </figure>
                                <figure>
                                    <img src={bathome8Img} alt="Alliés: Catwoman" />
                                    <figcaption>Catwoman - Zoé Kravitz <br />(2008)</figcaption>
                                </figure>
                                <figure>
                                    <img src={bathome10Img} alt="Alliés: James Gordon" />
                                    <figcaption>James Gordon <br />(2014-2019)</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: Justice League */}
                <section className="reveal">
                    <div className="sec5">
                        <h2>JUSTICE LEAGUE</h2>
                        <p>
                            Lorsque la Terre est menacée les plus grands super-héros s’allient pour la protéger. Ils doivent cependant apprendre à se faire confiance mutuellement et à faire équipe ce qui ne sera pas chose aisée. Ensemble ils forment la Justice League, les plus grands super-héros de la Terre, ceux vers qui le monde entier se tourne lorsque les menaces extraterrestres ou surnaturelles menacent son existence
                        </p>
                        <div className="sec5__divImg">
                            <div className="sec5__divImg__div">
                                <img src={bathome11Img} alt="La ligue des justiciés" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Multimédia */}
                <section className="reveal">
                    <div className="sec6">
                        <h2>MULTIMÉDIA</h2>
                        <div className="sec6__carrousContain">
                            <button>
                                <img src={arrowLeftImg} alt="Flèche gauche" />
                            </button>
                            {/* Affiche BATMAN BEGINS */}
                            <div className="sec6__carrousContain__main">
                                <div className="sec6__carrousContain__main__imgContainer">
                                    <a href="./../assets/videos/Batman Begins - Bande Annonce Officielle (VF) - Christian Bale _ Christopher Nolan _ Liam Neeson.mkv">
                                        <img src={bathome_ba1Img} alt="Affiche Batman Begins" />
                                    </a>
                                </div>
                                <div className="sec6__carrousContain__main__mediaDescription">
                                    <a href="./../assets/videos/Batman Begins - Bande Annonce Officielle (VF) - Christian Bale _ Christopher Nolan _ Liam Neeson.mkv">
                                        <div className="sec6__carrousContain__main__mediaDescription__component">ACTION, ADVENTURE</div>
                                        <h3 className="sec6__carrousContain__main__mediaDescription__component">Batman Begins</h3>
                                        <div className="sec6__carrousContain__main__mediaDescription__component">IMDB :<span>8.2</span></div>
                                        <p className="sec6__carrousContain__main__mediaDescription__component">
                                            Le jeune Bruce Wayne assiste impuissant au meurtre de ses parents. Profondément traumatisé, il grandit obnubilé par un désir de vengeance. La Ligue des ombres, une secte de guerriers ninja dirigée par Ra's al Ghul, se chargera de son entraînement. De retour chez lui à Gotham, avec l'aide de son majordome Alfred Pennyworth, Bruce Wayne se lance alors dans la lutte contre le crime sous le nom de Batman.
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <button>
                                <img src={arrowRightImg} alt="Flèche droite" />
                            </button>
                        </div>
                        <div id="BatmanTrailerVid" className="sec6__videoDiv">
                            <video className="sec6__videoDiv__video" src='..\assets\videos\BObatmanBegins.mkv' type="video/mkv" poster={bathome_ba2Img} controls></video>
                        </div>
                    </div>
                </section>

                {/* Section 7: Formulaire */}
                <section className="reveal">
                    <div className="sec7">
                        {/* ... rest of your component */}
                    </div>
                </section>

                {/* PopupBox Message reçu */}
                <div className="popupBox">
                    <div className="inside">
                        <h1>Message reçu!</h1>
                    </div>
                </div>

                {/* Section 8: Citations */}
                <section className="reveal">
                    <div className="sec8">
                        <figure className="sec8__figure">
                            <blockquote>
                                <p>La seule façon raisonnable de vivre en ce bas monde, c'est en dehors des règles.</p>
                            </blockquote>
                            <figcaption>
                                <cite>The Dark Knight : Le Chevalier Noir -</cite> <br />
                                Le Joker à Batman (2008)
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </main>
        );
    }

    export default Home;

