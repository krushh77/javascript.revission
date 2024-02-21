var object ={name:"krushnaraj" , friend: "shahaabaz", number: 2}
console.log(object.friend , object.name, object.number)

object["abc"]="abc"
object["new one"]="awdiz class"
console.log(object)



var array = [1,2,1,3,4,1,4,1,5,1]
var newarray = {}

for(var i=0; i<array.length;i++) {
    if (newarray[array[i]]=== undefined){
        newarray[array[i]]=1
        console.log(array)

    }

}


var array = [1,2,3,1,3,2,4,5];
var newarray = {}

for(var i = 0; i < array.length; i++){

    if(newarray[array[i]] === undefined){
        newarray[array[i]] = 1

    }else{
        newarray[array[i]]++
    }
}
console.log(newarray)




var array = [1,2,3,1,3,2,4,5,6];
var newarray = {}

for(var i = 0; i < array.length; i++){
  
    if(newarray[array[i]] === undefined){
        newarray[array[i]] = 1

    }else{
        newarray[array[i]]++
    }
}
console.log(newarray)



