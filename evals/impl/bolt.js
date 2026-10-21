// Copied unchanged from bolt.new's app.js (builds/bolt.zip, project/app.js);
// only the `export` keyword was added. See docs/DDR-001.md.
export function canAddMoment({ photo, note, place, memberName }) {
  const hasPhoto = Boolean(photo);
  const hasNote = typeof note === "string" && note.trim().length > 0;
  const hasPlace = typeof place === "string" && place.trim().length > 0;
  const hasName = typeof memberName === "string" && memberName.trim().length > 0;

  return hasName && (hasPhoto || hasNote || hasPlace);
}
