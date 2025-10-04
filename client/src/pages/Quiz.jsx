import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { saveQuizResult } from "../api";
// --- DATA STORE ---
// All static data for the quiz, including the updated career database.
const quizData = {
  questions: [
    // RIASEC Questions (Relatable language)
    {
      id: "q1",
      text: "I enjoy working with tools or machines to build or repair things.",
      framework: "RIASEC",
      dimension: "R",
    },
    {
      id: "q2",
      text: "I am fascinated by scientific breakthroughs and like to understand how things work.",
      framework: "RIASEC",
      dimension: "I",
    },
    {
      id: "q3",
      text: "I like to come up with new ideas and express them through creative work (like design, writing, or music).",
      framework: "RIASEC",
      dimension: "A",
    },
    {
      id: "q4",
      text: "I feel fulfilled when I can help or teach others.",
      framework: "RIASEC",
      dimension: "S",
    },
    {
      id: "q5",
      text: "I enjoy leading a team and persuading others to work towards a common goal.",
      framework: "RIASEC",
      dimension: "E",
    },
    {
      id: "q6",
      text: "I am good at organizing information, managing data, and following a clear set of rules.",
      framework: "RIASEC",
      dimension: "C",
    },
    {
      id: "q7",
      text: "I would rather be working on a practical, hands-on project than writing a long report.",
      framework: "RIASEC",
      dimension: "R",
    },
    {
      id: "q8",
      text: "I enjoy solving complex, abstract problems.",
      framework: "RIASEC",
      dimension: "I",
    },
    {
      id: "q9",
      text: "I appreciate art, design, and aesthetics in my surroundings.",
      framework: "RIASEC",
      dimension: "A",
    },
    {
      id: "q10",
      text: "I am a good listener and people often come to me for advice.",
      framework: "RIASEC",
      dimension: "S",
    },
    {
      id: "q11",
      text: "I am comfortable taking calculated risks, especially if it could lead to a big success.",
      framework: "RIASEC",
      dimension: "E",
    },
    {
      id: "q12",
      text: "I prefer my work to be well-planned and orderly.",
      framework: "RIASEC",
      dimension: "C",
    },
    {
      id: "q13",
      text: "I find satisfaction in seeing the tangible results of my work, like a finished product.",
      framework: "RIASEC",
      dimension: "R",
    },
    {
      id: "q14",
      text: "I like to do research and analyze data to find patterns.",
      framework: "RIASEC",
      dimension: "I",
    },
    {
      id: "q15",
      text: "I prefer a work environment where I have the freedom to be original and innovative.",
      framework: "RIASEC",
      dimension: "A",
    },
    {
      id: "q16",
      text: "I enjoy collaborating with others and working in a team.",
      framework: "RIASEC",
      dimension: "S",
    },
    {
      id: "q17",
      text: "I am interested in business, management, or finance.",
      framework: "RIASEC",
      dimension: "E",
    },
    {
      id: "q18",
      text: "I am careful and pay close attention to details in my work.",
      framework: "RIASEC",
      dimension: "C",
    },
    {
      id: "q19",
      text: "I like working outdoors or in a physically active job.",
      framework: "RIASEC",
      dimension: "R",
    },
    {
      id: "q20",
      text: "I am driven by curiosity and a desire to learn new things.",
      framework: "RIASEC",
      dimension: "I",
    },
    {
      id: "q21",
      text: "I can think outside the box to solve problems.",
      framework: "RIASEC",
      dimension: "A",
    },
    {
      id: "q22",
      text: "Working for a cause that benefits society is important to me.",
      framework: "RIASEC",
      dimension: "S",
    },
    {
      id: "q23",
      text: "I am confident in my ability to make decisions and lead others.",
      framework: "RIASEC",
      dimension: "E",
    },
    {
      id: "q24",
      text: "I am reliable and always make sure my work is accurate.",
      framework: "RIASEC",
      dimension: "C",
    },
    {
      id: "q25",
      text: "I'm skilled at operating complex equipment or software.",
      framework: "RIASEC",
      dimension: "R",
    },
    {
      id: "q26",
      text: "I enjoy reading scientific articles or technical books.",
      framework: "RIASEC",
      dimension: "I",
    },
    {
      id: "q27",
      text: "I want a career where I can put my unique stamp on my work.",
      framework: "RIASEC",
      dimension: "A",
    },
    {
      id: "q28",
      text: "I find it easy to understand other people's perspectives.",
      framework: "RIASEC",
      dimension: "S",
    },
    {
      id: "q29",
      text: "I am good at negotiating and convincing people of my point of view.",
      framework: "RIASEC",
      dimension: "E",
    },
    {
      id: "q30",
      text: "I am comfortable working with spreadsheets, code, or financial reports.",
      framework: "RIASEC",
      dimension: "C",
    },

    // Big Five Questions (Relatable language)
    {
      id: "q31",
      text: "I am curious about many different things.",
      framework: "BigFive",
      trait: "O",
      reverse: false,
    },
    {
      id: "q32",
      text: "I am systematic and efficient.",
      framework: "BigFive",
      trait: "C",
      reverse: false,
    },
    {
      id: "q33",
      text: "I am talkative and outgoing.",
      framework: "BigFive",
      trait: "E",
      reverse: false,
    },
    {
      id: "q34",
      text: "I often point out mistakes in others' work.",
      framework: "BigFive",
      trait: "A",
      reverse: true,
    },
    {
      id: "q35",
      text: "I often worry about things.",
      framework: "BigFive",
      trait: "N",
      reverse: false,
    },
    {
      id: "q36",
      text: "I have a vivid imagination.",
      framework: "BigFive",
      trait: "O",
      reverse: false,
    },
    {
      id: "q37",
      text: "I can be messy and disorganized at times.",
      framework: "BigFive",
      trait: "C",
      reverse: true,
    },
    {
      id: "q38",
      text: "In social situations, I'm usually the one who starts conversations.",
      framework: "BigFive",
      trait: "E",
      reverse: false,
    },
    {
      id: "q39",
      text: "I am considerate and kind to almost everyone.",
      framework: "BigFive",
      trait: "A",
      reverse: false,
    },
    {
      id: "q40",
      text: "I get stressed out easily.",
      framework: "BigFive",
      trait: "N",
      reverse: false,
    },
    {
      id: "q41",
      text: "I prefer concrete facts to abstract theories.",
      framework: "BigFive",
      trait: "O",
      reverse: true,
    },
    {
      id: "q42",
      text: "I follow a schedule and always finish tasks I start.",
      framework: "BigFive",
      trait: "C",
      reverse: false,
    },
    {
      id: "q43",
      text: "I prefer to work alone rather than in a group.",
      framework: "BigFive",
      trait: "E",
      reverse: true,
    },
    {
      id: "q44",
      text: "I trust people and believe in the good in others.",
      framework: "BigFive",
      trait: "A",
      reverse: false,
    },
    {
      id: "q45",
      text: "I am usually relaxed and emotionally stable.",
      framework: "BigFive",
      trait: "N",
      reverse: true,
    },
    {
      id: "q46",
      text: "I enjoy artistic and creative activities.",
      framework: "BigFive",
      trait: "O",
      reverse: false,
    },
    {
      id: "q47",
      text: "I am very meticulous and pay attention to details.",
      framework: "BigFive",
      trait: "C",
      reverse: false,
    },
    {
      id: "q48",
      text: "I feel energized and comfortable around other people.",
      framework: "BigFive",
      trait: "E",
      reverse: false,
    },
    {
      id: "q49",
      text: "I tend to find fault with others.",
      framework: "BigFive",
      trait: "A",
      reverse: true,
    },
    {
      id: "q50",
      text: "I rarely feel sad or down.",
      framework: "BigFive",
      trait: "N",
      reverse: true,
    },
  ],
  career_database: [
    // Core Engineering & Tech
    {
      title: "Software Developer",
      riasec: "IRC",
      ideal_bigfive: { O: 17, C: 18, E: 9, A: 12, N: 8 },
      reasoning:
        "Suits logical, investigative minds who enjoy the realistic process of building software. High conscientiousness ensures clean, reliable code.",
    },
    {
      title: "AI/ML Engineer",
      riasec: "IRC",
      ideal_bigfive: { O: 18, C: 18, E: 10, A: 11, N: 9 },
      reasoning:
        "Combines deep, investigative problem-solving with the realistic application of building algorithms. High Openness is key for creativity in finding new solutions.",
    },
    {
      title: "Data Scientist",
      riasec: "ICE",
      ideal_bigfive: { O: 18, C: 17, E: 12, A: 11, N: 9 },
      reasoning:
        "Perfect for investigative thinkers who are also organized (Conventional) and can communicate findings to business stakeholders (Enterprising).",
    },
    {
      title: "Mechanical Engineer",
      riasec: "RIC",
      ideal_bigfive: { O: 14, C: 17, E: 11, A: 10, N: 10 },
      reasoning:
        "A classic role for realistic 'doers' who use investigative principles to design and build machines, with a conventional need for precision.",
    },

    // Product & Design
    {
      title: "Product Manager",
      riasec: "EIC",
      ideal_bigfive: { O: 17, C: 17, E: 18, A: 15, N: 8 },
      reasoning:
        "Owns product vision and execution. Requires stakeholder management, user empathy, prioritization skills, and the ability to translate technical constraints into business decisions.",
    },
    {
      title: "UX Researcher",
      riasec: "ISA",
      ideal_bigfive: { O: 17, C: 16, E: 13, A: 18, N: 7 },
      reasoning:
        "Uncovers user needs through qualitative and quantitative research. High empathy and careful observation help produce actionable insights for designers and product teams.",
    },
    {
      title: "UX/UI Designer",
      riasec: "AIC",
      ideal_bigfive: { O: 19, C: 15, E: 14, A: 16, N: 10 },
      reasoning:
        "Creates intuitive digital experiences. A mix of creativity, user-centered thinking, and willingness to iterate helps craft successful interfaces.",
    },
    {
      title: "Interaction Designer",
      riasec: "AIC",
      ideal_bigfive: { O: 18, C: 15, E: 13, A: 15, N: 10 },
      reasoning:
        "Focuses on how users interact with products; combines research findings with visual and micro-interaction design to improve usability.",
    },
    {
      title: "Technical Writer",
      riasec: "AEC",
      ideal_bigfive: { O: 16, C: 17, E: 12, A: 13, N: 9 },
      reasoning:
        "Communicates complex technical ideas simply; attention to clarity, structure, and audience needs is critical.",
    },

    // Corporate, Business & Strategy
    {
      title: "Management Consultant",
      riasec: "EIC",
      ideal_bigfive: { O: 16, C: 18, E: 17, A: 12, N: 9 },
      reasoning:
        "Solves strategic business problems under tight deadlines. Excellent analytical frameworks, client communication, and adaptability are required.",
    },
    {
      title: "Business Analyst",
      riasec: "CIE",
      ideal_bigfive: { O: 15, C: 17, E: 14, A: 11, N: 9 },
      reasoning:
        "Links business needs to technical solutions; success is driven by structured analysis, stakeholder listening, and prioritization.",
    },
    {
      title: "Financial Analyst",
      riasec: "CIE",
      ideal_bigfive: { O: 14, C: 18, E: 12, A: 10, N: 10 },
      reasoning:
        "Models business performance and informs investment decisions. High numerical accuracy and disciplined workflows are essential.",
    },
    {
      title: "Supply Chain Analyst",
      riasec: "CSE",
      ideal_bigfive: { O: 13, C: 18, E: 12, A: 13, N: 9 },
      reasoning:
        "Optimizes logistics and operations; requires system-level thinking, forecasting skills, and resilience under variability.",
    },
    {
      title: "Operations Manager",
      riasec: "SEC",
      ideal_bigfive: { O: 14, C: 18, E: 14, A: 13, N: 10 },
      reasoning:
        "Ensures smooth day-to-day delivery in a business; strong process thinking, people management, and problem-solving under pressure matter.",
    },

    // Sales, Marketing & Communication
    {
      title: "Digital Marketing Specialist",
      riasec: "EAC",
      ideal_bigfive: { O: 16, C: 15, E: 16, A: 13, N: 10 },
      reasoning:
        "Uses data and creativity to grow audiences and revenue; A/B testing, content strategy, and analytics are core skills.",
    },
    {
      title: "Content Strategist",
      riasec: "AEC",
      ideal_bigfive: { O: 18, C: 15, E: 16, A: 13, N: 9 },
      reasoning:
        "Plans content to meet user and business goals; requires a mix of storytelling, measurement, and editorial judgment.",
    },
    {
      title: "SEO Specialist",
      riasec: "CIE",
      ideal_bigfive: { O: 15, C: 17, E: 12, A: 12, N: 9 },
      reasoning:
        "Improves organic visibility using data-driven tactics; technical curiosity and steady experimentation pay off.",
    },
    {
      title: "Sales Engineer",
      riasec: "EIR",
      ideal_bigfive: { O: 15, C: 16, E: 17, A: 13, N: 10 },
      reasoning:
        "Explains technical products to buyers and closes deals. A blend of technical understanding and relationship-building is required.",
    },
    {
      title: "Social Media Manager",
      riasec: "EAE",
      ideal_bigfive: { O: 16, C: 14, E: 18, A: 14, N: 11 },
      reasoning:
        "Crafts audience-facing content and community engagement strategies; creativity and consistent execution are key.",
    },

    // Creative & Media
    {
      title: "Game Designer",
      riasec: "AIE",
      ideal_bigfive: { O: 19, C: 14, E: 15, A: 14, N: 10 },
      reasoning:
        "Designs gameplay systems and player experiences; imagination, iterative testing, and player empathy are important.",
    },
    {
      title: "Journalist",
      riasec: "AIS",
      ideal_bigfive: { O: 18, C: 15, E: 16, A: 14, N: 11 },
      reasoning:
        "Investigates and reports stories that matter; strong curiosity, ethical judgment, and clear writing are demanded.",
    },
    {
      title: "Filmmaker / Producer",
      riasec: "AIE",
      ideal_bigfive: { O: 19, C: 13, E: 17, A: 14, N: 10 },
      reasoning:
        "Tells stories at scale and manages large crews; creative leadership, budgeting sense, and resilience through long production cycles are essential.",
    },
    {
      title: "Animator / Motion Designer",
      riasec: "AIC",
      ideal_bigfive: { O: 19, C: 14, E: 13, A: 15, N: 10 },
      reasoning:
        "Creates motion visuals that communicate ideas; strong craft skills, attention to timing, and collaboration with directors are required.",
    },

    // Public Service & Legal
    {
      title: "IAS Officer (Civil Services)",
      riasec: "SEI",
      ideal_bigfive: { O: 15, C: 18, E: 16, A: 16, N: 8 },
      reasoning:
        "A social role dedicated to public service, requiring enterprising leadership to manage districts/departments, and investigative skills for policy analysis.",
    },
    {
      title: "Policy Researcher",
      riasec: "IEC",
      ideal_bigfive: { O: 17, C: 17, E: 13, A: 15, N: 9 },
      reasoning:
        "Researches policy options with evidence; clarity in writing, stakeholder mapping, and methodological care matter.",
    },
    {
      title: "Patent Examiner / IP Analyst",
      riasec: "ICE",
      ideal_bigfive: { O: 16, C: 18, E: 11, A: 12, N: 10 },
      reasoning:
        "Evaluates inventions for novelty; requires technical understanding, careful legal reading, and impartial judgment.",
    },
    {
      title: "Legal Tech Specialist",
      riasec: "CIE",
      ideal_bigfive: { O: 15, C: 17, E: 12, A: 12, N: 10 },
      reasoning:
        "Applies technology to legal workflows; blends attention to regulatory detail with system design skills.",
    },

    // Entrepreneurship, Emerging & Interdisciplinary Roles
    {
      title: "Startup Founder",
      riasec: "EAI",
      ideal_bigfive: { O: 18, C: 18, E: 19, A: 12, N: 7 },
      reasoning:
        "The ultimate enterprising role. Requires high artistic creativity for vision, and investigative skills for market analysis. Low neuroticism helps handle stress.",
    },
    {
      title: "AR/VR Developer",
      riasec: "AIC",
      ideal_bigfive: { O: 19, C: 15, E: 13, A: 15, N: 10 },
      reasoning:
        "Builds immersive experiences; a mix of creative thinking, technical craft, and user testing makes products delightful and usable.",
    },
    {
      title: "Sustainability Consultant",
      riasec: "SIE",
      ideal_bigfive: { O: 17, C: 16, E: 14, A: 17, N: 8 },
      reasoning:
        "Advises organizations on environmental strategy; both systems thinking and stakeholder persuasion are required.",
    },
    {
      title: "GIS Specialist",
      riasec: "RIC",
      ideal_bigfive: { O: 15, C: 17, E: 11, A: 12, N: 9 },
      reasoning:
        "Analyzes spatial data to support planning and operations; accuracy, spatial reasoning, and domain knowledge in geography are valuable.",
    },
    {
      title: "Quality Assurance Engineer",
      riasec: "RCI",
      ideal_bigfive: { O: 14, C: 18, E: 11, A: 12, N: 10 },
      reasoning:
        "Ensures product quality through testing and process control; meticulousness and patience are key strengths.",
    },
    {
      title: "Customer Success Manager",
      riasec: "SEA",
      ideal_bigfive: { O: 15, C: 15, E: 17, A: 17, N: 9 },
      reasoning:
        "Helps customers succeed with products; relationship-building, empathy, and operational follow-through make this role effective.",
    },
  ],
  riasecDescriptions: {
    R: "<strong>Realistic (Doers):</strong> People who are practical, hands-on, and tool-oriented. They enjoy physical tasks and working with machines. They often prefer to work outdoors.",
    I: "<strong>Investigative (Thinkers):</strong> People who are analytical, curious, and observant. They enjoy solving complex problems and working with ideas and theories.",
    A: "<strong>Artistic (Creators):</strong> People who are creative, imaginative, and expressive. They enjoy working in unstructured environments and producing original work.",
    S: "<strong>Social (Helpers):</strong> People who are empathetic, cooperative, and supportive. They enjoy helping, teaching, and working with others.",
    E: "<strong>Enterprising (Persuaders):</strong> People who are ambitious, assertive, and persuasive. They enjoy leading people, making decisions, and taking risks for business.",
    C: "<strong>Conventional (Organizers):</strong> People who are organized, efficient, and detail-oriented. They enjoy working with data and carrying out tasks in a systematic way.",
  },
  bigFiveDescriptions: {
    O: "<strong>Openness:</strong> This trait reflects imagination, creativity, and a preference for variety. High scorers are curious and adventurous. Low scorers are more conventional and prefer routines.",
    C: "<strong>Conscientiousness:</strong> This trait reflects self-discipline, carefulness, and organization. High scorers are reliable and hardworking. Low scorers can be more spontaneous and less structured.",
    E: "<strong>Extraversion:</strong> This trait reflects sociability, assertiveness, and emotional expression. High scorers are outgoing and energized by social interaction. Low scorers (introverts) are more reserved and energized by solitude.",
    A: "<strong>Agreeableness:</strong> This trait reflects kindness, empathy, and cooperation. High scorers are trusting and helpful. Low scorers can be more competitive and skeptical.",
    N: "<strong>Neuroticism (Emotional Stability):</strong> This trait reflects emotional stability and resilience. Low scorers are calm and secure. High scorers are more prone to stress, anxiety, and negative emotions.",
  },
};

// --- HELPER COMPONENTS ---

const RiasecChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: [
          "Realistic",
          "Investigative",
          "Artistic",
          "Social",
          "Enterprising",
          "Conventional",
        ],
        datasets: [
          {
            label: "Your Score",
            data: Object.values(data),
            fill: true,
            backgroundColor: "rgba(129, 140, 248, 0.2)",
            borderColor: "rgb(99, 102, 241)",
            pointBackgroundColor: "rgb(99, 102, 241)",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          r: { beginAtZero: true, max: 5, pointLabels: { font: { size: 14 } } },
        },
      },
    });
    return () => chart.destroy();
  }, [data]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

const BigFiveChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Openness",
          "Conscientiousness",
          "Extraversion",
          "Agreeableness",
          "Neuroticism",
        ],
        datasets: [
          {
            label: "Your Score",
            data: Object.values(data),
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: "y",
        maintainAspectRatio: false,
        scales: { x: { beginAtZero: true, max: 20 } },
        plugins: { legend: { display: false } },
      },
    });
    return () => chart.destroy();
  }, [data]);

  return (
    <div className="chart-container" style={{ maxWidth: "600px" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

// --- Main App Component ---
function Quiz() {
  const [screen, setScreen] = useState("welcome"); // 'welcome', 'quiz', 'results'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState("recommendations");
  const [validationError, setValidationError] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  const [bigFiveScores, setBigFiveScores] = useState({
    O: 0,
    C: 0,
    E: 0,
    A: 0,
    N: 0,
  });

  const [riasecScores, setRiasecScores] = useState({
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0,
  });
  const totalQuestions = quizData.questions.length;

  const handleStartQuiz = () => {
    if (consentChecked) {
      setScreen("quiz");
    }
  };

  const handleAnswerSelect = (questionId, value) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: value }));
    setValidationError(false);
  };

  const validateCurrentAnswer = () => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    if (userAnswers[currentQuestion.id] === undefined) {
      setValidationError(true);
      return false;
    }
    setValidationError(false);
    return true;
  };

  const handleNext = () => {
    if (validateCurrentAnswer()) {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setValidationError(false);
    }
  };

  const handleSubmit = async () => {
  if (validateCurrentAnswer()) {
    // Step 1: Calculate results locally (this should set your scores in state)
    calculateAndSetResults();

    try {
      // Step 2: Prepare data to send
      const data = { bigFiveScores, riasecScores };
      console.log("📤 Sending quiz results:", data);

      // Step 3: Send to backend (POST /api/quiz)
      const res = await saveQuizResult(data);

      if (res.status === 201) {
        console.log("✅ Results saved to backend:", res.data);
      } else {
        console.warn("⚠️ Unexpected response:", res);
      }
    } catch (err) {
      console.error("❌ Error saving results:", err);
    }

    // Step 4: Navigate to results screen
    setScreen("results");
  }
};


  const calculateAndSetResults = () => {
    quizData.questions
      .filter((q) => q.framework === "RIASEC")
      .forEach((q) => {
        if (userAnswers[q.id] === "Like") {
          riasecScores[q.dimension]++;
        }
      });
    console.log(riasecScores);

    const sortedRiasec = Object.entries(riasecScores).sort(
      ([, a], [, b]) => b - a
    );
    const hollandCode = sortedRiasec
      .slice(0, 3)
      .map((item) => item[0])
      .join("");

    quizData.questions
      .filter((q) => q.framework === "BigFive")
      .forEach((q) => {
        let value = userAnswers[q.id] || 0; // Default to 0 if unanswered
        if (q.reverse) {
          value = 6 - value;
        }
        bigFiveScores[q.trait] += value;
      });
    console.log(bigFiveScores);
    const recommendedCareers = rankCareers(riasecScores, bigFiveScores);
    const personalityProfile = generatePersonalityProfile(
      hollandCode,
      bigFiveScores
    );

    setResults({
      riasecScores,
      hollandCode,
      bigFiveScores,
      recommendedCareers,
      personalityProfile,
    });
  };

  const rankCareers = (riasecScores, bigFiveScores) => {
    const ranked = quizData.career_database.map((career) => {
      let riasecMatch = 0;
      const userTop3 = Object.entries(riasecScores)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map((i) => i[0]);

      if (career.riasec.includes(userTop3[0])) riasecMatch += 0.5;
      if (career.riasec.includes(userTop3[1])) riasecMatch += 0.3;
      if (career.riasec.includes(userTop3[2])) riasecMatch += 0.2;

      let bigFiveDistances = 0;
      const maxDiff = 16;
      for (const trait in bigFiveScores) {
        const diff = Math.abs(
          bigFiveScores[trait] - career.ideal_bigfive[trait]
        );
        bigFiveDistances += diff / maxDiff;
      }
      const bigFiveMatch = 1 - bigFiveDistances / 5;
      const finalScore = 0.6 * riasecMatch + 0.4 * bigFiveMatch;

      return { ...career, score: finalScore };
    });
    return ranked.sort((a, b) => b.score - a.score).slice(0, 5);
  };

  const generatePersonalityProfile = (hollandCode, bigFiveScores) => {
    const profile = { strengths: [], weaknesses: [], workStyle: "" };
    const [h1, h2, h3] = hollandCode.split("");
    const sortedBigFive = Object.entries(bigFiveScores).sort(
      ([, a], [, b]) => b - a
    );
    const topTrait = sortedBigFive[0][0];
    const lowestTrait = sortedBigFive[sortedBigFive.length - 1][0];

    // --- STRENGTHS ---
    if (bigFiveScores.C > 15 && ["I", "R"].includes(h1)) {
      profile.strengths.push(
        "Your combination of high Conscientiousness and an Investigative/Realistic nature makes you a meticulous and reliable problem-solver. You excel at executing complex technical tasks with precision and seeing them through to completion."
      );
    } else if (bigFiveScores.C > 15) {
      profile.strengths.push(
        "With high Conscientiousness, you are exceptionally reliable, organized, and detail-oriented. You can be trusted to manage complex projects and deliver high-quality work on time."
      );
    }

    if (bigFiveScores.O > 15 && ["A", "I"].includes(h1)) {
      profile.strengths.push(
        "Your high Openness combined with an Artistic/Investigative mindset makes you a natural innovator. You are not just creative, but also have the analytical skills to turn novel ideas into workable solutions."
      );
    } else if (bigFiveScores.O > 15) {
      profile.strengths.push(
        "Your high score in Openness means you are curious, imaginative, and enjoy tackling new challenges. This makes you highly adaptable and a great source of fresh ideas for any team."
      );
    }

    if (bigFiveScores.E > 15 && ["E", "S"].includes(h1)) {
      profile.strengths.push(
        "As a natural leader and communicator (high Extraversion) with an Enterprising or Social focus, you excel at motivating teams, building consensus, and articulating a compelling vision."
      );
    } else if (bigFiveScores.E > 15) {
      profile.strengths.push(
        "Being highly extraverted, you are skilled at networking, presenting ideas, and thriving in collaborative environments. You draw energy from interacting with others."
      );
    }

    if (bigFiveScores.A > 15 && ["S", "A"].includes(h1)) {
      profile.strengths.push(
        "Your empathetic and cooperative nature (high Agreeableness), paired with a Social or Artistic interest, makes you a fantastic team member. You are skilled at understanding user needs, mediating conflicts, and fostering a positive work environment."
      );
    } else if (bigFiveScores.A > 15) {
      profile.strengths.push(
        "With high Agreeableness, you are empathetic, trusting, and a pleasure to work with. You are a natural collaborator who can build strong, positive relationships with colleagues and clients."
      );
    }

    // --- WEAKNESSES ---
    if (bigFiveScores.N > 15) {
      profile.weaknesses.push(
        "Your high Neuroticism suggests you may be prone to stress and self-criticism, especially in high-pressure, unpredictable environments. Seeking roles with clear expectations and a supportive atmosphere will be beneficial."
      );
    }
    if (bigFiveScores.O < 10 && ["C", "R"].includes(h1)) {
      profile.weaknesses.push(
        "Your preference for concrete, practical tasks (low Openness, high Conventional/Realistic) may make you resistant to abstract brainstorming or rapid changes in strategy. You may need to consciously adapt in fast-evolving industries."
      );
    } else if (bigFiveScores.O < 10) {
      profile.weaknesses.push(
        "Your lower score in Openness indicates a preference for routine and the familiar. While this brings stability, it could be a challenge in roles that require constant innovation or dealing with ambiguity."
      );
    }

    if (bigFiveScores.E < 10) {
      profile.weaknesses.push(
        "As an introvert, you may find roles requiring constant networking, public speaking, or open-plan offices to be draining. You do your best work when you have space for focused, independent thought."
      );
    }
    if (bigFiveScores.A < 10 && h1 === "E") {
      profile.weaknesses.push(
        "Your combination of low Agreeableness and an Enterprising nature means you are very results-driven, but you might be perceived as overly competitive or blunt. Focusing on constructive feedback can help soften your approach."
      );
    } else if (bigFiveScores.A < 10) {
      profile.weaknesses.push(
        "With a lower score in Agreeableness, you are analytical and not easily swayed, which is a strength. However, you might find it challenging to build consensus or may come across as skeptical in collaborative settings."
      );
    }

    // --- WORK STYLE ---
    const workStyleMap = {
      R: `a hands-on, practical environment where you can build, fix, or work with tangible things. You value clear tasks and measurable outcomes. Your high **${topTrait}** score suggests you approach this work with ${
        topTrait === "C"
          ? "a systematic and organized mindset"
          : "an adaptable and open perspective"
      }.`,
      I: `an analytical role where you can immerse yourself in data, research, and complex problem-solving. You are driven by curiosity and a desire to understand the 'why'. Your high **${topTrait}** score indicates you do this best when you are ${
        topTrait === "O"
          ? "exploring innovative ideas"
          : "following a structured, methodical process"
      }.`,
      A: `a creative and unstructured environment that allows for self-expression and innovation. You thrive when you can bring new ideas to life. Your high **${topTrait}** score means you are particularly good at ${
        topTrait === "O"
          ? "generating original concepts"
          : "communicating your vision to others"
      }.`,
      S: `a collaborative, mission-driven setting where you can help, teach, or support others. You are motivated by making a positive impact on people. Your high **${topTrait}** score suggests you excel at this through ${
        topTrait === "A"
          ? "empathetic connection"
          : "organized and reliable support"
      }.`,
      E: `a dynamic, fast-paced environment where you can lead, persuade, and achieve ambitious goals. You enjoy influencing outcomes and taking charge. Your high **${topTrait}** score means you lead most effectively by ${
        topTrait === "E"
          ? "energizing those around you"
          : "building a well-structured plan for success"
      }.`,
      C: `a structured, organized role where you can work with data, processes, and details. You bring order and efficiency to any project. Your high **${topTrait}** score indicates you achieve this with ${
        topTrait === "C"
          ? "exceptional attention to detail"
          : "a calm and steady demeanor"
      }.`,
    };
    profile.workStyle = `Based on your profile, you are best suited for ${workStyleMap[h1]}`;

    if (profile.strengths.length === 0)
      profile.strengths.push(
        "You have a balanced personality, allowing you to adapt to a wide variety of roles and environments."
      );
    if (profile.weaknesses.length === 0)
      profile.weaknesses.push(
        "Your profile doesn't indicate significant weaknesses; you are likely well-rounded and resilient."
      );

    return profile;
  };

  const renderWelcomeScreen = () => (
    <section
      id="welcome-screen"
      className="text-center bg-white p-8 rounded-xl shadow-lg animate-fade-in"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Discover Your Future Career Path
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-6">
        This quiz helps you understand your interests and personality to find
        suitable career paths. It combines the RIASEC model for career interests
        and the Big Five model for personality traits. The quiz takes about 10
        minutes. Please answer honestly for the most accurate results.
      </p>
      <div className="flex items-center justify-center my-6">
        <input
          type="checkbox"
          id="consent-checkbox"
          checked={consentChecked}
          onChange={() => setConsentChecked(!consentChecked)}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label
          htmlFor="consent-checkbox"
          className="ml-2 block text-sm text-gray-900"
        >
          I consent to my anonymized results being used for institutional
          research purposes.
        </label>
      </div>
      <button
        onClick={handleStartQuiz}
        disabled={!consentChecked}
        className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Start Assessment
      </button>
    </section>
  );

  const renderQuizScreen = () => {
    const question = quizData.questions[currentQuestionIndex];
    const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;

    return (
      <section id="quiz-screen" className="animate-fade-in">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-indigo-500 h-2.5 rounded-full"
              style={{
                width: `${progressPercentage}%`,
                transition: "width 0.3s ease-in-out",
              }}
            ></div>
          </div>
          <p className="text-center text-sm text-gray-500 mb-4">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </p>
          <div id="question-container" className="min-h-[120px]">
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-8">
              {question.text}
            </h3>
            {question.framework === "RIASEC" ? (
              <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                {["Like", "Unsure", "Dislike"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswerSelect(question.id, opt)}
                    className={`border-2 w-full sm:w-auto text-gray-700 font-medium py-3 px-6 rounded-lg transition duration-200 hover:bg-indigo-100 ${
                      userAnswers[question.id] === opt
                        ? "bg-indigo-500 text-white border-indigo-500"
                        : "border-gray-300"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 max-w-2xl mx-auto">
                <span className="text-sm text-gray-500 text-left">
                  Strongly
                  <br />
                  Disagree
                </span>
                <div className="flex justify-center space-x-1 sm:space-x-2">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      onClick={() => handleAnswerSelect(question.id, val)}
                      className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 transition duration-200 hover:bg-indigo-100 ${
                        userAnswers[question.id] === val
                          ? "bg-indigo-500 text-white transform scale-110"
                          : ""
                      }`}
                    >
                      <span className="font-semibold text-lg">{val}</span>
                    </button>
                  ))}
                </div>
                <span className="text-sm text-gray-500 text-right">
                  Strongly
                  <br />
                  Agree
                </span>
              </div>
            )}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {validationError && (
              <div className="text-red-500 text-center text-sm">
                Please select an answer.
              </div>
            )}
            {currentQuestionIndex === totalQuestions - 1 ? (
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
              >
                Submit Answers
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </section>
    );
  };

  const renderResultsScreen = () => {
    if (!results) return null;

    const tabs = {
      recommendations: "Career Recommendations",
      profile: "Personality Profile",
      riasec: "RIASEC Details",
      bigfive: "Big Five Details",
    };

    const traitNames = {
      O: "Openness",
      C: "Conscientiousness",
      E: "Extraversion",
      A: "Agreeableness",
      N: "Neuroticism",
    };
    const riasecNames = {
      R: "Realistic",
      I: "Investigative",
      A: "Artistic",
      S: "Social",
      E: "Enterprising",
      C: "Conventional",
    };
    const topTrait = Object.entries(results.bigFiveScores).sort(
      ([, a], [, b]) => b - a
    )[0][0];

    return (
      <section id="results-screen" className="animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Your Personalized Career Profile
          </h2>
          <p className="text-md text-gray-600 mt-1">
            Explore your results to gain insight into your unique strengths and
            interests.
          </p>
        </div>

        <div className="mb-6 border-b border-gray-200">
          <nav className="flex flex-wrap -mb-px" aria-label="Tabs">
            {Object.entries(tabs).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-grow sm:flex-grow-0 w-1/2 sm:w-auto py-4 px-1 text-center border-b-2 font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300 ${
                  activeTab === key
                    ? "border-indigo-500 text-indigo-600 font-semibold"
                    : ""
                }`}
              >
                {value}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-6">
          {activeTab === "recommendations" && (
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-2xl text-gray-800 mb-4">
                Top 5 Career Recommendations
              </h3>
              <p className="text-gray-600 mb-6">
                These careers are ranked based on how well they align with your
                interests (RIASEC) and personality (Big Five).
              </p>
              <div className="space-y-6">
                {results.recommendedCareers.map((career) => {
                  const matchPercent = Math.round(career.score * 100);
                  const personalizedReasoning = `This role is a strong match for your **${
                    riasecNames[results.hollandCode[0]]
                  }** interest, which values ${
                    results.hollandCode[0] === "I"
                      ? "analysis and problem-solving"
                      : results.hollandCode[0] === "R"
                      ? "practical, hands-on work"
                      : results.hollandCode[0] === "A"
                      ? "creativity and self-expression"
                      : results.hollandCode[0] === "S"
                      ? "helping and collaborating with others"
                      : results.hollandCode[0] === "E"
                      ? "leadership and persuasion"
                      : "organization and efficiency"
                  }. Furthermore, your high **${
                    traitNames[topTrait]
                  }** aligns perfectly with the demands of this field.`;

                  return (
                    <div
                      key={career.title}
                      className="border border-gray-200 p-4 rounded-lg"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <h4 className="text-xl font-semibold text-gray-800">
                          {career.title}
                        </h4>
                        <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full mt-1 sm:mt-0">
                          Match Score: {matchPercent > 100 ? 100 : matchPercent}
                          %
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div
                          className="bg-indigo-500 h-2.5 rounded-full"
                          style={{
                            width: `${
                              matchPercent > 100 ? 100 : matchPercent
                            }%`,
                          }}
                        ></div>
                      </div>
                      <div className="mt-4 text-sm text-gray-700 space-y-2">
                        <p>
                          <strong>Personalized Fit:</strong>{" "}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: personalizedReasoning.replace(
                                /\*\*(.*?)\*\*/g,
                                "<strong>$1</strong>"
                              ),
                            }}
                          ></span>
                        </p>
                        <p>
                          <strong>Role Demands:</strong> {career.reasoning}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {activeTab === "profile" && (
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-2xl text-gray-800 mb-4">
                Your Personality Analysis
              </h3>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="font-semibold text-lg text-green-700 mb-2 border-b pb-1">
                    Strengths
                  </h4>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    {results.personalityProfile.strengths.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-red-700 mb-2 border-b pb-1">
                    Areas for Awareness
                  </h4>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    {results.personalityProfile.weaknesses.map((w, i) => (
                      <li key={i}>{w}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-blue-700 mb-2 border-b pb-1">
                    Ideal Work Style
                  </h4>
                  <p
                    className="mt-2"
                    dangerouslySetInnerHTML={{
                      __html: results.personalityProfile.workStyle.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  ></p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "riasec" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-2xl text-gray-800 mb-2">
                  Your RIASEC Profile
                </h3>
                <p className="text-center text-gray-600 mb-4">
                  Your Holland Code is{" "}
                  <span className="font-bold text-2xl text-indigo-600">
                    {results.hollandCode}
                  </span>
                </p>
                <RiasecChart data={results.riasecScores} />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-2xl text-gray-800 mb-4">
                  Understanding the RIASEC Types
                </h3>
                <div
                  className="space-y-3 text-gray-600 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: Object.values(quizData.riasecDescriptions).join(
                      "<br/><br/>"
                    ),
                  }}
                ></div>
              </div>
            </div>
          )}
          {activeTab === "bigfive" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-2xl text-gray-800 mb-4">
                  Your Big Five Personality
                </h3>
                <BigFiveChart data={results.bigFiveScores} />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-2xl text-gray-800 mb-4">
                  What Your Traits Mean
                </h3>
                <div
                  className="space-y-3 text-gray-600 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: Object.values(quizData.bigFiveDescriptions).join(
                      "<br/><br/>"
                    ),
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  return (
    <>
      <style>{`
                body { font-family: 'Inter', sans-serif; background-color: #f4f5f7; }
                .chart-container { position: relative; width: 100%; max-width: 450px; margin-left: auto; margin-right: auto; height: 300px; max-height: 400px; }
                @media (min-width: 640px) { .chart-container { height: 350px; } }
                @keyframes fade-in { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
            `}</style>
      <div className="antialiased container mx-auto p-4 sm:p-6 lg:p-8 max-w-5xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Career Guidance Assessment
          </h1>
          <p className="text-lg text-gray-600 mt-2">For Engineering Students</p>
        </header>

        {screen === "welcome" && renderWelcomeScreen()}
        {screen === "quiz" && renderQuizScreen()}
        {screen === "results" && renderResultsScreen()}
      </div>
    </>
  );
}

export default Quiz;
