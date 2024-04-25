export default function getResponseFromAPI() {
  const promise = new Promise((resolve) => {
    resolve('promised');
  });
  return promise;
}
