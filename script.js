var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.transition = "0.3s";
  } else {
    document.getElementById("navbar").style.top = "-100px";
    document.getElementById("navbar").style.transition = "0.3s";
  }
  prevScrollpos = currentScrollPos;
}

const page=window.location.pathname.replace("/",'');

const data=document.querySelectorAll(".nav-li");
if(page.startsWith("index")){
 data[0].classList.add("nav-list-border")    
}
else if(page.startsWith("about")){
 data[1].classList.add("nav-list-border")    
}
else if(page.startsWith("projects")){
 data[2].classList.add("nav-list-border")    
}
else if(page.startsWith("exp")){
 data[3].classList.add("nav-list-border")    
}
else if(page.startsWith("contact")){
 data[4].classList.add("nav-list-border")    
}
data.forEach((e)=>{

    e.addEventListener("click",()=>{
        data.forEach((el)=>{
            el.classList.remove("nav-list-border")
        })
          e.classList.add("nav-list-border")
    })
})  