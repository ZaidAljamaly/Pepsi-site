gsap.from('.nav-item',{duration:6,opacity:0});
gsap.from('.textBox',{duration:2,x:'-100%'})
gsap.from('#pepsi',{duration:2,x:'100%'})
gsap.from('#thum1',{duration:2,x:'100%'})
gsap.from('#thum3',{duration:2,x:'-100%'})

let p1 = document.getElementById('thum1');

p1.addEventListener('click',function() {
    let img=document.getElementById('pepsi')
    img.src='pepsi001.png';

});
let p2 = document.getElementById('thum2');

p2.addEventListener('click',function() {
    let img=document.getElementById('pepsi')
    img.src='pepsi002.png';
    
});
let p3 = document.getElementById('thum3');

p3.addEventListener('click',function() {
    let img=document.getElementById('pepsi')
    img.src='pepsi003.png';
    
})

