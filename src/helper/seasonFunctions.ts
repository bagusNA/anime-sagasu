function currentSeason() {
  const date = new Date;
  const month = date.getMonth();

  // See MediaSeason schema on https://anilist.github.io/ApiV2-GraphQL-Docs/
  // December to February
  if (month === 12 || (month >= 1 && month <= 2)) {
    return 'WINTER';
  }
  // March to May
  else if (month >= 3 && month <= 5) {
    return 'SPRING';
  }
  // June to August
  else if (month >= 6 && month <= 8) {
    return 'SUMMER';
  }
  // September to November
  else if (month >= 9 && month <= 11) {
    return 'FALL';
  }
  else {
    return null;
  }
}

function currentYear(): number {
  const date = new Date;
  return date.getFullYear();
}

export { currentSeason, currentYear };