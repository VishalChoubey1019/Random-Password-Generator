const smol = "abcdefghijklmnopqrstuvwxyz";
const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const char = "@!$";
let password="";
let savedpasswordsize;
let passwordsize; 
let onetimecharuse = false;

sizealert();

function sizealert(){

    passwordsize = window.prompt("Enter length of the password: ");
    while(passwordsize > 15 || passwordsize < 3)   
    {
        alert("Size Range (3 - 15)");
        passwordsize = window.prompt("Enter length of the password: ");
    }    

    savedpasswordsize = passwordsize;
}

function resizefun(){

    sizealert();
}

function button(){

    onetimecharuse = false;
    
    while(passwordsize)
    {   
        
        x = Math.floor( Math.random() * 4 );

        if(x<1 && !onetimecharuse)
        {
            charfunction();
            onetimecharuse = true;
        }    
        else if(x<2)
        capsfunction();
        
        else if(x<3)
        numsfunction();
        
        else
        smolfunction();

        passwordsize--;
    }

    passwordsize = savedpasswordsize;
    document.getElementById("output").textContent = "Your Password : " + password;
    password = "";
}


function smolfunction(){

    password += smol[[Math.floor(Math.random() * smol.length)]];

}

function capsfunction(){

    password += random = caps[[Math.floor(Math.random() * caps.length)]];
    
}

function numsfunction(){

    password += random = nums[[Math.floor(Math.random() * nums.length)]];
    
}

function charfunction(){

    password += random = char[[Math.floor(Math.random() * char.length)]];

}
