// Local and global scope

let globalVar = "Accessible globally";

function localScoped() {
  var localScopedVar = "Can not be accessed outside";
  let localScope = "Only accessible inside this function";
  console.log(globalVar);
  console.log(localScope);
  console.log(localScopedVar);
}

localScoped();

// console.log(localScopedVar);
//console.log(localScope); // ReferenceError
