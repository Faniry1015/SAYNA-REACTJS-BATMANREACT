import React, { useState, useEffect } from 'react';
import SideSocial from '../components/SideSocial';
import '../styles/Game.css';
import arrowImage from '../assets/logo/flèche_down_header.png';
import batmanImage from '../assets/Illustrations_game/Batgame_2.png';
import quizzImage from '../assets/Illustrations_game/Batgame_3.png';

const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const fShortComments = ["C'est pas tout à fait ça...", "Pas mal !", "Bravo !"];
  const fLongComments = [
    "Oula ! Heureusement que le Riddler est sous les verrous... Il faut que vous vous repassiez les films, cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! Aller, rien n'est perdu !",
    "Encore un peu d'entrainement avec le Chevalier Noir vous serait bénéfique, mais vous pouvez marcher la tête haute, vos connaissances sont là. À vous de les consolider, foncez Gotham est votre terrain de chasse !",
    "Vous êtes véritablement un super fan de l'univers de Batman ! Comices, films, rien ne vous échappe. Bruce Wayne a de quoi être fier, Gotham est en paix et Batman peut prendre sa retraite, vous veillez aux grains"
  ];

  const fetchQuestions = async () => {
    try {
      const response = await fetch("https://batman-api.sayna.space/questions", {
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        // throw new Error("Erreur de chargement du questionnaire depuis le serveur");
        alert("Erreur de chargement des questionnaires, vérifiez votre connexion internet et actualisez")
      }

      const questionsData = await response.json();
      setQuestions(questionsData);
      const firstQuestion = questionsData[0]

      if (firstQuestion) {
        const answers = firstQuestion.response.map(choice => {
          return {
            isGood : choice.isGood,
            checked: false
        }
      })
        setCurrentAnswer(answers)
      }
    } catch (error) {
      console.error("Erreur de chargement du questionnaire", error);
    }
  };

  const handleChoiceChange = (e) => {
    const currentCheckedIndex = parseInt(e.target.name) 
    const currentCheckedStatus = e.target.checked
    // console.log(currentAnswer[currentCheckedIndex].checked)
    const updatedAnswer = currentAnswer.map((item) => {
      if (currentCheckedIndex === currentAnswer.indexOf(item)) {
        return {...item, checked: currentCheckedStatus }
      } else {
        return item
      }
    })
    setCurrentAnswer(updatedAnswer)
  }

  const handleAnswerSubmit = () => {
    let checkAnswers = []
    checkAnswers = currentAnswer.map((answer) => {
      return answer.isGood === answer.checked
    })
    console.log(checkAnswers)

    if (checkAnswers.every(answer => answer === true)) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      const currentQuestion = questions[currentQuestionIndex]

      if (currentQuestion) {
        const answers = currentQuestion.response.map(choice => {
          return {
            isGood : choice.isGood,
            checked: false
        }
      })
        setCurrentAnswer(answers)
      }
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <main>
      <SideSocial />
      <section className="reveal">
        <div className="sect1">
          <h1>Let's play a <br /> Little game</h1>
        </div>
      </section>
      <section id="sec2" className="reveal">
        <div className="sec2">
          <div className="sec2__firstBigArrow">
            <img src={arrowImage} alt="Grande flèche vers le bas" />
          </div>
          <h2>Connaissez-vous bien le Chevalier Noir ?</h2>
          <div>
            <div className="knowImgCont">
              <figure>
                <img src={batmanImage} alt="Batman de dos" />
              </figure>
            </div>
            <div className="sect2__contentDiv btnContain">
              <div className="btnContain__btn">
                <button id="startGame" onClick={fetchQuestions}>Démarrer le quiz</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {JSON.stringify(currentAnswer)}
      {JSON.stringify(score)}
      {questions.length > 0 && !showResult && (
        <section id="questionnaire">
          <div className="questions">
            <h2 className="nbreQuestions">
              <span id="currentQId">{currentQuestionIndex + 1}</span>/
              <span id="totalQNbr">{questions.length}</span>
            </h2>
            <div className="card-quizz">
              <div id="QImgContainer">
                <div className="card-image">
                  <img id="imgQuizz" src={quizzImage} alt="" />
                </div>
                <div id="mainQ">
                  <div className="flexPosition">
                    <div className="card-body-quizz">
                      <div className="currentQuestion quizz">
                        {questions[currentQuestionIndex].question}
                      </div>
                    </div>
                    <div className="choisirReponse">
                      {questions[currentQuestionIndex].response.map((choice, index) => (
                        <div key={index} className="choicesDiv">
                          <input name={index} type="checkbox" className={`checkB ${choice.isGood}`} checked={currentAnswer[index].checked} onChange={handleChoiceChange} />
                          <label>{choice.text}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="sect2__contentDiv btnContain nextDiv">
                <div className="btnContain__btn">
                  {currentQuestionIndex + 1 < questions.length ? (
                    <button className="nextBtn" onClick={handleAnswerSubmit}>
                      Question suivante
                    </button>
                  ) : (
                    <button className="nextBtn" onClick={handleAnswerSubmit}>
                      Voir le résultat
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {showResult && (
        <section id="quizzFinal">
          <div id="quizzFinalContainer">
            <h2 className="finalNote">
              <span id="finalScore">{score}</span>/
              <span id="totalQuestionNbr">{questions.length}</span> <span id="finalShortComment">{fShortComments[score / questions.length * 10 <= 4 ? 0 : score / questions.length * 10 <= 7 ? 1 : 2]}</span>
            </h2>
            <p id="finalLongComment">{fLongComments[score / questions.length * 10 <= 4 ? 0 : score / questions.length * 10 <= 7 ? 1 : 2]}</p>
            <div className="btnContain">
              <div className="btnContain__btn" id="restartQuizzContainer">
                <button className="restartQuizzLink" onClick={restartQuiz}>Recommencer le quiz</button>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Game;
