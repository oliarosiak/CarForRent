export function getLocStor(key) {
  return JSON.parse(localStorage.getItem(key)) ?? [];
}

export function setLocStor(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

