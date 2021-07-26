function SubmitDo(){
    //var list=document.getElementsByClassName("DoList");
    var item=document.createElement("div");
    item.className="DoItem";

    var str=document.getElementById("DoTitle").value; 

    var p=document.createElement("p");
    var temp=document.createTextNode(str);
    p.appendChild(temp);

    var button=document.createElement("button");
    button.value="Done";
    button.onclick="RemoveItem(button);";
    //button.onclick="this.parentNode.remove();";

    item.appendChild(p);
    item.appendChild(button);

    document.getElementsByClassName("DoList").prepend(item);
}
function RemoveItem(element){
    element.parentNode.Remove();
}