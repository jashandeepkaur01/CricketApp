export const mockRequest = (succeed = true, response, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      succeed ? resolve(response) : reject(response);
    }, timeout);
  });
};
