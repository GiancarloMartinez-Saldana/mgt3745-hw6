# JUDGMENT.md

## What Is Being Judged

F3-2 (a failed save tells the member and keeps the photo, note, and place on screen) and three STYLE.md rules: errors appear inline under the form and never in a modal; hidden things stay hidden; every button is at least 44px tall. The code eval only calls `canAddMoment`, which cannot show whether a message appears, where it appears, or what stays on screen after a failure. A person has to open each build and look.

## Procedure

1. Unzip `builds/bolt.zip`. In the `project` folder run `npm install` and then `npm run dev`, and open the address it prints.
2. Unzip `builds/aistudio.zip` into a different folder and open `index.html` directly in a browser (it needs no server).
3. For each build, before typing anything, look at the form and answer J7 or J8.
4. For each build, press the add button with every field empty and see where the error appears (J5, J6).
5. For each build, try to make a save fail: fill in a note and a place, choose a photo, then use anything on the page that causes a failure and press the add button (J1 to J4). If nothing on the page can cause a failure, answer No.
6. For each build, open the browser's developer tools, inspect each button, and read its height (J9, J10).
7. Answer every question Yes or No, from what you saw only.

## Evidence Given to the Second Grader

`builds/bolt.zip`, `builds/aistudio.zip`, `docs/img/bolt.png`, `docs/img/aistudio.png`, the F3 rows and STYLE.md rules in `prompts/PROMPT.md`, and this file's Procedure and Results questions. No summary of my findings.

**Second grader:** ChatGPT (OpenAI), on 2026-10-21, given the four files above and the exact prompt below. Claude helped integrate and evaluate the builds, so it was not a grader.

Prompt given to the second grader: the ten Results questions, the F3-2 row and the three STYLE.md rules above, and the instruction to answer Y or N from the attached files only, with one sentence of evidence (a file and line, or what the screenshot shows) per answer.

## Results

| Item | Question (Yes / No) | You | Second grader |
|---|---|---|---|
| J1 | bolt.new: can you make the app show a message that a moment failed to save? | N | N |
| J2 | AI Studio: can you make the app show a message that a moment failed to save? | Y | Y |
| J3 | bolt.new: after a failed save, are the photo, note, and place all still on screen? | N | N |
| J4 | AI Studio: after a failed save, are the photo, note, and place all still on screen? | Y | Y |
| J5 | bolt.new: does the empty-form error appear inline under the form, with no pop-up or modal? | Y | Y |
| J6 | AI Studio: does the empty-form error appear inline under the form, with no pop-up or modal? | Y | Y |
| J7 | bolt.new: before you type anything, is the form free of empty or broken boxes? | N | N |
| J8 | AI Studio: before you type anything, is the form free of empty or broken boxes? | Y | Y |
| J9 | bolt.new: is every button at least 44px tall? | Y | Y |
| J10 | AI Studio: is every button at least 44px tall? | Y | Y |

**Agreement rate:** 10 of 10, 100%

## Disagreements

None. Two notes on why agreement was complete, and what that hides:

- The second grader read the code and screenshots rather than running the apps, and cited the same lines this repository's COMPARISON.md cites (for example bolt app.js:39-47 for J1 and J3). Questions that can be settled from the code tend to agree; a grader who only used the running apps might have answered J9 and J10 differently, since those were answered from CSS `min-height` rules, not measured in the browser.
- J3 is the weakest question. For bolt.new a save can never fail, so "are the inputs still on screen after a failed save?" has no observable case. Both graders answered No because the failure cannot happen, while the catch block would in fact keep the inputs. A better question would be "Can you trigger a failed save and then see your inputs still on screen?"
