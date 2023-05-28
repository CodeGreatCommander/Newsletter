var form=document.getElementById("form");
console.log("called");
form.addEventListener('submit',async function(event){
    event.preventDefault();
    console.log("called");
    console.log(document.getElementById("name").value+""+document.getElementById("email").value)
    fetch("http://localhost:3000/email/", {method: "POST",
    headers:{name:document.getElementById("name").value,email:document.getElementById("email").value
}}).then(res=>res.json()).then((x)=>{alert("Account Added")})
})