# HW6: Two Builders, One Specification

> Replace every line in angle brackets. A README that still carries template placeholders loses points.

## Feature

**Team repository:** https://github.com/mehtaaashi05/mgt3745-team-Alpha-
**Spec provenance:** copied from commit `5731bf0d1855f2e91fd7387c55fdc8e5633af116` on 2026-10-15. The team's Phase 2 STYLE.md and SKILLS.md are not merged yet, so `context/STYLE.md` and `context/SKILLS.md` are my HW5 versions.

**Feature:** F3, Add a moment to a trip (Must-be)

F3-1. WHEN a member submits a moment with at least one of a photo, note, or place, the app shall add it to the trip, labeled with the member's name. (probe)

F3-2. IF a review fails to save, THEN the app shall tell the member and keep the photo, note, and location on screen so they can try again.

F3-3. IF a member submits a moment with no photo, note, or place, THEN the app shall refuse and add nothing. (probe)

## See It Work

| bolt.new | AI Studio |
|---|---|
| ![bolt build](docs/img/bolt.png) | ![AI Studio build](docs/img/aistudio.png) |

<Replace the two images above with your own screenshots, or one side-by-side GIF.>

## Status

<One or two sentences: how many EARS rows each builder satisfied, and your recommendation in one line.>

## How to Run the Evals

```bash
npm test
```

<Say what the test checks and what output to expect.>

## Links

- [EVALS.md](EVALS.md): Prediction Stake and error log
- [COMPARISON.md](COMPARISON.md): evidence, spec gaps, and recommendation
- [JUDGMENT.md](JUDGMENT.md): judgment eval and agreement rate
- [prompts/PROMPT.md](prompts/PROMPT.md): the exact input both builders received
- [builds/](builds/): bolt.zip and aistudio.zip
- [docs/DDR-001.md](docs/DDR-001.md) (bolt.new), [docs/DDR-002.md](docs/DDR-002.md) (AI Studio)
- Team pull request or issue: <URL>
- Deployed Worker (only if you completed the proxy step): <URL>

## Hours

<Total hours spent, with a one-line breakdown.>

## AI Use

<Every tool that wrote more than a line or two, each with a link to its DDR.>
