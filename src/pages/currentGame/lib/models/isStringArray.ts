export const isStringArray = (obj: any): obj is string[] => {
  return typeof obj[0] === 'string';
};
