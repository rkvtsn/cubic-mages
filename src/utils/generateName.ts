import getRandomInt from "./getRandomInt";

export type DictNames = Record<"first" | "last", string[]>;

export const generateName = (dict: DictNames): string => {
  return `
    ${dict.first[getRandomInt(0, dict.first.length)]} 
    ${dict.last[getRandomInt(0, dict.last.length)]}
  `;
};
