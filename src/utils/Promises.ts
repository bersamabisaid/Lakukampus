export function repeatedPromises <T = unknown>(cb: () => Promise<T>) {
  return (count = 10) => Promise.all(
    Array.from(Array(count)).map(cb),
  );
}
