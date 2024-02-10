var array = [1,2,4,56,7,8,3,2,5,7]
var  target= 12

function findvalue (array, target){
    for(var i=0; i <= array.length-1; i++){
    
        for(var j =i+1; j <= array.length; j++){
            if(array[i]+array[j]==target){
                console.log(array[i],array[j])
            }
            

        }
    }

}
findvalue(array,target)










// const twoSum = (array, goal) => {
//     let indexes = [];

//     for(let i = 0; i < array.length; i++){
//        for(let j = i + 1; j < array.length; j++){
//           if (array[i] + array[j] === goal) {
//         indexes.push(i);
//         indexes.push(j);
//           }
//        }
//     }
//     return indexes;
// }