/* eslint-disable */
export default function hasValuesFromArray(set_, array_) {
  let bool = true;
  array_.map((val) => {
    if (!set_.has(val)) {
      bool = false;
    }
  });
  return bool;
}
