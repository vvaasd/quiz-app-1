import { PAGES } from '@/constants';
import { Welcome, Questions, Result } from '@/pages';
import { Header, Footer } from '@/components';
import { PageContext } from '@/context/PageContext';
import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGES.welcome);
  const [isLoading, setIsLoading] = useState(false);
  const [questionsForQuiz, setQuestionsForQuiz] = useState([]);
  const [questionsCount, setQuestionsCount] = useState(0);
  const [successAnswersCount, setSuccessAnswersCount] = useState(0);
  const [hasHeaderCloseBtn, setHasHeaderCloseBtn] = useState(false);

  const setPage = (pageName) => {
    const withCloseBtn = pageName === PAGES.questions;

    setHasHeaderCloseBtn(withCloseBtn);
    setCurrentPage(pageName);
  };

  const incrementSuccessAnswersCount = () => {
    setSuccessAnswersCount((prev) => prev + 1);
  };

  const resetQuiz = () => {
    setSuccessAnswersCount(0);
    setPage(PAGES.welcome);
  };

  const fakeLoad = (action) => {
    setIsLoading(true);

    setTimeout(() => {
      action();
      setIsLoading(false);
    }, 1500 + Math.random() * 500);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <PageContext.Provider
          value={{
            setPage,
            currentPage,
            setQuestionsForQuiz,
            questionsForQuiz,
            fakeLoad,
            isLoading,
            setQuestionsCount,
            questionsCount,
            incrementSuccessAnswersCount,
            successAnswersCount,

            resetQuiz,
          }}
        >
          <Header hasCloseBtn={hasHeaderCloseBtn} onReset={resetQuiz} />
          <main className={styles.main}>
            {currentPage === PAGES.welcome && <Welcome />}
            {currentPage === PAGES.questions && <Questions />}
            {currentPage === PAGES.result && <Result />}
          </main>
          <Footer />
        </PageContext.Provider>
      </div>
    </div>
  );
};

export default App;
