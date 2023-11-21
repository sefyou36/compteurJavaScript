const result = document.querySelector("#result")

const increment = document.querySelector(".increment")
const reset = document.querySelector(".reset")
const decrement  = document.querySelector(".decrement")


increment.addEventListener("click",function(){

    result.innerText++;
    color();


})

decrement.addEventListener("click",function(){
    result.innerText--;
    color();
    
})

reset.addEventListener("click",function(){
    result.innerText = 0;
    color();
})

function color(){
    if (result.innerText > 0) {
        result.classList.add("green");
        result.classList.remove("black");
    }else if(result.innerText < 0){
        result.classList.remove("green");
        result.classList.remove("black");
        result.classList.add("red") ;
    }else {
        result.classList.remove("red")
        result.classList.remove("green")
        result.classList.add("black") ;
    } 

}

console.log(result.innerText)
