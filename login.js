// // function odd(){
// //     var a=25;
// //     if(a%2==0){
// //         document.write("even")
// //     }

// //   else{
// //     document.write("odd")
// // }
// // }
// // odd()
// // alert("Hello JS")
// // confirm("R U sure ?")

// // function even(){

// //     var a=prompt("Enter the number")
// //     if (a%2==1){
// //         alert("Odd Number")
// //     }
// //     else{
// //         alert("Even Number")
// //     }
// // }
// // even()

// function set(){

//    var a= document.getElementById("enter").value
//    if(a%2==0)  {
//     document.querySelector("h1").innerHTML="oddnumber"
//     }
//     else{
//         document.querySelector("h1").innerHTML="evennumber"
//     }
// }
// setInterval( set(),"1000")


function sign(){
   var a= document.getElementById("user").value
   var b= document.getElementById("pass").value
   
}
if(a=="" && b==""){
    document.getElementById("euser").innerHTML="Enter the username"
    document.getElementById("epass").innerHTML="Enter the password"
    return false
}
else if(a=="")
{
    document.getElementById("euser").innerHTML="Enter the username"
    return false   
}

else if(b=="")
{
    document.getElementById("epass").innerHTML="Enter the username"
    return false   
}
else if(a=="Shraddha" && b=="2806")
{
    alert.getElementById("epass"),innerHTML="Enter the password"  
    return true
}
else
{
    document.querySelector("#error").innerHTML="invalid username and password"
    return false
}