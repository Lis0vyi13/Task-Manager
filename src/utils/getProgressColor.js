function getProgressColor(percentage) {
  let red,
    green,
    blue = 0;

  if (percentage < 50) {
    red = 255;
    green = Math.round(255 * (percentage / 50));
  } else {
    red = Math.round(255 * (1 - (percentage - 50) / 50));
    green = 255;
  }

  return {
    background: `rgb(${red}, ${green}, ${blue})`,
    isLight: (red + green + blue) / 3 > 128,
  };
}

export default getProgressColor;
