//Auto generate Id

export function* generateID() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
