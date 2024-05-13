import pages from '@/constants/pages.js';

import Layout from '@/components/Layout/Layout.jsx';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
import Card from '@/components/UI/Card/Card';

import { useEffect, useState } from 'react';
import { PageContext } from '@/context/context';

function App() {
  const [quizDataFromAPI, setQuizDataFromAPI] = useState([]);
  const [hasHeaderCloseBtn, setHasHeaderCloseBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(pages.welcome);
  const [successAnswersCount, setSuccessAnswersCount] = useState(0);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('quizz_questions.json');
        if (!response.ok) {
          throw new Error('Response is not ok');
        }

        const dataFromAPI = await response.json();
        setQuizDataFromAPI(dataFromAPI);

        setTimeout(() => {
          setIsPageLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  function successAnswersCountIncrementHandler() {
    setSuccessAnswersCount(successAnswersCount + 1);
  }

  function resetQuiz() {
    setSuccessAnswersCount(0);
    setPage(pages.welcome);
  }

  const setPage = (page) => {
    if (page === pages.questions) {
      setHasHeaderCloseBtn(true);
    } else {
      setHasHeaderCloseBtn(false);
    }
    setCurrentPage(page);
  };

  return (
    <Layout>
      <PageContext.Provider value={{ setPage, resetQuiz }}>
        <Header hasCloseBtn={hasHeaderCloseBtn} onReset={resetQuiz} />
        <Card
          isPageLoading={isPageLoading}
          currentPage={currentPage}
          quizDataFromAPI={quizDataFromAPI}
          incrementSuccessAnswersCount={successAnswersCountIncrementHandler}
          successAnswersCount={successAnswersCount}
        />
        <Footer />
      </PageContext.Provider>
    </Layout>
  );
}

export default App;
