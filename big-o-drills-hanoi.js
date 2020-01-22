
// const input = [
//   [3, 2, 1],
//   [0, 0, 0],
//   [0, 0, 0]
// ];

// function hanoi(height, rodA, rodB, rodC) {
//   if (rodC[rodC.length - 1] === 1) {
//     return;
//   }


// }


var hanoi = function (disc, origin, aux, destination) {
  if (disc > 0) {
    hanoi(disc - 1, origin, destination, aux);
    console.log("Moving disc " + disc + " from " + origin + " to " + destination);
    hanoi(disc - 1, aux, origin, destination);
  }
};
hanoi(4, "Rod A", "Rod B", "Rod C");


// With 5 discs, after 7 recursive calls, 4 and 5 are on Rod A and 1, 2, 3 are on 
// Rod C

// Moves needed to complete puzzle with:
// 3 discs: 7
// 4 discs: 15
// 5 discs: 31

// Runtime of algorithm: O(n^2)