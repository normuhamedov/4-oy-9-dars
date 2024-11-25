// 16-masala
// let products = [
//     { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
//     { id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10 },
//     { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
//     { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16 },
//   ];
// let removeId = products.filter(product => product.id !== 4);
// console.log(removeId);
  
// 17-masala

// let people = [
//     { name: "John", age: 13 },
//     { name: "Mark", age: 56 },
//     { name: "Rachel", age: 45 },
//     { name: "Nate", age: 67 },
//     { name: "Jeniffer", age: 65 }
//   ];
// let sortedPeople = people.sort((a, b) => a.age - b.age);
// let ageDifference = sortedPeople[sortedPeople.length - 1].age - sortedPeople[0].age;
// console.log(ageDifference);
  
// 18-masala

// function countCase(str) {
// let result = { uppercase: 0, lowercase: 0 };
//     for (let char of str) {
//         if (char >= 'A' && char <= 'Z') {
//             result.uppercase++;
//       }else if(char >= 'a' && char <= 'z') {
//             result.lowercase++;
//       }
//     }
//     return result;
// }
  
// console.log(countCase("Hello World!"))
  
// 19-masala

// function evenOddIndexSums(arr) {
//     return arr.reduce(
//       (acc, num, index) => {
//         if (index % 2 === 0) {
//             acc.evenIndexSum += num
//         } else {
//             acc.oddIndexSum += num
//         }
//         return acc;
//       },
//       { evenIndexSum: 0, oddIndexSum: 0 }
//     );
//   }
  
// console.log(evenOddIndexSums([1, 2, 3, 4, 5, 6]));
  
// 20-masala



// function rotateMatrix(matrix) {
//     let reversedRows = matrix.reverse();
//     return reversedRows[0].map((_, index) => reversedRows.map(row => row[index]));
// }
// console.log(rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],]));
  

// 21-masala

// function removeSpaces(str) {
//     return str.split(' ').join('');
// }
// console.log(removeSpaces("Hello World! How are you?"))

// 22-masala

// function areAnagrams(str1, str2) {
//     str1 = str1.split(' ').join('').toLowerCase();
//     str2 = str2.split(' ').join('').toLowerCase();
//     if (str1.length !== str2.length) return false;
//     return str1.split('').sort().join('') === str2.split('').sort().join('');
// }
// console.log(areAnagrams("Listen", "silent")); 
// console.log(areAnagrams("hello", "world"));
  

// 23-masala

// function mostFrequentElement(arr) {
//     return arr.sort((a, b) =>
//         arr.filter(v => v === a).length - arr.filter(v => v === b).length
//     ).pop();
// }
// console.log(mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 1, 5, 1]));
  

// 24-masala

// function sumOfDigits(str) {
//     let sum = 0;
//     for (let char of str) {
//         if (!isNaN(char) && char !== ' ') {
//             sum += Number(char);
//         }
//     }
//     return sum;
// }
// console.log(sumOfDigits("abc123def45"));
  

// 25-masala

function letterFrequency(str) {
    let frequency = {};
    for (let char of str) {
        if (char !== ' ') {
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }
    return frequency;
}
  
  console.log(letterFrequency("hello world"));
  // {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
  