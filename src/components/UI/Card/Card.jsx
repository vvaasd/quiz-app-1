import pages from '@/constants/pages.js';

import { Welcome, Questions, Result } from '@/pages';
import styles from './Card.module.css';

import { useState } from 'react';

function Card({
  isPageLoading = false,
  quizDataFromAPI,
  currentPage,
  incrementSuccessAnswersCount,
  successAnswersCount,
}) {
  const [questionsForQuiz, setQuestionsForQuiz] = useState([]);
  const [isFakeLoading, setIsFakeLoading] = useState(false);

  function fakeLoad(action) {
    setIsFakeLoading(true);

    setTimeout(() => {
      action();
      setIsFakeLoading(false);
    }, 1500 + Math.random() * 500);
  }

  return (
    <main className={styles['card']}>
      {currentPage === pages.welcome && (
        <Welcome
          setQuestionsForQuiz={setQuestionsForQuiz}
          maxQuestions={isPageLoading ? 0 : quizDataFromAPI.questions.length}
          quizData={isPageLoading ? null : quizDataFromAPI}
          fakeLoad={fakeLoad}
          isPageLoading={isPageLoading || isFakeLoading}
        />
      )}
      {currentPage === pages.questions && (
        <Questions
          onSuccesAnswer={incrementSuccessAnswersCount}
          questionsCount={questionsForQuiz.length}
          questions={questionsForQuiz}
          fakeLoad={fakeLoad}
          isPageLoading={isFakeLoading}
        />
      )}
      {currentPage === pages.result && (
        <Result
          successAnswersCount={successAnswersCount}
          maxAnswersCount={questionsForQuiz.length}
        />
      )}
    </main>
  );
}

export default Card;
