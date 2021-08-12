let filterType='All';
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