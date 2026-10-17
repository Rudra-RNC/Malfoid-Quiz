const questions = [
  // ─────────────────────────────────────
  // INITIATE — Beginner
  // ─────────────────────────────────────
  {
    id: "q1",
    category: "Origins",
    difficulty: "Initiate",
    question: "What does “Malfoid” primarily refer to in online fan culture?",
    options: [
      "A new Hogwarts house",
      "A fan-created female interpretation of Draco Malfoy",
      "A spell invented by Slytherin students",
      "A magical creature from the Forbidden Forest"
    ],
    correctAnswer: 1,
    explanation:
      "Malfoid is a fan-created interpretation of Draco Malfoy, rather than an official Harry Potter character."
  },
  {
    id: "q2",
    category: "Canon vs. Fanon",
    difficulty: "Initiate",
    question: "Is Malfoid an official character in the original Harry Potter canon?",
    options: [
      "Yes, from the original novels",
      "Yes, from the original films",
      "No, it is a fan-created concept",
      "Yes, from Hogwarts Legacy"
    ],
    correctAnswer: 2,
    explanation:
      "Malfoid is a fan-created concept, not an official character in the original Harry Potter story."
  },
  {
    id: "q3",
    category: "Character Design",
    difficulty: "Initiate",
    question: "Which hair color is most associated with Draco Malfoy?",
    options: [
      "Jet black",
      "Platinum blond",
      "Bright red",
      "Dark brown"
    ],
    correctAnswer: 1,
    explanation:
      "Draco Malfoy is famously depicted with pale platinum-blond hair."
  },
  {
    id: "q4",
    category: "Hogwarts",
    difficulty: "Initiate",
    question: "Which Hogwarts house does Draco Malfoy belong to?",
    options: [
      "Gryffindor",
      "Ravenclaw",
      "Hufflepuff",
      "Slytherin"
    ],
    correctAnswer: 3,
    explanation:
      "Draco Malfoy is a member of Slytherin House, associated with ambition, cunning, and resourcefulness."
  },
  {
    id: "q5",
    category: "Fandom",
    difficulty: "Initiate",
    question: "What does “fanon” mean?",
    options: [
      "An official fact from the original story",
      "A fan-created idea that is not established canon",
      "A spell taught at Hogwarts",
      "A list of official characters"
    ],
    correctAnswer: 1,
    explanation:
      "Fanon refers to ideas, conventions, or interpretations created and shared by fans."
  },

  // ─────────────────────────────────────
  // SLYTHERIN — Intermediate
  // ─────────────────────────────────────
  {
    id: "q6",
    category: "Character Tropes",
    difficulty: "Slytherin",
    question: "Which character trope describes someone who initially appears cold or hostile but reveals a warmer side?",
    options: [
      "Tsundere",
      "Chosen one",
      "Unreliable narrator",
      "Comic relief"
    ],
    correctAnswer: 0,
    explanation:
      "A tsundere character acts cold or prickly at first but gradually reveals a more affectionate side."
  },
  {
    id: "q7",
    category: "Fandom",
    difficulty: "Slytherin",
    question: "What is an alternate universe (AU) in fan fiction?",
    options: [
      "An official continuation of every original story",
      "A story that reimagines characters or events in a different setting",
      "A list of deleted scenes",
      "A canonical Hogwarts textbook"
    ],
    correctAnswer: 1,
    explanation:
      "An AU reimagines a story with changed circumstances, settings, relationships, or character backgrounds."
  },
  {
    id: "q8",
    category: "Canon vs. Fanon",
    difficulty: "Slytherin",
    question: "If a fan-made visual novel features Malfoid, how should it generally be classified?",
    options: [
      "Official book canon",
      "Official film canon",
      "Fan-created work",
      "A canonical Hogwarts course"
    ],
    correctAnswer: 2,
    explanation:
      "A fan-made visual novel is a fan work unless its content has separately been established as official canon."
  },
  {
    id: "q9",
    category: "Research Skills",
    difficulty: "Slytherin",
    question: "What is the best starting point for verifying the origin of a piece of fan art?",
    options: [
      "The most popular repost",
      "The original artist's dated post",
      "A random comment",
      "The first image in a search result"
    ],
    correctAnswer: 1,
    explanation:
      "An original, dated post is a strong starting point for checking attribution and publication history."
  },
  {
    id: "q10",
    category: "Internet Fandom",
    difficulty: "Slytherin",
    question: "Why should fan artists be credited when their work is referenced?",
    options: [
      "To make the work official canon",
      "To preserve attribution and respect the creator",
      "To guarantee the artwork is free to reuse",
      "To change the original publication date"
    ],
    correctAnswer: 1,
    explanation:
      "Credit helps identify the creator, but permission or a suitable licence may still be needed to reuse the artwork."
  },

  // ─────────────────────────────────────
  // INNER CIRCLE — Advanced
  // ─────────────────────────────────────
  {
    id: "q11",
    category: "Deep Lore",
    difficulty: "Inner Circle",
    question: "Does a popular fan interpretation automatically become official canon?",
    options: [
      "Yes, once it goes viral",
      "Yes, if enough fan accounts share it",
      "No, popularity does not make fan content official",
      "Only if it receives thousands of likes"
    ],
    correctAnswer: 2,
    explanation:
      "Popularity alone does not turn fan-created content into official canon."
  },
  {
    id: "q12",
    category: "Origins",
    difficulty: "Inner Circle",
    question: "A website names an artist as the originator of a fandom trend. What is the most responsible next step?",
    options: [
      "Repeat the claim without checking",
      "Assume the oldest-looking repost proves it",
      "Check dated primary sources and corroborating evidence",
      "Treat the claim as official canon"
    ],
    correctAnswer: 2,
    explanation:
      "Origin claims should be checked against primary sources and corroborating evidence. Some internet histories remain uncertain."
  },
  {
    id: "q13",
    category: "Character Design",
    difficulty: "Inner Circle",
    question: "What is the most accurate description of a fan-created character design?",
    options: [
      "An official design approved by default",
      "An artist's interpretation inspired by existing material",
      "A replacement for all original source material",
      "A design that cannot inspire other fan works"
    ],
    correctAnswer: 1,
    explanation:
      "Fan-created designs are interpretations and may inspire further works, but they are not automatically official."
  },
  {
    id: "q14",
    category: "Deep Lore",
    difficulty: "Inner Circle",
    question: "What should you check before reusing fan art on a public website?",
    options: [
      "Only how many likes it received",
      "Whether the image has a transparent background",
      "The creator's permission or applicable licence",
      "Whether the image appears in a search engine"
    ],
    correctAnswer: 2,
    explanation:
      "An image being publicly available does not automatically grant permission to reuse it. Check the creator's terms and applicable licence."
  },
  {
    id: "q15",
    category: "Internet Fandom",
    difficulty: "Inner Circle",
    question: "How should a fandom timeline with uncertain dates be presented?",
    options: [
      "As unquestionably complete",
      "As official canon",
      "With sources and clear qualifications where facts are uncertain",
      "Without mentioning any sources"
    ],
    correctAnswer: 2,
    explanation:
      "Timelines can be useful, but dates and origin claims should be supported by sources and uncertainty should be acknowledged."
  }
];
