//! best solution
export default function sortByProp(obj, prop) {
  const keys = Object.keys(obj)
    .filter((key) => !prop.includes(key))
    .sort((a, b) => (a > b ? 1 : -1));

  return [...prop, ...keys]
    .map((key) => {
      if (!obj.hasOwnProperty(key)) {
        console.log(`Обратите внимание! Cвойство '${key}' с сортировочного массива отсутствует`);
      }
      if (obj[key] !== undefined) {
        return { key, value: obj[key] };
      }
    })
    .filter((el) => el !== undefined);
}

//* first solution with for..in

// function sortByProp(obj, arr) {
//   const arrProp = [];
//   const sortProp = [];

//   arr.forEach((prop) => {
//     for (const key in obj) {
//       if (prop === key) {
//         arrProp.push({ key, value: obj[key] });
//       }
//     }
//   });

//   for (const key in obj) {
//     if (!arr.includes(key)) {
//       sortProp.push({ key, value: obj[key] });
//     }
//   }

//   sortProp.sort((a, b) => (a.key > b.key ? 1 : -1));

//   return [...arrProp, ...sortProp];
// }
