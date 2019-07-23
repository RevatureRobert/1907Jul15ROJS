let arr=[5,6,7,8];
let arr2=[1,2,3,4,...arr]
//->arr2=[1,2,3,4,5,6,7,8]
//this is the spread operator
//it will unpack the array for you

// arr2=[1,2,3,4,arr]
//-> arr2=[1,2,3,4,[5,6,7,8]]

// //another way to do it:
// for(let x=0;x<arr.length;x++){
//     arr2[arr2.length]=arr[x];
// }