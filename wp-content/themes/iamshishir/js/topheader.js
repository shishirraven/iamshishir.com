document.addEventListener("DOMContentLoaded", function() { 

    document.getElementById('top-nav-button').addEventListener("click",function(){
        document.getElementById('site-navigation').classList.remove("hidden");
    })

    document.getElementById('top-nav-hide-button').addEventListener("click",function(){
        document.getElementById('site-navigation').classList.add("hidden");
    })




//     console.log("Hello world ");
//     var elArray = (document.getElementsByClassName("menu-item")); 
//     console.log(elArray);
//     console.log(elArray.length);

//     for (let index = 0; index < elArray.length; index++) {
//         const el = elArray[index];
//         el.addEventListener("focus", function(eventObject){
//         console.log("focus");
//         console.log(eventObject)
//         });
//         el.addEventListener("blur", function(eventObject){
//         console.log("blur");
//         console.log(eventObject)
//   })
        
//     }

});