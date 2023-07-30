function quotes(){
var x=["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
"Be the change that you wish to see in the world.",
"If you tell the truth, you don't have to remember anything.",
"Always forgive your enemies; nothing annoys them so much",
"I'm not here to be perfect, I'm here to be real.",
"I'm not interested in money. I just want to be wonderful.",
"Everything happens for a reason.",
"If you want something done, ask a busy person to do it.",
"The most important thing is to enjoy your life - to be happy - it's all that matters.",
"Believe you can and you're halfway there."]


var y=Math.floor(Math.random()*x.length)
document.getElementById("jj").innerHTML=x[y];

}

function meme(){
    var a=["./Images/quote1.jpg",
           "./Images/quotes2.jpg",
           "./Images/quotes3.jpg",
           "./Images/quotes4.png",
           "./Images/flower.jpg",
           "./Images/images3.jpg",
           "./Images/girl.jpg",
             ""] 

           var b=Math.floor(Math.random()*a.length)
           document.getElementById("kk").src=a[b]
}

function qg(){
    document.getElementById("qg").style.display="block";
    document.getElementById("mg").style.display="none";
}

function mg(){
    document.getElementById("qg").style.display="none";
    document.getElementById("mg").style.display="block";
}

function clock(){
    // var h= document.querySelector("h1")
    var date=new Date()
    var hours= String(date.getHours()).padStart(2,"0")
    var min=String(date.getMinutes()).padStart(2,"0")
    var sec= String(date.getSeconds()).padStart(2,"0")
    document.querySelector("#time").innerHTML=`${hours}::${min}::${sec}`
   
        var date=new Date()
        var day=String(date.getDate()).padStart(2,"0")
        var month= String(date.getMonth()+1).padStart(2,"0")
        var year=String(date.getFullYear()).padStart(4,"0")
        document.querySelector("#time").innerHTML=`${day}/${month}/${year}`
     }


setInterval(clock,1000)




 