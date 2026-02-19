function addTwoNumbers() {
  let num = 10;
  let num1 = 12;
  let results = num + num1;
  console.log(results);
}

addTwoNumbers();

function addNumbers(num1, num2) {
  let results = num1 + num2;
  console.log(results);
}

addNumbers(10, 12);

function listArrayItems(arr) {
  for (let i = 0; i <= arr.length; i++) {
    console.log(i, arr[i]);
  }
}

listArrayItems([23, 67, 34]);
listArrayItems(["pink", "blue", "Red"]);

function letterFinder(word, match) {
  for (let i = 0; i <= word.length; i++) {
    if (word[i] === match) {
      console.log("Match found at", 0);
      break;
    } else {
      console.log("Match not found");
    }
  }
}

letterFinder("hello", "h");
letterFinder("hello", "z");
