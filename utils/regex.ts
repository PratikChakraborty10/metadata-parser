export const validUrl = (value: string) => {
  const urlRegex = /^(http|https):\/\/\S+$/;
  return urlRegex.test(value);
};
