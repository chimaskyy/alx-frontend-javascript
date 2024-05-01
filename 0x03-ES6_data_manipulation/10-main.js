import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map); // Initial map

const updatedMap = updateUniqueItems(map);
console.log(updatedMap); // Updated map
