let filterType='All';
let ID=0;
function UpdateList(){
    let items=document.querySelectorAll(".DoItem");
    switch(filterType){
        case "All":
            items.forEach(item => {
                item.style.display="flex";
            });
            break;
        case "Active":
            items.forEach(item => {
                if(item.classList.contains("Completed")){
                    item.style.display="none";
                }
                else{
                    item.style.display="flex";
                }
            });
            break;
        case "Completed":
            items.forEach(item => {
                if(item.classList.contains("Active")){
                    item.style.display="none";
                }
                else{
                    item.style.display="flex";
                }
            });
            break;
    }
}
function SubmitDo(){
    var str=document.getElementById("DoTitle").value;
    if(str=="" || str==undefined){
        alert("Please fill the blank !!!");
        return ;
    }

    var listOfDo=document.getElementsByClassName("DoList")[0];
    var item=document.createElement("div");
    item.className="DoItem";
    item.classList.add("Active");
    item.setAttribute("onclick","SendDetailToEdit(this);");

    var p=document.createElement("p");
    var temp=document.createTextNode(str);
    p.appendChild(temp);

    var button=document.createElement("button");
    button.textContent="Done";
    button.setAttribute("onclick","this.parentNode.remove();");

    item.appendChild(p);
    item.appendChild(button);

    item.innerHTML+=`<div class="IDKeeper">${ID}</div>`;

    listOfDo.prepend(item);

    ++ID;

    document.getElementById("DoTitle").value="";

    UpdateList();
}
function Filter(button){
    filterType=button.textContent;

    let filters = document.querySelector(".filters");
    filters=filters.querySelectorAll("button");
    filters.forEach(filter => {
        filter.classList.remove("active");
    });

    button.classList.add("active");

    UpdateList();
}
function EditDo(anwser=false){
    let newText=document.getElementById("EditTitle");

    if((newText.value=="" || newText.value==undefined) && anwser){
        alert('Title can not be empty!');
        return;
    }

    let ID=document.getElementById("editID").innerText;
    if(anwser){
        let items=document.querySelectorAll(".IDKeeper");
        items.forEach(item => {
            console.log(item.parentNode);
            if(item.innerText==ID){
                item.parentNode.querySelector("p").innerText=newText.value;
            }
        });
    }
    newText.value="";
    ID="";
    document.getElementById("YesBTN").setAttribute("disabled","true");
    //document.getElementById("YesBTN").disabled=true;
    document.getElementById("NoBTN").setAttribute("disabled","true");
    //document.getElementById("NoBTN").disabled=true;
    newText.disabled=true;

    document.querySelectorAll(".DoItem").forEach(item => {
        // item.setAttribute("disabled","false");
        item.disabled=false;
    });
}
function SendDetailToEdit(element){
    let textBox=document.getElementById("EditTitle");
    textBox.value = element.querySelector("p").innerText;
    document.getElementById("editID").innerText = element.querySelector("div").innerText;
    document.getElementById("YesBTN").setAttribute("disabled","false");
    document.getElementById("NoBTN").setAttribute("disabled","false");
    document.getElementById("YesBTN").disabled=false;
    document.getElementById("NoBTN").disabled=false;
    textBox.disabled=false;
    

    document.querySelectorAll(".DoItem").forEach(item => {
        // item.setAttribute("disabled","true");
        item.disabled=true;
    });
}