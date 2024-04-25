export default function loadBalancer(chinaDownload, USDownload) {
  const promise1 = chinaDownload;
  const promise2 = USDownload;

  const promise = [promise1, promise2];

  return Promise.race(promise).then((value) => value);
}
