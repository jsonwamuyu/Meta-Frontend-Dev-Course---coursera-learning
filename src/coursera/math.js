function areaCircle(r) {
  let results = Math.PI * r * r;
  let resultsRound = {
    roundUP: Math.ceil(results),
    roundDown: Math.floor(results),
  };
  return resultsRound;
}
console.log(areaCircle(7));

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
