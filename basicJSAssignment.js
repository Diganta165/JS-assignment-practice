//১. [ ফাংশন নেম দিতে হবে seerToMon]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে সের। তারপর সেটাকে মন এ কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে। 

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
console.log(seerToMon(80),"mon");


/*২. [ ফাংশন নেম দিতে হবে totalSales]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 
 ১ টি শার্টের দাম – ১০০ টাকা
 ১ টি প্যান্টের দাম – ২০০ টাকা 
 ১ টি জুতার দাম – ৫০০ টাকা 
 এখন সে যদি বিভিন্ন সংখ্যার শার্ট, প্যান্ট বা জুতা বিক্রি করে তাহলে টোটাল কত বিক্রি হলো সেই সংখ্যা রিটার্ন করতে হবে। */

function totalSales(shirt, pant, shoe){
    if( shirt < 0 || pant < 0 || shoe < 0){
       return "Quantity can't be a negative value. Try again...";
        
    }
    else if(typeof shirt == 'string' || typeof pant == 'string' || typeof shoe == 'string' >= 0 ){
        return "Quantity can't be a string. Please enter a valid number";
    }
    else{
        return (shirt * 100) + (pant * 200) + (shoe * 500);
    }
}

console.log(totalSales(2,4,2),"tk");


/*
৩. [ ফাংশন নেম দিতে হবে deliveryCost]: প্যারামিটার হিসাবে নিবে কয়টা টি-শার্ট ডেলিভারি করবে। 
যদি ১০০ বা তার কম টি-শার্ট পাঠাও তাহলে প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে। 
যদি ১০০ এর বেশি কিন্তু ২০০ এর কম টি শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। 
যদি ২০০ এর বেশি টি-শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০১ থেকে ২০০ পর্যন্ত যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। ২০০ এর বেশি যতগুলা আছে সেগুলার সবগুলা প্রতিটা ৫০ টাকা করে দিতে হবে। 
এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা ডেলিভার খরচ হবে। 
আমার ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে। 
*/

function deliveryCost(tShirt){
    if(typeof tShirt == 'string'){
        return "Quantity can't be a string. Please enter a valid number";
    }
    else if(tShirt <= 100 && tShirt >= 0){
        return tShirt * 100;
    }
    else if(tShirt > 100 && tShirt <= 200 && tShirt >= 0){
        return ((tShirt-100) * 80 + (100 * 100));
    }
    else if (tShirt >= 0 && tShirt > 200 ){
        return ((100 * 100) + (100 * 80 ) + (tShirt - 200) * 50);
    }
    
    else if(tShirt < 0){
        return "Quantity can't be negative.Enter a valid number";
    }
    
}

console.log(deliveryCost(500), "tk");


/*
৪. [ ফাংশন নেম দিতে হবে perfectFriend]: Have to return the first cheracter with the length of 5
*/

function perfectFriend(friends){
    if(friends > 0 || friends <= 0){
        return "Input can't be a number. Value needs to be array of strings";
    }
    else{
        let max = friends.length;
        for( let element in friends){
            if(friends[element].length == 5){
                return friends[element];
            }
            else if(element == max-1){
                return "No value fullfilled the requirements. Enter values again to find the proper result";
            }
        }
    }
}


let friends = [ "Diganta", "Unnata", "Rasel",  "Mim", "Mehedi Hasan", "Maruf"];

console.log(perfectFriend(friends));