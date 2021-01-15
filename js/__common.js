const gap = 1000;
const total = $("#words li").length;
const totalDepth = gap*total/5;
let w= $(window).width();
let h= $(window).height();
let cx = w/2;
let cy = h/2;
gsap.set("#words",{
    perspective:totalDepth,
    transformOrigin:"50%"
});




$("#words li").each(function(i,item){
    let size = 200;
    let weight = Math.ceil(Math.random()*9)*100;
    let spacing = -size*0.0002+"em";
    let x = cx;
    let y = cy;
    //let z = -i*gap;
    let z = -total*gap;
    let depth = total-i;
    gsap.set($(this),{
        fontSize:size,
        fontWeight:weight,
        letterSpacing:spacing,
        x:x,
        y:y,
        z:z,
        opacity:0
    });
    $(this).data({y:y,x:x,z:z});
});
// $("#words li").each(function(i,item){
//     gsap.to($(this),{
//         x:function(i,item){
//             return Math.random()*w;
//         },
//         y:function(i,item){
//             return Math.random()*h;
//         },
//         z:gap*20,
//         duration:10,
//         ease:"power1",
//         repeat:-1,
//         delay:function(){
//             return i*0.1;
//         }
//     });
// });
let count = 0;
const totalZ = 100000;
const idx = setInterval(function(){
    let item = $("#words li").eq(count);
    
    gsap.set(item,{
        zIndex:totalZ-count,
    })
    gsap.fromTo(item,{
        opacity:1,
        x:w*2,
        y:Math.random()*h,
        fontWeight:function(){
            return Math.ceil(Math.random()*9)*100;
        },
        z:function(){
            return -Math.random()*total*gap;
        }
    },{
        x:function(i,item){
            return -5000
        },
        y:function(i,item){
            //return Math.random()*h;
        },
        //z:gap*30,
        duration:30,
        ease:"power1",
        repeat:-1,
        repeatRefresh:true
    });
    count++;
    if(count>total) {
        clearInterval(idx);
    }
},300);
//Splitting();

const gnbTL = gsap.timeline({paused:true});
gnbTL.to("#gnb",{
    top:0,
    duration:1,
    ease:"power4",
})
.from("#gnb li",{
    opacity:0,
    x:500,
    ease:"power4",
    duration:1,
    stagger:{
        each:0.05
    },
    onReverseComplete:()=>{
        //$("#header").removeClass("on");
    }
});

$(".btnAll").on("click",function(){
    $("#header").toggleClass("on");
    if($("#header").hasClass("on")){
        gnbTL.timeScale(1);
        gnbTL.play();
    } else {
        gnbTL.timeScale(1.8);
        gnbTL.reverse();

    }
});

Splitting();