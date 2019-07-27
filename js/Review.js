// let arr=[5,6,7,8];
// let arr2=[1,2,3,4,...arr]
//->arr2=[1,2,3,4,5,6,7,8]
//this is the spread operator
//it will unpack the array for you

// arr2=[1,2,3,4,arr]
//-> arr2=[1,2,3,4,[5,6,7,8]]

// //another way to do it:
// let arr=[5,6,7,8];
// let arr2=[1,2,3,4]
// for(let x=0;x<arr.length;x++){
//     arr2[arr2.length]=arr[x];
// }


let arr=[5,2,6,3,7,12,13,11,8,98,65,45,87,33,55,23,32,19]

// arr.sort()
// -->[11, 12, 13, 19, 2, 23, 3, 32, 33, 45, 5, 55, 6, 65, 7, 8, 87, 98]

function bubbleSort(arr){
    for(let i=0; i<arr.length;i++){
        for(let j=0; j<i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

function bubble_Sort(a)
{
   var swapp;
   var n = a.length-1;
   var x=a;
   do {
       swapp = false;
       for (var i=0; i < n; i++)
       {
           if (x[i] < x[i+1])
           {
              var temp = x[i];
              x[i] = x[i+1];
              x[i+1] = temp;
              swapp = true;
           }
       }
       n--;
   } while (swapp);
return x;
}

/**
Selection Sort	Ω(n^2)	     θ(n^2)	        O(n^2)
Bubble Sort	    Ω(n)	     θ(n^2)     	O(n^2)
Insertion Sort	Ω(n)	     θ(n^2)	        O(n^2)
Heap Sort	    Ω(n log(n))	 θ(n log(n))	O(n log(n))
Quick Sort	    Ω(n log(n))	 θ(n log(n))	O(n^2)
Merge Sort	    Ω(n log(n))	 θ(n log(n))    O(n log(n))
Bucket Sort	    Ω(n+k)	     θ(n+k)	        O(n^2)
Radix Sort	    Ω(nk)	     θ(nk)	        O(nk)
 */


 for(let x=0;x<20;x++){
     console.log(x);
 }

 for(let x=0; x<20; x++){
    if(x%2==1){
        continue;
    }console.log(x)
}
//the continue statement will continue 
//to the next iteration and will not 
//procede with the current iteration


//Rest Parameters

//we have a normal function
function getArgs(a,b,c){
    console.log(a,b,c)
}
getArgs(1,2)
//-->1 2 undefined
getArgs(1,2,3)
//-->1 2 3
getArgs(1,2,3,4)
//-->1 2 3
getArgs(1,2,3,4,5,6)
//--> 1 2 3

//we are losing arguments in the function
//enter rest paramaters 
//(looks like spread operator, but is not)
function getArgs2(a,b,c,...rex){
    console.log(a,b,c,rex)
}
getArgs2(1,2,3,4,5,5,6,7,7,8,9,10)
//-->1 2 3 [4, 5, 5, 6, 7, 7, 8, 9, 10]

//here is the difference
//the rest parameters will take in all arguments and 
//package them into an array
//the spread operator will unpack an array and
//use each value
let arr=[1,2,3,4,5,5,6]
getArgs2(1,2,arr)
//-->1 2 [1, 2, 3, 4, 5, 5, 6] []
//a is 1 b is 2 c is an array and rex is an empty array
getArgs2(1,2,...arr)
//-->1 2 1 [2, 3, 4, 5, 5, 6]
//a is 1 b is 2 c is 1 and rex is an array of the remaining
//arr elements

//default parameters
function getArgs3(a,b=2){
    console.log(a,b)
}
getArgs3(1);
//-->1 2
getArgs3(1,3);
//-->1 3

//short circuiting is where, if it finds something to make
//it stop, it does not continue
//default values
0||"groundhog"
//-->groundhog

//guard operator
0&&"groundhog"
//--> 0


let numMedBox=[0,1,2,3,4,5,6]; 
numMedBox[3]
//-->3
let upsPackage=[[1,2,3,4,5],[6,7,8,9],[10,11,12,13]]; 
upsPackage[1][1]
//-->7
upsPackage[1]
//-->[6,7,8,9]
upsPackage[2][3]
//-->13
[1]  [2]  [3]  [4]  [5]
[6]  [7]  [8]  [9]
[10] [11] [12] [13]

for(let x=0; x<upsPackage.length;x++){
    for(let y=0;y<upsPackage[x].length;y++){
        console.log(upsPackage[x][y]+"\t")
    }
    console.log("\n")
}

let grpString='';
for(let x=0;x<upsPackage.length;x++){
    for(let y=0;y<upsPackage[x].length;y++){
        grpString+=""+upsPackage[x][y]+"\t"
    }
    grpString+="\n"
}console.log(grpString)


let bob={
    name:"bob",
    age:21,
    statement:`My name is ${name}
     and my age is ${this.age}`
}

