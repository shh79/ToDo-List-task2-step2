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
    let str=document.getElementById("DoTitle").value;
    if(str=="" || str==undefined){
        alert("Please fill the blank !!!");
        return ;
    }

    let listOfDo=document.querySelector(".DoList");

    let newItem=`
    <div class="DoItem Active">
        <p>${str}</p>
        <div class="ButtonOfItems">
            <button class="RemoveBTN" onclick="this.parentNode.parentNode.remove();">Remove</button>
            <button onclick="SendDetailToEdit(this.parentNode.parentNode);">Edit</button>
            <button onclick="Done(this);">Done</button>
        </div>
        <div class="IDKeeper">${ID}</div>
    </div>
    `;

    listOfDo.innerHTML=newItem+listOfDo.innerHTML;

    document.getElementById("DoTitle").value="";
    ++ID;

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
    document.getElementById("editID").innerText = element.querySelector(".IDKeeper").innerText;
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
function Done(element){
    let item=element.parentNode.parentNode;
    if(element.textContent=="Done"){
        element.textContent="ReDo";
        element.classList.add("active");
        
        item.classList.remove("Active");
        item.classList.add("Completed");
    }
    else if(element.textContent=="ReDo"){
        element.textContent="Done";
        element.classList.remove("active");

        item.classList.remove("Completed");
        item.classList.add("Active");
    }
    UpdateList();
}