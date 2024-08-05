function isColorLight(color) {
  const r = parseInt(color?.substr(1, 2), 16);
  const g = parseInt(color?.substr(3, 2), 16);
  const b = parseInt(color?.substr(5, 2), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 186;
}

export default isColorLight;
