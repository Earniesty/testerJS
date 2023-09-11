function rainDrops(nums) {
  let results = "";
  if (nums % 3 === 0) results += "Pling" ;
  if (nums % 5 === 0) results +=  "Plang";
  if (nums % 7 === 0) results += "Plong";
  return results;
}

console.log(rainDrops(105));
