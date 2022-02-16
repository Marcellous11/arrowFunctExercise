// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

//   function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

//   refactor functions to es2015
double = (arr) => arr.map((n) => n * 2);

squaredAndFindEvens = (numbers) => {
  let squares = numbers.map((n) => n ** 2);
  let evens = squares.filter((square) => square % 2 === 0);
  return evens;
};
