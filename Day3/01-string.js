

//substring() old JS 

let courseName = "Playwright"

const sub = courseName.substring(4,10) // wright
console.log(sub);


const sub1 = courseName.substring(10,4) // wright
console.log(sub1);

const sub2 = courseName.substring(10,-4) //O/P : Playwright // negative index -4 === 0
console.log(sub2);

const sub3 = courseName.substring(-4,10) //O/P : Playwright // negative index -4 === 0
console.log(sub3);

/* Notes if Substring:

1. start index is included and end index id not included and the character just before your last index is taken in consideration.
2.The start index and end index is swappable
3. substring cannot have negative value for index */

//slice()  // modern JS

let filename = "Ravi.png"


// const extension = filename.slice(4,8) // OPtion1
const extension = filename.slice(-3) // option 2 : This is taken for better string manipulation

console.log(extension);



/*Slice method */



console.log("SLICE");


const sli = courseName.slice(4,10) // wright
console.log(sli);

const sli1 = courseName.slice(10,4) // "" empty
console.log(sli1);

const sli2 = courseName.slice(4) // wright // by default the end index is courseName.length
console.log(sli2);

const sli3 = courseName.slice(10,-4) //O/P : "" 
console.log(sli3);


//let courseName = "Playwright" 

const sli4 = courseName.slice(10) //O/P : ight
console.log(sli4);
//-4 => i and 10 => value of index 10
// here index of t=9


/* Notes for slice
1. start index is included and end index id not included and the character just before your last index is taken in consideration.
2.The start index and end index is not swappable which means the start index should be lower than the end index
3. slice will allow negative index 
*/