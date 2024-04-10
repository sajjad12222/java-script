//COMPARISON
//console.log(1>=2);
//console.log(34>22);
//console.log(23<30);
//console.log(34==34);
//console.log(23!=23)


//********************************* MEMORY**********************
//THERE ARE TWO TYPES OF MEMORY"SATACK"& "HEAP" MEMORY
//IN PRIMITIVE DATA TYPE SATCK MEMORY ARE USED;
//IN NINPRIMITIVE DATA TYPE HEAP MEMORY ARE USE;
let myName = "sajjadali@siksavi"
let myEmail = myName
myEmail = "sajjad"
console.log(myName)
console.log(myEmail);
let user = {
    naME: "sajjad",
    password : 454545,
    email: "sukmojan@gmail.com"
}
let user1 = user
user1.email = "sjjkh@gmail.com"
console.log(user1);
//modern string syntex
let manth ="kashif"
let time = "9:am"
//another methond to decleaar string
const Rank = new String('cornol')
console.log(Rank.charAt(2));
console.log(`first class is math ${manth},time is ${time}`)
const url = "https//sajjadeli.com/sajjad%30siksavi"
console.log(url.replace('%30','-'));
console.log(url.includes('siksavi'));
let bio = "my name is sajjad ali,iam from the northern areas of gilgit baltistan"
console.log(bio.replace('gilgit','ghanche'));
console.log(bio.includes('northern'));
