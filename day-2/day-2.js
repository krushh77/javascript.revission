var number = "ababa"
function ispalindrom(string){
    for (let i=0; i<Math.floor(string.lemgth/2); i++){
        // console.log(string[i],string[string.length-1-i])
        if(string[i] !=string[string.length-1-i]){
        return "niy a pallindrom"
        }
    }
        return "it is pallindrom"
}
console.log(ispalindrom(number));

var krushnaraj = "ababa"
function krushna(dawande){
    for(let i=0; i<Math.floor(dawande.length/2); i++){
        // console.log(dawande[i],dawande[dawande.length-1-i])
          if(dawande[i] !=dawande[dawande.length-1-i]){
            return "not a pallandrom"

          } ////12345

    }
    return "palendrom"
}
console.log(krushna(krushnaraj))


var pali = "abababa"

function kd(abc){
    for(let i=0; i<Math.floor(abc.length/2); i++){
        if(abc[i] !=abc[abc.length-1-i]){                              //if(abc[i]!=abc[abc.length-1-i]){}
            return "not"

        }
         return "paln"
    }

}
console.log(kd(pali))