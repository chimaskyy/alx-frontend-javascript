/* eslint-disable */
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  const promises = [signUpPromise, photoPromise];

  // Return a promise that resolves when all promises in the promises array have settled
  return Promise.allSettled(promises).then((result) => {
    // store the status and value/reason of each settled promise
    const values = [];
    result.forEach((val) => {
      if (val.status === 'fulfilled') {
        values.push({ status: val.status, value: val.value });
      } else {
        values.push({ status: val.status, value: `${val.reason}` });
      }
    });
    return values;
  });
}
