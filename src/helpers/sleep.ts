export const sleep = (milliSeconds: number) => {
  return new Promise((r) => {
    setTimeout(() => {
      r(true);
    }, milliSeconds);
  });
};
