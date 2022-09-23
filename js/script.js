// 1. Написать функцию searchString(originalStr, str) . 
// Данная функция должна проверять находится ли подстрока str в 
// основной строке originalStr и возвращать булевое значение

function searchString(originalStr, str) {
  return originalStr.includes(str);
}
searchString("Let it be", "be");

// 2. Написать функцию capitalizeFirstLetter , 
// которая будет принимать строку. 
// Функция возвращает строку, где первый символ будет с заглавной буквы

let newString;
function capitalizeFirstLetter (str) {
  if (!str) {
    return str;
  } else {
    newString = str[0].toUpperCase();
    newString += str.slice(1);
  }
  return newString
}

// !!! или

function capitalizeFirstLetter(str) {
  if (!str) {
    return str;
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}

// 3. Создайте функцию truncate(str, maxlength), 
// которая проверяет длину строки str и, если она 
// превосходит maxlength, заменяет конец str на "…", 
// так, чтобы её длина стала равна maxlength. 
// Результатом функции должна быть та же строка, 
// если усечение не требуется, либо, если необходимо, 
// усечённая строка.

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  } return str
}
truncate("Hello dear friend", 6).length; /// 6

// 4. Есть массив студентов
// Написать функцию, которая бы посчитала средний бал каждого студента и 
// добавила ключ averageMark к каждому студенту в массиве.


const students = [
  {
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];

function getAverageMark(students) {
  students.forEach((student) => {
    let studentMarks = Object.values(student.marks);
    student.averageMark =
      studentMarks.reduce((sum, currentElement) => {
        return sum + currentElement;
      }, 0) / studentMarks.length;
  });
  return console.log(students);
}



// 5. Данн массив vehicles. Необходимо написать код, 
// который реализует подсчет средней цены автомобилей типа SUV:

const vehicles = [
  { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
  { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
  { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
  { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
  { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
  { make: "Toyota", model: "Sequoia", type: "SUV", price: 45560 },
  { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
  { make: "Ford", model: "F-150", type: "truck", price: 27110 },
  { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
  { make: "Ford", model: "Explorer", type: "SUV", price: 31660 },
];

const suvArray = vehicles.filter(function (vehicles) {
  return vehicles.type.toLowerCase() === "suv";
});
const averagePrice =
  suvArray.reduce((sum, suvObj) => {
    return sum + suvObj.price;
  }, 0) / suvArray.length;
console.log(averagePrice);

-------------------------------------

const suvArray = vehicles.filter(function (vehicles) {
return vehicles.type.toLowerCase() === "suv";
});
let sum = 0;
let averagePrice = 0;
suvArray.forEach((suvObj) => {
sum += suvObj.price;
averagePrice = sum / suvArray.length});
console.log(averagePrice);

--------------------------------------

const suvArray = vehicles.filter(function (vehicles) {
  return vehicles.type.toLowerCase() === "suv";
});
suvArray.forEach((suvObj) => {
  let suvPrices = Object.values(suvObj.price);
  console.log(suvPrices); 
  // ------ почему не получается отдельно достать price
})


// 6. Напишите функцию getKeysCount(obj), которая возвращает 
// количество свойств объекта.

function getKeysCount(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: "Mike",
  lastName: "Smith",
}
getKeysCount(user);

// 7.* У нас есть массив чисел arr. 
// Нужно получить отсортированную копию, но оставить arr неизменённым. 
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = [10, 20, 3, 4, 0, 99, 97];
let sorted = copySorted(arr);
function copySorted(arr) {
 return arr.slice().sort((a, b) => a - b);
}

console.log(`old array ${arr}`)
console.log(`sorted array ${sorted}`)