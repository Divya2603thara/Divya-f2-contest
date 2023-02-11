/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

//using map function
function PrintStudentswithMap() {
  arr.map(arr => {
    if (arr.marks > 50) {
      console.log(arr)
    }
  })
}

//using foreach function
function PrintStudentsbyForEach() {
  arr.forEach(arr => {
    if (arr.marks > 50) {
      console.log(arr)
    }
  })
}

// adding new obj into arr
function addData() {
  let newObj = { id: 4, name: "susan", age: "20", marks: 45 }
  arr.push(newObj)
  console.log(arr)
}


//removing marks
function removeFailedStudent() {
  let removefailStudent = arr.filter(student => student.marks >= 50);
  console.log(removefailStudent);
}


// adding two array using concat
function concatenateArray() {
  let arr2 = [
    { id: 4, name: "divu", age: "26", marks: 90 },
    { id: 5, name: "mohan", age: "27", marks: 92 },
    { id: 6, name: "divmo", age: "22", marks: 66 },
  ];
  var answer = arr.concat(arr2);
  console.log(answer)
}
