// 1-MASALA 


// let arr = [10,1,3,5,12,28];
// for (let i = 0; i < arr.length; i++){
//    if (arr[i] > arr[i+1]){
//      let result = arr[i+1];
//      arr[i+1] = arr[i];
//      arr[i] = result;
//    }
// }
// console.log(arr);



// 2-Masala 

// let obj = [
//   {
//     login : "er",
//     pass: "forever123"
//   }
// ];

// obj.forEach((item) => {
//   if(item.login.trim().length < 3 && item.pass.trim().length < 8){
  
//     console.log("Login kamida 3 belgidan iborat bo'lishi kerak");
//     console.log("Parol kamida 8 belgidan iborat bo'lishi kerak");
//   }
  
//   else if(item.login.trim().length < 3){
//     console.log("Login kamida 3 belgidan iborat bo'lishi kerak");
//   }
//    else if(item.pass.trim().length < 8){
//     console.log("Parol kamida 8 belgidan iborat bo'lishi kerak");
//   } 
//   else{
//     console.log("Siz muvaffaqqiyatli ro'yxatdan o'tdingiz");
//   }
// })


// 4-Masala

// let n = 10;
// let k = 2;
// let result = 0;

// for(let i = 1; i <= n; i++){
//   if(i > 1){
//     let pow = 1;
//     for(let j = 0; j < k; j++){
//       pow *= i;
//     }
//     result += pow;
//   } else if(i == 1){
//     result += i;
//   }
// }
// console.log(result);



// 5-Masala 

// let arr = ['sdf', {na: 1, sdf: 2}];
// let elNewArr = [];

// for(let i = 0; i < arr.length; i++){
//   if(Number.isInteger(arr[i])){
//     elNewArr.push(arr[i]);
//   } else if (Array.isArray(arr[i])){
//     arr[i].forEach((item) => {
//       elNewArr.push(item);
//     })
//   } else if(typeof arr[i] === "object"){
//       elNewArr.push(Object.keys(arr[i])[0]);
//       elNewArr.push(Object.values(arr[i])[0]);
//   } else{
//     elNewArr.push(arr[i]);
//   }
// }

// console.log(elNewArr);

// 6-Masala 

// let arr = [1,2,3,4];
// let half = arr.length/2;
// let result = half;

// for (let i = 0; i < half; i++){
//   let c = arr[i];
//   arr[i] = arr[result];
//   arr[result] = c;
//   result++;
  
// }
// console.log(arr);


// 5-Masala 


