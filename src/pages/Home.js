import React from 'react'

function Home() {
    return (
        <main>
            <section className="reveal">
                <div className="sect1">
                    <div className="sect1__contentDiv">
                        <p>
                            Au nom de ses parents assassinés, Bruce Wayne mène une guerre éternelle contre les criminels
                            de
                            Gotham City. <br />
                            Il est vengeur. Il est la nuit.
                        </p>
                    </div>

                    <div className="sect1__contentDiv sect1__isBatmanTxt">
                        <p>Il est Batman.</p>
                    </div>

                    <div className="sect1__contentDiv btnContain">
                        <div className="btnContain__btn">
                            <a id="seeHero">VOIR LE HÉROS</a>
                        </div>
                        <div className="btnContain__btn">
                            <a id="seeEnemies">LES ADVERSAIRES</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Home