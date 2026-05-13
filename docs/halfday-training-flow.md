# Half-Day Workshop: Build & Ship with AI

## Trainer's Guide — Training Flow

**Duration**: 4 hours (10:00 AM — 2:00 PM), 5 hours of prepared content
**Audience**: Non-technical founders, product leaders, business professionals
**Outcome**: Every student ships a working app to a live URL by end of session
**Prerequisites**: Laptop with Chrome browser, GitHub account (created during setup)

---

## Pre-Workshop Checklist (Trainer)

- [ ] Test venue WiFi — confirm it handles N simultaneous downloads
- [ ] Prepare backup mobile hotspot
- [ ] Pre-download Claude Code installer on USB drives (backup for slow WiFi)
- [ ] Have printed "Quick Reference Cards" with key commands
- [ ] Set up a shared screen visible to all students
- [ ] Create a demo GitHub repo students can reference
- [ ] Test the full flow end-to-end the morning before

---

## Schedule Overview

| Time | Block | Duration | Type |
|------|-------|----------|------|
| 10:00 | Opening + Mindset Shift | 20 min | Lecture + Demo |
| 10:20 | Environment Setup | 25 min | Hands-on |
| 10:45 | Idea Brainstorming with AI | 20 min | Interactive |
| 11:05 | Prompt Engineering (3 Techniques) | 25 min | Teach + Practice |
| 11:30 | **Break** | 10 min | — |
| 11:40 | Context Engineering Essentials | 20 min | Teach + Practice |
| 12:00 | Build Sprint: Spec to Working App | 45 min | Hands-on |
| 12:45 | Git/GitHub: Save & Share Your Work | 25 min | Hands-on |
| 13:10 | Deploy to Live URL (Vercel) | 15 min | Hands-on (optional) |
| 13:25 | Claude Code Skills & Workflow Tips | 15 min | Demo + Practice |
| 13:40 | Show & Tell + Wrap-up | 20 min | Group |

**Total prepared content**: ~5 hours
**Flex strategy**: Mark sections with [CAN TRIM] and [CAN EXPAND] below. Adjust in real-time based on pace.

---

## Block 1: Opening + Mindset Shift (20 min)

**Goal**: Shift from "I can't code" to "I manage AI agents that code for me"

### 10:00 — Welcome & Hook (5 min)

- Introduce yourself, share your background briefly
- **Hook**: Show a live app you built in under 10 minutes with AI
  - Open the app on your phone, click around — it's real, it works
  - "By the end of today, you'll have built something like this"
- Quick poll: "Who here has written code before?" (normalize that most haven't)

### 10:05 — The Agent Manager Model (10 min)

- **Key concept**: You are not learning to code. You are learning to *manage an AI coding agent*.
- Analogy: "You don't need to know how to lay bricks to be a great architect. You need to know what to build and how to communicate it."
- The 3 roles in AI-first development:
  1. **Product thinker** — What should this do? For whom?
  2. **Agent manager** — How do I communicate clearly to the AI?
  3. **Quality checker** — Does the result match my intent?
- Show the spectrum: Idea → Spec → Prompt → AI builds → You review → Ship

### 10:15 — Live Demo: Zero to App in 5 min (5 min)

- Share your screen, open Claude Code in terminal
- Talk through what you're doing as you go:
  - "I'm going to tell Claude to build a simple tip calculator..."
  - Type a natural language prompt, let it generate the app
  - Run it, show it working in the browser
- **Key takeaway**: "That's the whole loop. The rest of today is about doing this well."

**[CAN TRIM]**: Shorten the live demo to 2 min if running behind.

---

## Block 2: Environment Setup (25 min)

**Goal**: Every student has Claude Code running and can talk to it

### 10:20 — GitHub Account Setup (10 min)

> This is critical for non-tech audiences. Go slow here.

- **What is GitHub?** — "Think of it as Google Docs for code. It saves every version, lets you undo anything, and share your work."
- Walk through account creation step by step (for those who don't have one):
  1. Go to github.com → Sign Up
  2. Pick a username, enter email, create password
  3. Verify email
- For those who already have accounts: help neighbors, or explore github.com/explore
- **Checkpoint**: "Everyone raise your hand when you can see your GitHub dashboard"

### 10:30 — Install GitHub Desktop (5 min) [CAN TRIM]

- Download GitHub Desktop from desktop.github.com
- Sign in with the GitHub account just created
- "We'll come back to this later — for now just leave it open"
- **Why we do this now**: Avoids a bottleneck later during the Git block

### 10:35 — Claude Code Setup (10 min)

- Guide students through Claude Code installation:
  - Open Terminal (Mac) or Command Prompt (Windows)
  - "Don't worry about the terminal — I'll tell you exactly what to type"
  - Install command: `npm install -g @anthropic-ai/claude-code` (or current method)
  - Authenticate with Anthropic account
- **Troubleshooting pairs**: Have students sit with a neighbor. If one gets stuck, the other can help while you keep moving.
- **Checkpoint**: "Type `claude` and hit Enter. You should see a welcome message. Thumbs up when you see it."

### 10:45 — Sanity Check

- Everyone types a simple prompt: "What can you help me build today?"
- Confirm Claude responds. Fix stragglers.

**[CAN EXPAND]**: If setup goes fast, have students ask Claude "What's the weather like?" or "Tell me a joke" — builds comfort with the conversational interface.

**Trainer note**: This block is where you'll lose time if WiFi is slow. Have USB backups ready. If 2+ students are stuck, assign a TA or advanced student to help them while you continue with the group.

---

## Block 3: Idea Brainstorming with AI (20 min)

**Goal**: Every student has a clear, scoped app idea ready to build

### 10:45 — Brainstorming Session (15 min)

- **Frame it**: "The best app ideas solve YOUR problems. Think about something annoying in your daily work or life."
- Have students prompt Claude Code:

  ```
  I want to build a simple web app. Here's my situation: [describe your role/problem].
  Give me 5 app ideas I could build today in under 2 hours.
  Each should be a single page, no login required, and useful immediately.
  ```

- Students review the 5 ideas, pick their favorite
- **If stuck**, offer these starter ideas:
  - A meeting cost calculator (input attendees + hourly rates)
  - A client proposal template generator
  - A personal OKR dashboard
  - A restaurant tip splitter for groups
  - A countdown timer for product launches

### 11:00 — Refine with AI (5 min)

- Students tell Claude their chosen idea and ask for a quick scope:

  ```
  I want to build [idea]. I have about 45 minutes to build it.
  What features should I include? What should I save for later?
  Give me a simple, focused scope.
  ```

- **Checkpoint**: "Everyone should now have a clear idea and scope. Say it in one sentence to your neighbor."

**[CAN TRIM]**: Skip the refine step. Have pre-made ideas on cards students can pick from if brainstorming runs long.

---

## Block 4: Prompt Engineering — 3 Core Techniques (25 min)

**Goal**: Students learn to write prompts that produce better results

### 11:05 — Technique 1: Be Specific, Not Vague (8 min)

- **Show the contrast** (live demo on your screen):
  - Bad: "Make me a website"
  - Good: "Build a single-page web app that calculates meeting costs. It should have input fields for number of attendees and average hourly rate, show the per-minute cost in real-time, and use a clean, modern design with a dark background."
- **Why it works**: AI agents are like new employees — they do exactly what you say, so say exactly what you want.
- **Students practice**: Rewrite their app idea as a specific prompt (2 min)
- Walk around, read a few aloud, give quick feedback

### 11:13 — Technique 2: Give Examples & Constraints (8 min)

- **Key idea**: "Show, don't just tell"
- Demo adding constraints:
  ```
  Build a tip calculator.
  - Use Tailwind CSS for styling
  - Dark blue background (#0f172a) with white text
  - Include a slider for tip percentage (15%, 18%, 20%, 25%)
  - Show the breakdown: subtotal, tip amount, total
  - Make it mobile-friendly
  - No external dependencies
  ```
- **Students practice**: Add 3-5 constraints to their prompt

### 11:21 — Technique 3: Iterate, Don't Start Over (9 min)

- **Key concept**: "Your first prompt is a starting point, not a final answer"
- Show the iteration loop:
  1. Prompt → Get result
  2. "Change the header color to blue"
  3. "Make the font bigger on the total amount"
  4. "Add a reset button at the bottom"
- **Live demo**: Take a student's result and iterate 3 times
- **Mental model**: "AI conversations are like sculpting — rough shape first, then refine"

**Trainer note**: Resist the urge to teach more techniques. Three is the right number for a half-day. Depth beats breadth.

---

## Break (10 min) — 11:30 to 11:40

- Encourage students to stretch, refill water
- Use this time to help stragglers catch up
- Write on the board/screen: "After break → Context Engineering → Build Sprint"

---

## Block 5: Context Engineering Essentials (20 min)

**Goal**: Students understand how to give AI the right context for better output

### 11:40 — What Is Context? (5 min)

- **Simple explanation**: "Context is everything the AI knows when it starts working. More relevant context = better results."
- Analogy: "Imagine hiring a freelancer. Would you just say 'build me an app'? Or would you send them a brief with your brand colors, target audience, examples of apps you like?"
- The 3 types of context:
  1. **Who**: Who is this for? (your audience)
  2. **What**: What does it do specifically? (features)
  3. **How**: How should it look/feel? (style, tone, constraints)

### 11:45 — CLAUDE.md: Your Project Brief (10 min)

- **Key concept**: CLAUDE.md is a file that gives Claude persistent context about your project
- Show a simple example:
  ```markdown
  # My App

  ## About
  This is a meeting cost calculator for startup founders.

  ## Design
  - Dark theme with blue accents
  - Clean, minimal UI
  - Mobile-first layout

  ## Tech
  - Single HTML file
  - Tailwind CSS for styling
  - No external APIs
  ```
- **Students practice**: Create a CLAUDE.md for their app idea
  - "Open a new file, name it CLAUDE.md, and write 5-10 lines about your project"
  - Walk around and help

### 11:55 — Quick Demo: With vs Without Context (5 min)

- Show the same prompt with and without CLAUDE.md — compare the output
- "See how the version with context matches what we actually wanted?"

**[CAN TRIM]**: Skip the live comparison demo. Just tell them the impact.

---

## Block 6: Build Sprint — Spec to Working App (45 min)

**Goal**: Every student builds a working app using everything they've learned

### 12:00 — Write Your Spec (10 min)

- Combine their idea, prompt techniques, and context into a PRD-lite:

  ```
  Build me a [app name]: [one-sentence description].

  Users: [who will use this]
  
  Features:
  - [feature 1]
  - [feature 2]
  - [feature 3]

  Design:
  - [color/style preference]
  - [layout preference]
  - Mobile-friendly

  Keep it simple — single page, no login, no database.
  ```

- **Checkpoint**: "Read your spec to your neighbor. If they understand it, Claude will too."

### 12:10 — Build! (30 min)

- Students paste their spec into Claude Code and start building
- **Your role during this time**:
  - Walk the room continuously
  - Help students who get errors (most common: "did you mean to run this?")
  - Encourage iteration: "Don't like the color? Just tell Claude to change it."
  - Celebrate small wins loudly: "Hey everyone, Sarah just got her calculator working!"
- **Common issues & fixes**:
  - "Nothing happened" → Check if Claude is still generating
  - "It looks wrong" → "Tell Claude what's wrong. Be specific."
  - "I got an error" → "Copy the error and paste it back to Claude. Say 'fix this error.'"
  - "I want to start over" → "Don't! Tell Claude what to change instead."

### 12:40 — Polish Round (5 min)

- "Take 5 minutes to make one improvement. Pick ONE thing:"
  - Better colors
  - A missing feature
  - Mobile layout fix
  - A better title/heading

**[CAN EXPAND]**: If students finish early, challenge them: "Add one feature you didn't plan for. Surprise yourself."

**Trainer note**: This is the most important block. Protect this time. If you're running late, take time from Block 7 or 8, not from here.

---

## Block 7: Git/GitHub — Save & Share Your Work (25 min)

**Goal**: Students understand version control basics and push their code to GitHub

### 12:45 — Why Git Matters (5 min)

- **Non-tech explanation**: "Git is an 'undo button' for your entire project. It saves snapshots of your work so you can always go back."
- **GitHub** = "Git in the cloud. Your code is safe even if your laptop dies. And you can share it with anyone."
- Show the mental model:
  ```
  Your laptop          GitHub (cloud)
  ┌──────────┐         ┌──────────┐
  │ Your code │ ──push──▶ │  Backup  │
  │ (local)   │ ◀──pull── │ (remote) │
  └──────────┘         └──────────┘
  ```

### 12:50 — Create a Repository (10 min)

> Go step by step. Show your screen. Wait for everyone.

**Option A — GitHub Desktop (recommended for non-tech)**:

1. Open GitHub Desktop
2. File → New Repository
3. Name: `my-first-ai-app` (or their app name, no spaces)
4. Local path: choose where their project files are
5. Click "Create Repository"
6. They should see their files listed as "changes"
7. Type a summary: "My first AI-built app"
8. Click "Commit to main"
9. Click "Publish repository" → uncheck "Keep this code private" if they want to share
10. **Checkpoint**: "Open GitHub.com in your browser. Can you see your repo? Thumbs up!"

**Option B — Claude Code (for students comfortable with terminal)**:

- Ask Claude: "Initialize a git repo, commit all files, and push to a new GitHub repository called my-first-ai-app"
- Claude will walk through it

### 13:00 — Make a Change & Commit (10 min)

- "Let's practice the save loop":
  1. Go back to Claude Code, make a small change ("Change the title to [something]")
  2. In GitHub Desktop: see the change appear
  3. Write a summary: "Updated title"
  4. Click "Commit to main"
  5. Click "Push origin"
  6. Refresh GitHub.com — see the change
- **Key takeaway**: "This is the loop: change → commit → push. That's 90% of Git."
- **Bonus concept** (mention only, don't practice): "In a team, you'd create 'branches' — parallel versions — so two people can work at once without stepping on each other."

**[CAN TRIM]**: Skip the "Make a Change & Commit" exercise. Just demo it on your screen and move on. Students can practice after the workshop.

---

## Block 8: Deploy to Live URL — Vercel (15 min) [OPTIONAL — Nice to Have]

**Goal**: Students see their app live on the internet with a real URL

> **Decision point**: If you're running behind, skip this block entirely. The GitHub push from Block 7 is the minimum viable outcome. Tell students: "I'll share a 5-minute guide you can follow at home to deploy."

### 13:10 — What Is Deployment? (2 min)

- "Right now, your app lives on your laptop and GitHub. Deploying means putting it on the internet so anyone with the link can use it."
- "Vercel is a free service that takes your GitHub repo and turns it into a live website — automatically."

### 13:12 — Deploy with Vercel (13 min)

1. Go to vercel.com → Sign up with GitHub
2. Click "Add New Project"
3. Import your GitHub repository (it should appear in the list)
4. Click "Deploy" (usually no settings changes needed for a simple app)
5. Wait 30-60 seconds
6. **The magic moment**: "Click the link. That's YOUR app, live on the internet. Send the URL to someone right now."
7. **Checkpoint**: "Who has a live URL? Share it in the chat / hold up your phone!"

**Trainer note**: Vercel deployment can fail for complex setups. For simple single-page apps (HTML/CSS/JS), it almost always works. If a student's deploy fails, help them after the session — don't debug live.

---

## Block 9: Claude Code Skills & Workflow Tips (15 min)

**Goal**: Arm students with power-user techniques they can use after the workshop

### 13:25 — Essential Claude Code Skills (10 min)

Show and briefly practice each:

1. **Slash commands**: `/help`, `/clear`, `/compact` — "Your quick controls"
2. **Iteration patterns**:
   - "Fix the bug" (paste error message)
   - "Make it look like this" (describe or reference)
   - "Add [feature] but don't change anything else"
3. **Context loading**:
   - "Read my CLAUDE.md and then build..."
   - "Look at [file] and make a similar one for..."
4. **Recovery**:
   - "Undo the last change"
   - "Something broke, here's the error: [paste]. Fix it."

### 13:35 — Your AI Development Workflow (5 min)

- Recap the full workflow they just learned:
  ```
  1. Brainstorm idea (with AI)
  2. Write spec/CLAUDE.md (context)
  3. Prompt with specifics (prompt engineering)
  4. Build & iterate (build sprint)
  5. Save to GitHub (version control)
  6. Deploy to Vercel (optional — live URL)
  ```
- "This is the same workflow for a weekend project or a startup MVP. The only difference is scale."

**[CAN TRIM]**: Cut to 5 min — just show the workflow recap slide and 2 most important slash commands.

---

## Block 10: Show & Tell + Wrap-up (20 min)

**Goal**: Celebrate, reinforce learning, provide next steps

### 13:40 — Show & Tell (12 min)

- "Who wants to show what they built?" (aim for 4-6 volunteers, 2 min each)
- For each presenter:
  - What's the app?
  - What problem does it solve?
  - What was the hardest part?
- **Celebrate every demo** — applause, genuine compliments
- If no one volunteers, pick 2-3 interesting apps you saw while walking around and ask those students

### 13:52 — Key Takeaways (3 min)

- "Today you learned that you don't need to code to build software. You need to *think clearly* and *communicate well* — skills you already have."
- Three things to remember:
  1. **Be specific** — vague prompts get vague results
  2. **Iterate, don't restart** — refine what you have
  3. **Context is king** — the more Claude knows, the better it builds

### 13:55 — Next Steps & Resources (5 min)

- Share the take-home resource pack:
  - Prompt library (template prompts for common app types)
  - CLAUDE.md template
  - "30 App Ideas You Can Build This Weekend" list
  - Link to Claude Code documentation
  - Link to GitHub Desktop guides
- **Continue learning path**: Mention the Full-Day and Two-Day workshops for deeper dives
- "The best way to learn is to build. Pick one more idea this weekend and go through the workflow again."
- **Feedback form**: Share QR code / link for post-workshop survey

### 14:00 — End

---

## Flex Time Management Guide

You have 5 hours of content in a 4-hour window. Here's how to adjust:

### If running AHEAD of schedule (+15 min or more):
- Expand the Build Sprint with a second mini-project
- Add a "pair building" exercise — two students build for each other
- Deeper Git exploration: show git log, branches concept
- Let more students present in Show & Tell

### If running BEHIND by 10 min:
- Trim the Vercel block to a 2-min demo (don't have students do it)
- Shorten Git to "just push with Claude Code" (skip GitHub Desktop walkthrough)
- Reduce Show & Tell to 3 presenters

### If running BEHIND by 20+ min:
- Cut Vercel entirely — share a follow-up guide
- Cut Git to 10 min — just create repo + first commit via Claude Code
- Cut Claude Code Skills to 5 min — just show the workflow recap
- Protect the Build Sprint at all costs — that's the core experience

---

## Common Student Questions & Answers

| Question | Answer |
|----------|--------|
| "Is this free?" | Claude Code requires an Anthropic account (has free tier). GitHub and Vercel have free tiers. |
| "Can I build a real startup with this?" | Yes — many MVPs start exactly this way. The Two-Day workshop covers databases, auth, and payments. |
| "What if I want to change my app later?" | Just open Claude Code, navigate to your project folder, and start talking to Claude again. Your code is saved. |
| "Do I need to learn coding eventually?" | Not necessarily. But understanding basics (HTML = structure, CSS = style, JS = behavior) helps you give better prompts. |
| "Can Claude build a mobile app?" | It can build mobile-responsive web apps that work great on phones. Native iOS/Android apps require more setup. |
| "What about my data/privacy?" | Code you write is yours. Review Anthropic's privacy policy for how prompts are handled. Don't send sensitive company data in prompts without checking your company's AI policy. |

---

## Trainer Tips

- **Energy management**: Your energy sets the room. Be most energetic during Block 1 (opening) and Block 6 (build sprint).
- **The 80/20 of troubleshooting**: 80% of student issues are: (1) WiFi, (2) Claude not responding, (3) "where did my file go?". Prepare for these three.
- **Non-tech comfort**: Avoid jargon. Say "save your work" not "commit to main". Say "put it on the internet" not "deploy to production". Use the technical terms alongside the plain language so they learn both.
- **Pair struggling students**: If someone is stuck, pair them with a neighbor who's ahead. This helps both — the helper reinforces their learning.
- **Don't live-debug**: If a student has a complex error that will take more than 2 minutes, note it down and help them during break or after session. Don't let one issue stall the whole room.
- **Screenshot moments**: Take photos of students' apps (with permission) for social media / testimonials. The "I built this!" moment is powerful marketing.
