function audio(){
   var x =document.querySelector("textarea").value

//    ---conver the value into audio---
   var y= new SpeechSynthesisUtterance(x)

   speechSynthesis.speak(y)
    
}
