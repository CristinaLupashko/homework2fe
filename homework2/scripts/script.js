// Дан массив numbers
// const numbers = [55, 43, 1, -7, 88, 13, -83, 15]
// 1. С помощью цикла for выведите все числа из массива numbers в консоль

// const numbers = [55, 43, 1, -7, 88, 13, -83, 15];
// const getNumbers = numbers => {
//     for(let i = 0; i < numbers; i++){
//         console.log(numbers[i])
//     }
// }
// getNumbers();
// console.log(numbers);

// 2. Сформировать новый массив, в который попадут только отрицательные числа из массива numbers

// const numbers = [55, 43, 1, -7, 88, 13, -83, 15];
// const new_numbers = [];

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] < 0 ){
//         new_numbers.push(numbers[i])
//     }
// }
// console.log(new_numbers);

// 3. Сформировать новый массив, в который попадут только четные числа из массива numbers

// const numbers = [55, 43, 1, -7, 88, 13, -83, 15];
// const new_numbers = [];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] %2 == 0){
//         new_numbers.push(numbers[i])
//     }
// }
// console.log(new_numbers);

// 4. Сформировать новый массив, в который попадут только положительные
//  числа из массива numbers, заканчивающиеся на цифру 4

// const numbers = [55, 43, 1, -7, 88, 13, -83, 15, 4, 44, 14, 144];
// const new_numbers = [];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 0 && numbers[i]  % 10 == 4){
//         new_numbers.push(numbers[i])
//        }
//  }
//      console.log(new_numbers);





// 5. *Напишите цикл, который считает сумма чисел из массива numbers

// const numbers = [55, 43, 1, -7, 88, 13, -83, 15];
// function arraySum(array){
// let sum = 0;
// for(let i = 0; i < array.length; i++){
// sum += array[i];
// }
// console.log(sum);
// }
// arraySum(numbers);//125




// 6. *Напишите цикл, который считает сумму чисел от 1 до 10



// let sum = 0;
// for (let  i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);//55

