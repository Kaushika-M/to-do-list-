function add(){
    let x=document.querySelector("#in");
    if(x.value.trim()===""){
        alert("Please enter the task to add");
        return;
    }
    document.getElementById("list").innerHTML+="<li>"+x.value+ " <button onclick='this.parentElement.remove()'>Remove</button></li>";

     document.getElementById("in").value = "";
}