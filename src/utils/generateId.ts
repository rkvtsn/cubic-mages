export const generateId = (): number => {
  return Math.random() + new Date().getTime();
};

export default generateId;
