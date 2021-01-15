const gap = 1000;
const total = $("#words li").length;
const totalDepth = gap*total/5;
gsap.set("#words",{
    perspective:totalDepth,
    transformOrigin:"50%"
})
$("#words li").each(function(i,item){
    let size = 200;
    let weight = Math.ceil(Math.random()*9)*100;
    let spacing = -size*0.0002+"em";
    let x = 8000;
    let y = Math.random()*700+100;
    let z = -i*gap;
    let depth = total-i;
    gsap.set($(this),{
        fontSize:size,
        fontWeight:weight,
        letterSpacing:spacing,
        x:x,
        y:y,
        z:z,
        zIndex:depth
    });
    $(this).data({y:y,x:x});
});
gsap.from("#words li",{
    z:totalDepth,
    ease:"power4",
    duration:1,
    stagger:{
        each:0.02,
        from:"end"
    },
    onComplete:function(){
        $("#words li").each(function(i,item){
            gsap.to(item,{
                x:-8000,
                duration:Math.random()*10+10,
                repeat:-1,
                delay:Math.random()*10,
                repeatDelay:Math.random()*10,
            });
        });
        /*
        $("#words").on("mousemove",function(e){
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let cx = $(window).width()/2;
            let cy = $(window).height()/2;
            $("#words li").each(function(i,item){
                gsap.to(item,{
                    x:(cx-mouseX)*0.025*(total-i),
                    y:(cy-mouseY)*0.025*(total-i)+ $(this).data("y"),
                });
            });
        });
        */
    }
})

Splitting();
