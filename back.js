function SubmitDo(){
    var str=document.getElementById("DoTitle").value;
    if(str=="" || str==undefined){
        alert("Please fill the blank !!!");
        return ;
    }

    var listOfDo=document.getElementsByClassName("DoList")[0];
    var item=document.createElement("div");
    item.className="DoItem"; 

    var p=document.createElement("p");
    var temp=document.createTextNode(str);
    p.appendChild(temp);

    var button=document.createElement("button");
    button.textContent="Done";
    button.setAttribute("onclick","this.parentNode.remove();");

    item.appendChild(p);
    item.appendChild(button); console.log(item);

    listOfDo.prepend(item);

    document.getElementById("DoTitle").value="";
}