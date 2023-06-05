export function getDays() {
  let today = new Date();
  let christmasYear = today.getFullYear();
  let christmas = new Date(christmasYear, 11, 25); // Months are zero-based in JavaScript, so 11 represents December
  // Adjust the Christmas year if we're in late December
  if (today > christmas) {
    christmasYear++;
    christmas = new Date(christmasYear, 11, 25);
  }
  let timeDiff = christmas.getTime() - today.getTime();
  let days = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return days;
}
