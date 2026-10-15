# PROMPT.md

The exact text both builders received, unchanged between them. Paste it below.

---

Build a single-page web app that implements this feature exactly as specified. Use only plain HTML, CSS, and JavaScript in three files (index.html, styles.css, app.js); keep data in memory for this build, with no backend, no login, and no external services. Put the rule that decides whether a moment can be added in its own named function.

Feature F3: Add a moment to a trip

F3-1. WHEN a member submits a moment with at least one of a photo, note, or place, the app shall add it to the trip, labeled with the member's name.

F3-2. IF a review fails to save, THEN the app shall tell the member and keep the photo, note, and location on screen so they can try again.

F3-3. IF a member submits a moment with no photo, note, or place, THEN the app shall refuse and add nothing.

Out of scope: editing photos, direct messaging, connecting to other social media, trip cover photos and descriptions.

Users (from USERS.md):

- Profile 1. Shares trip moments by texting friends directly, many times a day while traveling, instead of posting to social media. Sends photos, short stories, and places he loved, in the moment. Has little patience for long reviews or blogging. Job: "When something funny or worth remembering happens on a trip, I want to share it with my friends right away without the pressure of a public post, so I can bring them along on what I am doing."
- Profile 2. Posts trip highlights often and takes deliberate, polished photos. Wants to share her trip in more depth than a short caption allows. Job: "When I am exploring a new place, I want to find the spots worth going to and document them, so I can share a trip I am proud of."

Style (from STYLE.md). Every color, font, minimum font size, minimum target size, and radius in styles.css comes from a CSS custom property with the token's name:

```
color-primary: "#123552"
color-text: "#172B40"
color-background: "#F7F9FB"
color-surface: "#FFFFFF"
color-focus: "#B16D00"
color-error: "#922020"
color-border: "#526578"
color-divider: "#B8C5D0"
font-body: "Arial, Helvetica, sans-serif"
font-size-min: 16px
target-min: 44px
radius: 0.3rem
```

- color-error is for error messages only.
- color-focus is used only for keyboard focus outlines.
- No autoplaying media or auto-advancing countdowns.
- Errors appear inline under the form, never in a modal or alert.
- Every button is at least 44px tall.

---

## Retries

None.
