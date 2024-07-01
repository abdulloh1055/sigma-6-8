let numLimitInput = document.querySelector(".numLimit");
let ageLimitInput = document.querySelector(".getLimit");
let getbtn = document.querySelector("button");

getbtn.addEventListener("click", (event) =>{
    event.preventDefault();
    
    let numLimit  = Number(numLimitInput.value);
    let ageLimit  = Number(ageLimitInput.value);

                                                
}) 



fetch("https://dummyjson.com/users")
.then((res) => res.json())
.then((data) => {
    console.log(data);
   let users  = data .users; //arry
   
   let filterdUsres = users.fillter((user) => user.age >= ageLimit );
   
   for( let i = 0; numLimit; i++ ) {
    let fuser  = filterdUsres[i];

    let box = document.createElement("div");
    let name = document.createElement("h2");
    let list  = document.createElement("ul");
    let age = document.createElement("li");
    let phone = document.createElement("li");
    let emali= document.createElement("li");
    let addrse = document.createElement("li")
}
});



   