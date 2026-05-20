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
<p>Best used when the problem is ambiguous, the solution is unknown, or the user's real need has never been clearly defined.</p>`,
      },
      {
        id: 'the-double-diamond',
        heading: 'The Double Diamond',
        html: `<p><strong>First Diamond: Doing the Right Thing</strong></p>
<ol>
<li><strong>Discover (Diverge)</strong> — Explore the problem space widely. Talk to users. Suspend assumptions.</li>
<li><strong>Define (Converge)</strong> — Synthesise findings into a clear Point of View. Pick the right problem.</li>
</ol>
<p><strong>Second Diamond: Doing Things Right</strong></p>
<ol start="3">
<li><strong>Develop (Diverge)</strong> — Generate many ideas. Prototype rapidly. Quantity before quality.</li>
<li><strong>Deliver (Converge)</strong> — Test with real users. Refine. Ship what works.</li>
</ol>`,
      },
      {
        id: 'the-5-stages',
        heading: 'The 5 Stages',
        html: `<p><strong>1. Empathise</strong> — Understand users deeply. Uncover needs, motivations, pain points.</p>
<p><strong>2. Define</strong> — Frame the challenge from the user's perspective.</p>
<p><strong>3. Ideate</strong> — Generate diverse ideas without judgment.</p>
<p><strong>4. Prototype</strong> — Build quick, testable versions.</p>
<p><strong>5. Test</strong> — Observe real user interactions and refine.</p>`,
      },
      {
        id: 'the-5-walls',
        heading: 'But You Know the Limits',
        html: `<p>Most teams hit the same five walls: <strong>exploration constraints</strong>, <strong>speed bottlenecks</strong>, <strong>bleeding context</strong>, <strong>capability gaps</strong>, and <strong>quality that doesn't scale</strong>. This course is about breaking those walls with AI.</p>`,
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
        what: 'Map how your current project sits on the Double Diamond. Where are you? Where did you skip?',
        why: 'Most teams are building things (second diamond) without having properly defined the right things to build (first diamond).',
        howAiHelps: null,
        steps: [
          'Draw a Double Diamond on Miro, FigJam, or paper',
          'For each phase, note what your team did — or skipped',
          'Use the prompt below to get an honest gap analysis',
        ],
        exerciseIds: [1],
      },
      {
        id: 2,
        anchor: 'activity-2',
        tocTitle: 'Identify Your 5 Walls',
        title: 'Activity 2 · Identify Your 5 Walls',
        what: 'A quick team retrospective to name which of the five walls you hit most.',
        why: 'You can\'t fix a problem you haven\'t named. This activity gives the team a shared language for where AI can help.',
        howAiHelps: null,
        steps: [
          'Share the 5 walls with your team and vote',
          'Paste results into the follow-up prompt',
        ],
        exerciseIds: [2],
      },
    ],
    resources: [
      { name: 'Design Thinking Cheat Sheet', description: 'Full reference for all DT stages, tools, and prompts.', link: '#', comingSoon: true },
      { name: 'Cohort V Resource Hub', description: 'Full AI-Supercharged Design Thinking reference.', link: 'https://stampedeteam.notion.site/Cohort-V-Resource-Hub-AI-Supercharged-Design-Thinking-348ed70298ae80c4803fd53003f56242', hidden: true },
    ],
    exercises: [
      {
        id: 1,
        title: 'Double Diamond Gap Finder',
        sectionLabel: 'Design Thinking · Activity 1',
        prompt: `📍 BACKGROUND & CONTEXT
[Describe your recent project in 3-5 sentences. What was it? What did the
team do? What was the outcome? Be specific and honest.]

🚧 KNOWN CONSTRAINTS
[What limited your process? Time pressure? No research budget? Team size?
Stakeholder demands?]

💛 PERSPECTIVE FRAMING
I want to understand which stages of the Double Diamond we actually did
properly vs. which we skipped or rushed. I'm not looking for a pass —
I want the honest gaps.

→ WHAT I NEED HELP WITH
Map what I described onto the Double Diamond (Discover, Define, Develop,
Deliver). For each phase:
1. Did we do it, partially do it, or skip it?
2. If we skipped or rushed it — what's the likely consequence?
3. What's the one most important thing to go back and fix?

Be direct. Don't soften the gaps.`,
        sample: `📍 BACKGROUND & CONTEXT
We redesigned our SME lending portal over 3 months. The brief came from
sales — they said customers were dropping off the application form.
We looked at the analytics, redesigned the form UX, and shipped it.
Conversion improved slightly but the sales team still aren't happy.
We're not sure if we solved the right problem.

🚧 KNOWN CONSTRAINTS
No user research budget. 3-week design timeline. Engineering had a fixed
sprint schedule. Product owner was also the project stakeholder, so there
was no one to push back on scope.

💛 PERSPECTIVE FRAMING
I want to understand which stages of the Double Diamond we actually did
properly vs. which we skipped or rushed. I'm not looking for a pass —
I want the honest gaps.

→ WHAT I NEED HELP WITH
Map what I described onto the Double Diamond (Discover, Define, Develop,
Deliver). For each phase:
1. Did we do it, partially do it, or skip it?
2. If we skipped or rushed it — what's the likely consequence?
3. What's the one most important thing to go back and fix?

Be direct. Don't soften the gaps.`,
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
    title: 'Design Thinking + AI',
    tagline: 'AI doesn\'t just speed things up. It gives your team the ability to achieve things you previously couldn\'t.',
    meta: '01 · Design Thinking + AI',
    heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    readSections: [
      {
        id: 'the-real-question',
        heading: 'The Real Question',
        html: `<p>As you scan your team's workflow, you'll spot areas where AI generates things faster. But that's just increasing the rate of production. Instead, ask more fundamental questions:</p>
<ul>
<li>Could we explore unknowns without budget or time penalty?</li>
<li>Could we ship insights while interest is still hot?</li>
<li>Could we ensure customer voice lives on through synthesis and context retention?</li>
<li>Could we validate research methodology before committing recruitment budget?</li>
</ul>`,
      },
      {
        id: 'what-ai-actually-does',
        heading: 'What AI Does in This Context',
        html: `<p><strong>Parallel investigation</strong> — Explores multiple angles simultaneously. Weeks of desk research, in hours.</p>
<p><strong>AI-augmented synthesis</strong> — Processes 50+ transcripts in minutes. Humans focus on strategic interpretation.</p>
<p><strong>Persistent memory</strong> — Context retention across handoffs. New team members get up to speed without depending on someone's stale slide deck.</p>
<p><strong>Systematic testing at scale</strong> — Validates methodology before spending recruitment budget.</p>`,
      },
      {
        id: 'four-levels',
        heading: 'The 4 Levels of AI Integration',
        html: `<table>
<thead><tr><th>Level</th><th>What it looks like</th><th>What you can do</th></tr></thead>
<tbody>
<tr><td>1 · Educated</td><td>Everyone learning different tools. No shared approach.</td><td>Identify 1–2 high-impact use cases.</td></tr>
<tr><td>2 · Experimental</td><td>Basic context engineering in use. Use cases validated across workflow.</td><td>Connect isolated use cases. Enable context flow between stages.</td></tr>
<tr><td>3 · Operational</td><td>Context persists across handoffs. Meeting overhead drops 30–50%.</td><td>Systemise what works. Build quality gates.</td></tr>
<tr><td>4 · Future-Ready</td><td>Multi-agent coordination. Workflows self-coordinate.</td><td>Continuous optimisation. New service models.</td></tr>
</tbody>
</table>
<p>Most Malaysian teams are at Level 1–2. This course gets you to Level 2–3.</p>`,
      },
      {
        id: 'context-engineering',
        heading: 'Context Engineering: The Foundational Skill',
        html: `<p>Context engineering does one thing very well: <strong>it prevents you from looping in refinement hell.</strong></p>
<p>You set up AI chat once with proper context — the backstory, the goal, the constraints, your hunch — then you direct instead of endlessly refining. Transform AI from a tool into a thinking partner that amplifies your capability 10x.</p>
<p>Three templates depending on your situation:</p>
<p><strong>🚲 Lite</strong> — 2 minutes. Quick brainstorm, low stakes, internal drafts.</p>
<p><strong>🏎 Pro</strong> — 10 minutes. Stakeholder-facing work, user research planning, important decisions.</p>
<p><strong>🚀 Power Up</strong> — When you don't know what you don't know. Multiple unknowns. High stakes. The UNKNOWN section alone is worth it.</p>
<p><strong>The right context for the right situation:</strong></p>
<table>
<thead><tr><th>Your situation</th><th>Use this</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Quick brainstorm, low stakes</td><td>🚲 Lite</td><td>2 minutes. Good enough is good enough.</td></tr>
<tr><td>Internal draft for your team</td><td>🚲 Lite</td><td>Unless there are constraints they need to know.</td></tr>
<tr><td>Presenting to stakeholders</td><td>🏎 Pro</td><td>They'll have questions. You need proper context.</td></tr>
<tr><td>User research planning</td><td>🏎 Pro</td><td>Audience + constraints + your hunches matter.</td></tr>
<tr><td>Design decision with trade-offs</td><td>🏎 Pro</td><td>AI needs to understand what you're optimising for.</td></tr>
<tr><td>Multiple unknowns could derail you</td><td>🚀 Power Up</td><td>The UNKNOWN section alone is worth it.</td></tr>
<tr><td>Cross-team work (design + dev + business)</td><td>🚀 Power Up</td><td>Different perspectives need explicit context.</td></tr>
<tr><td>High-stakes decision (budget, reputation)</td><td>🚀 Power Up</td><td>10 minutes now saves weeks of rework.</td></tr>
<tr><td>It's 4pm on Friday and your brain is mush</td><td>🚲 Lite</td><td>Be kind to yourself. Go Pro on Monday.</td></tr>
</tbody>
</table>
<p><em><strong>Tip:</strong> Don't skip Perspective Framing. This is you wielding your good taste — what makes AI amplify <strong>you</strong> instead of giving everyone the same generic output.</em></p>`,
      },
    ],
    activities: [
      {
        id: 1,
        anchor: 'activity-1',
        tocTitle: 'Your First Context-Engineered Prompt',
        title: 'Activity 1 · Your First Context-Engineered Prompt',
        what: 'Write a properly structured prompt using the framework. Try all three levels and compare the outputs.',
        why: 'Most people write weak prompts and blame AI for weak outputs. Context Engineering is the single highest-leverage skill in this course. Master it here and everything else gets easier.',
        howAiHelps: null,
        steps: [
          'Pick a real task from your current work',
          'First, run it as a one-liner — note the output quality',
          'Run it with 🚲 Lite — is it better?',
          'If the output makes you go "hmm, not quite" — that\'s your signal to go Pro or Power Up',
          'Compare all outputs side by side',
        ],
        exerciseIds: [1, 2, 3],
      },
      {
        id: 2,
        anchor: 'activity-2',
        tocTitle: 'Assess Your AI Maturity Level',
        title: 'Activity 2 · Assess Your AI Maturity Level',
        what: 'Honestly assess where your team sits on the 4-level model, then get a specific plan for moving up one level.',
        why: 'You can\'t plan where to go if you don\'t know where you are. Most teams overestimate their maturity.',
        howAiHelps: null,
        steps: [
          'Read the 4 levels with your team and vote honestly',
          'Describe your current usage in the prompt below',
          'Get a specific action plan — not a pep talk',
        ],
        exerciseIds: [4],
      },
    ],
    resources: [
      { name: 'Hands-on: Context Engineering', description: 'Full prompt guide — Lite, Pro, and Power Up.', link: 'https://stampedeteam.notion.site/aidt-handson-content-engineering' },
      { name: 'Cohort V Resource Hub', description: 'Full AI-Supercharged Design Thinking reference document.', link: 'https://stampedeteam.notion.site/Cohort-V-Resource-Hub-AI-Supercharged-Design-Thinking-348ed70298ae80c4803fd53003f56242', hidden: true },
    ],
    exercises: [
      {
        id: 1,
        title: '🚲 Lite Context Engineering',
        sectionLabel: 'Design Thinking + AI · Activity 1',
        prompt: `📍 BACKGROUND & CONTEXT
[What's the situation? What's been tried? Why now?]

🚧 KNOWN CONSTRAINTS
[What limits exist? Timeline, budget, expertise, technical, regulatory?]

💛 PERSPECTIVE FRAMING
[What matters to you? What would success look like? What are your hunches?]

→ WHAT I NEED HELP WITH
[Your specific request]`,
        sample: `📍 BACKGROUND & CONTEXT
We're doing discovery for a B2B HR software product targeting Malaysian
SMEs (20–200 staff). Most competitors focus on payroll; we want to
understand the broader people ops pain. We've spoken to 3 HR managers
informally but haven't done structured research yet.

🚧 KNOWN CONSTRAINTS
2 weeks to first insights. Team of 2. No external research agency.
Can't access company payroll data for privacy reasons.

💛 PERSPECTIVE FRAMING
I care more about understanding where HR managers feel most out of
control than about feature prioritisation. My hunch: the pain isn't
payroll — it's the stuff that falls between systems. Success looks like
3–4 sharp research questions I didn't have before.

→ WHAT I NEED HELP WITH
Suggest 5 user research questions that would reveal unmet needs in
people operations for Malaysian SME HR managers.`,
      },
      {
        id: 2,
        title: '🏎 Pro Context Engineering',
        sectionLabel: 'Design Thinking + AI · Activity 1',
        prompt: `📍 BACKGROUND & CONTEXT
[Concise, rich background. Current challenges, past failures, timing urgency.]

🎯 USER CONTEXT
[Who is the user? What do we know / what's been validated about them?]

🚧 KNOWN CONSTRAINTS
[What limits exist? Timeline, budget, expertise, technical, regulatory?]

💛 PERSPECTIVE FRAMING
[What to emphasise or avoid? Success criteria, risk tolerance, your hunches.]

→ WHAT I NEED HELP WITH
[Your specific request]`,
        sample: `📍 BACKGROUND & CONTEXT
We're a 12-person product team at a Malaysian fintech building an expense
management tool for SMEs. We've had 6 months of growth but churn is
rising — especially in the 3–6 month cohort. Our assumption is onboarding
is broken but we haven't validated this with users. Previous attempt to
add a product tour didn't move the needle.

🎯 USER CONTEXT
Primary user: finance managers or business owners at SMEs with 10–50
staff. They're not tech-averse but have zero patience for learning curves.
Most are already using a mix of spreadsheets + WhatsApp for approvals.
They adopted us for the dashboard visibility, not the automation.

🚧 KNOWN CONSTRAINTS
Research budget: RM8k. 3 weeks to findings. Must present to board in
week 4. Cannot share actual customer data externally.

💛 PERSPECTIVE FRAMING
I suspect the real problem isn't the onboarding flow — it's that users
don't understand the value until week 3, by which time they've already
mentally checked out. I want to be challenged on this. Success looks like
a clear research plan I can defend to the board with a straight face.

→ WHAT I NEED HELP WITH
Design a user research plan to investigate our churn problem. Include
research objectives, recommended methods, proposed user segments to
recruit, and 5 interview questions to start with.`,
      },
      {
        id: 3,
        title: '🚀 Power Up Context Engineering',
        sectionLabel: 'Design Thinking + AI · Activity 1',
        prompt: `📍 BACKGROUND & CONTEXT
[Concise, rich background for situational awareness.
Current challenges, past failures, timing urgency.]

🎯 USER CONTEXT
[Who is the user? What do we know / what's been validated about them?]

📊 STRUCTURED DATA (if applicable)
[Paste data from Excel/Sheets for pattern analysis.
Quantitative analytics, error logs, feedback data.]

🚧 KNOWN CONSTRAINTS
[What limits exist? Timeline, budget, expertise, technical, regulatory?]

💛 PERSPECTIVE FRAMING
[What to emphasise or avoid? Success criteria, risk tolerance, your hunches.]

🔍 UNKNOWN
[Flag what you DON'T know yet.
e.g. "UNKNOWN: whether users would pay for this"
     "UNKNOWN: if our infrastructure can handle the load"
     "UNKNOWN: whether this pain point is universal or segment-specific"]

--- POWER-UPS (optional) ---

👥 INTENDED AUDIENCE
[Who this output is for. Technical level? What action do we want them to take?]

🔄 WORKING STYLE
[How you want to collaborate:
"Challenge my assumptions first"
"Give me 3 options, I'll pick one"
"Build incrementally — show me your reasoning"]

→ WHAT I NEED HELP WITH
[Your specific request]`,
        sample: `📍 BACKGROUND & CONTEXT
Weeknight dinners for working parents in KL (both working, 1–2 kids
under 12). Three meal planning apps failed here 2022–2024 — suspect
they just copied Western models. Malaysian context is different:
GrabFood everywhere, eating out 3–4x/week is normal, ~40% of M40
families have helpers or live with extended family. Need to understand
what's actually going on vs my assumptions.

🎯 USER CONTEXT
Working parents, both employed, household income RM8–15k. Time-poor.
Food decisions are emotional, not rational — tied to family guilt,
convenience, and "what everyone will actually eat." Past research kept
getting surface answers ("we want to eat healthier") that didn't
explain actual behaviour.

📊 STRUCTURED DATA (if applicable)
N/A for this phase — qualitative discovery first.

🚧 KNOWN CONSTRAINTS
Research budget: RM15k. 3 weeks to insights. Must cover both B40 and
M40 segments. Should include families with and without domestic help.

💛 PERSPECTIVE FRAMING
What I think good looks like:
1. Understanding the switching costs between cooking/ordering/eating
   out on a Tuesday vs a Friday.
2. I care about time/energy/mental load trade-offs more than
   nutritional goals.
3. My hunch: the decision isn't about "healthy" — it's about the
   least exhausting option that keeps everyone happy.
4. Risk tolerance: willing to narrow scope to get deep insights vs
   broad but shallow.

🔍 UNKNOWN
UNKNOWN: whether the pain is primarily the mother's or shared equally
UNKNOWN: whether domestic helpers change the decision dynamic
  completely or just shift it
UNKNOWN: if "weeknight" is the right framing — might be week-by-week
  mental load, not day-by-day
UNKNOWN: whether mamak/hawker proximity is a variable or a constant

--- POWER-UPS ---

👥 INTENDED AUDIENCE
This is for me and my co-founder to align on research scope before
we spend the budget. We need to agree on who we're talking to and why.

🔄 WORKING STYLE
Challenge my assumptions first. Then give me 3 research directions —
I'll pick one. Show your reasoning.

→ WHAT I NEED HELP WITH
Help me identify 3–4 distinct user segments based on how they handle
weeknight dinners — what drives their decisions, what makes it hard,
what they're already doing to cope. Then suggest research questions
that would get past "oh we just need to cook healthier" to the real
friction points. Especially the Malaysian-specific stuff that imported
solutions miss.`,
      },
      {
        id: 4,
        title: 'AI Maturity Assessment Prompt',
        sectionLabel: 'Design Thinking + AI · Activity 2',
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
<p>The goal: understand the person you're designing for. Not their demographic. Their actual situation — what frustrates them, what they're trying to accomplish, what they say versus what they actually do.</p>`,
      },
      {
        id: 'the-current-process',
        heading: 'The Current Process',
        html: `<p><strong>1. Landscape Research</strong> — Map the territory before talking to anyone. Market, players, assumptions.</p>
<p><strong>2. User Research Design</strong> — Hypotheses to test. 3–5 user segments. Interview guide.</p>
<p><strong>3. Participant Recruitment</strong> — Diverse pool. Plan for 20–30% no-shows.</p>
<p><strong>4. User Interviews</strong> — 6–10 interviews, 60–90 mins each. Verbatim notes or record.</p>
<p><strong>5. Synthesis</strong> — Extract, cluster, test against hypotheses, surface patterns.</p>
<p>Done properly: <strong>4–6 weeks</strong>, <strong>12–15 days of effort</strong>, <strong>2–3 researchers</strong>. Outside your home market? Triple the complexity. That's the real cost. And why most teams don't do it.</p>`,
      },
      {
        id: 'three-walls',
        heading: 'The 3 Walls AI Helps You Break',
        html: `<p><strong>Wall 1: Speed bottlenecks</strong> — AI compresses synthesis from weeks to hours.</p>
<p><strong>Wall 2: Exploration constraints</strong> — Go wide before you go deep, at a fraction of the time and cost.</p>
<p><strong>Wall 3: Bleeding context</strong> — AI maintains a living research record that compounds over time.</p>`,
      },
      {
        id: 'human-in-the-loop',
        heading: 'Human in the Loop',
        html: `<p>Empathy is about <em>seeing</em> the human at the end of the experience you're delivering. No amount of synthetic users can evoke the same feeling of deep understanding. Use AI to go faster and wider. Use real interviews to stay honest.</p>`,
      },
    ],
    activities: [
      {
        id: 1,
        anchor: 'activity-1',
        tocTitle: 'Landscape Research with AI Deep Research',
        title: 'Activity 1 · Landscape Analysis with AI Deep Research',
        what: 'Map your problem space before talking to a single user. Understand the market, spot patterns, identify gaps — in hours.',
        why: 'Walking into user research without landscape knowledge is like navigating without a map.',
        howAiHelps: 'Tools like Claude Research or ChatGPT Deep Research scan hundreds of sources simultaneously and synthesise them into a structured view. What used to take 2 weeks now takes 10 minutes of good prompting.',
        steps: [
          'Open ChatGPT Deep Research or Claude with Research mode',
          'Fill in project context and context engineering on a clean doc first',
          'Add your research request — don\'t press Enter yet, read it first',
          'Review output: challenge AI\'s assumptions, ask where it\'s uncertain',
          'Use findings to sharpen your research questions',
        ],
        exerciseIds: [1],
      },
      {
        id: 2,
        anchor: 'activity-2',
        tocTitle: 'Build a Synthetic User for Interview Prep',
        title: 'Activity 2 · Build a Synthetic User for Interview Prep',
        what: 'Create an AI-generated profile that mimics your target user — built in layers — then "interview" it to stress-test your guide.',
        why: 'Bad interview questions waste everyone\'s time. A synthetic user helps you find the gaps in your guide before you\'re sitting across from a real person who flew in for 60 minutes.',
        howAiHelps: `Build the persona across five layers: <strong>Base</strong> (who they are), <strong>Cognitive</strong> (how they think), <strong>Emotional</strong> (what they feel), <strong>Cultural</strong> (context and norms), <strong>Friction</strong> (what breaks it for them). This is preparation for real users, not a replacement.`,
        steps: [
          'Write the persona using all five layers',
          'Paste into your LLM as a system prompt',
          'Run your interview questions against it',
          'Note where answers are vague or too polished — those are weak questions',
          'Revise your guide, then repeat with another user segment',
        ],
        exerciseIds: [2],
      },
      {
        id: 3,
        anchor: 'activity-3',
        tocTitle: 'Synthesise Interview Notes with AI',
        title: 'Activity 3 · Synthesise Interview Notes with AI',
        what: 'After real user interviews, use AI to extract pain points, cluster themes, and surface patterns from raw notes.',
        why: 'Most teams leave synthesis half-done. AI can process what you give it at scale — but garbage in, garbage out.',
        howAiHelps: 'AI identifies recurring pain points, flags emotional intensity, and cross-references findings across participants. What takes a researcher days takes minutes. Your job: validate the output, not trust it blindly.',
        steps: [
          'Collect raw notes — verbatim quotes, observations, labelled P1, P2…',
          'Consolidate into a single document',
          'Paste with the synthesis prompt',
          'Review every pain point against your own reading',
          'Flag what AI missed — that gap is usually the most interesting insight',
        ],
        exerciseIds: [3],
      },
    ],
    resources: [
      { name: 'Hands-on: Landscape Analysis', description: 'Full prompt guide with EV charging sample dataset.', link: 'https://stampedeteam.notion.site/aidt-handson-landscape-analysis' },
      { name: 'Hands-on: Synthetic User', description: 'Full layered synthetic user prompt guide.', link: 'https://stampedeteam.notion.site/aidt-handson-synthetic-user' },
      { name: 'Responsible Use of Synthetic Users', description: 'Ethical guidelines — read before any synthetic interview.', link: '#', comingSoon: true },
      { name: 'Cohort V Resource Hub', description: 'Full AI-Supercharged Design Thinking reference. Your master reference for this entire course.', link: 'https://stampedeteam.notion.site/Cohort-V-Resource-Hub-AI-Supercharged-Design-Thinking-348ed70298ae80c4803fd53003f56242', hidden: true },
    ],
    exercises: [
      {
        id: 1,
        title: 'Landscape Analysis Prompt',
        sectionLabel: 'Empathise · Activity 1',
        prompt: `Project Context:
- Product: [what you're building or exploring]
- User group: [who you're designing for]
- Business goal: [what success looks like]
- Current pain: [what you've noticed so far]

Output Format I Need:
- A landscape summary covering: market context, user types,
  key players, patterns, and white space opportunities
- Highlight contradictions or things that don't add up
- Flag where you're uncertain or where data is thin

📍 BACKGROUND & CONTEXT
[Describe your problem space. What do you already know? What feels incomplete
or uneven? What have you noticed that you can't fully explain?]

👥 INTENDED AUDIENCE
This is for me as a product owner (and anyone working with me). I'm trying
to make better product and research decisions, decide where to focus next,
and understand which areas might turn into viable opportunities.

🎯 USER CONTEXT
[What types of users do you know about? Include what you've heard from
colleagues, early conversations, or assumptions you're holding.]

🚧 KNOWN CONSTRAINTS
[What limits your research? Time, budget, access, market, regulatory?]

💛 PERSPECTIVE FRAMING
[What matters most? What would a great outcome look like?
Share your hunches — even half-formed ones.]

⚙️ WORKING STYLE
Provide rationale backed by real sources. Challenge my assumptions.
Show my blind spots. Indicate where you're confident and where you're not.

→ WHAT I NEED HELP WITH
Run me a deep landscape analysis of this problem space.`,
        sample: `Project Context:
- Product: A public EV charging network management platform
- User group: EV drivers using public chargers in Malaysia
- Business goal: Reduce charger idle time and improve driver trust
- Current pain: Drivers don't know if a charger will work before
  they arrive. Operators don't know which chargers underperform.

Output Format I Need:
- A landscape summary covering: market context, user types,
  key players, patterns, and white space opportunities
- Highlight contradictions or things that don't add up
- Flag where you're uncertain or where data is thin

📍 BACKGROUND & CONTEXT
I've been looking at Malaysia's public EV charging landscape and I
understand the basics — growth is happening, but it feels uneven and
somewhat messy. Urban clusters are overserved, certain highways get
bottlenecked. I noticed some chargers sit idle because they're in the
wrong place or poorly maintained. Drivers complain about downtime,
unclear pricing, and the anxiety of not knowing whether a station will
actually work when they arrive.

I have pieces of the picture, but not the full view. I want to understand
how all the moving parts fit together and what patterns I might be missing.

👥 INTENDED AUDIENCE
This is for me as a product owner (and anyone working with me). I'm trying
to make better product and research decisions, decide where to focus next,
and understand which areas might turn into viable opportunities.

🎯 USER CONTEXT
There are a few types of users I know based on conversations with colleagues:
- Early adopters who plan routes in advance and will tolerate friction
- Pragmatic commuters who only charge if it's on their way
- Fleet operators who need reliability guarantees above all else

🚧 KNOWN CONSTRAINTS
- Limited to publicly available data — no access to operator dashboards
- 2-week research window before stakeholder presentation
- Malaysian market only for now (expanding to SEA later)

💛 PERSPECTIVE FRAMING
My hunch: the real problem isn't charger availability — it's trust.
Drivers have been burned enough times that they don't believe the
status indicators. I want to know if this is a known pattern across
other markets and what's been done about it.

⚙️ WORKING STYLE
Provide rationale backed by real sources. Challenge my assumptions.
Show my blind spots. Indicate where you're confident and where you're not.

→ WHAT I NEED HELP WITH
Run me a deep landscape analysis of this problem space.`,
      },
      {
        id: 2,
        title: 'Synthetic User Prompt',
        sectionLabel: 'Empathise · Activity 2',
        prompt: `You are a synthetic user representing the persona below.

BASE LAYER — Who they are:
[Job title, industry, company size, years of experience.]

ENVIRONMENT — How they work:
[Tools they use daily. Team size. How decisions get made.
What a typical Tuesday looks like.]

MOTIVATIONS — What they're trying to achieve:
[What does success look like this quarter? What are they measured on?]

PAIN POINTS — Where they get stuck:
[What frustrates them? What workarounds have they built?]

COGNITIVE LAYER — How they think:
[Mental models: what they compare new tools to.
How they process new information. What makes them trust something.]

EMOTIONAL LAYER — What they feel:
[What they're afraid of getting wrong. What gives them satisfaction.]

CULTURAL LAYER — Context and norms:
[Communication style. Relationship to authority.
How they handle ambiguity. Regional context.]

FRICTION LAYER — What breaks it for them:
[Specific breaking points. "If X happens, I will abandon this immediately."]

RULES FOR THIS INTERACTION:
- Stay strictly within this persona's knowledge and experience
- If something is outside the persona's world, show confusion — don't invent
- Express opinions in the persona's voice, not a neutral AI voice
- React the way this specific person would, not generically

I will now ask you interview questions. Respond as this person.`,
        sample: `You are a synthetic user representing the persona below.

BASE LAYER — Who they are:
Dr Aida, a consultant physician at a private hospital in Kuala Lumpur.
15 years in practice. Handles back-to-back clinics, ward rounds, and
post-discharge monitoring. Supervises 2–3 medical officers.

ENVIRONMENT — How they work:
Uses hospital EMR (desktop only) for record-keeping — "it's just a
filing cabinet, not case management." Lives in WhatsApp for coordination
across ward groups, MOs, and specialists. High message volume, context
gets buried. Informal tracking: mental notes ("ingat sendiri jangan lupa"),
occasional spreadsheets for complex cases.

MOTIVATIONS — What they're trying to achieve:
Zero silent failures — critical results sitting unactioned because no
linking mechanism exists. Protect patient outcomes. Get through clinic
without being blindsided.

PAIN POINTS — Where they get stuck:
Too many things coming in from everywhere. Nurse WhatsApp, EMR note,
phone call — all for the same patient, no consolidation. Has to mentally
triage everything herself. Primary concern: missing a deteriorating patient
because the signal got buried in noise.

COGNITIVE LAYER — How they think:
Trusts trends over single data points. "Is it sustained? Is it worsening?"
Skeptical of new tools — has been burned by systems that create more work.
Processes information fast during clinic; needs things to be immediately
legible, not requiring interpretation.

EMOTIONAL LAYER — What they feel:
Anxious about silent system failures. Deeply responsible for patient
outcomes. Satisfied when the system "behaves like a good nurse" — surfaces
only what truly needs her attention.

CULTURAL LAYER — Context and norms:
Formal with juniors but collegial with peers. Power distance matters —
won't adopt something her junior MOs can override. Sensitive to
accountability: "who is responsible if AI misses something?"

FRICTION LAYER — What breaks it for them:
More than a few taps = won't use during clinic. Any extra login or
separate patient list = immediate no. False alerts = trust destroyed,
notifications turned off permanently.

RULES FOR THIS INTERACTION:
- Stay strictly within this persona's knowledge and experience
- If something is outside the persona's world, show confusion — don't invent
- Express opinions in the persona's voice, not a neutral AI voice
- React the way this specific person would, not generically

I will now ask you interview questions. Respond as this person.`,
      },
      {
        id: 3,
        title: 'Research Synthesis Prompt',
        sectionLabel: 'Empathise · Activity 3',
        prompt: `You are a design research analyst.

Here are raw user interview notes from a study on [describe: who you
talked to, what you were exploring, how many participants]:

[PASTE YOUR RAW NOTES HERE]

Your task:

1. Extract the top 5 pain points from across all interviews.
   For each provide:
   - Pain point statement (1 clear, specific sentence)
   - Most representative quote (verbatim, with participant label)
   - Emotional intensity: Low / Medium / High
   - Frequency: how many participants mentioned it (approximately)

2. Identify 1–2 surprising findings — things that challenged
   your assumptions or contradicted what you expected.

3. Flag research gaps: what questions remain unanswered?

4. Suggest 3 potential POV statement directions.
   Format: [User type] needs [specific need] because [non-obvious insight].

Rules:
- Return as a structured, numbered list. No paragraph summaries.
- Quote verbatim only — do not paraphrase quotes.
- If uncertain about a pattern, say so explicitly.
- Do not invent insights not supported by the notes.`,
        sample: `You are a design research analyst.

Here are raw user interview notes from a study on consultant physicians
at private hospitals in KL — exploring their experience with patient
case management and alert systems. 3 participants.

P1 — Dr Elias, Consultant Physician:
"Too many things coming in from everywhere. One nurse WhatsApp,
another one call, EMR also got note. You need to think yourself what
is priority."
"If system give too many alerts, nanti I just ignore because cannot
tahan. Too stressful."
"It must be super clear lah. Like only urgent stuff. And label properly."
"No, no time lah. Don't ask me to key in anything. If more than a few
taps, I won't have time to do in clinic."

P2 — Dr Dayana, Senior Consultant:
"EMR mobile is… hmm… leceh sikit. Too many layers just to see latest labs."
"WhatsApp is fast but messy. You scroll like crazy to find old updates."
"False alarm. If AI keep flagging small things, after a while nobody
trusts it."
"I want control to set thresholds or filters. Different condition,
different rule."
"Must sync with EMR lah. I don't want separate patient list, separate
login."

P3 — Dr Zhi Hang, Junior Consultant:
"I rely on nurses mostly. They know my patients, they know which one
unstable."
"Humans filter works for me."
"Too many apps just add headache to me lah."
"If AI can truly reduce noise. Like only show me the 1–2 patients who
really need attention. And not ask me do extra work."
"I trust nurses and EMR data. AI must show me clearly what changed.
If just say 'urgent' without basis, I won't follow."

Your task:

1. Extract the top 5 pain points from across all interviews.
   For each provide:
   - Pain point statement (1 clear, specific sentence)
   - Most representative quote (verbatim, with participant label)
   - Emotional intensity: Low / Medium / High
   - Frequency: how many participants mentioned it (approximately)

2. Identify 1–2 surprising findings — things that challenged
   your assumptions or contradicted what you expected.

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
        html: `<p>Define is where you stop collecting and start deciding. Synthesise scattered observations into a sharp, actionable problem statement the whole team can rally behind. Most teams skip this. They jump from research straight to solutions. The result: a technically competent product that solves the wrong problem.</p>`,
      },
      {
        id: 'define-involves',
        heading: 'Key Define Tools',
        html: `<p><strong>Affinity Clustering</strong> — Group raw research notes by theme. Name each cluster with an insight statement, not a label. <em>"Users feel embarrassed when they make mistakes"</em> beats <em>"User errors."</em></p>
<p><strong>Point of View (POV) Statement</strong> — Format: <strong>[User] needs [specific need] because [non-obvious insight].</strong> The "because" must be surprising. If you can write it before doing any research, it's not an insight.</p>
<p><strong>How Might We (HMW)</strong> — Not too broad ("How might we fix the app?"). Not too narrow ("How might we add a blue button?"). Specific enough to act on, open enough to invite multiple solutions.</p>
<p><strong>Journey Map</strong> — Visualise the user's full experience. Identify the moments of peak frustration — those are your design opportunities.</p>`,
      },
      {
        id: 'ai-amplifies-define',
        heading: 'How AI Amplifies Define',
        html: `<table>
<thead><tr><th>AI does</th><th>Human does</th></tr></thead>
<tbody>
<tr><td>Analyses transcripts</td><td>Validates AI didn't oversimplify</td></tr>
<tr><td>Identifies journey stages</td><td>Confirms stages match real behaviour</td></tr>
<tr><td>Maps touchpoints and actions</td><td>Preserves context AI might flatten</td></tr>
<tr><td>Connects observations across interviews</td><td>Checks contradictions weren't smoothed over</td></tr>
</tbody>
</table>
<p>Traditional synthesis that took weeks now takes hours — if you give AI the right material.</p>`,
      },
    ],
    activities: [
      {
        id: 1,
        anchor: 'activity-1',
        tocTitle: 'Accelerate Your Journey Map',
        title: 'Activity 1 · Accelerate Your Journey Map',
        what: 'Use AI to convert research notes into a structured journey map: stages, touchpoints, emotions, pain points — then validate what AI missed.',
        why: 'Journey maps that take weeks to produce are usually not produced. AI compresses the first draft from days to hours.',
        howAiHelps: 'AI identifies journey stages from your notes, maps actions and touchpoints, and surfaces emotional highs and lows. Your job is to validate: did the AI miss anything? Did it smooth over a contradiction that was actually important?',
        steps: [
          'Set up project context and output format on a clean doc',
          'Feed research (transcripts or synthetic user output) to AI',
          'Request the journey map — keep language grounded in what users actually said',
          'Validate against your own memory of the sessions',
          'Follow up to identify highest-impact opportunities',
          'Optionally visualise using Napkin AI or Miro',
        ],
        exerciseIds: [1],
      },
      {
        id: 2,
        anchor: 'activity-2',
        tocTitle: 'Generate Your POV Statement',
        title: 'Activity 2 · Generate Your POV Statement',
        what: 'Use your synthesis to generate a POV statement — the anchor for everything that follows.',
        why: 'A team without a shared POV will disagree about solutions forever. Get it right and the rest of the project moves faster.',
        howAiHelps: 'AI generates multiple POV options from your research summary, then helps you evaluate which is strongest. Your job is to pick and refine — not to accept the first one.',
        steps: [
          'Summarise key research findings in 3–5 bullets',
          'Run the POV Generator prompt',
          'Test the "because" — could you have written it before talking to users?',
        ],
        exerciseIds: [2],
      },
      {
        id: 3,
        anchor: 'activity-3',
        tocTitle: 'Generate How Might We Questions',
        title: 'Activity 3 · Generate How Might We Questions',
        what: 'Take your POV and generate HMW questions that drive your ideation session.',
        why: 'Bad HMW questions produce bad ideas. The right HMW opens a specific door without prescribing the solution.',
        howAiHelps: 'AI generates 8 HMW questions quickly, then flags which ones are too broad or too narrow. What used to take 45 minutes of facilitator prep now takes 5 — and usually produces better questions.',
        steps: [
          'Paste your POV into the HMW Generator prompt',
          'Review — flag any that already contain the solution',
          'Select the 4 best for your session',
        ],
        exerciseIds: [3],
      },
    ],
    resources: [
      { name: 'Hands-on: Journey Map Acceleration', description: 'Full prompt guide with healthcare transcript samples.', link: 'https://stampedeteam.notion.site/aidt-handson-journey-map' },
      { name: 'Design Thinking Cheat Sheet', description: 'Full Define stage tools and templates.', link: '#', comingSoon: true },
      { name: 'Cohort V Resource Hub', description: 'Full AI-Supercharged Design Thinking reference.', link: 'https://stampedeteam.notion.site/Cohort-V-Resource-Hub-AI-Supercharged-Design-Thinking-348ed70298ae80c4803fd53003f56242', hidden: true },
    ],
    exercises: [
      {
        id: 1,
        title: 'Journey Map Accelerator',
        sectionLabel: 'Define · Activity 1',
        prompt: `Project Context:
- Product: [what you're building or exploring]
- User group: [who you're designing for]
- Business goal: [what success looks like]
- Current pain: [the key problem area from your research]

Output Format I Need:
Create a journey map table with these columns:
1. Journey Stage (name of the stage)
2. User Actions (what they do)
3. Touchpoints (what they interact with)
4. Thoughts & Emotions (what they're feeling/thinking)
5. Pain Points (specific frustrations)
6. Opportunities (where we could improve)

Additional Analysis:
- Highlight which pain points appear across multiple interviews
- Identify gaps where we lack sufficient data
- Suggest 2–3 moments that seem emotionally significant

User research transcript:

[PASTE TRANSCRIPT OR SYNTHETIC USER OUTPUT HERE]

Existing touchpoints we know about:
- [List the tools, systems, and channels this user interacts with]

→ WHAT I NEED HELP WITH
Based on this research, create a current-state journey map for
[describe the scenario: e.g. "a typical workday from morning rounds
through evening handover"].

Remember to:
- Include journey stages that emerge from the research
- Flag pain points mentioned by multiple participants
- Note where we're missing data and why it's important
- Keep language grounded in what users actually said`,
        sample: `Project Context:
- Product: Patient case management dashboard for physicians
- User group: Consultant physicians at private hospitals in KL
- Business goal: Reduce missed critical updates, improve care coordination
- Current pain: Too many alerts, unclear prioritisation, scattered info

Output Format I Need:
Create a journey map table with these columns:
1. Journey Stage (name of the stage)
2. User Actions (what they do)
3. Touchpoints (what they interact with)
4. Thoughts & Emotions (what they're feeling/thinking)
5. Pain Points (specific frustrations)
6. Opportunities (where we could improve)

Additional Analysis:
- Highlight which pain points appear across multiple interviews
- Identify gaps where we lack sufficient data
- Suggest 2–3 moments that seem emotionally significant

User research transcript:

Interview 1 — Dr Elias, Consultant Physician:
"I was in clinic, back-to-back, no break. Then suddenly nurse call saying
one elderly patient in ward, oxygen drop. If they didn't call me straight,
maybe I only see during round later."
"Too many things coming in from everywhere. One nurse WhatsApp, another
one call, EMR also got note. You need to think yourself what is priority."
"It must be super clear lah. Like only urgent stuff. And label properly.
If every small thing also ping me, I sure off notification."

Interview 2 — Dr Dayana, Senior Consultant:
"EMR mobile is… hmm… leceh sikit. Too many layers just to see latest labs.
WhatsApp is fast but messy. You scroll like crazy to find old updates."
"I want to see trend plus context. Like is it sustained? Is it worsening?
That's what makes me act fast."
"Must sync with EMR lah. I don't want separate patient list, separate login."

Existing touchpoints we know about:
- Hospital EMR (desktop only)
- WhatsApp coordination groups
- Patient dashboard app (low adoption)
- Verbal nurse updates
- Physical paper notes
- Phone calls for urgent cases

→ WHAT I NEED HELP WITH
Based on this research, create a current-state journey map for a typical
workday (morning rounds through evening handover).

Remember to:
- Include journey stages that emerge from the research
- Flag pain points mentioned by multiple doctors
- Note where we're missing data or need to probe further and why
- Keep language grounded in what doctors actually said`,
      },
      {
        id: 2,
        title: 'POV Statement Generator',
        sectionLabel: 'Define · Activity 2',
        prompt: `You are a design thinking facilitator running a Define workshop.

Based on this user research summary:

[PASTE YOUR RESEARCH SUMMARY — top pain points, surprising insights,
user group description. 3–10 bullets is fine.]

Write a Point of View statement using this format exactly:
[User description] needs [specific need or goal] because [surprising insight].

Rules:
- The user description must be specific, not generic
- The need must be concrete and actionable
- The "because" MUST be non-obvious — not a restatement of the need
- If the "because" could be predicted before doing any research, rewrite it
- Generate 3 POV options
- Recommend the strongest one and explain why in 2 sentences`,
        sample: `You are a design thinking facilitator running a Define workshop.

Based on this user research summary:

- Physicians receive critical patient updates through 3+ disconnected
  channels simultaneously (WhatsApp, EMR, verbal from nurses, phone calls)
- All 3 interviewed physicians have self-built workarounds to manage
  this — mental notes, personal WhatsApp groups, informal check-in
  rituals with trusted nurses
- False alerts are the single biggest trust killer — once an AI flags
  something incorrectly, physicians permanently disable notifications
- Physicians don't want more information — they want better signal.
  "Only show me the 1–2 patients who really need attention."
- Surprising finding: junior consultants trust human filters (nurses)
  MORE than senior consultants do — because they have less capacity
  to process noise

Write a Point of View statement using this format exactly:
[User description] needs [specific need or goal] because [surprising insight].

Rules:
- The user description must be specific, not generic
- The need must be concrete and actionable
- The "because" MUST be non-obvious — not a restatement of the need
- If the "because" could be predicted before doing any research, rewrite it
- Generate 3 POV options
- Recommend the strongest one and explain why in 2 sentences`,
      },
      {
        id: 3,
        title: 'HMW Question Generator',
        sectionLabel: 'Define · Activity 3',
        prompt: `You are a design thinking facilitator.

Here is our Point of View statement:
[POV STATEMENT]

Generate 8 'How Might We' questions for our ideation session.

Each HMW must:
- Start with "How might we..."
- Be specific enough to act on
- NOT contain the solution in the question
- Open multiple possible directions, not just one

Then:
- Flag which 2 are too broad (can't be acted on in one sprint)
- Flag which 2 are too narrow (only one obvious solution)
- Recommend the 4 best ones and explain why`,
        sample: `You are a design thinking facilitator.

Here is our Point of View statement:
Consultant physicians in busy private hospitals need a way to receive
only the 2–3 patient updates that truly require their immediate attention
because their ability to act on critical signals degrades rapidly once
they're managing more than 5 simultaneous alerts.

Generate 8 'How Might We' questions for our ideation session.

Each HMW must:
- Start with "How might we..."
- Be specific enough to act on
- NOT contain the solution in the question
- Open multiple possible directions, not just one

Then:
- Flag which 2 are too broad (can't be acted on in one sprint)
- Flag which 2 are too narrow (only one obvious solution)
- Recommend the 4 best ones and explain why`,
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
        html: `<p>Ideation is structured divergence. Generate as many ideas as possible before judging any. Quantity first. Quality later. AI removes the pressure to evaluate early, and pulls inspiration from domains you'd never think to look at.</p>`,
      },
      {
        id: 'ideation-workflow',
        heading: 'The Precision Ideation Workflow with AI',
        html: `<p><strong>Step 1:</strong> Choose a user pain point from your journey map — the one with the most value for user and business if solved.</p>
<p><strong>Step 2:</strong> Turn it into a HMW and source ideas across industries (current, comparable, smart adjacency).</p>
<p><strong>Step 3:</strong> Decide on the solution and craft a storyboard — context, what the user does, thinks, feels, and what screens they expect.</p>
<p><strong>Step 4:</strong> Prototype in Lovable, v0, or Figma Make. Build the fastest testable version, not the prettiest.</p>`,
      },
      {
        id: 'finding-inspiration',
        heading: 'Finding Inspiration Like You Couldn\'t Before',
        html: `<p>When we borrow proven mechanisms from unexpected domains, we access solutions our competitors can't see because they're only watching each other. AI sifts through thousands of ideas in minutes to surface what's diverse, unexpected, and relevant. This is how you seed actual differentiation.</p>`,
      },
      {
        id: 'what-is-prototype',
        heading: 'What is Prototype?',
        html: `<p>Build just enough to test the most important assumption. The question every prototype must answer: <strong>Is this worth building?</strong></p>
<p>Match prototype fidelity to the question:</p>
<ul>
<li>Is the concept clear? → Paper or Figma click-through</li>
<li>Does the flow work? → Figma prototype</li>
<li>Does the interaction feel right? → Vibe-coded (Lovable/v0)</li>
</ul>`,
      },
    ],
    activities: [
      {
        id: 1,
        anchor: 'activity-1',
        tocTitle: 'Ideation at Large: Cross-Industry Inspiration',
        title: 'Activity 1 · Ideation at Large: Cross-Industry Inspiration',
        what: 'Use AI to find how three types of industries solved your core user problem — then extract the transferable principle.',
        why: 'Differentiation doesn\'t come from looking at your competitors. It comes from looking at how a problem was solved in a completely unrelated field — then adapting that principle to your context.',
        howAiHelps: 'AI has cross-domain knowledge that would take a human researcher months to accumulate. Ask it for solutions from three industry types: current (same domain), comparable (similar challenges), and smart adjacency (unexpected but relevant). Your job is to find the transferable principle.',
        steps: [
          'Bring your context engineering from earlier sessions',
          'Add the user\'s pain point as perspective framing and generate a HMW',
          'Ask AI for solutions from three industry types: current, comparable, smart adjacency',
          'Extract the core insight, mechanism, and what\'s transferable to your context',
        ],
        exerciseIds: [1],
      },
      {
        id: 2,
        anchor: 'activity-2',
        tocTitle: 'Storyboard Your Solution',
        title: 'Activity 2 · Storyboard Your Solution',
        what: 'Turn your chosen idea into a user journey storyboard — showing what the user does, sees, thinks, and feels at each step.',
        why: 'Storyboards reveal assumptions you didn\'t know you were making. When you try to narrate a user\'s experience through your solution, the gaps in the logic become visible immediately.',
        howAiHelps: 'AI drafts a complete storyboard narrative based on your solution description and user context. It will surface edge cases and transitions you didn\'t think through.',
        steps: [
          'Write a 2–3 sentence description of your solution idea',
          'Run the storyboard prompt',
          'Read each scene — does it match how your actual users would behave?',
        ],
        exerciseIds: [2],
      },
      {
        id: 3,
        anchor: 'activity-3',
        tocTitle: 'Generate Your Prototype Prompt with AI',
        title: 'Activity 3 · Generate Your Prototype Prompt with AI',
        what: 'Give Claude your storyboard and synthetic user profile. AI deconstructs them and generates a precise, ready-to-paste brief for Lovable, v0, or Figma Make. You don\'t write the tool prompt — Claude does, from your intent.',
        why: 'The problem with vibe coding is it jumps to screen generation without first mapping user intent. Storyboard first → AI reads the story → AI generates the tool prompt → you paste and build. Slower to start, far fewer iterations.',
        howAiHelps: null,
        steps: [
          'Have your completed storyboard (from Activity 2) and synthetic user profile ready',
          'Run the prompt generator — paste both into Claude',
          'Claude outputs a tool-ready brief structured around screens, user intent, and content',
          'Copy the generated brief → paste directly into Lovable, v0, or Figma Make',
          'Before running: write down the 2 assumptions this prototype is testing',
        ],
        exerciseIds: [3],
      },
    ],
    resources: [
      { name: 'Hands-on: Ideation at Large', description: 'Full cross-industry prompt guide.', link: 'https://stampedeteam.notion.site/aidt-handson-ideation' },
      { name: 'Lovable.dev', description: 'Build web apps from prompts.', link: 'https://lovable.dev' },
      { name: 'v0 by Vercel', description: 'Generate UI components from prompts.', link: 'https://v0.dev' },
      { name: 'Figma Make', description: 'AI-assisted prototyping inside Figma.', link: 'https://www.figma.com/make' },
      { name: 'Cohort V Resource Hub', description: 'Full AI-Supercharged Design Thinking reference.', link: 'https://stampedeteam.notion.site/Cohort-V-Resource-Hub-AI-Supercharged-Design-Thinking-348ed70298ae80c4803fd53003f56242', hidden: true },
    ],
    exercises: [
      {
        id: 1,
        title: 'Ideation at Large: Cross-Industry Inspiration',
        sectionLabel: 'Ideate & Prototype · Activity 1',
        prompt: `[Insert your context engineering here — project context, user context,
constraints, perspective framing from your earlier sessions]

💛 PERSPECTIVE FRAMING
The user's pain point is: [describe the specific pain point].
Turn this into a high-value HMW.

✅ WHAT I NEED HELP WITH
Based on the HMW, show me how these industries solved similar problems:

1. CURRENT INDUSTRY: Solution from the same industry/domain that's
   already addressing parts of this challenge

2. COMPARABLE INDUSTRY: An industry facing similar challenges that
   has solved them well

3. SMART ADJACENCY: An unexpected industry but surprisingly relevant

For each:
- What was their core insight?
- What mechanism did they use?
- What's transferable to my context?`,
        sample: `📍 BACKGROUND & CONTEXT
We're building a patient case management dashboard for consultant
physicians at private hospitals in Malaysia. The system needs to surface
only the most critical patient updates so physicians can act fast without
being overwhelmed by noise.

🎯 USER CONTEXT
Consultant physicians who are in back-to-back clinic sessions most of
the day. They rely on nurses and WhatsApp for coordination. They've
disabled AI notifications before because of false alerts. They trust
human judgment more than algorithmic alerts.

🚧 KNOWN CONSTRAINTS
Must integrate with existing EMR. Cannot require more than a few taps.
No separate login. Must work on mobile during ward rounds.

💛 PERSPECTIVE FRAMING
The user's pain point is: physicians receive critical patient updates
through too many channels simultaneously, which means the most urgent
signals get buried in noise, and action is delayed.
Turn this into a high-value HMW.

✅ WHAT I NEED HELP WITH
Based on the HMW, show me how these industries solved similar problems:

1. CURRENT INDUSTRY: Solution from the same industry/domain that's
   already addressing parts of this challenge

2. COMPARABLE INDUSTRY: An industry facing similar challenges that
   has solved them well

3. SMART ADJACENCY: An unexpected industry but surprisingly relevant

For each:
- What was their core insight?
- What mechanism did they use?
- What's transferable to my context?`,
      },
      {
        id: 2,
        title: 'Storyboard Generator',
        sectionLabel: 'Ideate & Prototype · Activity 2',
        prompt: `You are a UX designer and narrative strategist.

Solution idea:
[DESCRIBE YOUR SOLUTION IN 2-3 SENTENCES]

User persona:
[PASTE YOUR SYNTHETIC USER PROFILE OR A BRIEF DESCRIPTION]

Create a storyboard with 6–8 scenes showing this user's experience
with the solution.

For each scene:
- Scene title (what moment this is)
- What the user is doing
- What they see or interact with
- What they're thinking (use their voice, not product language)
- What they're feeling (name the emotion specifically)
- Any friction or hesitation at this moment

After the storyboard:
- Identify the 2 scenes most likely to cause drop-off or confusion
- Flag any assumptions embedded in the story we haven't validated yet`,
        sample: `You are a UX designer and narrative strategist.

Solution idea:
A smart triage layer that sits on top of the hospital EMR and WhatsApp.
It consolidates updates from all channels, filters by clinical urgency,
and surfaces only the top 2–3 patients that need the physician's
attention right now — with a single-tap view of why each one is flagged.

User persona:
Dr Dayana, Senior Consultant Physician. Busy clinic mornings with
15–20 patients. Tech-tolerant but skeptical of AI that cries wolf.
Wants to see trend + context before acting. Needs her existing EMR and
WhatsApp to remain her sources of truth — this is additive, not a
replacement. Immediately disables notifications if false alerts appear.

Create a storyboard with 6–8 scenes showing this user's experience
with the solution.

For each scene:
- Scene title (what moment this is)
- What the user is doing
- What they see or interact with
- What they're thinking (use their voice, not product language)
- What they're feeling (name the emotion specifically)
- Any friction or hesitation at this moment

After the storyboard:
- Identify the 2 scenes most likely to cause drop-off or confusion
- Flag any assumptions embedded in the story we haven't validated yet`,
      },
      {
        id: 3,
        title: 'Prototype Prompt Generator',
        sectionLabel: 'Ideate & Prototype · Activity 3',
        prompt: `The above is my storyboard and details of my synthetic user.
Deconstruct it into a prompt for me to build a prototype in
Figma Make / Lovable / v0.

My storyboard:
[PASTE YOUR STORYBOARD SCENES HERE — each scene with: what the user
is doing, what they see, what they're thinking/feeling, any friction]

My synthetic user:
[PASTE YOUR SYNTHETIC USER PROFILE — key layers: who they are,
how they work, motivations, pain points, friction layer]

Generate a prototype brief I can paste directly into a vibe coding tool.
The brief must include:

1. ONE-LINE PRODUCT DESCRIPTION
   What this is in plain language — not technical, not marketing.

2. TARGET USER SNAPSHOT
   3–5 bullet points: who they are, context of use, what they're
   trying to do, what would make them abandon it.

3. SCREENS TO BUILD
   List each screen from the storyboard. For each:
   - Screen name
   - User's intent at this moment (why are they here?)
   - Key information that must be visible
   - Primary action available
   - What must NOT be on this screen (scope guard)

4. INTERACTION PRINCIPLES
   3–4 rules that govern how this prototype should feel and behave.
   Derived from the user's cognitive and friction layers.

5. CONTENT NOTES
   Real placeholder copy — not lorem ipsum. Use language this specific
   user would actually recognise and trust.

6. BUILD INSTRUCTION
   One paragraph telling the tool exactly what to prioritise and what
   to leave out. End with: "Build the simplest version that makes the
   core flow work. Do not add features not listed above."`,
        sample: `The above is my storyboard and details of my synthetic user.
Deconstruct it into a prompt for me to build a prototype in
Figma Make / Lovable / v0.

My storyboard:

Scene 1 — "Gap between patients"
Dr Dayana has 5 minutes before her next patient. She opens the app
on her phone. She's thinking: "Is there anyone I need to deal with
right now?" She wants to scan fast — no reading, no tapping through
menus. Friction: if it takes more than 10 seconds to get an answer,
she closes the app.

Scene 2 — "The list"
She sees 3 patient cards ranked by urgency. Each card shows patient
code, one urgency line, and a colour-coded severity indicator.
She's thinking: "Why is this one flagged?" She scans the urgency line.
If it makes sense, she trusts it. If it's vague, she dismisses it and
loses a bit of trust in the system.

Scene 3 — "Drill down"
She taps Patient 1. She sees a trend chart (last 4 hours), the
specific vital that triggered the flag, and who last updated the
record. She's thinking: "Is this sustained or a spike?" She wants
to see the trend — not just the current value.
Friction: if the chart requires interpretation, she won't act.

Scene 4 — "Decision"
Two actions: Dismiss (with a note reason) or Escalate (routes to
the ward nurse automatically). She escalates. Gets a confirmation.
She's relieved — the right person is now aware.
Thinking: "Good. Now I can focus on my next patient."

Scene 5 — "Back to clinic"
She returns to the list. The escalated patient is now greyed out
with a "Nurse notified" label. She can see at a glance that nothing
else needs her right now. She closes the app.

My synthetic user:
Dr Dayana, Senior Consultant Physician, private hospital in KL.
In back-to-back clinic sessions most of the day. Uses EMR desktop
and WhatsApp. Skeptical of AI after false-alert experiences.
Wants trend + context before acting. Will permanently disable
notifications if flagged incorrectly even once. Cannot tolerate
more than a few taps during clinic. Needs to know who authored
the flag — AI or human. Sensitive to accountability.

Generate a prototype brief I can paste directly into a vibe coding tool.
The brief must include:

1. ONE-LINE PRODUCT DESCRIPTION
   What this is in plain language — not technical, not marketing.

2. TARGET USER SNAPSHOT
   3–5 bullet points: who they are, context of use, what they're
   trying to do, what would make them abandon it.

3. SCREENS TO BUILD
   List each screen from the storyboard. For each:
   - Screen name
   - User's intent at this moment (why are they here?)
   - Key information that must be visible
   - Primary action available
   - What must NOT be on this screen (scope guard)

4. INTERACTION PRINCIPLES
   3–4 rules that govern how this prototype should feel and behave.
   Derived from the user's cognitive and friction layers.

5. CONTENT NOTES
   Real placeholder copy — not lorem ipsum. Use language this specific
   user would actually recognise and trust.

6. BUILD INSTRUCTION
   One paragraph telling the tool exactly what to prioritise and what
   to leave out. End with: "Build the simplest version that makes the
   core flow work. Do not add features not listed above."`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: 5,
    slug: 'test',
    title: 'Test',
    tagline: 'Using AI in testing does not replace testing with real human users. It makes your prototype more ready — with minimal time and resource cost.',
    meta: '05 · Test',
    heroImage: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=1200&q=80',
    readSections: [
      {
        id: 'what-is-test',
        heading: 'What is Test?',
        html: `<p>Test is where assumptions meet reality. You put your prototype in front of people and watch what happens. Not what you hoped. What actually happens.</p>
<p>Most teams test too late — after the design is baked in and too expensive to change. The goal is early, often, with just enough fidelity to answer the question you're asking.</p>`,
      },
      {
        id: 'what-ai-is-not',
        heading: 'What AI is NOT in Testing',
        html: `<p><strong>Not a substitute for real users</strong> — Synthetic users validate methods; real users validate solutions.</p>
<p><strong>Not autopilot for research</strong> — Strategic thinking, validation, and interpretation remain human work.</p>
<p><strong>Not plug-and-play magic</strong> — Every insight must be traced to evidence and checked against reality.</p>
<p><strong>Not a shortcut past rigour</strong> — AI means doing more rigorous work in less time.</p>`,
      },
      {
        id: 'synthetic-ut',
        heading: 'Synthetic UT: Your Crash Test Dummy',
        html: `<p>Synthetic UT turns AI into your crash test dummy so you catch obvious friction, confusing flows, and navigation issues before spending recruitment budget.</p>
<p><strong>AI as crash test dummy</strong> — Stress-test before recruiting. Catch obvious friction, confusing flows, and navigation issues early.</p>
<p><strong>AI as pilot user</strong> — Find completion blockers and unclear messaging before real users hit them.</p>`,
      },
      {
        id: 'testing-workflow',
        heading: 'The Testing Workflow',
        html: `<ol>
<li><strong>Choose test scenarios</strong> — Critical workflows, highest-risk paths.</li>
<li><strong>Run synthetic pilot tests</strong> — Fix the obvious before real users encounter it.</li>
<li><strong>Test with real users</strong> — Observe, record, let AI assist with notes and initial pattern finding.</li>
<li><strong>Synthesise and refine</strong> — AI extracts and clusters. You validate and prioritise.</li>
</ol>`,
      },
    ],
    activities: [
      {
        id: 1,
        anchor: 'activity-1',
        tocTitle: 'Run a Synthetic Pilot Test',
        title: 'Activity 1 · Run a Synthetic Pilot Test',
        what: 'Run your prototype through synthetic user sessions to catch obvious problems first.',
        why: 'Real user recruitment is expensive, slow, and you only get one shot per participant. Synthetic tests are free, instant, and repeatable.',
        howAiHelps: 'Give AI a detailed synthetic user profile and your prototype description. AI navigates the flow as that user — reporting friction, confusion, and failure points at each step.',
        steps: [
          'Define your top 3 test scenarios',
          'Use your existing synthetic user profile or build a new one',
          'Run each profile through each scenario with the prompt below',
          'Fix what breaks, then move to real users',
        ],
        exerciseIds: [1],
      },
      {
        id: 2,
        anchor: 'activity-2',
        tocTitle: 'Write Your Usability Test Script',
        title: 'Activity 2 · Write Your Usability Test Script',
        what: 'Use AI to generate a clean test script — tasks, questions, and facilitation notes for real user sessions.',
        why: 'Bad test scripts produce bad data. Leading questions, tasks that describe the solution, or yes/no questions waste your participants\' time and produce unusable insights.',
        howAiHelps: 'AI generates open-ended, non-leading questions based on your prototype\'s key assumptions, then flags any questions that are biased, too narrow, or that give away the expected answer.',
        steps: [
          'Describe your prototype and the key assumption you\'re testing',
          'Run the Test Script Generator prompt',
          'Remove any question that gives away the expected answer',
        ],
        exerciseIds: [2],
      },
      {
        id: 3,
        anchor: 'activity-3',
        tocTitle: 'Synthesise Test Sessions',
        title: 'Activity 3 · Synthesise Test Sessions',
        what: 'After real user sessions, use AI to extract patterns from notes into a prioritised issue list.',
        why: 'Research is only valuable if it becomes action. AI synthesis turns 5 sessions into a structured issue list in minutes, not days.',
        howAiHelps: 'AI processes session notes, extracts usability issues, clusters by severity, and suggests fixes. You validate the output and make the final prioritisation calls.',
        steps: [
          'Collect session notes within 24 hours — label by participant and task',
          'Run the Session Synthesis prompt',
          'Validate severity ratings against your own memory',
          'Use output directly as input to your next iteration',
        ],
        exerciseIds: [3],
      },
    ],
    resources: [
      { name: 'Hands-on: Testing with Synthetic User', description: 'Full prompt guide with real project examples.', link: 'https://stampedeteam.notion.site/aidt-handson-synthetic-testing' },
      { name: 'Sample Brief 1: Toro Keeper / Azim', description: 'Complete synthetic UT brief — event timekeeper.', link: '#', comingSoon: true },
      { name: 'Sample Brief 2: Dr Aida', description: 'Complete synthetic UT brief — healthcare prototype.', link: '#', comingSoon: true },
      { name: 'Cohort V Resource Hub', description: 'Full AI-Supercharged Design Thinking reference.', link: 'https://stampedeteam.notion.site/Cohort-V-Resource-Hub-AI-Supercharged-Design-Thinking-348ed70298ae80c4803fd53003f56242', hidden: true },
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
[PASTE YOUR FULL SYNTHETIC USER PROFILE HERE — all five layers]

PROTOTYPE DESCRIPTION:
[Describe what the prototype does and what the user will see.
Include the main screens or flows available.]

TASK TO COMPLETE:
[The specific task this user should attempt.
Write as a goal, not an instruction:
GOOD: "You need to check which patients require your attention today."
BAD: "Click the alerts tab and read the list."]

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
5. Would you use this in your real workflow? Why or why not?
Rate severity of each issue: Critical / Major / Minor`,
        sample: `You are a synthetic user conducting a think-aloud usability test.

RESEARCH OBJECTIVE:
We're testing whether a consultant physician can identify which patients
need urgent attention using our triage dashboard, without any onboarding
or explanation. Key assumption: the urgency summary is legible enough
to act on within 3 seconds per patient card.

YOUR SYNTHETIC USER PROFILE:
You are Dr Dayana, Senior Consultant Physician at a private hospital in KL.

Base layer: 15+ years in practice. Senior enough to have her own clinical
judgment that she trusts over any system. Tech-tolerant but deeply
skeptical of AI alerts after several false-alarm experiences.

Environment: Moves between clinic and wards throughout the day. Checks
her phone during 5-minute gaps. Uses hospital EMR desktop, WhatsApp,
and phone calls. Already has more notifications than she can process.

Motivations: Act on the right patients at the right time. Not miss
a deterioration. Not waste time on noise.

Cognitive layer: Wants trend + context before acting — not just a single
abnormal reading. Processes dashboards by scanning for anomalies, not
reading sequentially. Compares new tools to EMR and WhatsApp, which she
knows deeply.

Emotional layer: Anxious about silent failures — the patient who
deteriorated while updates sat unread. Relieved when something genuinely
reduces her cognitive load. Immediately distrustful when a tool feels
like it's adding work.

Cultural layer: Formal authority structure. Won't adopt a tool her junior
MOs can bypass or override. Sensitive to accountability — "who's
responsible if AI misses something?"

Friction layer: More than a few taps during clinic = abandons immediately.
Separate login = no. If it flags something non-urgent as critical even
once = notifications off permanently.

PROTOTYPE DESCRIPTION:
A mobile web app showing a ranked list of the top 3 patients requiring
physician attention today. Each patient card shows: patient name/code,
one urgency summary line, and a visual severity indicator. Tapping a
card opens a detail view with trend data and the specific flag reason.
Two actions available from detail: Dismiss or Escalate.

TASK TO COMPLETE:
You have 5 minutes between clinic patients. Check which patients need
your attention and decide whether any require immediate action.

TESTING RULES:
- Think aloud — narrate everything you're doing and thinking
- React as Dr Dayana would, not as an ideal user
- When confused, express it — don't figure it out silently
- When something delights you, say so
- Complete the task or give up — don't ask for help

WHAT TO REPORT AT THE END:
1. Could you complete the task? Yes / Partial / No
2. Where did you get stuck or confused?
3. What was unclear in the language or labels?
4. What was missing that you needed?
5. Would you use this in your real workflow? Why or why not?
Rate severity of each issue: Critical / Major / Minor`,
      },
      {
        id: 2,
        title: 'Usability Test Script Generator',
        sectionLabel: 'Test · Activity 2',
        prompt: `You are a UX research specialist preparing a usability test.

Prototype description:
[WHAT DOES IT DO?]

Key assumption we are testing:
[THE ONE THING YOU MOST NEED TO VALIDATE]

Target user:
[WHO IS PARTICIPATING]

Generate a usability test script with:

1. Facilitator briefing script
   (Set context, explain think-aloud, establish no wrong answers,
   clarify you're testing the product not them)

2. Warm-up questions (2 questions about their day-to-day context —
   not about the product)

3. 3 task scenarios
   (Write as goals in user language, not step-by-step instructions)

4. Probing questions (2–3 per task to dig into observations)

5. Closing questions (2 questions: overall reaction + likelihood to use)

Rules:
- No leading questions
- No yes/no questions
- No questions that reveal the correct behaviour
- Tasks must be goals, not instructions`,
        sample: `You are a UX research specialist preparing a usability test.

Prototype description:
A mobile triage dashboard for consultant physicians that surfaces the
top 3 patients requiring their attention during a shift, with a
one-tap drill-down into trend data and urgency reason. Two actions
available: Dismiss or Escalate.

Key assumption we are testing:
Physicians can identify which patients need action and understand why
they've been flagged — without any explanation or onboarding — within
3 seconds per patient card.

Target user:
Consultant physicians at private hospitals in Malaysia. 10–20 years
in practice. Familiar with hospital EMR and WhatsApp but skeptical of
AI-generated alerts based on past false-alarm experiences.

Generate a usability test script with:

1. Facilitator briefing script
   (Set context, explain think-aloud, establish no wrong answers,
   clarify you're testing the product not them)

2. Warm-up questions (2 questions about their day-to-day context —
   not about the product)

3. 3 task scenarios
   (Write as goals in user language, not step-by-step instructions)

4. Probing questions (2–3 per task to dig into observations)

5. Closing questions (2 questions: overall reaction + likelihood to use)

Rules:
- No leading questions
- No yes/no questions
- No questions that reveal the correct behaviour
- Tasks must be goals, not instructions`,
      },
      {
        id: 3,
        title: 'Session Synthesis Prompt',
        sectionLabel: 'Test · Activity 3',
        prompt: `You are a UX research analyst.

Here are notes from [N] usability test sessions on [prototype name]:

[PASTE SESSION NOTES HERE]

Your task:

1. Identify all usability issues observed. For each:
   - Issue description (1 clear sentence)
   - Where it occurs (screen, step, or moment)
   - Severity:
       Critical = blocks task completion
       Major = causes significant confusion or delay
       Minor = causes friction but user recovers
   - Frequency: how many participants experienced it
   - Best supporting quote (verbatim, with participant label)

2. Unexpected positive moments (things that worked better than expected)

3. Top 3 issues to fix before next testing round

4. Issues that suggest a more fundamental problem
   (concept or flow level, not just UI)

Return as a structured list sorted by severity. No paragraph summaries.`,
        sample: `You are a UX research analyst.

Here are notes from 3 usability test sessions on the Patient Triage
Dashboard prototype:

P1 — Dr Farah (session duration: 22 mins, T1 = check priority patients,
T2 = understand urgency reason, T3 = dismiss non-urgent):

T1: Opened app, paused for ~8 seconds. "Hmm. So this is… my patients
for today? Or just the urgent ones?" Scrolled down looking for more
patients. "Where are the rest?"
T2: Tapped first patient card. Read the urgency line twice. "What does
'sustained trend' mean exactly? Sustained for how long?" Tapped back
without taking action.
T3: Found dismiss button easily. "Ok this one clear lah. Just that I
need to know — if I dismiss, does the nurse know? Or just disappears?"

P2 — Dr Ravi (session duration: 18 mins):
T1: Scanned the list immediately. "Ok three patients, got it. This one
BP la, this one sugar, this one I'm not sure what." Tapped the third
immediately. "Ah, potassium. Ok."
T2: Understood trend chart quickly. "This is good. I can see it's
worsening over 4 hours." Paused at the flag reason: "Who wrote this?
AI or nurse?" Asked three times who authored the flag.
T3: Tried to swipe to dismiss. Nothing happened. Looked for a button.
Found it after 6 seconds. "Ah there. Should be swipeable lah."

P3 — Dr Mei Lin (session duration: 25 mins):
T1: "Is this real-time?" — first thing she asked. Checked timestamp.
"Ok, updated 4 mins ago. Fine." Moved on quickly.
T2: Spent longest on detail view. Read everything. "I like that it
shows me what changed, not just what's abnormal now."
T3: Dismissed easily. Then said: "But if I dismiss and I'm wrong — is
there an undo?"

Your task:

1. Identify all usability issues observed. For each:
   - Issue description (1 clear sentence)
   - Where it occurs (screen, step, or moment)
   - Severity:
       Critical = blocks task completion
       Major = causes significant confusion or delay
       Minor = causes friction but user recovers
   - Frequency: how many participants experienced it
   - Best supporting quote (verbatim, with participant label)

2. Unexpected positive moments (things that worked better than expected)

3. Top 3 issues to fix before next testing round

4. Issues that suggest a more fundamental problem
   (concept or flow level, not just UI)

Return as a structured list sorted by severity. No paragraph summaries.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: 6,
    slug: 'application',
    title: 'Go Agentic',
    tagline: 'This is where you stop learning and start building. Apply AI to your actual workflow — not a training exercise.',
    meta: '06 · Go Agentic',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
    readSections: [
      {
        id: 'from-technique-to-system',
        heading: 'From Technique to System',
        html: `<p>You've learned how AI amplifies each DT stage. Now the question is: how do you make this systematic? How do you go from using AI occasionally to having it embedded in how your team actually works?</p>`,
      },
      {
        id: 'what-are-ai-agents',
        heading: 'What Are AI Agents?',
        html: `<p>An agent is an AI that doesn't just answer questions — it takes actions. It uses tools, makes decisions, runs tasks, and loops through a problem until it reaches a solution.</p>
<p><strong>What's under the hood:</strong></p>
<ul>
<li><strong>The Brain</strong> — The LLM (Claude, GPT, Gemini) that reasons and generates</li>
<li><strong>The Memory</strong> — Keeps track of context, standards, decisions. Never forgets.</li>
<li><strong>The Tools</strong> — What it can actually do (search, read files, run code)</li>
<li><strong>The System Prompt</strong> — The agent's job description and operating rules</li>
</ul>`,
      },
      {
        id: 'types-of-agents',
        heading: 'Types of Agents Useful for Design Teams',
        html: `<table>
<thead><tr><th>Agent type</th><th>What it does</th><th>You direct</th></tr></thead>
<tbody>
<tr><td>Research</td><td>Investigates competitive landscapes, market patterns, user behaviour</td><td>What to explore, how deep</td></tr>
<tr><td>Synthesis</td><td>Processes transcripts, identifies patterns, surfaces themes</td><td>What matters, what to surface</td></tr>
<tr><td>Context Keeper</td><td>Maintains project memory, catches team up without meetings</td><td>What to surface</td></tr>
<tr><td>Execution</td><td>Creates variants, handles translations, assembles components at scale</td><td>Quality standards</td></tr>
<tr><td>Quality</td><td>Runs consistency checks, tests against standards, identifies edge cases</td><td>What standards matter</td></tr>
</tbody>
</table>`,
      },
      {
        id: 'agentic-platforms',
        heading: 'Agentic Automation Platforms',
        html: `<table>
<thead><tr><th>Tool</th><th>Best for</th><th>Starts from</th></tr></thead>
<tbody>
<tr><td>Zapier</td><td>Simple, single-step automations. 8,000+ integrations.</td><td>$50/month</td></tr>
<tr><td>Make</td><td>Visual interface for complex multi-step workflows.</td><td>$11/month</td></tr>
<tr><td>n8n</td><td>Open-source, self-hosted, ideal for developers.</td><td>$20/month</td></tr>
<tr><td>Claude Code</td><td>Terminal-based agentic coding. Build custom agents.</td><td>bundled with Claude $20/month</td></tr>
</tbody>
</table>`,
      },
      {
        id: 'human-in-the-loop-always',
        heading: 'Human in the Loop — Always',
        html: `<p>AI gives us magnified capacity to care. We are here to build technology that looks after people. Keep the human in the loop. Always.</p>`,
      },
    ],
    activities: [
      {
        id: 1,
        anchor: 'activity-1',
        tocTitle: 'Agentic Workflow: GA4 with ChatGPT Atlas',
        title: 'Activity 1 · Agentic Workflow: GA4 with ChatGPT Atlas',
        what: 'Watch an AI agent autonomously navigate your Google Analytics 4 account and deliver research insights. This is agentic AI in practice.',
        why: 'Most teams do manual analytics reporting. Agents can automate this — saving hours per week and surfacing patterns humans would miss.',
        howAiHelps: null,
        steps: [
          'Download ChatGPT Atlas (macOS only currently)',
          'Open your GA4 account',
          'Select Agent Mode in the chat panel',
          'Paste the agentic GA4 prompt and sit back',
        ],
        exerciseIds: [1],
      },
      {
        id: 2,
        anchor: 'activity-2',
        tocTitle: 'Map Your Workflow for AI Integration',
        title: 'Activity 2 · Map Your Workflow for AI Integration',
        what: 'Audit your current workflow and identify the top 3 highest-leverage AI integration points.',
        why: 'Most teams add AI tools randomly — wherever they hear about them first. Strategic integration means choosing where AI makes the biggest difference to quality or speed.',
        howAiHelps: 'AI can analyse your workflow description and identify bottlenecks, repetitive tasks, and high-cost activities that are good candidates for amplification.',
        steps: [
          'Describe your current workflow honestly',
          'Run the Workflow Audit prompt',
          'Pick one integration and build a small experiment this week',
        ],
        exerciseIds: [2],
      },
      {
        id: 3,
        anchor: 'activity-3',
        tocTitle: 'Build Your Personal AI Playbook',
        title: 'Activity 3 · Build Your Personal AI Playbook',
        what: 'Document what you\'ve learned into a living playbook.',
        why: 'Knowledge trapped in your head is fragile. Knowledge in a document is infrastructure.',
        howAiHelps: null,
        steps: [
          'Open a clean doc and fill this in now. Don\'t wait.',
        ],
        exerciseIds: [3],
      },
    ],
    resources: [
      { name: 'Hands-on: Agentic Prompt for GA4', description: 'Full step-by-step guide with ChatGPT Atlas.', link: 'https://stampedeteam.notion.site/aidt-handson-agent-atlas' },
      { name: 'Cohort V Resource Hub', description: 'Full AI-Supercharged Design Thinking reference.', link: 'https://stampedeteam.notion.site/Cohort-V-Resource-Hub-AI-Supercharged-Design-Thinking-348ed70298ae80c4803fd53003f56242', hidden: true },
      { name: 'Zapier', description: 'Simple agentic automation, 8,000+ integrations.', link: 'https://zapier.com' },
      { name: 'Make', description: 'Visual workflow automation for complex multi-step flows.', link: 'https://www.make.com' },
      { name: 'n8n', description: 'Open-source automation for technical teams.', link: 'https://n8n.io' },
      { name: 'Claude Code', description: 'Terminal-based agentic coding tool.', link: 'https://claude.ai/code' },
    ],
    exercises: [
      {
        id: 1,
        title: 'Agentic Prompt for GA4',
        sectionLabel: 'Go Agentic · Activity 1',
        prompt: `Our business goal this year is to [state your business goal].

We need a clear, data-backed understanding of how people are finding us,
what they're doing on the site, and where we're losing them.
We will use Google Analytics 4 for this.

Duration: Select Jan to today
GA feature to use: Reports, Explore — whatever makes the most sense

What I want to know:

1. Traffic Quality & Source Comparison
   a. Which channels bring the most engaged visitors?
   b. How did [your key channel] perform vs other sources
      in terms of engagement or conversion?

2. User Path & Drop-Off Points
   a. Most common user paths from landing to exit
   b. Where are users dropping off in key flows?

3. Content Performance
   a. Which pages have the highest engagement?
   b. Which pages have the worst exit rates?

Output I need:
- Summary of insights in plain language (no jargon)
- Supporting metrics where relevant
- If you use a less common term, explain what it means and why it matters
- Snapshots or URLs of key dashboards you referenced`,
        sample: `Our business goal this year is to increase engagement and conversion
quality across our website.

We need a clear, quant data-backed understanding of how people are
finding us, what they're doing on the site, and where we're losing them.
We will use Google Analytics 4 for this.

We'll use this analysis to decide where to focus next. This insights
will be used by business, design team, and CMS development team.

Duration: Select Jan to today (accept whatever today's date is in GA)
GA feature to use: Reports, Explore — whatever makes the most sense
for the question.

What I want to know:

1. Traffic Quality & Source Comparison
   a. Channels (organic search, social, referral, direct) that bring
      the most engaged visitors.
   b. How did LinkedIn traffic perform compared to other social sources
      in terms of engagement or conversion?

2. User Path & Drop-Off Points
   a. Most common user paths from landing to exit

Output I need:
A summary of insights in plain language (no jargon)
Supporting metrics like bounce rate, session duration, CTR or exit rate
where relevant
If you use a less common term, explain what it means and why it matters
Snapshots or URLs of key dashboards you referenced`,
      },
      {
        id: 2,
        title: 'Workflow Audit Prompt',
        sectionLabel: 'Go Agentic · Activity 2',
        prompt: `You are an AI integration strategist.

Here is a description of my current design/product workflow:

[DESCRIBE YOUR WORKFLOW — what happens from project kick-off to delivery.
Who does what, how long each stage takes, where you get stuck, what
feels repetitive, what requires the most effort for the least output.]

Analyse this and identify:

1. The top 3 highest-leverage AI integration points

2. For each:
   - What AI would do (specific task)
   - Which tool or prompt approach would work best
   - Estimated time saving per use
   - What human judgement is still required

3. The integration point you would NOT start with, and why

4. A 4-week implementation plan: one integration per week, starting
   with the lowest risk and highest visibility win`,
        sample: `You are an AI integration strategist.

Here is a description of my current design/product workflow:

We're a 5-person product design team at a Malaysian digital agency.
When a new brief arrives, the project lead does a quick desk research
(1–2 days, usually shallow), we run one or two internal brainstorm
sessions (2–3 hours each, usually dominated by the loudest voice),
sketch some wireframes, and present to the client by end of week 1.

User research almost never happens — we don't have the budget or time.
We write HMW questions rarely and mostly improvise ideation. Synthesis
after client workshops typically takes the project lead half a day and
results in a slide deck no one reads after the presentation.

Testing happens at the end, usually 1–2 sessions with whoever the client
can wrangle. We never have enough time to iterate after testing.
The biggest bottleneck: going from workshop output to a structured
insight deck takes too long and too much depends on one person.

Analyse this and identify:

1. The top 3 highest-leverage AI integration points

2. For each:
   - What AI would do (specific task)
   - Which tool or prompt approach would work best
   - Estimated time saving per use
   - What human judgement is still required

3. The integration point you would NOT start with, and why

4. A 4-week implementation plan: one integration per week, starting
   with the lowest risk and highest visibility win`,
      },
      {
        id: 3,
        title: 'Personal AI Playbook Template',
        sectionLabel: 'Go Agentic · Activity 3',
        prompt: `═══════════════════════════════════════════════════════
MY AI-SUPERCHARGED DESIGN THINKING PLAYBOOK
Name:
Date:
Team:
═══════════════════════════════════════════════════════

EMPATHISE
─────────────────────────────────────────────────────
Prompt I'll use again:
[Paste here]

What AI did well:
[1–2 sentences]

What AI couldn't replace:
[The human judgement moment — 1 sentence]

─────────────────────────────────────────────────────
DEFINE
─────────────────────────────────────────────────────
Prompt I'll use again:
What AI did well:
What AI couldn't replace:

─────────────────────────────────────────────────────
IDEATE
─────────────────────────────────────────────────────
Prompt I'll use again:
What AI did well:
What AI couldn't replace:

─────────────────────────────────────────────────────
PROTOTYPE
─────────────────────────────────────────────────────
Prompt I'll use again:
What AI did well:
What AI couldn't replace:

─────────────────────────────────────────────────────
TEST
─────────────────────────────────────────────────────
Prompt I'll use again:
What AI did well:
What AI couldn't replace:

═══════════════════════════════════════════════════════
MY TOP 3 MOST REUSABLE PROMPTS
═══════════════════════════════════════════════════════
1. [Prompt name + full text]
2. [Prompt name + full text]
3. [Prompt name + full text]

═══════════════════════════════════════════════════════
WHAT I KNOW NOW THAT I DIDN'T BEFORE THIS COURSE
═══════════════════════════════════════════════════════
[3–5 sentences. Be honest.]

═══════════════════════════════════════════════════════
THE ONE THING I'M DOING DIFFERENTLY ON MY NEXT PROJECT
═══════════════════════════════════════════════════════
[1 sentence. Commit to it.]`,
        sample: `═══════════════════════════════════════════════════════
MY AI-SUPERCHARGED DESIGN THINKING PLAYBOOK
Name: Amirah Hassan
Date: May 2025
Team: Product Design
═══════════════════════════════════════════════════════

EMPATHISE
─────────────────────────────────────────────────────
Prompt I'll use again:
Landscape Analysis Power Up — the full 6-component version with
working style instructions. Game changer for new problem spaces.

What AI did well:
Surfaced patterns across the EV charging market I would have
missed — especially the trust gap between charger status data
and driver behaviour. Got me there in 40 minutes instead of 2 days.

What AI couldn't replace:
Deciding which patterns were strategically significant. AI found
the contradictions. I had to judge which one mattered most for
our product direction.

─────────────────────────────────────────────────────
DEFINE
─────────────────────────────────────────────────────
Prompt I'll use again:
Journey Map Accelerator — especially the follow-up prompt for
identifying highest-impact opportunities.

What AI did well:
Built the first draft of the journey map from 3 interview
transcripts in minutes. The stage names it generated were
actually better than what I would have written.

What AI couldn't replace:
Validating that the emotional states were accurate. AI flattened
some of the more nuanced moments — I had to add those back from
my own memory of the sessions.

═══════════════════════════════════════════════════════
THE ONE THING I'M DOING DIFFERENTLY ON MY NEXT PROJECT
═══════════════════════════════════════════════════════
I'm running a landscape analysis before every kickoff meeting,
no exceptions — even if it's just the Lite template. No more
walking in blind.`,
      },
    ],
  },
  {
    id: 7,
    slug: 'prompt-library',
    title: 'Prompt Library',
    tagline: 'Every prompt from this course, in one place.',
    meta: '07 · Prompt Library',
    type: 'library',
    categories: [
      { id: 'context-engineering', label: 'Context Engineering', description: 'Foundation skill. Use before any stage.', count: 3 },
      { id: 'empathise',           label: 'Empathise',           description: 'Understand your user before you design anything.', count: 3 },
      { id: 'define',              label: 'Define',              description: 'Synthesise research into a sharp problem statement.', count: 3 },
      { id: 'ideate-prototype',    label: 'Ideate & Prototype',  description: 'Generate ideas. Build just enough to test.', count: 3 },
      { id: 'test',                label: 'Test',                description: 'Validate before you build. Fix before users hit it.', count: 3 },
      { id: 'go-agentic',         label: 'Go Agentic',          description: 'Move from prompts to systems.', count: 2 },
    ],
    readSections: [],
    activities: [],
    exercises: [],
    resources: [],
  },
  {
    id: 8,
    slug: 'glossary',
    title: 'Glossary',
    tagline: 'Key terms from this course — design thinking, AI, and the language that connects them.',
    meta: '08 · Glossary',
    type: 'glossary',
    sections: [
      { id: 'design-thinking', label: 'Design Thinking' },
      { id: 'ai-prompting',    label: 'AI & Prompting' },
    ],
    readSections: [],
    activities: [],
    exercises: [],
    resources: [],
  },
]

export const PROMPT_LIBRARY = [
  {
    id: 'CE-1',
    category: 'context-engineering',
    categoryLabel: 'Context Engineering',
    title: '🚲 Lite Context Engineering',
    whenToUse: 'Quick brainstorm, low stakes, internal draft. ~2 minutes.',
    chapterRef: { chapterId: 1, exerciseId: 1 },
    prompt: `📍 BACKGROUND & CONTEXT
[What's the situation? What's been tried? Why now?]

🚧 KNOWN CONSTRAINTS
[What limits exist? Timeline, budget, expertise, technical, regulatory?]

💛 PERSPECTIVE FRAMING
[What matters to you? What would success look like? What are your hunches?]

→ WHAT I NEED HELP WITH
[Your specific request]`,
  },
  {
    id: 'CE-2',
    category: 'context-engineering',
    categoryLabel: 'Context Engineering',
    title: '🏎 Pro Context Engineering',
    whenToUse: 'Stakeholder-facing work, research plans, important decisions. ~10 minutes.',
    chapterRef: { chapterId: 1, exerciseId: 2 },
    prompt: `📍 BACKGROUND & CONTEXT
[Concise, rich background. Current challenges, past failures, timing urgency.]

🎯 USER CONTEXT
[Who is the user? What do we know / what's been validated about them?]

🚧 KNOWN CONSTRAINTS
[What limits exist? Timeline, budget, expertise, technical, regulatory?]

💛 PERSPECTIVE FRAMING
[What to emphasise or avoid? Success criteria, risk tolerance, your hunches.]

→ WHAT I NEED HELP WITH
[Your specific request]`,
  },
  {
    id: 'CE-3',
    category: 'context-engineering',
    categoryLabel: 'Context Engineering',
    title: '🚀 Power Up Context Engineering',
    whenToUse: 'High stakes, multiple unknowns, cross-team work. ~10 minutes. Normal to discover new uncertainties.',
    chapterRef: { chapterId: 1, exerciseId: 3 },
    prompt: `📍 BACKGROUND & CONTEXT
[Concise, rich background. Current challenges, past failures, timing urgency.]

🎯 USER CONTEXT
[Who is the user? What do we know / what's been validated about them?]

📊 STRUCTURED DATA (if applicable)
[Paste data from Excel/Sheets. Quantitative analytics, error logs, feedback.]

🚧 KNOWN CONSTRAINTS
[What limits exist? Timeline, budget, expertise, technical, regulatory?]

💛 PERSPECTIVE FRAMING
[What to emphasise or avoid? Success criteria, risk tolerance, your hunches.]

🔍 UNKNOWN
[Flag what you DON'T know yet.
e.g. "UNKNOWN: whether users would pay for this"
     "UNKNOWN: if infrastructure can handle the load"]

--- POWER-UPS (optional) ---

👥 INTENDED AUDIENCE
[Who this output is for. Technical level? What action do we want them to take?]

🔄 WORKING STYLE
[How you want to collaborate:
"Challenge my assumptions first"
"Give 3 options, I'll pick one"
"Build incrementally — show me your reasoning"]

→ WHAT I NEED HELP WITH
[Your specific request]`,
  },
  {
    id: 'E-1',
    category: 'empathise',
    categoryLabel: 'Empathise',
    title: 'Landscape Analysis',
    whenToUse: 'Before user research — map the market and problem space.',
    chapterRef: { chapterId: 2, exerciseId: 1 },
    prompt: `📍 BACKGROUND & CONTEXT
[Describe your problem space. What do you already know? What feels incomplete?]

👥 INTENDED AUDIENCE
This is for me as a product owner (and anyone working with me). I'm trying
to make better product and research decisions, decide where to focus next,
and understand which areas might turn into viable opportunities.

🎯 USER CONTEXT
[What types of users do you know about? Include assumptions you're holding.]

🚧 KNOWN CONSTRAINTS
[What limits your research? Time, budget, access, market, regulatory?]

💛 PERSPECTIVE FRAMING
[What matters most? What would a great outcome look like?
Share your hunches — even half-formed ones.]

⚙️ WORKING STYLE
Provide rationale backed by real sources. Challenge my assumptions.
Show my blind spots. Indicate where you're confident and where you're not.

→ WHAT I NEED HELP WITH
Run me a deep landscape analysis of this problem space.`,
  },
  {
    id: 'E-2',
    category: 'empathise',
    categoryLabel: 'Empathise',
    title: 'Synthetic User',
    whenToUse: 'Build a layered AI persona to stress-test your interview guide.',
    chapterRef: { chapterId: 2, exerciseId: 2 },
    prompt: `You are a synthetic user representing the persona below.

BASE LAYER — Who they are:
[Job title, industry, company size, years of experience.]

ENVIRONMENT — How they work:
[Tools they use daily. Team size. How decisions get made.]

MOTIVATIONS — What they're trying to achieve:
[What does success look like this quarter? What are they measured on?]

PAIN POINTS — Where they get stuck:
[What frustrates them? What workarounds have they built?]

COGNITIVE LAYER — How they think:
[Mental models. How they process information. What makes them trust something.]

EMOTIONAL LAYER — What they feel:
[What they're afraid of getting wrong. What gives them satisfaction.]

CULTURAL LAYER — Context and norms:
[Communication style. Relationship to authority. Regional context.]

FRICTION LAYER — What breaks it for them:
[Specific breaking points. "If X happens, I will abandon this immediately."]

RULES FOR THIS INTERACTION:
- Stay strictly within this persona's knowledge and experience
- If something is outside the persona's world, show confusion — don't invent
- Express opinions in the persona's voice, not a neutral AI voice
- React the way this specific person would, not generically

I will now ask you interview questions. Respond as this person.`,
  },
  {
    id: 'E-3',
    category: 'empathise',
    categoryLabel: 'Empathise',
    title: 'Research Synthesis',
    whenToUse: 'After real interviews — extract pain points and POV directions.',
    chapterRef: { chapterId: 2, exerciseId: 3 },
    prompt: `You are a design research analyst.

Here are raw user interview notes from a study on [describe who you talked
to, what you were exploring, how many participants]:

[PASTE YOUR RAW NOTES HERE — label each with participant code P1, P2…]

Your task:

1. Extract the top 5 pain points. For each:
   - Pain point statement (1 clear, specific sentence)
   - Most representative quote (verbatim, with participant label)
   - Emotional intensity: Low / Medium / High
   - Frequency: how many participants mentioned it

2. Identify 1–2 surprising findings that challenged your assumptions.

3. Flag research gaps: what questions remain unanswered?

4. Suggest 3 POV statement directions.
   Format: [User type] needs [specific need] because [non-obvious insight].

Rules:
- Structured numbered list only. No paragraph summaries.
- Quote verbatim — do not paraphrase.
- If uncertain, say so. Do not invent insights.`,
  },
  {
    id: 'D-1',
    category: 'define',
    categoryLabel: 'Define',
    title: 'Journey Map Accelerator',
    whenToUse: 'Convert research notes into a structured current-state journey map.',
    chapterRef: { chapterId: 3, exerciseId: 1 },
    prompt: `[PASTE YOUR PROJECT CONTEXT + RESEARCH NOTES / TRANSCRIPTS HERE]

→ WHAT I NEED HELP WITH
Create a current-state journey map for [describe the scenario].

Output as a table with columns:
1. Journey Stage
2. User Actions
3. Touchpoints
4. Thoughts & Emotions
5. Pain Points
6. Opportunities

Additional analysis:
- Highlight pain points that appear across multiple participants
- Flag gaps where data is insufficient
- Identify 2–3 emotionally significant moments`,
  },
  {
    id: 'D-2',
    category: 'define',
    categoryLabel: 'Define',
    title: 'POV Statement Generator',
    whenToUse: 'Align the team on the single most important user need to solve.',
    chapterRef: { chapterId: 3, exerciseId: 2 },
    prompt: `You are a design thinking facilitator running a Define workshop.

Based on this user research summary:
[PASTE YOUR TOP PAIN POINTS, SURPRISING INSIGHTS, USER GROUP DESCRIPTION]

Write a Point of View statement using this format exactly:
[User description] needs [specific need] because [surprising insight].

Rules:
- User description must be specific, not generic
- Need must be concrete and actionable
- "Because" MUST be non-obvious — not a restatement of the need
- If it could be predicted before doing research, rewrite it
- Generate 3 options
- Recommend the strongest and explain why in 2 sentences`,
  },
  {
    id: 'D-3',
    category: 'define',
    categoryLabel: 'Define',
    title: 'HMW Question Generator',
    whenToUse: 'Generate How Might We questions to drive ideation.',
    chapterRef: { chapterId: 3, exerciseId: 3 },
    prompt: `You are a design thinking facilitator.

Here is our Point of View statement:
[POV STATEMENT]

Generate 8 'How Might We' questions for our ideation session.

Each HMW must:
- Start with "How might we..."
- Be specific enough to act on
- NOT contain the solution in the question
- Open multiple possible directions

Then:
- Flag which 2 are too broad
- Flag which 2 are too narrow
- Recommend the 4 best ones and explain why`,
  },
  {
    id: 'I-1',
    category: 'ideate-prototype',
    categoryLabel: 'Ideate & Prototype',
    title: 'Ideation at Large',
    whenToUse: "Cross-industry inspiration — find what your competitors can't see.",
    chapterRef: { chapterId: 4, exerciseId: 1 },
    prompt: `[PASTE YOUR CONTEXT ENGINEERING — project context, user, constraints]

💛 PERSPECTIVE FRAMING
The user's pain point is: [describe the pain point].
Turn this into a high-value HMW.

✅ WHAT I NEED HELP WITH
Based on the HMW, show me how these industries solved similar problems:

1. CURRENT INDUSTRY: Same domain already addressing this
2. COMPARABLE INDUSTRY: Different field, similar challenges, solved well
3. SMART ADJACENCY: Unexpected industry, surprisingly relevant

For each:
- What was their core insight?
- What mechanism did they use?
- What's transferable to my context?`,
  },
  {
    id: 'I-2',
    category: 'ideate-prototype',
    categoryLabel: 'Ideate & Prototype',
    title: 'Storyboard Generator',
    whenToUse: 'Narrative your solution before touching any design tool.',
    chapterRef: { chapterId: 4, exerciseId: 2 },
    prompt: `You are a UX designer and narrative strategist.

Solution idea:
[DESCRIBE YOUR SOLUTION IN 2-3 SENTENCES]

User persona:
[PASTE YOUR SYNTHETIC USER PROFILE]

Create a storyboard with 6–8 scenes showing this user's experience.

For each scene:
- Scene title
- What the user is doing
- What they see or interact with
- What they're thinking (use their voice)
- What they're feeling (name the emotion)
- Any friction or hesitation

After the storyboard:
- Identify the 2 scenes most likely to cause drop-off
- Flag assumptions we haven't validated yet`,
  },
  {
    id: 'I-3',
    category: 'ideate-prototype',
    categoryLabel: 'Ideate & Prototype',
    title: 'Prototype Prompt Generator',
    whenToUse: 'Let Claude deconstruct your storyboard into a Lovable/Figma Make brief.',
    chapterRef: { chapterId: 4, exerciseId: 3 },
    prompt: `The above is my storyboard and details of my synthetic user.
Deconstruct it into a prompt for me to build a prototype in
Figma Make / Lovable / v0.

My storyboard:
[PASTE YOUR STORYBOARD SCENES]

My synthetic user:
[PASTE YOUR SYNTHETIC USER PROFILE]

Generate a prototype brief including:
1. ONE-LINE PRODUCT DESCRIPTION
2. TARGET USER SNAPSHOT (3–5 bullets)
3. SCREENS TO BUILD (intent, content, actions, scope guard per screen)
4. INTERACTION PRINCIPLES (3–4 rules from the user's friction layer)
5. CONTENT NOTES (real placeholder copy, not lorem ipsum)
6. BUILD INSTRUCTION (what to prioritise, what to leave out)`,
  },
  {
    id: 'T-1',
    category: 'test',
    categoryLabel: 'Test',
    title: 'Synthetic Usability Test',
    whenToUse: 'AI as crash test dummy — find obvious friction before real sessions.',
    chapterRef: { chapterId: 5, exerciseId: 1 },
    prompt: `You are a synthetic user conducting a think-aloud usability test.

RESEARCH OBJECTIVE:
[What are we testing? What assumption?]

YOUR SYNTHETIC USER PROFILE:
[PASTE FULL PROFILE — all five layers]

PROTOTYPE DESCRIPTION:
[What the prototype does. Main screens and flows available.]

TASK TO COMPLETE:
[Write as a goal, not an instruction.]

TESTING RULES:
- Think aloud — narrate everything
- React as this specific person would
- When confused, express it — don't figure it out silently
- Complete the task or give up — don't ask for help

REPORT AT THE END:
1. Completed? Yes / Partial / No
2. Where did you get stuck or confused?
3. What was unclear in the language or labels?
4. What was missing that you needed?
5. Would you use this in your real workflow? Why?
Rate each issue: Critical / Major / Minor`,
  },
  {
    id: 'T-2',
    category: 'test',
    categoryLabel: 'Test',
    title: 'Usability Test Script Generator',
    whenToUse: 'Generate a clean, unbiased test script for real user sessions.',
    chapterRef: { chapterId: 5, exerciseId: 2 },
    prompt: `You are a UX research specialist preparing a usability test.

Prototype description: [WHAT DOES IT DO?]
Key assumption to test: [THE ONE THING TO VALIDATE]
Target user: [WHO IS PARTICIPATING]

Generate a usability test script with:
1. Facilitator briefing script
2. 2 warm-up questions (context, not product)
3. 3 task scenarios (goals in user language, not instructions)
4. 2–3 probing questions per task
5. 2 closing questions (reaction + likelihood to use)

Rules: No leading questions. No yes/no. No questions that reveal
correct behaviour. Tasks must be goals, not step-by-step instructions.`,
  },
  {
    id: 'T-3',
    category: 'test',
    categoryLabel: 'Test',
    title: 'Session Synthesis',
    whenToUse: 'Extract structured issue list from messy session notes.',
    chapterRef: { chapterId: 5, exerciseId: 3 },
    prompt: `You are a UX research analyst.

Notes from [N] usability sessions on [prototype name]:
[PASTE NOTES — label P1, P2… and T1, T2… where relevant]

Your task:
1. All usability issues found. For each:
   - Issue description (1 sentence)
   - Where it occurs
   - Severity: Critical / Major / Minor
   - Frequency: how many participants
   - Best supporting quote (verbatim)

2. Unexpected positive moments

3. Top 3 issues to fix before next round

4. Issues suggesting a more fundamental problem
   (concept/flow level, not just UI)

Sorted by severity. No paragraph summaries.`,
  },
  {
    id: 'A-1',
    category: 'go-agentic',
    categoryLabel: 'Go Agentic',
    title: 'Agentic GA4 Prompt',
    whenToUse: 'Let an AI agent analyse your GA4 data autonomously.',
    chapterRef: { chapterId: 6, exerciseId: 1 },
    prompt: `Our business goal this year is to [state your business goal].

We need a data-backed understanding of how people are finding us,
what they're doing on the site, and where we're losing them.
Using Google Analytics 4.

Duration: Jan to today
Feature: Reports / Explore — whatever fits the question

What I want to know:
1. Traffic Quality — which channels bring the most engaged visitors?
2. User Paths — most common paths from landing to exit; where do
   users drop off?
3. Content Performance — highest engagement and worst exit rate pages

Output: plain language insights, supporting metrics, explain any
jargon, include dashboard URLs or snapshots referenced.`,
  },
  {
    id: 'A-2',
    category: 'go-agentic',
    categoryLabel: 'Go Agentic',
    title: 'Workflow Audit',
    whenToUse: 'Find the highest-leverage AI integration points in your workflow.',
    chapterRef: { chapterId: 6, exerciseId: 2 },
    prompt: `You are an AI integration strategist.

My current workflow:
[DESCRIBE FROM KICK-OFF TO DELIVERY — who, how long, where you
get stuck, what's repetitive, what costs the most effort]

Identify:
1. Top 3 highest-leverage AI integration points
2. For each: what AI does, which tool, time saved, human judgement needed
3. The integration point to NOT start with, and why
4. A 4-week implementation plan, lowest risk first`,
  },
]

export const GLOSSARY_DATA = {
  sections: [
    {
      id: 'design-thinking',
      label: 'Design Thinking',
      terms: [
        {
          term: 'Affinity Clustering',
          definition: 'A synthesis technique where raw research observations are grouped into themed clusters. The key: name each cluster with an insight statement, not a label. "Users feel embarrassed when they make mistakes" beats "User errors."',
        },
        {
          term: 'Design Thinking',
          definition: 'A human-centred approach to innovation and problem-solving. Combines empathy, creativity, and rationality. Non-linear — teams move back and forth between stages based on what they learn. Best used when the problem is ambiguous and the solution is unknown.',
        },
        {
          term: 'Double Diamond',
          definition: 'A model that maps Design Thinking into two phases of diverging and converging thought. First diamond: Discover (wide exploration) → Define (narrow to the right problem). Second diamond: Develop (wide ideation) → Deliver (narrow to the right solution).',
        },
        {
          term: 'Empathise',
          definition: "The first DT stage. Understanding the person you're designing for — their situation, frustrations, motivations, and the gap between what they say and what they actually do. Involves landscape research, user interviews, observation, and synthesis.",
        },
        {
          term: 'Define',
          definition: 'The second DT stage. Synthesising research into a sharp, actionable problem statement. Key outputs: affinity clusters, POV statement, HMW questions, and a journey map.',
        },
        {
          term: 'Ideate',
          definition: 'The third DT stage. Structured divergence — generating as many ideas as possible before judging any. Quantity before quality. Tools include brainstorming, SCAMPER, Lightning Demos, and cross-industry inspiration.',
        },
        {
          term: 'Prototype',
          definition: 'The fourth DT stage. Building the minimum version needed to test your most important assumption. Not a final product — a question made physical. Match fidelity to the question you\'re testing.',
        },
        {
          term: 'Test',
          definition: 'The fifth DT stage. Putting prototypes in front of real users and observing what actually happens. Informs iteration. Feeds back into Empathise and Define.',
        },
        {
          term: 'HMW (How Might We)',
          definition: 'A question format that reframes a user problem as a design opportunity. Rules: not too broad ("How might we fix the app?"), not too narrow ("How might we add a blue button?"). Should be specific enough to act on but open enough for multiple solutions.',
        },
        {
          term: 'JTBD (Jobs-to-be-Done)',
          definition: '"When [situation], I want to [motivation], so I can [outcome]." Focuses on the underlying job a user is hiring a product to do, not just their stated preferences.',
        },
        {
          term: 'Journey Map',
          definition: 'A visualisation of the user\'s experience across time — stages, actions, touchpoints, thoughts, emotions, pain points, and opportunities. A current-state map shows how things are now. A future-state map shows how they should be.',
        },
        {
          term: 'POV Statement (Point of View)',
          definition: 'A single, team-aligned problem statement framed from the user\'s perspective. Format: [User] needs [specific need] because [non-obvious insight]. The "because" must be a genuine insight — not something you could have written before doing research.',
        },
        {
          term: 'Prototype Fidelity',
          definition: 'How closely a prototype resembles the final product. Low fidelity (paper, sketches) = fast and cheap, best for testing concepts. High fidelity (coded, interactive) = slower, best for testing feel and interaction. Match fidelity to the question you\'re testing, not your comfort level.',
        },
        {
          term: 'RITE (Rapid Iterative Testing and Evaluation)',
          definition: 'A testing methodology where you fix issues between sessions rather than waiting until the end. 3–4 rounds of 3–4 participants each. Problems get fixed while they\'re still cheap to fix.',
        },
        {
          term: 'Sprint (Design Sprint)',
          definition: "Jake Knapp's 5-day framework for compressing months of work into one week: Map → Sketch → Decide → Prototype → Test. Includes the Decider role, Lightning Demos, Note-and-Vote, and a \"Fake It\" Friday prototype designed to look real but built in one day.",
        },
        {
          term: 'Synthesis',
          definition: 'The process of making sense of raw research. Involves extracting observations, clustering by theme, identifying patterns across participants, and interpreting what the data means — not just what it says.',
        },
        {
          term: 'Touchpoint',
          definition: 'Any point of interaction between a user and a product, service, or organisation. Includes digital (app screens, emails), physical (signage, packaging), and human (customer service, sales calls).',
        },
      ],
    },
    {
      id: 'ai-prompting',
      label: 'AI & Prompting',
      terms: [
        {
          term: 'Agent / AI Agent',
          definition: "An AI that doesn't just answer questions — it takes actions. Uses tools, makes decisions, and loops through a problem until it reaches a goal. Components: the brain (LLM), memory (context), tools (what it can do), and system prompt (job description).",
        },
        {
          term: 'Agentic Workflow',
          definition: 'A process where one or more AI agents autonomously complete a sequence of tasks — navigating tools, making decisions, and producing output — with human oversight at key checkpoints.',
        },
        {
          term: 'Claude',
          definition: "Anthropic's AI model. Used throughout this course for research, synthesis, storyboarding, and prompt generation. Claude Research mode (similar to ChatGPT Deep Research) can run autonomous multi-source analysis.",
        },
        {
          term: 'Context Engineering',
          definition: 'The practice of structuring your AI prompt with rich context — background, user context, constraints, perspective framing, and unknowns — so AI can produce useful, targeted output the first time. Prevents looping in refinement hell.',
        },
        {
          term: 'Context Window',
          definition: "The amount of text an AI model can process in a single conversation. Everything inside the window shapes the response. Once something falls outside the context window, the model can't reference it.",
        },
        {
          term: 'Deep Research (ChatGPT / Claude)',
          definition: 'An AI mode that autonomously searches multiple web sources, synthesises findings, and produces a structured research report. Equivalent to hours of desk research compressed into minutes. Requires a well-structured Power Up prompt to get precise results.',
        },
        {
          term: 'Hallucination',
          definition: 'When an AI model generates confident-sounding information that is factually incorrect or entirely fabricated. Always validate AI outputs against real sources, especially for specific facts, statistics, and quotes.',
        },
        {
          term: 'LLM (Large Language Model)',
          definition: 'The underlying technology behind AI tools like Claude, ChatGPT, and Gemini. Trained on large amounts of text to predict and generate language. The "brain" of an AI agent.',
        },
        {
          term: 'MCP (Model Context Protocol)',
          definition: 'A standard that lets AI models connect to external tools and data sources — including Figma, Google Drive, Slack, and databases — so agents can read and write to real systems, not just generate text.',
        },
        {
          term: 'Perspective Framing',
          definition: 'The section of a context-engineered prompt where you share your hunches, priorities, and what good looks like. The most underused component. This is where you inject your judgment — what makes AI amplify your thinking instead of giving generic output.',
        },
        {
          term: 'Prompt',
          definition: 'The instruction you give an AI model. Quality of the prompt directly determines quality of the output. A one-liner and a Power Up prompt on the same task will produce very different results.',
        },
        {
          term: 'Synthetic User',
          definition: 'An AI-generated profile that simulates a specific user type — built across multiple layers (base, cognitive, emotional, cultural, friction). Used to stress-test interview guides, prototype flows, and test scripts before spending recruitment budget on real participants. Not a replacement for real users — preparation for them.',
        },
        {
          term: 'System Prompt',
          definition: "A set of instructions given to an AI agent that defines its role, personality, constraints, and operating rules. The agent's job description. Users don't see it, but it shapes every response.",
        },
        {
          term: 'Token',
          definition: 'The basic unit AI models process. Roughly 0.75 words. Models have a maximum token limit per request (context window). Longer prompts and conversations consume more tokens.',
        },
        {
          term: 'Vibe Coding',
          definition: 'Describing what you want in natural language and having AI generate working code. Tools include Lovable, v0, Cursor, and Claude Code. Fast initial results — but without a storyboard and user intent mapped first, iteration loops compound quickly.',
        },
      ],
    },
  ],
}

// Populate Prompt Library chapter exercises so the right sidebar can look them up
const _libChapter = CHAPTERS.find(c => c.id === 7)
if (_libChapter) {
  _libChapter.exercises = PROMPT_LIBRARY.map(card => ({
    id: card.id,
    title: card.title,
    sectionLabel: card.categoryLabel,
    prompt: card.prompt,
    sample: (() => {
      if (!card.chapterRef?.exerciseId) return null
      const rc = CHAPTERS.find(c => c.id === card.chapterRef.chapterId)
      return rc?.exercises.find(e => e.id === card.chapterRef.exerciseId)?.sample ?? null
    })(),
  }))
}
