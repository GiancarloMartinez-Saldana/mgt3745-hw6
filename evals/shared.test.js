// One test, run against both builds, so they face an identical check.
// F3-3: IF a member submits a moment with no photo, note, or place,
// THEN the app shall refuse and add nothing.
// Each impl exports canAddMoment({ photo, note, place, memberName }) -> boolean, adapted
// from the build's own validation function (changes recorded in its DDR).
// memberName is always filled in: F3-1 assumes a signed-in member, so the
// name is not what these rows test.
import { test } from "node:test";
import assert from "node:assert/strict";
import * as bolt from "./impl/bolt.js";
import * as aistudio from "./impl/aistudio.js";

const member = "Gian";

const builds = { bolt, aistudio };

for (const [name, impl] of Object.entries(builds)) {
  test(`${name}: F3-3 refuses a moment with no photo, note, or place`, () => {
    assert.equal(impl.canAddMoment({ photo: null, note: "", place: "", memberName: member }), false);
  });

  test(`${name}: F3-1 accepts a moment with any one of photo, note, or place`, () => {
    assert.equal(impl.canAddMoment({ photo: "beach.jpg", note: "", place: "", memberName: member }), true);
    assert.equal(impl.canAddMoment({ photo: null, note: "Best tacos ever", place: "", memberName: member }), true);
    assert.equal(impl.canAddMoment({ photo: null, note: "", place: "Tulum", memberName: member }), true);
  });
}
