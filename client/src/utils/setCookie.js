export function setCookie(name, value, days = 1, path = "/") {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;

  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
    value,
  )}; ${expires}; path=${path}`;

  // cookieString += '; secure'; // Разкомментируйте, если используете HTTPS
  // cookieString += '; samesite=strict'; // Разкомментируйте, если требуется

  document.cookie = cookieString;
}
