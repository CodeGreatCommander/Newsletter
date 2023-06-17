var form=document.getElementById("form");
console.log("called");
form.addEventListener('submit',async function(event){
    event.preventDefault();
    fetch("http://localhost:3000/massmailer/", {method: "POST",
    headers:{subject:document.getElementById("subject").value,html:document.getElementById("html").value,text:document.getElementById("text").value
}}).then(res=>res.json()).then((x)=>{alert("Account Added")})
});