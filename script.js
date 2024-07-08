let rect = document.querySelector("#rect")


rect.addEventListener("mousemove",function (details){
   var inside = rect.getBoundingClientRect();
var rectlocation = details.clientX - inside.left;

if(rectlocation < inside.width/2){
  
    var redcolor = gsap.utils.mapRange(0,inside.width/2,255,0,rectlocation)
    gsap.to(rect,{
        backgroundColor: `rgb(${redcolor},0 ,0)`,
        power:4

    })
}

else{
    var bluecolor = gsap.utils.mapRange(inside.width/2,inside.width,0,255,rectlocation)
    gsap.to(rect,{
        backgroundColor: `rgb(0,0 ,${bluecolor})`,
        power:4

    })
}
})


// gsap.utils.mapRange(0 8)
