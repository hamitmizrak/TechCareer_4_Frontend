/*  */
const submit_form=()=>{
    //alert("Çalıştı")
    // Browser sen dur 
    //event.preventDefault();

    let username,surname,email,password;
    username=document.getElementById("uname").value;
    surname=document.getElementById("usurname").value;
    email=document.getElementById("uemail").value;
    password=document.getElementById("upassword").value;

    // Local Storage
    localStorage.setItem("user_email", email);
    localStorage.setItem("user_password", password);

    alert(localStorage.getItem("user_email"));

    document.getElementById("result_id").innerHTML="<b>"+username+ "</b>" ;
}