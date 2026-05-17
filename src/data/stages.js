export const STAGES = {
  empathise: {
    num: '01', label: 'Empathise', route: 'Empathise',
    title: 'Walk in their shoes.',
    sub: "Observe and interview your users. Uncover real needs, not assumed ones. Resist solving — just listen and capture.",
    companion: "You're in Empathise — the stage where listening matters more than talking.\n\nWhat do you know about your user so far? Tell me what you've observed.",
    prompts: [
      'Help me write interview questions for my user',
      'I have notes — help me find the key themes',
      'Generate an empathy map from my observations',
    ],
    learn: {
      sections: [
        { heading: 'What is the Empathise stage?', body: "Empathy is the foundation of all great design. Before you can solve a problem, you need to deeply understand the person who has it — their context, motivations, and the workarounds they've invented because nothing works well enough.", body2: "The output of this stage: a set of key observations and an Empathy Map. Resist interpreting as you go — just capture what you see and hear." },
        { heading: 'Why this stage matters', body: "Most design failures happen here — not in the solution, but in the understanding. Teams who skip deep empathy build the right thing for the wrong person. Your goal is to see the world through your user's eyes, not your own." },
        { heading: 'Common mistakes to avoid', bullets: ["Asking leading questions that confirm your existing assumptions", "Interviewing only people who are like you", "Stopping after one round — one interview is never enough"] },
      ],
      powerup: "Record user interviews and paste the transcript. Ask the AI to identify the top 5 emotional moments — where the user sighed, hesitated, or reached for a workaround.",
    },
    tools: [
      { title: 'Interview Question Generator', desc: "Describe your user and I'll generate a full interview guide with probing follow-ups.", prompt: "Help me write interview questions for my user. Here's who I'm designing for:" },
      { title: 'Empathy Map Builder', desc: "Capture what your user Thinks, Feels, Says, and Does from your notes.", prompt: 'Help me build an empathy map from my observations:' },
      { title: 'Theme Finder', desc: "Paste raw notes and find the patterns — the signal beneath the noise.", prompt: 'Here are my interview notes. Help me identify the key themes:' },
      { title: 'Insight Generator', desc: "Turn your observations into 5 sharp insight statements ready for the Define stage.", prompt: 'Help me write 5 key insight statements from my research:' },
    ],
  },
  define: {
    num: '02', label: 'Define', route: 'Define',
    title: 'Find the real problem.',
    sub: "Synthesise your research into a razor-sharp problem statement. This is the hardest stage — and the most important.",
    companion: "You're in Define — the stage most people rush through.\nLet's slow down and get this right.\n\nYour POV statement is the foundation of everything that follows. What have you learned about your user so far?",
    prompts: [
      'Help me write my POV statement',
      'Generate HMW questions from my POV',
      "I'm stuck — what should I do next?",
    ],
    learn: {
      sections: [
        { heading: 'What is the Define stage?', body: "Define is where divergent research becomes convergent clarity. You've gathered observations. Now you must choose what matters most and frame it as a problem worth solving.", body2: "The output of this stage is two things: a Point of View (POV) Statement — your user's need in one sentence — and a set of How Might We (HMW) questions — your creative brief." },
        { heading: 'Why this stage matters', body: "Most teams skip straight to solutions. Define is what prevents that. A weak problem statement produces weak ideas. A sharp one produces breakthroughs. Invest the time here." },
        { heading: 'Common mistakes to avoid', bullets: ['Framing the problem as a solution in disguise — "We need a better onboarding flow" is a solution, not a problem.', 'Being so broad the problem could apply to anyone', "Skipping the 'because' — that's where the real insight lives"] },
      ],
      powerup: 'Use AI to pressure-test your POV before moving to Ideate. Ask: "What assumptions does this POV make? What would need to be true?"',
    },
    tools: [
      { title: 'POV Generator', desc: "Paste your key research insights. Get a draft POV in the format: User · Needs · Because.", prompt: 'Help me generate a POV statement from my research insights:' },
      { title: 'Empathy Map', desc: "Capture what your user Thinks, Feels, Says, and Does.", prompt: 'Help me build an empathy map:' },
      { title: 'Problem Statement Canvas', desc: "Who / What / Why / Wow — a structured frame for your problem statement.", prompt: 'Help me fill in a Problem Statement Canvas for my project:' },
      { title: 'HMW Generator', desc: "Turn your POV into 5 How Might We questions that open up creative space.", prompt: 'Generate HMW questions from my POV statement:' },
    ],
  },
  ideate: {
    num: '03', label: 'Ideate', route: 'Ideate',
    title: 'Generate 100 ideas.',
    sub: "Quantity over quality. Defer all judgment. The goal is divergence — explore every direction before you converge.",
    companion: "You're in Ideate — resist the urge to judge ideas before they exist.\n\nWhat's your HMW question? Paste it here and let's go wide.",
    prompts: [
      'Generate 10 ideas for my HMW question',
      "What's the most unexpected direction I haven't considered?",
      'Help me run a Worst Possible Idea exercise',
    ],
    learn: {
      sections: [
        { heading: 'What is the Ideate stage?', body: "Ideation is not brainstorming — it's structured divergence. The goal is to exhaust obvious ideas quickly so you reach the unexpected ones. Wild ideas are data. Weird combinations unlock real solutions.", body2: "The output: a list of 10+ ideas with your top 3 selected and ready to develop into a prototype." },
        { heading: 'Why this stage matters', body: "The first idea is almost never the best idea. Ideation forces you to explore widely before committing to one direction. The constraint of generating 10 ideas pushes you past the obvious into the interesting." },
        { heading: 'Common mistakes to avoid', bullets: ['Judging ideas as you generate them — quantity comes before quality', 'Stopping at the first good idea instead of exhausting all options', 'Ideating alone — even solo, talking through ideas out loud changes them'] },
      ],
      powerup: "Give the AI your HMW question and ask for \"10 ideas, ranging from boring to completely unexpected.\" The last three are usually where the real concepts hide.",
    },
    tools: [
      { title: 'Idea Generator', desc: "Give me your HMW and I'll generate 10 ideas across safe, creative, and wild spectrums.", prompt: 'Generate 10 ideas for this HMW question:' },
      { title: 'SCAMPER Facilitator', desc: "Apply SCAMPER to push your existing ideas further and find new angles.", prompt: 'Apply SCAMPER to this idea:' },
      { title: 'Worst Possible Idea', desc: "Generate the worst ideas first — then reverse-engineer the insights inside them.", prompt: 'Run a Worst Possible Idea exercise for this problem:' },
      { title: 'Idea Prioritiser', desc: "Take your list and identify the top 3 worth prototyping — fast.", prompt: 'Help me prioritise these ideas and pick the top 3 to prototype:' },
    ],
  },
  prototype: {
    num: '04', label: 'Prototype', route: 'Prototype',
    title: 'Make ideas tangible.',
    sub: "Build just enough to learn. A prototype is a question made physical — not a finished product.",
    companion: "You're in Prototype — where thinking stops and making begins.\n\nWhich idea are you building? Tell me the concept in one sentence.",
    prompts: [
      'Help me write a storyboard for my prototype',
      'What assumption should I test first?',
      'Give me a Figma Make prompt for my concept',
    ],
    learn: {
      sections: [
        { heading: 'What is the Prototype stage?', body: "A prototype isn't a product. It's a question — made physical enough that a real person can react to it. The goal is to learn something specific, not build something impressive.", body2: "The output: a storyboard, a Figma Make prompt, or a hand-drawn concept. Whatever surfaces your core assumption fastest." },
        { heading: 'Why this stage matters', body: "You can argue about ideas in a meeting for hours. A prototype ends the argument in minutes. Showing is always faster than telling — for your team, your stakeholders, and your users." },
        { heading: 'Common mistakes to avoid', bullets: ['Building too much — a prototype should take hours, not weeks', 'Falling in love with the prototype instead of the learning', "Not being clear on what question you're trying to answer"] },
      ],
      powerup: 'Describe your concept in two sentences. Ask the AI to generate a Figma Make prompt — from concept to clickable prototype in minutes.',
    },
    tools: [
      { title: 'Storyboard Writer', desc: "Describe your concept and I'll write a 6-frame storyboard script ready to sketch.", prompt: 'Write a storyboard for this concept:' },
      { title: 'Assumption Mapper', desc: "Surface the riskiest assumptions in your concept before you build a single screen.", prompt: 'What are the riskiest assumptions in this concept that I should test first?' },
      { title: 'Figma Make Prompt', desc: "Get a detailed prompt to generate your UI in Figma Make or similar tools.", prompt: 'Write a detailed Figma Make prompt for this concept:' },
      { title: 'Concept One-Pager', desc: "Turn your idea into a one-paragraph pitch ready to share with stakeholders.", prompt: 'Write a one-paragraph concept pitch for:' },
    ],
  },
  test: {
    num: '05', label: 'Test', route: 'Test',
    title: 'Learn fast. Fail fast.',
    sub: "Put your prototype in front of real users. Every test is a learning opportunity — never a performance review.",
    companion: "You're in Test — where assumptions meet reality.\n\nWho are you testing with, and what's the one thing you most need to learn?",
    prompts: [
      'Write interview questions for my usability test',
      'Help me analyse these test results',
      'What should I change based on this feedback?',
    ],
    learn: {
      sections: [
        { heading: 'What is the Test stage?', body: "Testing is not validation — it's investigation. You're not proving your idea works. You're learning what's broken so you can fix it before you build it.", body2: "The output: an interview guide, a feedback capture grid, and iteration notes that feed back into your next cycle." },
        { heading: 'Why this stage matters', body: "One hour of user testing can save months of development. The goal is not to confirm your design is good — it's to find exactly where it breaks. Embrace the failure; it's cheaper here than anywhere else." },
        { heading: 'Common mistakes to avoid', bullets: ['Defending your design when users struggle — stay curious, not defensive', 'Testing with people who are too polite to tell you the truth', "Waiting until the design is 'finished' to test — test early and often"] },
      ],
      powerup: "Paste raw test notes into the AI companion. Ask it to categorise feedback by 'works well / doesn't work / questions raised.' You'll have a synthesis in seconds.",
    },
    tools: [
      { title: 'Interview Guide Builder', desc: "Generate a structured usability test guide with tasks, questions, and probes.", prompt: 'Write a usability test interview guide for my prototype:' },
      { title: 'Results Synthesiser', desc: "Paste raw test notes and I'll find patterns, pull key quotes, and surface what matters.", prompt: 'Help me synthesise these usability test results:' },
      { title: 'Iteration Planner', desc: "Turn test feedback into a prioritised list of next iterations with rationale.", prompt: 'Based on this test feedback, what should I change and in what order?' },
      { title: 'Test Report Writer', desc: "Generate a one-page test summary ready to share with your team or stakeholders.", prompt: 'Write a test summary report from these findings:' },
    ],
  },
};

export const STAGE_KEYS = Object.keys(STAGES);
