export const generateQuizFrom = (data, count) => {
  const questionsFromData = data.questions
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
  const answersFromData = data.countries;

  const generatedQuiz = [];
  for (const questionFromData of questionsFromData) {
    const answersForQuizUnit = [];
    const correctAnswer = questionFromData.correctAnswer;

    // generate answers for quizUnit
    const correctAnswerIndex = Math.floor(Math.random() * 4);

    while (answersForQuizUnit.length < 4) {
      if (answersForQuizUnit.length !== correctAnswerIndex) {
        const randomAnswer =
          answersFromData[Math.floor(Math.random() * answersFromData.length)];

        if (
          !answersForQuizUnit.includes(randomAnswer) &&
          randomAnswer !== correctAnswer
        ) {
          answersForQuizUnit.push(randomAnswer);
        }
      } else {
        answersForQuizUnit.push(correctAnswer);
        answersFromData.splice(answersFromData.indexOf(correctAnswer), 1);
      }
    }
    // end of generating answers for quizUnit

    const quizUnit = {
      question: questionFromData.question,
      flag: questionFromData.flag,
      correctAnswer: correctAnswer,
      answers: answersForQuizUnit,
    };
    generatedQuiz.push(quizUnit);
  }

  return generatedQuiz;
};
