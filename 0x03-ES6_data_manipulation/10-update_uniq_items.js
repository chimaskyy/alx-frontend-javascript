export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}

// map.foreach((value, key, map_) => {
//     if (value === 1){
//         map_.set(key, 100);
//     }
// })
