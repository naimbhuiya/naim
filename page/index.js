var topspan = document.querySelector("#topspan")
var topdiv = document.querySelector("#topdiv")



function topspanMotionEffect(mouseover , mouseout , topSp , topdv){

       topSp.addEventListener(mouseover , function(){
       
           topdv.style.width = "190px";
       
       })
       topSp.addEventListener(mouseout , function(){
       
           topdv.style.width = "45px";
       
       })
}
topspanMotionEffect("mouseover" , "mouseout" , topspan , topdiv);

 const menuBar = document.getElementById('menuBar')
 const menuTimes = document.getElementById('menuTimes-01')
 const meinMenu = document.getElementById("meinMenu")
 const  li_1  = document.getElementById("li-1")
 const  li_2  = document.getElementById("li-2")
 const  li_3  = document.getElementById("li-3")
 const  li_4  = document.getElementById("li-4")
 const  meinMenu_expand = document.getElementById("meinMenu-expand")
 const timesBtn = document.getElementById('timesBtn')

 menuBar.addEventListener('click' , function(){
    //   menuTimes.style.display ="inline" ;
    //  meinMenu.style.display= "block";
    //  meinMenu.style.background= "#000";
    //  menuBar.style.display="none"
    //  li_1.style.display="block"
    //  li_2.style.display="block"
    //  li_3.style.display="block"
    //  li_4.style.display="block"
    //  li_5.style.display="block"
    //  timesBtn.style.display ="block"
    meinMenu_expand.classList.add("meinMenu-expand-js-code")
    meinMenu_expand.classList.remove("meinMenu-expand")
    menuBar.classList.add("width-11")
   menuBar.classList.remove("menuBar")

 })

 menuTimes.addEventListener('click' , function(){
//     menuTimes.style.display ="none" ;
//    meinMenu.style.display= "none";
//   //  meinMenu.style.background= "#000";
//    menuBar.style.display="block"
//    li_1.style.display="none"
//    li_2.style.display="none"
//    li_3.style.display="none"
//    li_4.style.display="none"
//    li_5.style.display="none"
   meinMenu_expand.classList.remove("meinMenu-expand-js-code")
   meinMenu_expand.classList.add("meinMenu-expand")
   menuBar.classList.remove("width-11")
   menuBar.classList.add("menuBar")
})

if(screen.width == 768){
    meinMenu_expand.classList.remove("meinMenu-expand")
}


