var number = "abba"
function ispalindrom(string){
    for (let i=0; i<Math.floor(string.lemgth/2); i++){
        console.log(string[i],string[string.lemgth-1-i])
        if(string[i] !=string[string.lemgth-1-i]){
        return "niy a pallindrom"
        }
    }
        return "it is pallindrom"
}
console.log(ispalindrom(number));