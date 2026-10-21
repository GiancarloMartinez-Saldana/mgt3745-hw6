# EVALS.md

## Prediction Stake

Committed before either builder was opened. Do not edit these predictions after the commit; resolve them beneath.

### Tight (a count)

bolt.new will satisfy 2 of my 3 EARS rows, and AI Studio will satisfy 2 of 3. For both builders, the row they miss will be F3-2, the save-failure row. The prompt keeps data in memory, so a save can never fail, and I expect each builder to either skip F3-2 or claim it is handled without any way to trigger it.

**Resolution (YYYY-MM-DD):**

### Loose (a direction with a reason)

AI Studio will create more files the feature did not need than bolt.new will. In HW5, AI Studio wrapped a three-file request in an unused React, Tailwind, and Gemini project, and I expect it to repeat that pattern even though the prompt asks for only index.html, styles.css, and app.js.

**Resolution (YYYY-MM-DD):**

### Open (a question the builds can answer)

When a member types only spaces in the note and adds no photo or place, does either builder treat that as a valid moment? F3-3 says a moment needs a note, a photo, or a place, but it never says whether a blank-looking note counts, so this shows whether the builders guess or follow the literal text.

**Resolution (YYYY-MM-DD):**

## Error Log

Most frequent first. Your top row is the first finding in COMPARISON.md.

| Error | Builder | Frequency | EARS row | Evidence |
|---|---|---|---|---|
| <what went wrong> | <bolt / AI Studio / both> | <count> | <ID> | <file and line, screenshot, or test> |
