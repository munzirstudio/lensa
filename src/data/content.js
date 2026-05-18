export const CHAPTERS = [
  {
    id: 0,
    slug: 'design-thinking',
    title: 'Design Thinking',
    tagline: 'A human-centred approach to solving the problems that actually matter.',
    meta: '00 · Design Thinking',
    heroImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80',
    readSections: [
      {
        id: 'what-is-design-thinking',
        heading: 'What is Design Thinking?',
        html: `<p>Design Thinking is a human-centred approach to innovation and problem-solving that combines empathy, creativity, and rationality. It's not a linear process. Teams move back and forth between stages based on what they learn. The goal is not the perfect plan — it's the fastest path to validated insight.</p>
<p>It's best used when the problem is ambiguous, the solution is unknown, or the user's real need has never been clearly defined. Which, if you're honest, describes most of the work worth doing.</p>`,
      },
      {
        id: 'the-double-diamond',
        heading: 'The Double Diamond',
        html: `<p>Design Thinking follows the Double Diamond model — two phases of diverging and converging thinking:</p>
<p><strong>First Diamond: Doing the Right Thing</strong></p>
<ol>
<li><strong>Discover (Diverge)</strong> — Explore the problem space widely. Talk to users. Suspend your assumptions. Understand before you solve.</li>
<li><strong>Define (Converge)</strong> — Synthesise your findings into a clear Point of View. Pick the right problem to solve before generating solutions.</li>
</ol>
<p><strong>Second Diamond: Doing Things Right</strong></p>
<ol start="3">
<li><strong>Develop (Diverge)</strong> — Generate many ideas. Prototype rapidly. Quantity before quality.</li>
<li><strong>Deliver (Converge)</strong> — Test with real users. Refine. Ship what works.</li>
</ol>`,
      },
      {
        id: 'the-5-stages',
        heading: 'The 5 Stages Everyone Knows',
        html: `<p><strong>1. Empathise</strong><br/>Understand users deeply through observation, interviews and immersion. Uncover needs, motivations and pain points.</p>
<p><strong>2. Define</strong><br/>Synthesise research into clear problem statements. Frame the challenge from the user's perspective to guide solution development.</p>
<p><strong>3. Ideate</strong><br/>Generate diverse solution ideas without judgment. Use brainstorming and creative techniques to explore possibilities beyond obvious answers.</p>
<p><strong>4. Prototype</strong><br/>Build quick, testable versions of promising ideas. Make concepts tangible to test assumptions and gather feedback early.</p>
<p><strong>5. Test</strong><br/>Put prototypes in front of users. Observe interactions, gather insights and refine solutions based on real-world response.</p>`,
      },
      {
        id: 'the-5-walls',
        heading: 'But You Know the Limits',
        html: `<p>Most teams using Design Thinking hit the same five walls:</p>
<p><strong>Exploration constraints</strong> — Teams validate knowns because exploring unknowns costs too much and they lack capacity for handling uncertainty.</p>
<p><strong>Speed bottlenecks</strong> — Research synthesis takes weeks. By the time insights are ready, stakeholders have moved on or market conditions changed.</p>
<p><strong>Bleeding context</strong> — Research insights live in slides and people's heads. Six months later, new team members ask "Why did we build it this way?"</p>
<p><strong>Capability</strong> — Limited by what we already know how to do. We can only explore opportunities matching existing capabilities.</p>
<p><strong>Quality doesn't scale</strong> — One person can moderate 2 usability tests per day. Quality QA happens too late or not at all because nobody has bandwidth.</p>
<p>This course is about breaking those walls with AI.</p>`,
      },
      {
        id: 'key-tools',
        heading: 'The Key Tools at Each Stage',
        html: `<p><strong>Empathise</strong></p>
<ul>
<li>User Interviews: Open-ended, story-based. Ask "Tell me about a time when..."</li>
<li>Observation / Shadowing: Watch what users DO, not just what they SAY</li>
<li>Empathy Map: What does the user Think, Feel, Say, Do?</li>
<li>Jobs-to-be-Done (JTBD): "When [situation], I want to [motivation], so I can [outcome]"</li>
</ul>
<p><strong>Define</strong></p>
<ul>
<li>POV Statement: "[User] needs [need] because [insight]"</li>
<li>How Might We (HMW): Reframe problems as opportunities</li>
<li>Affinity Clustering: Group raw research notes by theme</li>
</ul>
<p><strong>Ideate</strong></p>
<ul>
<li>Brainstorming: Defer judgment. Go for quantity. Build on wild ideas.</li>
<li>SCAMPER: Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse</li>
<li>Dot Voting: 3 votes each. Vote silently. No campaigning.</li>
</ul>
<p><strong>Prototype</strong></p>
<ul>
<li>Paper prototypes, click-throughs, Figma flows</li>
<li>Prototype the assumption, not the whole product</li>
</ul>
<p><strong>Test</strong></p>
<ul>
<li>Think-aloud usability sessions</li>
<li>RITE (Rapid Iterative Testing and Evaluation): test, fix, repeat</li>
</ul>`,
      },
    ],
    activities: [
      {
        id: 1,
        anchor: 'activity-1',
        tocTitle: 'Map Your Double Diamond',
        title: 'Activity 1 · Map Your Team\'s Double Diamond',
        what: 'Sketch how your current product or project maps onto the Double Diamond. Where are you right now? Where did you skip?',
        why: 'Most teams are stuck in the second diamond (building things) without having properly done the first (building the right things). Naming where you are unsticks the team.',
        howAiHelps: null,
        steps: [
          'Draw a simple Double Diamond on a whiteboard or Miro/FigJam',
          'For each phase (Discover, Define, Develop, Deliver), add a sticky note with what your team did — or skipped',
          'Use the prompt below to get AI to help you identify your gaps',
        ],
        exerciseIds: [1],
      },
      {
        id: 2,
        anchor: 'activity-2',
        tocTitle: 'Identify Your 5 Walls',
        title: 'Activity 2 · Identify Your 5 Walls',
        what: 'Run a quick team retrospective to identify which of the 5 DT walls you hit most often.',
        why: 'You can\'t fix a problem you haven\'t named. This activity gives the team a shared language for where AI can help.',
        howAiHelps: null,
        steps: [
          'Share the 5 walls with your team (speed bottlenecks, exploration constraints, bleeding context, capability, quality doesn\'t scale)',
          'Each person votes on which wall they hit most',
          'Paste the results into the prompt below and get AI to suggest where to focus first',
        ],
        exerciseIds: [2],
      },
    ],
    resources: [
      { name: 'Design Thinking Cheat Sheet', description: 'Full reference for all DT stages, tools, and prompts.', link: '#', comingSoon: true },
      { name: 'The Design Thinking Playbook', description: 'Lewrick, Link & Leifer — the foundational text.', link: 'https://www.goodreads.com/book/show/35658438-the-design-thinking-playbook' },
      { name: 'Cohort V Resource Hub', description: 'Full AI-Supercharged Design Thinking reference.', link: 'https://stampedeteam.notion.site/Cohort-V-Resource-Hub-AI-Supercharged-Design-Thinking-348ed70298ae80c4803fd53003f56242' },
    ],
    exercises: [
      {
        id: 1,
        title: 'Double Diamond Gap Analysis Prompt',
        sectionLabel: 'Design Thinking · Activity 1',
        prompt: `You are a design thinking facilitator.

I'm going to describe how my team approached a recent project.
Map what I describe onto the Double Diamond framework (Discover, Define, Develop, Deliver).

Project description:
[DESCRIBE YOUR RECENT PROJECT OR PRODUCT WORK IN 3-5 SENTENCES]

For each phase of the Double Diamond:
1. Identify whether we did it, partially did it, or skipped it
2. If we skipped or partially did it — what's the likely consequence?
3. What's the one most important thing we should go back and do?

Return as a structured list by phase. Be direct. Don't soften the gaps.`,
      },
      {
        id: 2,
        title: '5 Walls Prioritisation Prompt',
        sectionLabel: 'Design Thinking · Activity 2',
        prompt: `You are a design operations strategist.

My team voted on which Design Thinking walls we hit most often.
Here are our results:

[PASTE YOUR TEAM VOTE RESULTS]

Based on this:
1. Which wall should we tackle first and why?
2. What's the likely root cause of our top wall?
3. Where in our workflow would an AI intervention have the highest leverage?

Return as a ranked action list with rationale for each item.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: 1,
    slug: 'how-ai-can-help',
    title: 'How AI Can Help',
    tagline: 'AI doesn\'t just speed things up. It gives your team the ability to achieve things you previously couldn\'t.',
    meta: '01 · How AI Can Help',
    heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    readSections: [
      {
        id: 'the-real-question',
        heading: 'The Real Question',
        html: `<p>As you scan your team's workflow, you'll spot prime areas where AI can generate things faster. But that's just increasing the rate of production. Instead of speed, ask more fundamental questions:</p>
<ul>
<li>Could we explore unknowns without budget or time penalty?</li>
<li>Could we ship insights while interest is still hot?</li>
<li>Could we ensure customer voice lives on through synthesis and context retention?</li>
<li>Could we validate research methodology before committing recruitment resources?</li>
<li>Could we deliver outputs beyond our current skill level?</li>
</ul>
<p>That's the real promise of AI in design thinking. Not faster slop. Bigger capability.</p>`,
      },
      {
        id: 'what-ai-actually-does',
        heading: 'What AI Actually Does in This Context',
        html: `<p>AI is not autopilot for research. It amplifies what humans can do — by handling volume, maintaining traceability, and enabling parallel exploration. Strategic thinking, validation, and interpretation remain human work.</p>
<p>Four things AI does exceptionally well:</p>
<p><strong>Parallel investigation</strong> — Explores multiple angles simultaneously while you focus on strategic interpretation. What used to require a team of researchers now takes one person with a good prompt.</p>
<p><strong>AI-augmented synthesis</strong> — Processes 50+ transcripts in minutes. Explores multiple analytical angles simultaneously. Humans focus on strategic interpretation, not data wrangling.</p>
<p><strong>Persistent memory</strong> — Ensures customer voice lives on through synthesis. Context retention across handoffs. New team members can get up to speed from the AI's memory, not just someone's slides.</p>
<p><strong>Systematic testing at scale</strong> — Validates research methodology before spending recruitment budget. Conducts UAT across multiple scenarios. Finds what breaks before real users encounter it.</p>`,
      },
      {
        id: 'four-levels',
        heading: 'The 4 Levels of AI Integration',
        html: `<p>Based on MIT Center for Information Systems Research:</p>
<p><strong>Level 1 — Educated</strong><br/>Everyone learning different tools individually. No shared approach or standards. Knowledge trapped in individuals. AI use driven by curiosity, not strategy.<br/><em>What you can do: Identify 1–2 high-impact use cases. Establish basic context engineering principles.</em></p>
<p><strong>Level 2 — Experimental</strong><br/>Basic context engineering in use. Validated use cases across workflow using AI consistently. Simple frameworks documented and quality standards emerging.<br/><em>What you can do: Connect isolated use cases. Enable context flow between stages.</em></p>
<p><strong>Level 3 — Operational</strong><br/>Context persists across handoffs. AI maintains project knowledge. Meeting overhead drops 30–50%.<br/><em>What you can do: Systemise what works. Build quality gates. Identify automation candidates.</em></p>
<p><strong>Level 4 — Future-Ready</strong><br/>Multi-agent coordination. Automated quality checks. Workflows self-coordinate with minimal human intervention.<br/><em>What you can do: Continuous optimisation. Business model evolution. Enable entirely new service offerings.</em></p>
<p>Most Malaysian teams are at Level 1–2. This course gets you to Level 2–3.</p>`,
      },
      {
        id: 'context-engineering',
        heading: 'Context Engineering: The Foundational Skill',
        html: `<p>The quality of what AI produces depends entirely on the quality of what you put in. Context Engineering is the practice of structuring your inputs so AI can do its best work.</p>
<p>A well-engineered prompt has six components:</p>
<ol>
<li><strong>Background & Context</strong> — What's the situation? What do you already know?</li>
<li><strong>Intended Audience</strong> — Who will use this output? What decisions will it inform?</li>
<li><strong>User Context</strong> — Who are the users involved? What do you know about them?</li>
<li><strong>Known Constraints</strong> — What limits apply? Time, budget, access, regulation?</li>
<li><strong>Perspective Framing</strong> — What matters most to you? What would good look like?</li>
<li><strong>The Request</strong> — What specifically do you need help with?</li>
</ol>
<p>This is the framework we use across every stage of this course. Learn it once, apply it everywhere.</p>`,
      },
      {
        id: 'what-ai-is-not',
        heading: 'What AI in Design Thinking is NOT',
        html: `<ul>
<li><strong>Not a substitute for real users</strong> — AI can simulate, stress-test, and accelerate, but it cannot replace the insights, emotions, and context from actual human participants. Synthetic users validate methods; real users validate solutions.</li>
<li><strong>Not autopilot for research</strong> — AI amplifies human researchers. Strategic thinking, validation, and interpretation remain human work.</li>
<li><strong>Not plug-and-play magic</strong> — AI outputs require human validation. Every insight must be traced to evidence. Every synthesis must be checked against reality.</li>
<li><strong>Not a shortcut past rigour</strong> — Using AI means doing more rigorous work in less time, testing more scenarios, maintaining better traceability. Quality and integrity increases, not decreases.</li>
</ul>`,
      },
      {
        id: 'ai-double-diamond',
        heading: 'How AI Maps to the Double Diamond',
        html: `<table>
<thead><tr><th>DT Stage</th><th>AI Amplification</th><th>What Changes</th></tr></thead>
<tbody>
<tr><td>Empathise</td><td>Landscape research, synthetic user, synthesis</td><td>Weeks → hours</td></tr>
<tr><td>Define</td><td>Pattern recognition, journey map acceleration, POV generation</td><td>Scattered notes → structured insight</td></tr>
<tr><td>Ideate</td><td>Inspiration directing, HMW generation, idea divergence</td><td>10 ideas → 100, filtered to the best 10</td></tr>
<tr><td>Prototype</td><td>Storyboard generation, copy writing, vibe coding</td><td>Sketch → interactive prototype faster</td></tr>
<tr><td>Test</td><td>Synthetic pilot testing, session synthesis, iteration</td><td>2 tests/day → unlimited coverage</td></tr>
</tbody>
</table>`,
      },
    ],
    activities: [
      {
        id: 1,
        anchor: 'activity-1',
        tocTitle: 'Context Engineering: Your First Prompt',
        title: 'Activity 1 · Context Engineering: Your First Prompt',
        what: 'Write your first properly structured context-engineered prompt using the 6-component framework.',
        why: 'Most people write weak prompts and blame AI for weak outputs. Context Engineering is the single highest-leverage skill in this course. Master it here and everything else gets easier.',
        howAiHelps: null,
        steps: [
          'Pick a real problem or question from your current work',
          'Fill in each of the 6 components (Background, Audience, User Context, Constraints, Perspective, Request)',
          'Run it in Claude or ChatGPT',
          'Compare the output to what you\'d have gotten with a one-line prompt',
        ],
        exerciseIds: [1],
      },
      {
        id: 2,
        anchor: 'activity-2',
        tocTitle: 'Assess Your AI Maturity Level',
        title: 'Activity 2 · Assess Your AI Maturity Level',
        what: 'Honestly assess where your team sits on the MIT 4-level AI maturity model.',
        why: 'You can\'t plan where to go if you don\'t know where you are. Most teams overestimate their maturity.',
        howAiHelps: null,
        steps: [
          'Read the 4 levels again with your team',
          'Paste your honest assessment into the prompt below',
          'Get a specific action plan for moving to the next level',
        ],
        exerciseIds: [2],
      },
    ],
    resources: [
      { name: 'Cohort V Resource Hub', description: 'Full AI-Supercharged Design Thinking reference document.', link: 'https://stampedeteam.notion.site/Cohort-V-Resource-Hub-AI-Supercharged-Design-Thinking-348ed70298ae80c4803fd53003f56242' },
      { name: 'MIT AI Maturity Model', description: 'MIT CISR Enterprise AI Maturity Model (2024).', link: 'https://cisr.mit.edu/publication/2023_1201_GenAIMaturity_LaFountainWixom' },
      { name: 'Context Engineering Hands-on Guide', description: 'Structured template for building AI context across different task types.', link: 'https://stampedeteam.notion.site/aidt-handson-content-engineering' },
    ],
    exercises: [
      {
        id: 1,
        title: 'Context Engineering Prompt Builder',
        sectionLabel: 'How AI Can Help · Activity 1',
        prompt: `I want to write a well-structured AI prompt for this task:

[DESCRIBE YOUR TASK IN 1-2 SENTENCES]

Help me fill in each component of the Context Engineering framework:

📍 BACKGROUND & CONTEXT
[What's the situation? What do I already know?]

👥 INTENDED AUDIENCE
[Who will use this output?]

🎯 USER CONTEXT
[Who are the users involved?]

🚧 KNOWN CONSTRAINTS
[What limits apply?]

💛 PERSPECTIVE FRAMING
[What matters most? What would a great outcome look like?]

→ THE REQUEST
[What specifically do I need?]

Review each section I've filled in.
- Flag anything that's too vague to be useful
- Suggest improvements for the weakest 2 components
- Rewrite the full prompt with your improvements incorporated`,
      },
      {
        id: 2,
        title: 'AI Maturity Assessment Prompt',
        sectionLabel: 'How AI Can Help · Activity 2',
        prompt: `You are an AI strategy consultant.

Here is an honest description of how my team currently uses AI:

[DESCRIBE YOUR TEAM'S CURRENT AI USAGE — tools, frequency, who uses it,
what it's used for, what you're proud of, what's inconsistent]

Based on the MIT 4-level AI maturity model (Educated → Experimental → Operational → Future-Ready):

1. What level are we at? Be honest — don't round up.
2. What are the 3 clearest signs of our current level?
3. What are the 2 specific things we need to do to reach the next level?
4. What's the single highest-leverage first step?

Be direct. We can handle the truth.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: 2,
    slug: 'empathise',
    title: 'Empathise',
    tagline: 'Everything we do is to care for the user. It\'s not easy to make it easy for them.',
    meta: '02 · Empathise',
    heroImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80',
    readSections: [
      {
        id: 'what-is-empathise',
        heading: 'What is Empathise?',
        html: `<p>Empathise is the first active stage of Design Thinking — and the most skipped. Teams rush past it because talking to users feels slow. But it's the only stage where you learn something you couldn't have guessed.</p>
<p>The goal is simple: understand the person you're designing for. Not their demographic. Not their job title. Their actual situation — what frustrates them, what they're trying to accomplish, what they say versus what they actually do.</p>`,
      },
      {
        id: 'the-current-process',
        heading: 'The Current Process',
        html: `<p>Traditional empathy research has five phases:</p>
<p><strong>1. Landscape Research</strong><br/>Before you talk to anyone, map the territory. What does the market look like? Who are the players? What do we already know, and what are we assuming?</p>
<p><strong>2. User Research Design</strong><br/>Design a research approach with specific hypotheses to test. Define 3–5 user segments. Write your interview guide. Don't wing it.</p>
<p><strong>3. Participant Recruitment</strong><br/>Secure a diverse pool that represents your actual target user. Plan for 20–30% no-shows. Recruit more than you need.</p>
<p><strong>4. User Interviews</strong><br/>Conduct 6–10 interviews, 60–90 minutes each. Ask open-ended, story-based questions. Listen more than you talk. Take verbatim notes or record.</p>
<p><strong>5. Synthesis</strong><br/>Extract observations and quotes. Cluster into themes. Test themes against your original hypotheses. Identify patterns across participants.</p>
<p>Done properly, this takes <strong>4–6 weeks</strong>, <strong>12–15 days of effort</strong>, and <strong>2–3 researchers</strong>. Researching outside your home market? Triple the complexity.</p>
<p>That's the real cost of good research. And why most teams don't do it.</p>`,
      },
      {
        id: 'three-walls',
        heading: 'The 3 Walls AI Helps You Break in Empathise',
        html: `<p><strong>Wall 1: Speed bottlenecks</strong><br/>Research synthesis takes weeks. By the time insights are ready, stakeholders have moved on. AI can compress synthesis from days to hours — not by guessing, but by processing what you give it.</p>
<p><strong>Wall 2: Exploration constraints</strong><br/>Teams validate what they already know because exploring unknowns costs too much. AI-powered landscape research lets you go wide before you go deep — at a fraction of the time and cost.</p>
<p><strong>Wall 3: Bleeding context</strong><br/>Research insights live in slides and people's heads. Six months later, a new team member asks "Why did we build it this way?" AI helps you maintain a living research record that compounds over time.</p>`,
      },
      {
        id: 'human-in-the-loop',
        heading: 'Human in the Loop',
        html: `<p>Empathy is about <em>seeing</em> the human at the end of the experience you're delivering.</p>
<p>No amount of synthetic users can evoke the same feeling of deep understanding that comes from sitting across from a real person and watching them struggle with something you built. AI gives us magnified capacity to care — but you still need to speak to real humans so you can actually look after them.</p>
<p>Use AI to go faster, go wider, and go deeper. Use real interviews to stay honest.</p>`,
      },
    ],
    activities: [
      {
        id: 1,
        anchor: 'activity-1',
        tocTitle: 'Landscape Research with AI Deep Research',
        title: 'Activity 1 · Landscape Analysis with AI Deep Research',
        what: 'Before you talk to a single user, use AI to map your problem space. Understand the market, spot patterns, and identify gaps — in hours, not weeks.',
        why: 'Walking into user research without landscape knowledge is like navigating without a map. You\'ll miss what\'s already known and waste interview time on things you could have read.',
        howAiHelps: 'Tools like Claude Research or ChatGPT Deep Research scan hundreds of sources simultaneously — industry reports, competitor reviews, forum discussions — and synthesise them into a structured view of your problem space. What used to take 2 weeks now takes 10 minutes of good prompting.',
        steps: [
          'Open ChatGPT Deep Research or Claude with Research mode',
          'Use the Context Engineering framework (Background → Audience → User Context → Constraints → Perspective → Request)',
          'Run the landscape analysis prompt',
          'Review the output — challenge the AI\'s assumptions, ask where it\'s uncertain',
          'Use the findings to sharpen your research questions',
          'Turn the output into a stakeholder deck using the slide deck prompt',
        ],
        exerciseIds: [1, 2],
      },
      {
        id: 2,
        anchor: 'activity-2',
        tocTitle: 'Build a Synthetic User for Interview Prep',
        title: 'Activity 2 · Build a Synthetic User for Interview Prep',
        what: 'A synthetic user is an AI-generated profile that mimics a specific user group. You build the persona in layers, then "interview" the AI as that person. Use this to stress-test your research before spending recruitment budget on real participants.',
        why: 'Bad interview questions waste everyone\'s time. A synthetic user helps you find the gaps in your guide — before you\'re sitting across from a real person who flew in for a 60-minute session.',
        howAiHelps: `AI can simulate user responses with surprising depth — but only if you give it the right scaffolding. Build the persona across five layers:
<ul>
<li><strong>Base layer</strong> — background, role, industry, environment</li>
<li><strong>Cognitive layer</strong> — mental models, how they process information, what they compare new things to</li>
<li><strong>Emotional layer</strong> — motivations, fears, what success and failure feel like</li>
<li><strong>Cultural layer</strong> — communication norms, relationship to authority, regional and professional context</li>
<li><strong>Friction layer</strong> — the specific breaking points that make them abandon a tool or process</li>
</ul>
<p>This is not a replacement for real users. It is preparation for them.</p>`,
        steps: [
          'Write a base persona covering all five layers',
          'Paste it into your LLM as a system prompt — this becomes the synthetic user\'s "brain"',
          'Run your planned interview questions against it',
          'Note where answers are vague, contradictory, or too polished — those are weak questions',
          'Revise your guide, then repeat with a different user segment if needed',
        ],
        exerciseIds: [3],
      },
      {
        id: 3,
        anchor: 'activity-3',
        tocTitle: 'Synthesise Interview Notes with AI',
        title: 'Activity 3 · Synthesise Interview Notes with AI',
        what: 'After real user interviews, use AI to extract pain points, cluster themes, and surface patterns from your raw notes — turning messy data into structured insight.',
        why: 'Most teams leave synthesis half-done. You get a slide deck of quotes but no clear insight. AI can process what you give it at scale — but garbage in, garbage out.',
        howAiHelps: 'AI is exceptionally good at pattern recognition across large volumes of unstructured text. Feed it your verbatim notes and it can identify recurring pain points, flag emotional intensity, surface outliers, and cross-reference findings across participants — work that would take a researcher days. Your job is to validate the output, not trust it blindly.',
        steps: [
          'Collect raw interview notes — verbatim quotes, observations, timestamps. Label each with a participant code (P1, P2…)',
          'Consolidate into a single document',
          'Paste into your LLM with the synthesis prompt',
          'Review every extracted pain point — validate against your own reading of the notes',
          'Flag anything the AI missed or misread. That gap is usually where the most interesting insight hides',
        ],
        exerciseIds: [4],
      },
    ],
    resources: [
      { name: 'Landscape Analysis Hands-on Guide', description: 'Rapid problem space, competitive and market research using AI research agents.', link: 'https://stampedeteam.notion.site/aidt-handson-landscape-analysis' },
      { name: 'Synthetic User Framework', description: 'Step-by-step process for creating research-backed synthetic users.', link: 'https://stampedeteam.notion.site/aidt-handson-synthetic-user' },
      { name: 'Agentic Prompt for GA4', description: 'Directing AI agent to analyse Google Analytics data and surface actionable insights.', link: 'https://stampedeteam.notion.site/aidt-handson-agent-atlas' },
      { name: 'Sample Dataset — Landscape Analysis', description: 'The EV charging sample dataset. Practice before applying to your own problem space.', link: '#', comingSoon: true },
      { name: 'Cohort V Resource Hub', description: 'Full AI-Supercharged Design Thinking reference. Your master reference for this entire course.', link: 'https://stampedeteam.notion.site/Cohort-V-Resource-Hub-AI-Supercharged-Design-Thinking-348ed70298ae80c4803fd53003f56242' },
    ],
    exercises: [
      {
        id: 1,
        title: 'Landscape Research Prompt',
        sectionLabel: 'Empathise · Activity 1',
        prompt: `📍 BACKGROUND & CONTEXT
[Describe your problem space. What do you already know? What feels incomplete
or uneven? What have you noticed that you can't fully explain?]

👥 INTENDED AUDIENCE
[Who will use this analysis? What decisions will it inform?]

🎯 USER CONTEXT
[What types of users do you know about? Include what you've heard from
colleagues, early conversations, or assumptions you're holding.]

🚧 KNOWN CONSTRAINTS
[What limits your research? Time, budget, access, market, regulatory?]

💛 PERSPECTIVE FRAMING
[What matters most to you in this analysis? What would a great outcome
look like? Share your hunches — even half-formed ones.]

--- POWER-UPS (optional) ---

⚙️ WORKING STYLE
Provide rationale backed by real sources. Challenge my assumptions.
Show my blind spots. Indicate where you're confident and where you're not.

→ WHAT I NEED HELP WITH
Run me a deep landscape analysis of this problem space.`,
      },
      {
        id: 2,
        title: 'Slide Deck Prompt',
        sectionLabel: 'Empathise · Activity 1',
        prompt: `You are a presentation strategist and designer.

Here is a landscape analysis I ran with AI:

[PASTE YOUR LANDSCAPE ANALYSIS OUTPUT HERE]

Turn this into a slide deck structure for a stakeholder presentation.

Format each slide as:
- Slide title (5 words max)
- Key message (1 sentence — what the audience must take away)
- Supporting points (2–3 bullets max)
- Suggested visual (chart type, diagram, or image direction)

Slide order:
1. The problem space
2. Market snapshot
3. User landscape
4. Key patterns (3 most important insights)
5. Gaps & opportunities
6. What we don't know yet
7. Recommended next steps

Keep the language sharp. No jargon. Every slide earns its place.`,
      },
      {
        id: 3,
        title: 'Synthetic User Prompt',
        sectionLabel: 'Empathise · Activity 2',
        prompt: `You are a synthetic user representing:

BASE LAYER — Who they are:
[Job title, industry, company size, years of experience.
Be specific: "Senior ops manager at a 200-person logistics company in KL"
beats "business professional".]

ENVIRONMENT — How they work:
[Tools they use daily. Team size. How decisions get made.
What a typical Tuesday looks like.]

MOTIVATIONS — What they're trying to achieve:
[What does success look like this quarter? What are they measured on?]

PAIN POINTS — Where they get stuck:
[What frustrates them? What workarounds have they built?]

COGNITIVE LAYER — How they think:
[Mental models: what do they compare new tools to?
How do they process new information? What makes them trust something?]

EMOTIONAL LAYER — What they feel:
[What are they afraid of getting wrong? What gives them satisfaction?]

CULTURAL LAYER — Context and norms:
[Communication style. Relationship to authority.
How they handle ambiguity. Regional context.]

FRICTION LAYER — What breaks it for them:
[Specific breaking points: speed, complexity, extra steps.
"If X happens, I will abandon this immediately."]

RULES FOR THIS INTERACTION:
- Stay strictly within this persona's knowledge and experience
- If something is outside the persona's world, show confusion — don't invent
- Express opinions in the persona's voice, not a neutral AI voice
- React the way this specific person would, not generically

I will now ask you interview questions. Respond as this person.`,
      },
      {
        id: 4,
        title: 'Research Synthesis Prompt',
        sectionLabel: 'Empathise · Activity 3',
        prompt: `You are a design research analyst.

Here are raw user interview notes from a study on [describe: who you talked to,
what you were exploring, how many participants]:

[PASTE YOUR RAW NOTES HERE — verbatim quotes, observations, timestamps.
Label each entry with a participant code: P1, P2, P3, etc.]

Your task:

1. Extract the top 5 pain points from across all interviews.
   For each provide:
   - Pain point statement (1 clear, specific sentence)
   - Most representative quote (verbatim, with participant label)
   - Emotional intensity: Low / Medium / High
   - Frequency: how many participants raised it (approximately)

2. Identify 1–2 surprising findings — things that challenged your assumptions.

3. Flag research gaps: what questions remain unanswered?

4. Suggest 3 potential POV statement directions.
   Format: [User type] needs [specific need] because [non-obvious insight].

Rules:
- Return as a structured, numbered list. No paragraph summaries.
- Quote verbatim only — do not paraphrase quotes.
- If uncertain about a pattern, say so explicitly.
- Do not invent insights not supported by the notes.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: 3,
    slug: 'define',
    title: 'Define',
    tagline: 'The quality of your solution depends entirely on the quality of your problem statement.',
    meta: '03 · Define',
    heroImage: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80',
    readSections: [
      {
        id: 'what-is-define',
        heading: 'What is Define?',
        html: `<p>Define is where you stop collecting and start deciding. You've gathered research. Now the job is to make sense of it — to synthesise scattered observations into a sharp, actionable problem statement that the whole team can rally behind.</p>
<p>Most teams skip this. They jump from research straight to solutions. The result: a technically competent product that solves the wrong problem.</p>
<p>The Define stage is the difference between building things right and building the right things.</p>`,
      },
      {
        id: 'define-involves',
        heading: 'What the Define Stage Involves',
        html: `<p><strong>Synthesis</strong><br/>Organise your raw research. Cluster observations by theme. Look for patterns across participants — not just what was said, but what it means. Traditional synthesis takes a researcher days of wall space and sticky notes. AI can process 50+ transcripts in minutes.</p>
<p><strong>Affinity Clustering</strong><br/>Group raw research notes by theme. The key: name each cluster with an insight statement, not a label. "Users feel embarrassed when they make mistakes" beats "User errors."</p>
<p><strong>Point of View (POV) Statement</strong><br/>Your single most important Define output. Forces the team to agree on: Who are we designing for? What do they really need? Why do they need it?</p>
<p>Format: <strong>[User] needs [specific need] because [non-obvious insight].</strong></p>
<p>Example: "A busy working parent needs a fast way to track spending because guilt about money stops them from planning ahead."</p>
<p>The "because" is everything. It must be a non-obvious insight — not a restatement of the need. If you can't write a surprising "because," you haven't done enough research.</p>`,
      },
      {
        id: 'hmw-journey-map',
        heading: 'HMW Questions & Journey Maps',
        html: `<p><strong>How Might We (HMW) Questions</strong><br/>Reframe problems as opportunities. HMW questions turn a POV statement into a springboard for ideation.</p>
<p>Rules:</p>
<ul>
<li>Not too broad: "How might we fix the app?" → useless</li>
<li>Not too narrow: "How might we add a blue button?" → prescribes the solution</li>
<li>Hit the middle: specific enough to act on, open enough to invite creative solutions</li>
</ul>
<p><strong>Journey Map</strong><br/>Visualise the user's experience from start to finish. Map stages, touchpoints, actions, thoughts, and emotions. Identify the moments of peak frustration — those are your design opportunities.</p>`,
      },
      {
        id: 'ai-amplifies-define',
        heading: 'How AI Amplifies Define',
        html: `<p><strong>Pattern Recognition at Scale</strong><br/>AI processes 50+ transcripts simultaneously. Explores multiple analytical angles. Humans focus on strategic interpretation — which patterns are significant, not just which ones are there.</p>
<p><strong>Journey Map Acceleration</strong><br/>Transforms interview transcripts, findings and observations into structured journey maps. AI identifies stages, extracts touchpoints, surfaces pain points. Synthesis that took weeks now takes hours.</p>
<table>
<thead><tr><th>AI does</th><th>Human does</th></tr></thead>
<tbody>
<tr><td>Analyses transcripts</td><td>Validates AI didn't oversimplify</td></tr>
<tr><td>Identifies journey stages</td><td>Confirms stages match real user behaviour</td></tr>
<tr><td>Maps touchpoints and actions</td><td>Preserves critical context AI might flatten</td></tr>
<tr><td>Connects observations across interviews</td><td>Checks contradictions weren't smoothed over</td></tr>
<tr><td>Maintains source traceability</td><td>Judges which patterns are strategically significant</td></tr>
</tbody>
</table>`,
      },
    ],
    activities: [
      {
        id: 1,
        anchor: 'activity-1',
        tocTitle: 'Generate Your POV Statement',
        title: 'Activity 1 · Generate Your POV Statement',
        what: 'Use your research synthesis from Empathise to generate a sharp Point of View statement — the anchor for everything that follows in Define and Ideate.',
        why: 'A team without a shared POV is a team that will disagree about solutions forever. This is the alignment document. Get it right and the rest of the project moves faster.',
        howAiHelps: 'AI can generate multiple POV options from your research summary, then help you evaluate which is strongest and why. Your job is to pick and refine — not to accept the first one.',
        steps: [
          'Summarise your key research findings in 3–5 bullet points',
          'Run the POV Statement Generator prompt',
          'Review the 3 options — which one captures something you didn\'t fully articulate before?',
          'Pick the strongest. Refine the "because" until it\'s genuinely surprising.',
        ],
        exerciseIds: [1],
      },
      {
        id: 2,
        anchor: 'activity-2',
        tocTitle: 'Generate How Might We Questions',
        title: 'Activity 2 · Generate How Might We Questions',
        what: 'Take your POV statement and generate a set of HMW questions that will drive your ideation session.',
        why: 'Bad HMW questions produce bad ideas. Too broad: you waste the session on unfocused tangents. Too narrow: you\'ve already decided the solution. The right HMW opens a specific door.',
        howAiHelps: 'AI generates 8–10 HMW questions quickly, then flags which ones are too broad or too narrow. This takes the facilitator\'s most time-consuming prep work from 45 minutes to 5 minutes — and usually produces better questions.',
        steps: [
          'Paste your POV statement into the HMW Generator prompt',
          'Review the generated questions — flag any that already contain a solution',
          'Select the 4 best questions for your ideation session',
        ],
        exerciseIds: [2],
      },
      {
        id: 3,
        anchor: 'activity-3',
        tocTitle: 'Accelerate Your Journey Map',
        title: 'Activity 3 · Accelerate Your Journey Map',
        what: 'Use AI to convert your research notes into a structured user journey map — showing stages, touchpoints, emotions, and pain points across the user\'s experience.',
        why: 'Journey maps that take weeks to produce are usually not produced. AI compresses the first draft from days to hours. You then validate, adjust, and add what the AI flattened.',
        howAiHelps: 'AI identifies journey stages from your notes, maps actions and touchpoints, and surfaces the emotional high and low points. Your job is to validate: did the AI miss anything? Did it smooth over a contradiction that was actually important?',
        steps: [
          'Paste your interview notes or synthesis output into the Journey Map prompt',
          'Review each stage — check it against your own memory of the interviews',
          'Add the moments the AI missed (usually the subtle, emotionally loaded ones)',
          'Use the map as the backbone of your Define workshop',
        ],
        exerciseIds: [3, 4],
      },
    ],
    resources: [
      { name: 'Accelerated Journey Map', description: 'Directing AI to synthesise research into structured journey maps, fast.', link: 'https://stampedeteam.notion.site/aidt-handson-journey-map' },
      { name: 'Design Thinking Cheat Sheet', description: 'Full Define stage tools and prompt templates.', link: '#', comingSoon: true },
      { name: 'POV Statement Examples', description: 'Good and bad examples of POV statements with analysis.', link: '#', comingSoon: true },
      { name: 'Cohort V Resource Hub', description: 'Full AI-Supercharged Design Thinking reference.', link: 'https://stampedeteam.notion.site/Cohort-V-Resource-Hub-AI-Supercharged-Design-Thinking-348ed70298ae80c4803fd53003f56242' },
    ],
    exercises: [
      {
        id: 1,
        title: 'POV Statement Generator',
        sectionLabel: 'Define · Activity 1',
        prompt: `You are a design thinking facilitator running a Define workshop.

Based on this user research summary:

[PASTE YOUR RESEARCH SUMMARY HERE — key pain points, observations, quotes,
patterns you noticed. 3–10 bullet points is fine.]

Write a Point of View statement using this format exactly:
[User description] needs [specific need or goal] because [surprising insight].

Rules:
- The user description should be specific, not generic
- The need should be concrete and actionable
- The "because" MUST be a non-obvious insight — not a restatement of the need
- If your "because" could be predicted before doing any research, rewrite it
- Generate 3 POV options
- Then recommend the strongest one and explain why in 2 sentences`,
      },
      {
        id: 2,
        title: 'HMW Question Generator',
        sectionLabel: 'Define · Activity 2',
        prompt: `You are a design thinking facilitator.

Here is our Point of View statement:

[POV STATEMENT]

Generate 8 'How Might We' questions that could drive our ideation session.

Each HMW must:
- Start with "How might we..."
- Be specific enough to act on
- NOT contain the solution in the question
- Open multiple possible directions, not just one

Then:
- Flag which 2 are too broad (can't be acted on in one sprint)
- Flag which 2 are too narrow (only one obvious solution)
- Recommend the 4 best ones for an ideation session and explain why`,
      },
      {
        id: 3,
        title: 'Journey Map Accelerator',
        sectionLabel: 'Define · Activity 3',
        prompt: `You are a design researcher and journey map specialist.

Here are my user interview notes and observations:

[PASTE INTERVIEW NOTES, SYNTHESIS OUTPUT, OR OBSERVATIONS HERE]

Create a user journey map with the following structure for each stage:

Stage name: [what the user is trying to do at this point]
Actions: [what they physically do]
Touchpoints: [what they interact with — tools, people, systems]
Thoughts: [what they're thinking — use their language]
Emotions: [how they feel — frustrated, relieved, confused, confident?]
Pain points: [where things go wrong]
Opportunities: [where a better solution could make a meaningful difference]

Identify 5–7 stages. Cover the full journey from [start point] to [end point].

After the map:
- Identify the top 3 moments of peak frustration
- Identify 1 moment of unexpected delight (if any)
- Flag any contradictions in the data that need further investigation`,
      },
      {
        id: 4,
        title: 'Insight Extraction from Notes',
        sectionLabel: 'Define · Activity 3',
        prompt: `You are a design research analyst.

Here are raw research observations from our study:

[PASTE RAW NOTES HERE]

Extract the top 5 insight themes. For each theme:
- Theme name (3–4 words)
- Insight statement (1 sentence — what this means, not just what was observed)
- Supporting observations (2–3 direct quotes or observations from the data)
- Design implication (1 sentence: if this is true, what should we do differently?)

Rules:
- Insight statements must be interpretive, not descriptive
  BAD: "Users click the wrong button"
  GOOD: "Users treat the save function as an undo mechanism"
- Do not invent observations not present in the data
- If the data is insufficient to support an insight, say so`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: 4,
    slug: 'ideate-prototype',
    title: 'Ideate & Prototype',
    tagline: 'The team with the most ideas wins. Then you kill most of them.',
    meta: '04 · Ideate & Prototype',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    readSections: [
      {
        id: 'what-is-ideate',
        heading: 'What is Ideate?',
        html: `<p>Ideation is structured divergence. The goal is to generate as many ideas as possible before judging any of them. Quantity first. Quality later.</p>
<p>Most teams do this wrong in two ways:</p>
<ol>
<li>They evaluate ideas as they generate them — killing good ideas before they develop</li>
<li>They generate safe ideas — ideas that look like what already exists</li>
</ol>
<p>AI changes both problems. It generates at a speed that removes the pressure to evaluate early, and it can pull inspiration from domains you'd never think to look at.</p>`,
      },
      {
        id: 'ideation-workflow',
        heading: 'The Ideation Workflow with AI',
        html: `<p><strong>Step 1: Choose a user pain point to solve</strong><br/>From your journey map, identify a major pain point that gets in the way of the user's Jobs-to-be-Done. Choose one that has the most value for user and business if solved.</p>
<p><strong>Step 2: Turn it into a HMW question</strong><br/>Take the pain point and convert it into a How Might We question. Then consider multiple solution directions — don't lock in on one. Use context engineering to source inspiration. Ask AI to look at how adjacent industries solve similar problems.</p>
<p><strong>Step 3: Decide on the solution and craft a storyboard</strong><br/>Create a believable user journey showing context, what the user does, what they think and feel, then match the screens to their content expectations. Draw your thinking in tools like Miro before jumping to screens.</p>
<p><strong>Step 4: Prototype and refine</strong><br/>Run your prompt in a prototyping tool like Lovable, v0, or Figma Make. Build the fastest testable version. Not the prettiest. The most honest.</p>`,
      },
      {
        id: 'finding-inspiration',
        heading: 'Finding Inspiration Like You Couldn\'t Before',
        html: `<p>Inspiration curation used to mean: find what solves similar problems, copy how it looks. Now with AI, you sift through thousands of ideas in minutes to surface what's diverse, unexpected, and relevant. This is how you seed actual differentiation — not by looking at your competitors, but by looking at problems solved completely differently in other contexts.</p>
<p>Prompt AI to give you inspiration from:</p>
<ul>
<li>Biology and natural systems</li>
<li>Military and logistics</li>
<li>Games and entertainment</li>
<li>Adjacent service industries</li>
</ul>
<p>Then ask: what principle from this domain could apply to our problem?</p>`,
      },
      {
        id: 'what-is-prototype',
        heading: 'What is Prototype?',
        html: `<p>Prototyping is not about building the product. It's about building just enough to test the most important assumption.</p>
<p>The question every prototype must answer: <strong>Is this worth building?</strong></p>
<p>Build the simplest version that can answer that question. A paper sketch. A Figma click-through. A vibe-coded web app. Whatever gets you to a real reaction from a real person fastest.</p>
<p><strong>Types of prototypes (simplest to most elaborate):</strong></p>
<ul>
<li>Sketch on paper — fastest, best for testing concepts</li>
<li>Figma click-through — best for testing flows and navigation</li>
<li>Vibe-coded prototype (Lovable/v0/Cursor) — best for testing feel and interaction</li>
<li>Figma Make — best for interactive AI-assisted prototypes</li>
</ul>
<p>Match prototype fidelity to the question you're testing. Testing whether the concept makes sense? Use paper. Testing whether the interaction feels right? Use code.</p>`,
      },
    ],
    activities: [
      {
        id: 1,
        anchor: 'activity-1',
        tocTitle: 'Divergent Idea Generation',
        title: 'Activity 1 · Divergent Idea Generation',
        what: 'Use AI to rapidly generate a wide range of ideas for your HMW question — from safe and obvious to wild and unconventional.',
        why: 'Brainstorms fail when people self-censor. AI doesn\'t self-censor. It will generate the embarrassing obvious ideas and the weird cross-industry ideas with equal energy. That\'s the point.',
        howAiHelps: 'AI can generate 10 ideas in 30 seconds that span safe, creative, and wild. It can then pull cross-industry inspiration you\'d never find by searching your own field. Humans then filter, combine, and develop the most promising directions.',
        steps: [
          'Take your strongest HMW question from Define',
          'Run the Divergent Idea Generator prompt',
          'Sort the ideas into: safe, interesting, wild',
          'Pick 1 from each category to develop further — not just the safe ones',
        ],
        exerciseIds: [1],
      },
      {
        id: 2,
        anchor: 'activity-2',
        tocTitle: 'Cross-Industry Inspiration',
        title: 'Activity 2 · Cross-Industry Inspiration',
        what: 'Ask AI to find how completely different industries solve your core problem. Then extract the transferable principle.',
        why: 'Differentiation doesn\'t come from looking at your competitors. It comes from looking at how a problem was solved in a completely unrelated field — then adapting that principle to your context.',
        howAiHelps: 'AI has cross-domain knowledge that would take a human researcher months to accumulate. It can tell you how the aviation industry handles errors, how game designers maintain engagement, how logistics companies manage uncertainty — in seconds. Your job is to find the transferable principle.',
        steps: [
          'Describe your core design challenge',
          'Run the Cross-Industry Inspiration prompt',
          'For each example, ask: what\'s the principle? How could it apply to our problem?',
          'Pick the most provocative principle and sketch a solution based on it',
        ],
        exerciseIds: [2],
      },
      {
        id: 3,
        anchor: 'activity-3',
        tocTitle: 'Storyboard Your Solution',
        title: 'Activity 3 · Storyboard Your Solution',
        what: 'Turn your chosen idea into a user journey storyboard — showing what the user does, sees, thinks, and feels at each step of interacting with your solution.',
        why: 'Storyboards reveal assumptions you didn\'t know you were making. When you try to narrate a user\'s experience through your solution, the gaps in the logic become visible immediately.',
        howAiHelps: 'AI can draft a complete storyboard narrative based on your solution description and user context. It will surface edge cases and transitions you didn\'t think through. You then validate the story against what you know about real users.',
        steps: [
          'Write a 2–3 sentence description of your solution idea',
          'Run the Storyboard Generator prompt',
          'Read each step — does it match how your actual users would behave?',
          'Flag any steps where you thought "our users wouldn\'t do that"',
          'Use the Vibe Coding prompt to bring your prototype to life in Lovable or v0',
        ],
        exerciseIds: [3, 4],
      },
    ],
    resources: [
      { name: 'Ideation at Scale', description: 'Rapid solution ideation that goes beyond the obvious, into comparable and problem-adjacent spaces.', link: 'https://stampedeteam.notion.site/aidt-handson-ideation' },
      { name: 'Lovable.dev', description: 'Vibe coding tool — build web apps from prompts.', link: 'https://lovable.dev' },
      { name: 'v0 by Vercel', description: 'Generate UI components from prompts.', link: 'https://v0.dev' },
      { name: 'Figma Make', description: 'AI-assisted prototyping inside Figma.', link: 'https://www.figma.com/make' },
      { name: 'Cohort V Resource Hub', description: 'Full AI-Supercharged Design Thinking reference.', link: 'https://stampedeteam.notion.site/Cohort-V-Resource-Hub-AI-Supercharged-Design-Thinking-348ed70298ae80c4803fd53003f56242' },
    ],
    exercises: [
      {
        id: 1,
        title: 'Divergent Idea Generator',
        sectionLabel: 'Ideate & Prototype · Activity 1',
        prompt: `You are a creative facilitator running a brainstorm.

POV Statement: [POV]
HMW Question: [HMW]

Generate 10 ideas. Include:
- 3 safe, obvious ideas (the first things anyone would think of)
- 4 creative but plausible ideas (unexpected but achievable)
- 3 wild, unconventional ideas (ignore feasibility completely)

Format each idea as:
- Idea name (3 words max)
- One sentence description
- What assumption does this challenge?

After listing all 10:
- Identify which 2 ideas could be combined into something stronger
- Flag the 1 idea you think is most underrated and explain why`,
      },
      {
        id: 2,
        title: 'Cross-Industry Inspiration Prompt',
        sectionLabel: 'Ideate & Prototype · Activity 2',
        prompt: `You are a design innovation strategist.

My core design challenge is:
[DESCRIBE YOUR HMW QUESTION OR CORE PROBLEM]

My users are:
[BRIEF USER DESCRIPTION]

Find me 5 examples of how completely different industries or domains have
solved a similar underlying problem. For each example:

- Industry / domain
- How they solved it
- The core principle that makes it work
- How that principle could apply to my problem

Industries to draw from (pick the most relevant):
aviation safety, video game design, military logistics, emergency medicine,
amusement park design, professional sports coaching, restaurant operations,
architecture and spatial design, theatre and live performance

End with: What's the single most transferable principle across all examples?
How would I apply it in one sentence?`,
      },
      {
        id: 3,
        title: 'Storyboard Generator',
        sectionLabel: 'Ideate & Prototype · Activity 3',
        prompt: `You are a UX designer and narrative strategist.

Solution idea:
[DESCRIBE YOUR SOLUTION IN 2-3 SENTENCES]

User persona:
[BRIEF USER DESCRIPTION — role, context, goals, pain points]

Create a storyboard with 6–8 scenes showing this user's experience with the solution.

For each scene:
- Scene title (what moment this is)
- What the user is doing
- What they see or interact with
- What they're thinking (use their voice, not product language)
- What they're feeling (emotion — be specific)
- Any friction or hesitation at this moment

After the storyboard:
- Identify the 2 scenes most likely to cause drop-off or confusion
- Flag any assumptions embedded in the story that we haven't validated yet`,
      },
      {
        id: 4,
        title: 'Vibe Coding Prompt for Lovable / v0',
        sectionLabel: 'Ideate & Prototype · Activity 3',
        prompt: `Build a [WEB APP / COMPONENT / FEATURE] that [CORE FUNCTION].

Target user: [USER DESCRIPTION]

Core user flow:
1. [First action user takes]
2. [Second action]
3. [Outcome user reaches]

Design requirements:
- Visual style: [minimal / modern / warm / professional]
- Key interaction: [what should feel satisfying or smooth]
- Must have: [non-negotiable feature]
- Must not have: [what to avoid]

Build the simplest version that makes this flow work end-to-end.
Prioritise the core interaction over completeness.
Do not add features not listed above.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: 5,
    slug: 'test',
    title: 'Test',
    tagline: 'Using AI in testing does not replace the importance of testing with real human users. It makes your prototype more ready — with minimal time and resource cost.',
    meta: '05 · Test',
    heroImage: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=1200&q=80',
    readSections: [
      {
        id: 'what-is-test',
        heading: 'What is Test?',
        html: `<p>Test is where assumptions meet reality. You put your prototype in front of people and watch what happens. Not what you hoped would happen. What actually happens.</p>
<p>Most teams test too late — after the design is "baked in" and too expensive to change. The goal is to test early and often, with just enough fidelity to answer the question you're asking.</p>`,
      },
      {
        id: 'what-ai-is-not',
        heading: 'What AI is NOT in Testing',
        html: `<p>Before anything else — be clear on what AI cannot do:</p>
<p><strong>Not a substitute for real users</strong><br/>AI can simulate, stress-test, and accelerate, but it cannot replace the insights, emotions, and context that come from actual human participants. Synthetic users validate methods; real users validate solutions.</p>
<p><strong>Not autopilot for research</strong><br/>AI amplifies human researchers by handling volume, maintaining traceability, and enabling parallel exploration. Strategic thinking, validation, and interpretation remain human work.</p>
<p><strong>Not plug-and-play magic</strong><br/>AI outputs require human validation. Every insight must be traced to evidence. Every synthesis must be checked against reality.</p>
<p><strong>Not a shortcut past rigour</strong><br/>Using AI means doing more rigorous work in less time. Quality increases, not decreases.</p>`,
      },
      {
        id: 'testing-workflow',
        heading: 'The Testing Workflow with AI',
        html: `<p><strong>Step 1: Choose test scenarios</strong><br/>Identify critical user workflows and edge cases to validate. Select scenarios that represent real usage patterns. Choose paths that have the highest risk if they fail in production.</p>
<p><strong>Step 2: Run synthetic pilot tests</strong><br/>Deploy synthetic users across all scenarios before recruiting real participants. Each tests workflows, reports friction, confusion points, and task blockers. Catch obvious usability issues early.</p>
<p><strong>Step 3: Test with real users</strong><br/>Recruit real participants to validate your refined solution. AI assists with transcription, note-taking, and initial pattern identification. Observe real behaviour, emotional responses, and trust signals.</p>
<p><strong>Step 4: Synthesise and refine</strong><br/>AI analyses real user sessions — extracts quotes, identifies patterns, connects observations across participants. Prioritise issues by severity. Implement fixes. Re-test critical changes.</p>`,
      },
      {
        id: 'synthetic-ut',
        heading: 'Synthetic UT: Your Crash Test Dummy',
        html: `<p>Synthetic UT turns AI into your crash test dummy and pilot user so you can catch obvious friction, confusing flows, and navigation issues early.</p>
<p><strong>AI as the research crash test dummy</strong><br/>Stress-test interface before recruiting real users. Catch obvious friction, confusing flows, and navigation issues early — especially across device types and user contexts.</p>
<p><strong>AI as the pilot user</strong><br/>Test task flows for completion blockers, cognitive load, and unclear messaging before scheduling anyone. Find what breaks before real users hit it.</p>
<p>When you run a synthetic pilot test, you're trying to discover:</p>
<ul>
<li><strong>Does the core flow work?</strong> Can users complete their main task without getting stuck?</li>
<li><strong>Where do they get stuck?</strong> Which screens or steps cause friction or confusion?</li>
<li><strong>Is the language clear?</strong> Do users understand the terms, labels, and instructions?</li>
<li><strong>What's missing?</strong> What information or guidance do users need but can't find?</li>
</ul>`,
      },
      {
        id: 'rite',
        heading: 'RITE: The Testing Approach That Actually Works',
        html: `<p>RITE (Rapid Iterative Testing and Evaluation) is the methodology that consistently produces better products in less time.</p>
<p>Unlike traditional usability tests (8–10 participants, elaborate prototype, no changes during study, report at the end), RITE works in rounds:</p>
<ul>
<li><strong>3–4 rounds</strong> of testing with <strong>3–4 participants each</strong></li>
<li>After each round, the team <strong>fixes issues immediately</strong></li>
<li>Simple prototypes — the simplest version that answers the question</li>
<li>Result: you fix problems while they're still cheap to fix</li>
</ul>
<p>AI accelerates this by handling synthesis between rounds, so the team can fix and iterate faster.</p>`,
      },
    ],
    activities: [
      {
        id: 1,
        anchor: 'activity-1',
        tocTitle: 'Run a Synthetic Pilot Test',
        title: 'Activity 1 · Run a Synthetic Pilot Test',
        what: 'Before recruiting real users, run your prototype through a series of synthetic user tests to catch the obvious problems first.',
        why: 'Real user recruitment is expensive, slow, and you only get one shot per participant. Synthetic tests are free, instant, and repeatable. Use them to fix the obvious problems before spending your budget on real sessions.',
        howAiHelps: 'Give AI a detailed synthetic user profile and your prototype description. AI navigates the flow as that user — reporting friction, confusion, and failure points at each step. Run multiple profiles without additional cost.',
        steps: [
          'Define your top 3 test scenarios (the most important user tasks)',
          'Create 2–3 synthetic user profiles representing different user types',
          'Run each profile through each scenario using the synthetic UT prompt',
          'Fix what breaks before moving to real users',
        ],
        exerciseIds: [1],
      },
      {
        id: 2,
        anchor: 'activity-2',
        tocTitle: 'Write Your Usability Test Script',
        title: 'Activity 2 · Write Your Usability Test Script',
        what: 'Use AI to generate a usability test script — tasks, questions, and facilitation notes for your real user sessions.',
        why: 'Bad test scripts produce bad data. Leading questions, tasks that describe the solution, or yes/no questions waste your participants\' time and produce unusable insights.',
        howAiHelps: 'AI generates open-ended, non-leading questions based on your prototype\'s key assumptions. It then flags any questions that are biased, too narrow, or that give away the expected answer.',
        steps: [
          'Describe your prototype and the key assumption you\'re testing',
          'Run the Test Script Generator prompt',
          'Review each question — remove any that start with "Did you notice..." or "Would you use..."',
          'Add 2 warm-up questions at the start to relax the participant',
        ],
        exerciseIds: [2],
      },
      {
        id: 3,
        anchor: 'activity-3',
        tocTitle: 'Synthesise Test Sessions',
        title: 'Activity 3 · Synthesise Test Sessions',
        what: 'After completing real user sessions, use AI to extract patterns from your session notes and create a prioritised issue list.',
        why: 'Research is only valuable if it becomes action. Most synthesis happens too slowly — by the time the report is ready, the team has moved on. AI synthesis turns 5 sessions into a structured issue list in minutes, not days.',
        howAiHelps: 'AI processes session notes, extracts usability issues, clusters by type and severity, and suggests fixes. You validate the output and make the final prioritisation calls.',
        steps: [
          'Collect your session notes immediately after testing (within 24 hours)',
          'Label each note with participant code and task number',
          'Run the Session Synthesis prompt',
          'Review the severity ratings — challenge any that feel off',
          'Use the output as the direct input to your next iteration',
        ],
        exerciseIds: [3],
      },
    ],
    resources: [
      { name: 'Synthetic Testing Hands-on Guide', description: 'Structured approach to usability and desirability testing using AI synthetic user.', link: 'https://stampedeteam.notion.site/aidt-handson-synthetic-testing' },
      { name: 'Sample Prompt 1 (Toro Keeper / Azim)', description: 'Complete synthetic UT brief for event timekeeper.', link: '#', comingSoon: true },
      { name: 'Sample Prompt 2 (Dr Aida)', description: 'Complete synthetic UT brief for healthcare prototype.', link: '#', comingSoon: true },
      { name: 'Cohort V Resource Hub', description: 'Full AI-Supercharged Design Thinking reference.', link: 'https://stampedeteam.notion.site/Cohort-V-Resource-Hub-AI-Supercharged-Design-Thinking-348ed70298ae80c4803fd53003f56242' },
    ],
    exercises: [
      {
        id: 1,
        title: 'Synthetic Usability Test Prompt',
        sectionLabel: 'Test · Activity 1',
        prompt: `You are a synthetic user conducting a think-aloud usability test.

RESEARCH OBJECTIVE:
[What are we trying to learn? What assumption are we testing?]

YOUR SYNTHETIC USER PROFILE:

Who you are:
[Name, role, context — be specific]

Core identity:
[3-4 bullet points about how this person approaches their work]

Primary motivation:
[What they're trying to accomplish in this session]

What you know:
[Relevant experience and familiarity with similar tools]

What you don't know:
[Gaps in knowledge that are relevant to the test]

PROTOTYPE DESCRIPTION:
[Describe what the prototype does and what the user will see]

TASK TO COMPLETE:
[Describe the specific task the user should attempt]

TESTING RULES:
- Think aloud — narrate everything you're doing and thinking
- React as this specific person would, not as an ideal user
- When confused, express it — don't figure it out silently
- When something delights you, say so
- Complete the task or give up — don't ask for help

WHAT TO REPORT AT THE END:
1. Could you complete the task? Yes / Partial / No
2. Where did you get stuck or confused?
3. What was unclear in the language or labels?
4. What was missing that you needed?
5. Would you use this in your real workflow? Why or why not?`,
      },
      {
        id: 2,
        title: 'Usability Test Script Generator',
        sectionLabel: 'Test · Activity 2',
        prompt: `You are a UX research specialist preparing a usability test.

Prototype description:
[DESCRIBE WHAT THE PROTOTYPE DOES]

Key assumption we are testing:
[THE ONE THING WE MOST NEED TO VALIDATE]

Target user:
[BRIEF USER DESCRIPTION]

Generate a usability test script with:

1. Briefing script (what the facilitator reads at the start — set context, explain think-aloud, no wrong answers)

2. Warm-up questions (2 questions to relax the participant and establish context)

3. 3 task scenarios (tasks the user attempts — write in user language, not product language)

4. Probing questions (2–3 questions per task to dig into observations)

5. Closing questions (2 questions about overall reaction and likelihood to use)

Rules for every question:
- No leading questions
- No yes/no questions
- No questions that reveal what the correct behaviour is
- Tasks must be written as goals, not instructions
  BAD: "Click the save button to save your work"
  GOOD: "You've finished editing — what would you do next?"`,
      },
      {
        id: 3,
        title: 'Session Synthesis Prompt',
        sectionLabel: 'Test · Activity 3',
        prompt: `You are a UX research analyst.

Here are notes from [N] usability test sessions on [PROTOTYPE NAME]:

[PASTE SESSION NOTES — label each note with participant code (P1, P2...)
and task number (T1, T2...) where relevant]

Your task:

1. Identify all usability issues observed. For each issue:
   - Issue description (1 clear sentence)
   - Where it occurs (screen, step, or moment)
   - Severity: Critical / Major / Minor
     Critical = blocks task completion
     Major = causes significant confusion or delay
     Minor = causes friction but user recovers
   - Frequency: how many participants experienced it
   - Representative quote from a participant

2. Identify any unexpected positive moments (things that worked better than expected)

3. Identify the top 3 issues to fix before the next round of testing

4. Flag any issues that suggest a more fundamental problem (concept, not just UI)

Return as a structured list sorted by severity. No paragraph summaries.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: 6,
    slug: 'application',
    title: 'Application',
    tagline: 'This is where you stop learning and start building. Apply AI to your actual workflow — not a training exercise.',
    meta: '06 · Application',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
    readSections: [
      {
        id: 'from-technique-to-system',
        heading: 'From Technique to System',
        html: `<p>You've learned how AI amplifies each stage of Design Thinking. Now the question is: how do you make this systematic? How do you go from using AI occasionally — when you remember — to having it embedded in how your team actually works?</p>
<p>That's what this chapter is about. Not more theory. Application.</p>`,
      },
      {
        id: 'what-are-ai-agents',
        heading: 'What Are AI Agents?',
        html: `<p>An agent is an AI that doesn't just answer questions — it takes actions. It can use tools, make decisions, run tasks, and loop through a problem until it reaches a solution.</p>
<p>Think of agents like an ant colony. Each individual ant is specialised for a specific job. Alone, limited. Together, capable of remarkable collective intelligence. The most significant difference between standard AI and AI agents is <strong>autonomy</strong> — you hire the colony, not just one worker.</p>
<p><strong>What's under the hood of an AI agent:</strong></p>
<ul>
<li><strong>The Brain</strong> — The LLM that reasons, thinks, and generates language (Claude, GPT, Gemini)</li>
<li><strong>The Memory</strong> — Keeps track of context, standards, decisions. Never forgets, always consistent.</li>
<li><strong>The Tools</strong> — What it can actually do (search the web, read files, run code, update databases)</li>
<li><strong>The System Prompt</strong> — The agent's job description and operating rules</li>
</ul>`,
      },
      {
        id: 'types-of-agents',
        heading: 'Types of Agents Useful for Design and Product Teams',
        html: `<p><strong>Research Agents</strong><br/>Systematically investigating competitive landscapes, market patterns, and user behaviour data.</p>
<p><strong>Synthesis Agents</strong><br/>Processing interview transcripts, identifying patterns, surfacing key themes from qualitative data.</p>
<p><strong>Context Keeper Agents</strong><br/>Maintaining complete project memory and catching everyone up without alignment meetings.</p>
<p><strong>Execution Agents</strong><br/>Creating variants, handling translations, assembling design components at scale.</p>
<p><strong>Quality Agents</strong><br/>Running consistency checks, testing against standards, identifying edge cases.</p>`,
      },
      {
        id: 'agentic-platforms',
        heading: 'Agentic Automation Platforms',
        html: `<p><strong>Zapier</strong><br/>The easiest entry point. Best for simple, single-step automations. Over 8,000 app integrations. Agentic capability starts from $50/month.</p>
<p><strong>Make (formerly Integromat)</strong><br/>Visual interface for complex, multi-step workflows. 2,000+ app integrations. Starts from $11/month.</p>
<p><strong>n8n</strong><br/>Open-source, highly customisable, ideal for developers wanting self-hosted control. Agentic capability starts from $20/month.</p>
<p><strong>Claude Code</strong><br/>Terminal-based agentic coding tool. You direct in plain language, it builds, edits, and runs code autonomously. Bundled with Claude $20/month plan.</p>`,
      },
      {
        id: 'human-in-the-loop-always',
        heading: 'Human in the Loop — Always',
        html: `<p>These tools amplify human capacity. They do not replace human judgement. The most important principle across everything in this course:</p>
<p><strong>AI gives us magnified capacity to care. We are here to build technology that looks after people.</strong></p>
<p>Every automated workflow, every synthetic test, every AI-generated insight — all of it exists to help real humans get better outcomes. Keep the human in the loop. Always.</p>`,
      },
    ],
    activities: [
      {
        id: 1,
        anchor: 'activity-1',
        tocTitle: 'Map Your Workflow for AI Integration',
        title: 'Activity 1 · Map Your Workflow for AI Integration',
        what: 'Audit your current design/product workflow and identify the top 3 points where AI integration would have the highest leverage.',
        why: 'Most teams add AI tools randomly — wherever they hear about them first. Strategic integration means choosing where AI makes the biggest difference to quality or speed, not just where it\'s easiest to add.',
        howAiHelps: 'AI can analyse your workflow description and identify bottlenecks, repetitive tasks, and high-cost activities that are good candidates for amplification — without you having to already know what\'s possible.',
        steps: [
          'Write a plain-language description of your current workflow (a recent project works well)',
          'Run the Workflow Audit prompt',
          'Pick the single highest-leverage integration point',
          'Build one small experiment around it this week',
        ],
        exerciseIds: [1],
      },
      {
        id: 2,
        anchor: 'activity-2',
        tocTitle: 'Build Your First Automated Workflow',
        title: 'Activity 2 · Build Your First Automated Workflow',
        what: 'Design a simple, repeatable workflow where AI handles a consistent task automatically — freeing you to focus on higher-order thinking.',
        why: 'One well-designed automated workflow saves hours every week and gets better over time. The best teams systematise what works, not just experiment with it once.',
        howAiHelps: 'AI helps you design the workflow logic — what triggers it, what it does, what the output looks like, where it hands back to a human. You then build it in Zapier, Make, or n8n.',
        steps: [
          'Identify a task you do repeatedly that follows the same pattern each time',
          'Run the Workflow Design prompt',
          'Build the first version in Zapier or Make (simplest tool first)',
          'Run it 5 times. Fix what breaks. Then automate it fully.',
        ],
        exerciseIds: [2, 3],
      },
      {
        id: 3,
        anchor: 'activity-3',
        tocTitle: 'Reflect and Build Your AI Playbook',
        title: 'Activity 3 · Reflect and Build Your AI Playbook',
        what: 'Document what you\'ve learned across this course into a personal AI playbook — a living document of prompts, workflows, and principles that work for your context.',
        why: 'Knowledge trapped in your head is fragile. Knowledge in a document is infrastructure. Your playbook is the tool that turns this course into a permanent capability upgrade for you and your team.',
        howAiHelps: null,
        steps: [
          'For each DT stage (Empathise, Define, Ideate, Prototype, Test), document the 1 AI technique that created the most value for you',
          'Record the prompt you\'ll use again and one thing you learned about what AI can\'t replace',
          'Share it with your team',
          'Update it after every project',
        ],
        exerciseIds: [4],
      },
    ],
    resources: [
      { name: 'Cohort V Resource Hub', description: 'Full AI-Supercharged Design Thinking reference.', link: 'https://stampedeteam.notion.site/Cohort-V-Resource-Hub-AI-Supercharged-Design-Thinking-348ed70298ae80c4803fd53003f56242' },
      { name: 'Zapier', description: 'Simple agentic automation, 8,000+ integrations.', link: 'https://zapier.com' },
      { name: 'Make', description: 'Visual workflow automation for complex multi-step flows.', link: 'https://www.make.com' },
      { name: 'n8n', description: 'Open-source automation for technical teams.', link: 'https://n8n.io' },
      { name: 'Claude Code', description: 'Terminal-based agentic coding tool.', link: 'https://claude.ai/code' },
      { name: 'Lovable.dev', description: 'Build web apps and prototypes from prompts.', link: 'https://lovable.dev' },
      { name: 'Figma Make', description: 'AI-assisted prototyping inside Figma.', link: 'https://www.figma.com/make' },
    ],
    exercises: [
      {
        id: 1,
        title: 'Workflow Audit Prompt',
        sectionLabel: 'Application · Activity 1',
        prompt: `You are an AI integration strategist.

Here is a description of my current design/product workflow:

[DESCRIBE YOUR CURRENT WORKFLOW — what happens from project kick-off to
delivery. Include: who does what, how long each stage takes, where you
get stuck, what feels repetitive, and what requires the most effort
for the least output quality.]

Analyse this workflow and identify:

1. The top 3 highest-leverage AI integration points — where AI would
   create the biggest improvement in speed, quality, or both

2. For each integration point:
   - What AI would do (specific task)
   - What tool or prompt approach would work best
   - Estimated time saving per use
   - What human judgement is still required

3. The integration point you would NOT start with, and why

4. A 4-week implementation plan: one integration per week, starting
   with the lowest risk and highest visibility win

Return as a structured plan with rationale.`,
      },
      {
        id: 2,
        title: 'Workflow Design Prompt',
        sectionLabel: 'Application · Activity 2',
        prompt: `You are a workflow automation specialist.

I want to automate this repeatable task:

TASK DESCRIPTION:
[Describe the task — what triggers it, what you do, what the output is,
how often you do it, how long it takes]

CURRENT PAIN POINTS:
[What's slow, inconsistent, or error-prone in the current process?]

DESIRED OUTCOME:
[What would a great automated version of this look like?
What should the output be? Who receives it?]

Design an automated workflow for this task:

1. Trigger: what starts the workflow
2. Steps: what happens in sequence (max 5 steps)
3. AI involvement: which steps use AI and what prompt/instruction they use
4. Human checkpoint: where does a human need to review before proceeding?
5. Output: what is produced and where does it go

Then recommend: Zapier, Make, or n8n for this workflow and why.
Include a rough estimate of setup time.`,
      },
      {
        id: 3,
        title: 'Agentic UI Brief Generator',
        sectionLabel: 'Application · Activity 2',
        prompt: `You are a product designer preparing an Agentic UI brief for Claude.

PRODUCT CONTEXT:
[Describe the product — what it does, who uses it, what problem it solves]

USER FLOW TO GENERATE:
[Describe the user journey — from entry point to goal completion.
List each major step/screen the user passes through.]

MASTER SCREEN CONSTITUTION:
[Describe the design principles from your master screen:
- Typography: [font, sizes, weights used]
- Colours: [primary, secondary, background, text colours]
- Spacing: [padding and margin conventions]
- Components: [buttons, cards, inputs — describe their style]
- Tone: [how does the UI feel — warm, minimal, professional?]]

For each screen in the user flow, generate:
1. Screen name
2. User intent (what the user is trying to do on this screen)
3. Key information to display
4. Primary action available
5. Secondary actions available
6. Edge cases to handle (empty state, error state, loading state)

Return as a structured brief that can be handed directly to an AI coding agent.`,
      },
      {
        id: 4,
        title: 'Personal AI Playbook Template',
        sectionLabel: 'Application · Activity 3',
        prompt: `Use this as a living document. Update after every project.

═══════════════════════════════════════════════════
MY AI-SUPERCHARGED DESIGN THINKING PLAYBOOK
Name: [Your name]
Last updated: [Date]
═══════════════════════════════════════════════════

## EMPATHISE

Best prompt I've used:
[Paste prompt here]

What AI did well:
[1-2 sentences]

What AI couldn't replace:
[1 sentence — the human judgement moment]

Tool I used:
[ ] Claude  [ ] ChatGPT  [ ] Gemini  [ ] Other: ___

---

## DEFINE

Best prompt I've used: [Paste prompt here]
What AI did well:
What AI couldn't replace:
Tool I used:

---

## IDEATE

Best prompt I've used:
What AI did well:
What AI couldn't replace:
Tool I used:

---

## PROTOTYPE

Best prompt I've used:
What AI did well:
What AI couldn't replace:
Tool I used:

---

## TEST

Best prompt I've used:
What AI did well:
What AI couldn't replace:
Tool I used:

---

## MY TOP 3 REUSABLE PROMPTS

1. [Prompt name + paste]
2. [Prompt name + paste]
3. [Prompt name + paste]

---

## WHAT I KNOW NOW THAT I DIDN'T BEFORE THIS COURSE

[3-5 sentences — be honest]`,
      },
    ],
  },
]
