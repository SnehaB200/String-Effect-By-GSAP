var path = `M 10 100 Q 500 100 990 100`;
var endPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function(dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
    
    gsap.to("svg path",{
        attr: {d: path},
        duration: 0.3,
        ease: "elastic.out(1,0.2)"
    })
})

string.addEventListener("mouseleave", function(dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
    
    gsap.to("svg path",{
        attr: {d: endPath},
        duration: 1.8,
        ease: "elastic.out(1,0.2)"
    })
})