//This function takes to numbers sum and multiplys it by 5 //
function numbers (num1,num2){
    let result = (num1 + num2) *5;
    return result;
}
 // Calling function and creating variables //
let sum = numbers (5,1);
console.log (sum);

let sum1 = numbers (1,1);
console.log (sum1);

let sum2 = numbers (53,10);
console.log(sum2);

function upto_10 (inno_techh) {
    // if function will check the inno_techh for its character length and return false or true //
    if (inno_techh. length > 10) {
        return true;
    } else {
        return false;
    }

}


// this function is word count : its being called and being saved //

let name1 = upto_10('Sumaya');
console.log (name1);

let name2 = upto_10('Saabir')
console.log(name2);

let name3 = upto_10('Hanad')
console.log(name3);


// This function finds everything that starts with ph //

function all_start_ph(argument) {
    let counter = 0;
    while(counter <argument.length){
        if (argument[counter].startsWith("ph"))
        return argument[counter];
    }
    counter++;

}

//Calling array with names//

let ph_names =["Hani","Saabir","Hanad"];
all_start_ph(ph_names);
let ph_names2 =["Hoyo","saaid","sumaya",];
all_start_ph(ph_names2);
let ph_names3 =["Yusuf","Siham","Samira","Ramla","Yasmine"];
all_start_ph[ph_names3];



   




  


