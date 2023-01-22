window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
});

$(document).ready(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
});

let btnOn = document.querySelector(".card-fea .icon-fea")
function BTN (){
    btnOn.classList.remove("icon-fea")
    // btnOn.classList.add("active")
}

let btns = document.querySelectorAll(".btns button")

btns.forEach((item, index)=>{
    item.addEventListener("click", () => {
        removebtn();
        item.classList.add("active");
        addtab(index)        
    });
});
function removebtn (){
    btns.forEach((item, index) => {
        item.classList.remove("active");
    });
};

let tabtext = document.querySelectorAll(".features-content .content-text")

function addtab (num){
    tabtext.forEach((item, index)=>{
        if(index == num){
            removtab()
            item.classList.add("tabnew")
        }
    })
}
function removtab (){
    tabtext.forEach((item, index)=>{
        item.classList.remove("tabnew")
    })
}


let asked = document.querySelectorAll(".asked .card1")
function btnadd(){
    asked.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        remov()
        item.classList.add("active")
    })
})
}
function remov (){
    asked.forEach((item, index)=>{
        item.classList.remove("active")
    })
}

let btn = document.querySelectorAll(".asked .card1 button")
btn.forEach((item, index)=>{
    let count = 0;
    item.addEventListener("click", ()=>{ 
        btnadd()
        count++;
        console.log(count);
        if(count == 2){
            count == 0;
            item.classList.remove("active")
        }
    })
})


// let removclass = document.querySelectorAll(".asked .active button")
// removclass.forEach((item, index)=>{
//     let count = 0;
//     item.addEventListener("click", ()=>{
//         item.classList.add("active1")
//         count++;
//         console.log(count, 12);
//         if(count == 2){
//             count == 0
//             item.classList.remove("active1")
//         }
//     })
// })

AOS.init();