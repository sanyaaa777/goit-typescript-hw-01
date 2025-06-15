function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}
const mergedObj = merge({ name: "Oleksandr" }, { age: 29 });