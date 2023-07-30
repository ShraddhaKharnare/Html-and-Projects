function signup()
{
   var a= document.getElementById("first").value
   var b= document.getElementById("last").value
   var c= document.getElementById("mobile").value
   var d= document.getElementById("email").valuse
   var e= document.getElementById("pass").value
   var f= document.getElementById("cpass").value

// alert(a)
// alert(b)
// alert(c)
// alert(d)
// alert(e)
// alert(f)

var regx=/^[a-zA-Z]{2,15}$/
var regx1=/^[6-9][0-9]{9}$/
var regx2=/^[0-9a-zA-Z]{6-15}$/
var k=true

if(a==""){  
    document.getElementById("efirst").innerHTML="Enter the User name"
    k=false
}
  else if(regx.test(a)){
    document.getElementById("efirst").innerHTML=""
}
else{
    document.getElementById("efirst").innerHTML="Invalid user name"
    k=false
    }

    if(b==""){
        document.getElementById("elast").innerHTML="Enter the last name"
        k=false
    }
    else if(regx.test(b)){
        document.getElementById("elast").innerHTML=""
    }
    else{
        document.getElementById("elast").innerHTML="Invalid last name"
        k=false
        }

        if(c==""){
            document.getElementById("emobile").innerHTML="Enter the mobile number"
            k=false
        }
            else if(regx1.test(c)){
            document.getElementById("emobile").innerHTML=""
        }
            else{
            document.getElementById("emobile").innerHTML="Invalid mobile number"
            k=false
            }

         if(d=="")
         {
                document.getElementById("eemail").innerHTML="Enter the Email-id"
                k=false
            }
              else {
                document.getElementById("eemail").innerHTML=""
            }
              

          if(e==""){
                    document.getElementById("epass").innerHTML="Enter the password"
                    k=false
                }
                  else if(regx2.test(e)){
                    document.getElementById("epass").innerHTML=""
                }
                else{
                    document.getElementById("epass").innerHTML="Invalid password"
                    k=false
                    
}
          if(f==e){
                   document.getElementById("epass").innerHTML=""
                
          }
          else{
            document.getElementById("epass").innerHTML= "Password is not matching"
            k=false
          }

         if(k){
            return true
         }
         else{
            return false
         }
        }
