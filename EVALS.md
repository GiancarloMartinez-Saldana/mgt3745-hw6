# EVALS.md

## Prediction Stake

Committed before either builder was opened. Do not edit these predictions after the commit; resolve them beneath.

### Tight (a count)

bolt.new will satisfy 2 of my 3 EARS rows, and AI Studio will satisfy 2 of 3. For both builders, the row they miss will be F3-2, the save-failure row. The prompt keeps data in memory, so a save can never fail, and I expect each builder to either skip F3-2 or claim it is handled without any way to trigger it.

**Resolution (2026-10-21):** Half right. bolt.new satisfied 2 of 3 and missed F3-2 as predicted: its save can never fail, so the error path is dead code (bolt app.js:39-47). AI Studio satisfied 3 of 3, not 2: it added a "Simulate save failure" checkbox that makes F3-2 testable (aistudio app.js:63-75).

### Loose (a direction with a reason)

AI Studio will create more files the feature did not need than bolt.new will. In HW5, AI Studio wrapped a three-file request in an unused React, Tailwind, and Gemini project, and I expect it to repeat that pattern even though the prompt asks for only index.html, styles.css, and app.js.

**Resolution (2026-10-21):** Right. AI Studio created 7 files the feature did not need, including a React, Tailwind, Express, and Gemini scaffold with a `GEMINI_API_KEY` placeholder; bolt.new created 5, mostly a Vite wrapper (COMPARISON.md, Scope Creep).

### Open (a question the builds can answer)

When a member types only spaces in the note and adds no photo or place, does either builder treat that as a valid moment? F3-3 says a moment needs a note, a photo, or a place, but it never says whether a blank-looking note counts, so this shows whether the builders guess or follow the literal text.

**Resolution (2026-10-21):** Neither builder treats a note of only spaces as a note. Both trim before checking, and the shared eval's spec-gap test passes for both (`npm test`).

## Error Log

Most frequent first. Your top row is the first finding in COMPARISON.md.

| Error | Builder | Frequency | EARS row | Evidence |
|---|---|---|---|---|
| Claimed a row the build cannot exercise (save failure path is dead code) | bolt | 1 | F3-2 | bolt app.js:39-47 and 211 |
| Files and dependencies the prompt excluded (framework project, Gemini key placeholder) | AI Studio | 7 files | n/a (scope) | aistudio package.json, metadata.json, .env.example |
| Invented content the spec does not have (trip name, members, seeded moments, filters, sample photos) | AI Studio | 5 | F3-1 | aistudio index.html:19-21, 65, 140; app.js:465 |
| Hidden elements always visible (CSS overrides `hidden`) | bolt | 2 | F3-2, F3-3 | bolt styles.css:170-171, 200-204; docs/img/bolt.png |
| `innerHTML` and `window` globals, against STANDARDS.md | AI Studio | 5 | F3-1 | aistudio app.js:51, 77-78, 242, 251 |
| Added a required name field the spec does not ask for | bolt | 1 | F3-1 | bolt app.js:33 (`hasName &&`) |
| Raw color or inline style instead of a STYLE.md token | both | 1 each | n/a (STYLE) | bolt styles.css:207; aistudio app.js:245 |
