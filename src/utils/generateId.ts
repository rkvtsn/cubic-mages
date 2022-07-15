export const generateId = (): number => {
  return Math.exp(-1 - Math.random() / (2 * Math.random())) + Math.random();
};

export default generateId;
