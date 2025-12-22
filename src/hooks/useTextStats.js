export const useTextStats = (text = "") => {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const readTime = (words * 0.008).toFixed(2);

  return { words, characters, readTime };
};
