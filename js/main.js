var allimg = Array.from(document.querySelectorAll('img'));
var myLayer =document.querySelector(".mylayer")
var innerDiv = document.querySelector('.innerDiv');
var rightArrow=document.querySelector('.fa-arrow-right-long')
var leftArrow=document.querySelector('.fa-arrow-left-long')
var closeIcon=document.querySelector('.fa-xmark ') 
var currentIndex;
for(var i=0;i<allimg.length;++i){
   allimg[i].addEventListener('click', function(e){
      myLayer.classList.remove("d-none");
      var srcImage =  e.target.getAttribute('src');
      innerDiv.style.backgroundImage=`url(${srcImage})`;
     
      currentIndex =allimg.indexOf(e.target)
   })
}
function getNext(){
   currentIndex++;
   if(currentIndex == allimg.length){
      currentIndex=0;
   }
  var nextImageSrc=  allimg[currentIndex].getAttribute('src');
  innerDiv.style.backgroundImage=`url(${nextImageSrc})`
}
function getPrev(){
   currentIndex--;
   if(currentIndex == -1){
      currentIndex=allimg.length -1;
   }
  var prevImageSrc=  allimg[currentIndex].getAttribute('src');
  innerDiv.style.backgroundImage=`url(${prevImageSrc})`
}
function hideDiv(){
myLayer.classList.add('d-none')
}
rightArrow.addEventListener('click' ,getNext )
leftArrow.addEventListener('click' , getPrev)
closeIcon.addEventListener('click' ,hideDiv)

document.addEventListener('keyup' ,function(e){
   if (e.code == "Escape") {
      hideDiv()
   }
   else if(e.code =="ArrowLeft"){
      getPrev()
   }
   else if(e.code =="ArrowRight"){
      getNext()
   }
})
myLayer.addEventListener('click', function(e){
   if(e.target==myLayer){
      hideDiv();
   }
})