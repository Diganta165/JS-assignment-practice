function perfectFriend(friends){
    if(friends > 0 || friends <= 0){
        return "Input can't be a number. Value needs to be array of string";
    }
    else{
        let temp ='';
        let max = friends.length;
        let i = 1;
        for( let element of friends){
            if(element.length == 5){
                temp = element;
                break;
            }
            else if(i == max){
                return "No value fullfilled the requirements. Enter values again to find the proper result";
            }
            i++;
        }
        return temp;
    }
}
let friends = [ "Diganta", "Unnata" , "Mim", "Mehedi Hasan"];
console.log(perfectFriend(friends));


function seerToMon(seer){
    if( seer < 0){
        return "Invalid number. Seer can't be a negative number. Try again...";
        
    }
    else if(typeof seer == 'string'){
        return "Value can't be a string. Please enter a valid number";
    }
    else{
        return seer / 40;
    }
}

console.log(seerToMon(''));

let ball = [1,2,3,4,5];
console.log(typeof ball);