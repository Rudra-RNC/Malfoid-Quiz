document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const startButton = document.getElementById("start-quiz");
  const categoriesSection = document.getElementById("categories");
  const quizSection = document.getElementById("quiz");
  const resultsSection = document.getElementById("results");

  const questionCounter = document.getElementById("question-counter");
  const scoreDisplay = document.getElementById("score-display");
  const progressFill = document.getElementById("progress-fill");

  const questionCategory = document.getElementById("question-category");
  const questionTitle = document.getElementById("question-title");
  const answerList = document.getElementById("answer-list");

  const feedback = document.getElementById("feedback");
  const nextButton = document.getElementById("next-question");

  const resultsTitle = document.getElementById("results-title");
  const finalScore = document.getElementById("final-score");
  const resultsDescription = document.getElementById("results-description");
  const restartButton = document.getElementById("restart-quiz");

  // Verify that questions.js has loaded.
  if (!Array.isArray(questions) || questions.length === 0) {
    console.error("No questions found. Check js/questions.js.");
    if (startButton) startButton.disabled = true;
    return;
  }

  // Quiz state
  let quizQuestions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let answered = false;

  // Display the requested screen.
  function showScreen(screen) {
    if (categoriesSection) categoriesSection.hidden = screen !== "home";
    if (quizSection) quizSection.hidden = screen !== "quiz";
    if (resultsSection) resultsSection.hidden = screen !== "results";
  }

  // Start a fresh quiz.
  function startQuiz() {
    quizQuestions = [...questions];
    currentQuestionIndex = 0;
    score = 0;
    answered = false;

    // Shuffle the questions.
    quizQuestions.sort(() => Math.random() - 0.5);

    if (scoreDisplay) scoreDisplay.textContent = "Score: 0";
    if (progressFill) progressFill.style.width = "0%";

    showScreen("quiz");
    renderQuestion();
  }

  // Render the current question and its options.
  function renderQuestion() {
    const question = quizQuestions[currentQuestionIndex];

    if (!question) {
      showResults();
      return;
    }

    answered = false;

    if (questionCounter) {
      questionCounter.textContent =
        `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    }

    if (questionCategory) {
      questionCategory.textContent =
        `${question.category} · ${question.difficulty}`;
    }

    if (questionTitle) {
      questionTitle.textContent = question.question;
    }

    if (answerList) {
      answerList.replaceChildren();

      question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-option";
        button.textContent = option;

        button.addEventListener("click", () => {
          selectAnswer(index);
        });

        answerList.appendChild(button);
      });
    }

    if (feedback) {
      feedback.hidden = true;
      feedback.replaceChildren();
    }

    if (nextButton) {
      nextButton.hidden = true;
      nextButton.textContent = "Next Question";
    }

    updateProgress();
  }

  // Handle an answer selection.
  function selectAnswer(selectedIndex) {
    if (answered) return;

    answered = true;

    const question = quizQuestions[currentQuestionIndex];
    const buttons = answerList.querySelectorAll(".answer-option");
    const isCorrect = selectedIndex === question.correctAnswer;

    if (isCorrect) {
      score++;
    }

    // Mark the correct and selected answers.
    buttons.forEach((button, index) => {
      button.disabled = true;

      if (index === question.correctAnswer) {
        button.classList.add("correct");
      } else if (index === selectedIndex) {
        button.classList.add("incorrect");
      }
    });

    if (scoreDisplay) {
      scoreDisplay.textContent = `Score: ${score}`;
    }

    // Show feedback safely using textContent.
    if (feedback) {
      const heading = document.createElement("strong");
      heading.textContent = isCorrect ? "Correct!" : "Not quite.";

      const explanation = document.createElement("p");
      explanation.textContent =
        question.explanation ||
        `Correct answer: ${question.options[question.correctAnswer]}`;

      feedback.replaceChildren(heading, explanation);
      feedback.hidden = false;
    }

    if (nextButton) {
      nextButton.textContent =
        currentQuestionIndex === quizQuestions.length - 1
          ? "View Results"
          : "Next Question";

      nextButton.hidden = false;
    }

    updateProgress();
  }

  // Update the progress bar.
  function updateProgress() {
    if (!progressFill || quizQuestions.length === 0) return;

    const completed = currentQuestionIndex + (answered ? 1 : 0);
    const percentage = (completed / quizQuestions.length) * 100;

    progressFill.style.width = `${percentage}%`;
  }

  // Move to the next question.
  function nextQuestion() {
    if (!answered) return;

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }

  // Display the final score.
  function showResults() {
    const total = quizQuestions.length;
    const percentage = Math.round((score / total) * 100);

    if (resultsTitle) {
      if (percentage === 100) {
        resultsTitle.textContent = "A True Member of the Inner Circle";
      } else if (percentage >= 70) {
        resultsTitle.textContent = "Your Slytherin Knowledge Runs Deep";
      } else if (percentage >= 40) {
        resultsTitle.textContent = "A Promising Start";
      } else {
        resultsTitle.textContent = "Back to the Archives";
      }
    }

    if (finalScore) {
      finalScore.textContent = `${score} / ${total} (${percentage}%)`;
    }

    if (resultsDescription) {
      resultsDescription.textContent =
        percentage >= 70
          ? "Well played. Your knowledge of Malfoid lore is impressive."
          : "Study the lore, remember the details, and try again.";
    }

    showScreen("results");
  }

  // Return to the landing page.
  function restartQuiz() {
    showScreen("home");

    if (progressFill) {
      progressFill.style.width = "0%";
    }
  }

  // Connect buttons to their functions.
  if (startButton) {
    startButton.addEventListener("click", startQuiz);
  }

  if (nextButton) {
    nextButton.addEventListener("click", nextQuestion);
  }

  if (restartButton) {
    restartButton.addEventListener("click", restartQuiz);
  }

  // Initial state.
  showScreen("home");
});
