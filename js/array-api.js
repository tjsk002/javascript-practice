// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // join : string
  const result = fruits.join('^');
  console.log("join" + result);
}

// Q2. make an array out of a string
{
  const fruits = 'π, π₯, π, π';
  // separator, limit(number)
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  // reverse λ°°μ΄ μμ²΄λ₯Ό λ³νμν¨λ€
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // splice  λ°°μ΄ μμ²΄λ₯Ό μμ 
  const result = array.splice(0, 2);
  console.log(result);
  console.log(array);

  //slice λ°°μ΄μμ μνλ λΆλΆλ§ λ¦¬ν΄
  const result2 = array.slice(2, 5);
  console.log(result2);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // const result = students.find(function(student, index){
  //   return student.score === 90;
  // });
  const result = students.find((student) => student.score === 90);
  console.log("find" + result);
}

// Q6. make an array of enrolled students
// μμμ λ±λ‘ν νμλ€μ λ°°μ΄λ‘ λ§λ€κΈ°
{
  const result = students.filter((student) => student.enrolled === true);
  console.log("filter : " + result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // map : callback ν¨μλ₯Ό νΈμΆνλ©΄μ μλ‘μ΄ κ°μ λ³ν
  const result = students.map((student) => student.score);
  console.log("map : " + result);
}

// Q8. check if there is a student with the score lower than 50
{
  // some : trueκ° μλμ§ μλμ§
  const some = students.some((student) => student.score < 50);
  // νλͺμ΄λΌλ μ΄ μ‘°κ±΄μ λ§λ μ¬λμ΄ μλ€λ©΄ true
  const every = students.every((student) => student.score < 50);
  // λͺ¨λ  μ¬λμ΄ μ΄ μ‘°κ±΄μ λ§λλ€λ©΄ true
  console.log('sonme : ' + some);
  console.log('every : ' + every);
}

// Q9. compute students' average score
{
  // const result = students.reduce((prev, curr)=>{
  //     console.log('-------');
  //     console.log(prev);
  //     console.log(curr);
  //     return prev+curr.score;
  // }, 0);

  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log('students total score :' + result);
  console.log('students average score : ' + result/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// λ°°μ΄μ΄ μλ stringμΌλ‘ λ³κ²½
{
  const result = students
  // λ°°μ΄λ‘ λ§μΆ°μ μΆλ ₯
  .map(student => student.score)
  // 50 μ΄μ μ μ μΆλ ₯
  .filter((score) => score >= 50)
  // string μΌλ‘ λ³ν
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // const result = students
  // // λ°°μ΄λ‘ λ§μΆ°μ μΆλ ₯
  // .map(student => student.score)
  // // μ€λ¦μ°¨μμΌλ‘ μ λ ¬
  // .sort()
  // // string μΌλ‘ λ³ν
  // .join();
  // console.log(result);

  const result = students
  // λ°°μ΄λ‘ λ§μΆ°μ μΆλ ₯
  .map(student => student.score)
  // λ΄λ¦Όμ°¨μμΌλ‘ μ λ ¬
  .sort((a,b)=> b-a)
  // string μΌλ‘ λ³ν
  .join();
  console.log(result);
}