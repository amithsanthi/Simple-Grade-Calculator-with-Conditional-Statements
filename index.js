//input mark
let mala = parseInt(prompt("Enter mark for MALAYALAM"));
let eng = parseInt(prompt("Enter mark for ENGLISH"));
let mat = parseInt(prompt("Enter mark for MATHS"));
let phy = parseInt(prompt("Enter mark for PHYSICS"));
let che = parseInt(prompt("Enter mark for CHEMISTRY"));

//add marks

let total = mala + eng + mat + phy + che;
console.log(`Total Mark = ${total}`);
alert(`Total mark = ${total}`);
//average mark
let avg = total / 5;
console.log(`Average Mark = ${avg}`);
alert(`Average Mark = ${avg}`);
// grade calculation
if (avg >= 90) {
  console.log("Passed with A+ Grade");
  alert("Passed with A+ Grade");
} else if (avg >= 80) {
  console.log("Passed with A Grade");
  alert("Passed with A Grade");
} else if (avg >= 70) {
  console.log("Passed with B Grade");
  alert("Passed with B Grade");
} else if (avg >= 60) {
  console.log("Passed with C Grade");
  alert("Passed with C Grade");
} else if (avg >= 50) {
  console.log("Passed with D Grade");
  alert("Passed with D Grade");
} else if (avg < 50) {
  console.log("Failed with E Grade");
  alert("Failed with E Grade");
}
// A+ for average ≥ 90
// A for average between 80 and 89
// B for average between 70 and 79
// C for average between 60 and 69
// D for average between 50 and 59
// E for average < 50
