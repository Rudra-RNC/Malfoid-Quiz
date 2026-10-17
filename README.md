# 🐍 Malfoid Knowledge Quiz

**How well do you know the Malfoid lore?**

Malfoid Knowledge Quiz is a fan-made quiz website where users can test their knowledge of the Malfoid character, its origins, fan interpretations, artwork, and internet lore.

Featuring a dark, Slytherin-inspired aesthetic, the website combines an interactive quiz experience with questions across different difficulty levels.

## ✨ Features

- **Interactive Quizzes** — Answer multiple-choice questions about Malfoid lore.
- **Multiple Difficulty Levels** — Progress from beginner-friendly questions to more challenging trivia.
- **Instant Feedback** — Learn whether your answer is correct, with explanations for each question.
- **Score Tracking** — Track your performance throughout a quiz.
- **Progress Indicator** — See how far you've progressed through the quiz.
- **Results Screen** — Review your final score when you finish.
- **Responsive Design** — A layout designed to work across desktop and mobile screens.
- **Vanilla JavaScript** — Built without frontend frameworks or libraries.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling, animations, and responsive layout |
| Vanilla JavaScript | Quiz logic and interactivity |

## 📁 Project Structure

```text
malfoid-quiz/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── questions.js
│   └── app.js
└── assets/
    └── images/
```

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser. No Node.js installation, package manager, or build tools are required.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rudra-RNC/Malfoid-Quiz.git
   ```

2. Navigate to the project directory:

   ```bash
   cd malfoid-quiz
   ```

3. Open `index.html` in your browser.

   Alternatively, use the **Live Server** extension in Visual Studio Code for local development.

## 🎮 How to Play

1. Open the website.
2. Start the quiz and select a difficulty or category, if available.
3. Read each question and select an answer.
4. Review the feedback and explanation.
5. Continue until all questions are answered.
6. View your final score and restart to try again.

## 🧩 Adding Questions

Quiz questions are stored in `js/questions.js`, separate from the quiz logic.

Example question:

```javascript
const questions = [
  {
    id: "q1",
    category: "Origins",
    difficulty: "Initiate",
    question: "What does Malfoid primarily refer to?",
    options: [
      "Draco Malfoy's original canonical form",
      "A fan-created female interpretation of Draco Malfoy",
      "A new Hogwarts house",
      "A spell invented by Slytherin students"
    ],
    correctAnswer: 1,
    explanation:
      "Malfoid is a fan-created reinterpretation of Draco Malfoy."
  }
];
```

**Question format:**
- `id`: Unique question identifier.
- `category`: The lore category.
- `difficulty`: The question's difficulty level.
- `question`: The question text.
- `options`: An array of possible answers.
- `correctAnswer`: The zero-based index of the correct option.
- `explanation`: A short explanation shown after answering.

Add more objects to the array to expand the quiz.

## 🎨 Design

The visual identity takes inspiration from Slytherin aesthetics:

- Deep forest-green backgrounds.
- Antique gold accents.
- Parchment-inspired text colors.
- Elegant serif typography paired with clean sans-serif text.
- Subtle transitions and interactive answer states.

The design aims to create a dark, atmospheric experience without sacrificing readability or usability.

## 📚 Lore & References

The quiz draws inspiration from online Malfoid fan discussions, character interpretations, artwork, and related fan-created content.

Reference websites:

- [Malfoid.com](https://malfoid.com/)
- [Malfoid.co](https://malfoid.co/)
- [Malfoid Origin](https://malfoid.co/origin)
- [Malfoid Timeline](https://malfoid.co/timeline)
- [Malfoid Meaning](https://malfoid.co/meaning)

Lore details and community-origin claims should be checked against their sources before being treated as definitive.

## ⚠️ Disclaimer

This is an unofficial, fan-made project created for entertainment and educational purposes.

Malfoid, Draco Malfoy, and other Harry Potter-related names and characters belong to their respective rights holders. This project is not affiliated with, endorsed by, or associated with J. K. Rowling, Warner Bros., or any official Harry Potter franchise.

Any third-party artwork, references, or other copyrighted material remain the property of their respective creators. Credit and permission should be provided where appropriate.

## 🤝 Contributing

Contributions that improve the quiz experience are welcome.

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your feature"
   ```

4. Push your branch and open a pull request.

Ideas for contributions include new lore questions, improved accessibility, additional difficulty levels, better mobile layouts, and performance improvements.

## 📄 License

Choose a license before distributing the project. If you intend to open-source the code, consider the [MIT License](https://opensource.org/license/mit), while keeping in mind that it does not grant rights to third-party characters, artwork, or other copyrighted content.

---

*Enter the Slytherin archives. Test your knowledge. Prove your Malfoid expertise.* 🐍
