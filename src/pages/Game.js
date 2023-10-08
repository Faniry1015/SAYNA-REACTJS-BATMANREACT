import React from 'react'
import SideSocial from '../components/SideSocial';
// import '../styles/Game.css'
import arrowImage from '../assets/logo/flèche_down_header.png';
import batmanImage from '../assets/Illustrations_game/Batgame_2.png';
import quizzImage from '../assets/Illustrations_game/Batgame_3.png';

function Game() {
  return (
    <main>
      {/* Icônes latéraux de réseaux sociaux */}
      <SideSocial />
      {/* Section 1: LET'S PLAY */}
      <section className="reveal">
        <div className="sect1">
          <h1>Let's play a <br /> Little game</h1>
        </div>
      </section>

      {/* Section 2: Do you know him */}
      <section id="sec2" className="reveal">
        <div className="sec2">
          <div className="sec2__firstBigArrow">
            <img src={arrowImage} alt="Grande flèche vers le bas" />
          </div>
          <h2>connaissez vous bien le chevalier noir ?</h2>

          <div>
            <div className="knowImgCont">
              <figure>
                <img src={batmanImage} alt="batman_de_dos" />
              </figure>
            </div>

            <div className="sect2__contentDiv btnContain">
              <div className="btnContain__btn">
                <a id="startGame">démarrez le quiz</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUIZZ */}
      <section id="questionnaire">
        <div className="questions">
          <h2 className="nbreQuestions">
            <span id="currentQId">{/*N° Question actuelle*/}</span>/<span
              id="totalQNbr">{/*Nbr total de question-->*/}</span>
          </h2>
          <div className="card-quizz">
            <div id="QImgContainer">
              <div className="card-image">
                <img id="imgQuizz" src={quizzImage} alt="" />
              </div>

              <div id="mainQ">
                <div className="flexPosition">
                  <div className="card-body-quizz">
                    <div className="currentQuestion quizz">{/*Question*/}</div>
                  </div>
                  <div className="choisirReponse">
                    {/* Choix de réponse */}
                  </div>
                </div>
              </div>
            </div>

            <div className="sect2__contentDiv btnContain nextDiv">
              <div className="btnContain__btn" id="nextBtn">
                <a className="nextBtn">Question suivante</a>
              </div>
            </div>

            {/* Show Result */}
            <div className="sect2__contentDiv btnContain showDiv">
              <div className="btnContain__btn" id="showResult">
                <a className="showResult">Voir le résultat</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Résultat final du Quizz */}
      <section id="quizzFinal">
        <div id="quizzFinalContainer">
          <h2 className="finalNote">
            <span id="finalScore">{/*Score finale*/}</span>/<span
              id="totalQuestionNbr">{/*Nbr total de question*/}</span> <span id="finalShortComment"></span>
          </h2>
          <p id="finalLongComment"></p>
          <div className="btnContain">
            <div className="btnContain__btn" id="restartQuizzContainer">
              <a className="restartQuizzLink">Recommencer le quiz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Game