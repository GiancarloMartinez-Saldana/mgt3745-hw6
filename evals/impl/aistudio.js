// Copied unchanged from AI Studio's app.js (builds/aistudio.zip, app.js);
// only the `export` keyword was added. See docs/DDR-002.md.
export function canAddMoment(moment) {
  if (!moment) {
    return false;
  }

  const hasPhoto = typeof moment.photo === 'string' && moment.photo.trim().length > 0;
  const hasNote = typeof moment.note === 'string' && moment.note.trim().length > 0;
  const hasPlace = typeof moment.place === 'string' && moment.place.trim().length > 0;

  return hasPhoto || hasNote || hasPlace;
}
