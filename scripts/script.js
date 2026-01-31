// to make the icons img in the backgorund responsive to you cursor movement
document.addEventListener("mousemove",(event)=>{
    const x=event.clientX/window.innerWidth -0.5;
    const y=event.clientY/window.innerWidth -0.5;

    document.querySelectorAll('.parallax').forEach((element)=>{
        const speed=element.getAttribute("data-speed");
        element.style.transform=`translate(${x*speed*20}px,${y*speed*20}px)`
    });
})

// the functionallity to the signin page
const signInBtn=document.getElementById('signInButton');
const closeIcon=document.getElementById('closeIcon');
const signinPage=document.getElementById('signinPage');

signInBtn.addEventListener('click',function(){
    //the following line to make us able to make this process more than one time in the same load 
    signinPage.classList.remove('Closesignin');
    signinPage.classList.add('opensignin');
});

closeIcon.addEventListener('click',function(){
    //the following line to make us able to make this process more than one time in the same load 
    signinPage.classList.remove('opensigin')
    signinPage.classList.add('Closesignin');
})