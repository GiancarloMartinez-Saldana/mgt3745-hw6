# COMPARISON.md

## Row-by-Row Evidence

Pass, Partial, or Fail, each with one line of evidence (a screenshot, a file and line, or a test result).

| EARS row | bolt.new | Evidence | AI Studio | Evidence |
|---|---|---|---|---|
| F3-1 | Pass | `npm test` "bolt: F3-1 accepts..." passes; bolt app.js:27-33 adds a moment with any one of photo, note, or place and labels it with the name. It also requires a typed name, which the row does not ask for. | Pass | `npm test` "aistudio: F3-1 accepts..." passes; aistudio app.js:38-49; each card reads "Added by" plus the member (docs/img/aistudio.png). |
| F3-2 | Fail | bolt app.js:39-47 `saveMoment` only calls `moments.push`, which cannot throw, so the error message at app.js:211 can never appear. The row is claimed but cannot be triggered. | Pass | aistudio app.js:63-75 throws when the "Simulate save failure" checkbox (index.html:112) is ticked; the catch at app.js:455-459 shows an inline error and skips `resetFormInputs()`, so photo, note, and place stay on screen. |
| F3-3 | Pass | `npm test` "bolt: F3-3 refuses..." passes; app.js:178-194 shows an inline error and adds nothing. | Pass | `npm test` "aistudio: F3-3 refuses..." passes; app.js:436-439 shows an inline error and returns before saving. |

## Scope Creep

| | bolt.new | AI Studio |
|---|---|---|
| Files created or changed that the feature did not need | 5 (package.json, package-lock.json, .gitignore, public/vite.svg, .bolt/config.json) | 7 (package.json, vite.config.ts, tsconfig.json, metadata.json, .env.example, .gitignore, README.md) |
| Additions the spec excludes (list them) | A required "Your name" field (the spec assumes a signed-in member); a Vite dev server the prompt did not ask for | Unused React, Tailwind, Express, Motion, and `@google/genai` dependencies; `metadata.json` declares a server-side Gemini API capability and `.env.example` asks for a `GEMINI_API_KEY`, although the prompt said no external services; an invented trip ("Highlands Road Trip 2026") and members (Liam, Maya) with two seeded moments; member filter buttons (closer to F5 than F3); three sample SVG photos; a success message; a "Simulate save failure" checkbox |

## Judgment Eval

Agreement rate with the second grader: 10 of 10 items, 100%. Details in [JUDGMENT.md](JUDGMENT.md).

## Findings

**1. bolt.new claimed F3-2 without any way to fail (top error-log row).** Its `saveMoment` wraps `moments.push` in a promise, so the failure branch is dead code. The comment says the row is handled and the screen never proves it. With "keep data in memory" in the prompt, a save failure has no natural cause, and bolt filled the gap with code that cannot run, while AI Studio invented a test switch. A code eval on `canAddMoment` cannot see this; only reading the code or trying to make the error appear can.

**2. AI Studio wrapped a three-file app in an unused framework project.** The page itself is plain HTML, CSS, and JavaScript, as asked, but the zip carries a React, Tailwind, Express, and Gemini project around it and declares a Gemini API capability with a key placeholder. That is a trust-boundary claim the prompt excluded, and it repeats the HW5 pattern from SKILLS.md.

**3. AI Studio renders the moment list with `innerHTML`.** It escapes the text first (app.js:251 and `escapeHtml`), so it is not an injection bug today, but STANDARDS.md says never `innerHTML` with user data, and the escaping is one forgotten call away from one. It also exposes `canAddMoment`, `saveMoment`, and the moment list as globals on `window` (app.js:51, 77-78), which STANDARDS.md forbids.

**4. bolt.new's CSS overrides `hidden`.** `.photo-input__preview { display: block }` (styles.css:170-171) and `.form-error { display: flex }` (styles.css:200-204) beat the `hidden` attribute, so an empty broken "Photo preview" box and an empty error box always show (docs/img/bolt.png). It also uses a raw `rgba(146, 32, 32, 0.08)` instead of a STYLE.md token (styles.css:207).

**5. Both builders treat a note of only spaces as no note.** Both trim before checking (`npm test` "spec gap" tests pass for both), which answers the Open prediction the same way for each builder.

## Spec Gaps

Every place where both builders guessed, or guessed differently.

| Gap | What each builder assumed | EARS change or exclusion that closes it |
|---|---|---|
| What makes a save fail when data stays in memory | bolt: nothing can fail, so the error path is dead code. AI Studio: a visible "Simulate save failure" checkbox. | F3-2 is only testable with storage. Add to the prompt or spec: "IF the Worker returns an error when a moment is saved, THEN..." and test it against the real Worker in Phase 2. |
| F3-2 says "a review", not "a moment" | Both read it as "a moment". | Revise F3-2: "IF a moment fails to save, THEN the app shall tell the member and keep the photo, note, and place on screen so they can try again." (also "place", not "location") |
| Who the member is with no login | bolt: a required free-text name field. AI Studio: invented members Liam and Maya plus a custom name. | Add to F3-1: "...labeled with the signed-in member's name (F1)." and exclude a name field from F3. |
| Whether a note of only spaces counts | Both: it does not count (trimmed). | Revise F3-3: "IF a member submits a moment with no photo and no note or place other than spaces, THEN..." |
| Where new moments appear in the list | bolt: oldest first. AI Studio: newest first (`unshift`). | Already settled by F4-1 ("in added order"); state oldest first explicitly. |

## Recommendation

### Criteria and Weights (commit before scoring)

| Criterion | Weight (1 to 5) | Why |
|---|---|---|
| Fits the ADR-001 stack (plain HTML, CSS, and JS that can move onto our Worker and D1) | 5 | ADR-001 commits the team to a static page plus a Worker; output that needs a framework or another vendor has to be rewritten before it is useful. |
| Stays within the spec (no invented features, content, or services) | 4 | Every extra the builder adds is code the team must review, test, or delete, and invented services cross a trust boundary nobody approved. |
| Handles failure honestly (F3-2 can actually be shown) | 4 | Our RAT is about capture in the moment; losing a moment on a failed save is the failure members would notice most. |
| Code meets STANDARDS.md (textContent, no globals, tokens only) | 3 | These are review blockers in the team repository, but each one is a small, local fix. |

### Scores (commit after the weights)

| Criterion | Weight | bolt.new | AI Studio |
|---|---|---|---|
| Fits the ADR-001 stack | 5 | 4: three plain files in an ES module; only a small Vite wrapper to drop | 2: the page is plain, but it sits inside a React, Express, and Gemini project and leaks globals |
| Stays within the spec | 4 | 4: one addition (a required name field) | 2: invented trip, members, seeded moments, filters, and sample photos |
| Handles failure honestly (F3-2) | 4 | 1: the error path can never run | 4: the failure can be shown and inputs are kept, though only through a test checkbox in the UI |
| Code meets STANDARDS.md | 3 | 4: `textContent` throughout, no globals; one raw color | 2: `innerHTML`, `window` globals, an inline style |
| **Weighted total (max 80)** | | **52** | **40** |

### Decision

Use **bolt.new** for F3 in Phase 2. Its output is already the shape ADR-001 asks for: `index.html`, `styles.css`, and an `app.js` module that renders with `textContent`, so moving it onto our Worker means replacing `saveMoment` with a `fetch` to the Worker rather than unpicking a framework. AI Studio did the one thing bolt did not (a failure you can see), but it did so inside a React, Express, and Gemini scaffold the team would have to delete, around invented members and content that would leak into review.

**What gets harder:** bolt left F3-2 as dead code, so the team must write the real failure path itself once `saveMoment` calls the Worker, and test it against a Worker that returns an error. We also have to fix its CSS so `hidden` works, and drop the required name field once F1 accounts exist.

## Handoff to the Team

Pull request or issue proposing a FEATURES.md change: <URL>
