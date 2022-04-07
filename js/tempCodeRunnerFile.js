let arr = [10,1,3,5,8,9];
for (let i = 0; i < arr.length; i++){
   if (arr[i] > arr[i+1]){
     let result = arr[i+1];
     arr[i+1] = arr[i];
     arr[i] = result;
   }
}
console.log(arr);