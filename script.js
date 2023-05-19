// let SaveEl = document.getElementById("save-btn");
// function savein(){
//     console.log("Buttin clicked");
// }


// by addEventListner methord


//Learning localStorage

// let myLeads = `["www.example.com"]`;
// myLeads = JSON.parse(myLeads);
// myLeads.push("insert");
// JSON.stringify(myLeads);
// console.log(typeof myLeads);




let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsfromLocalStorage =JSON.parse(localStorage.getItem("myLeads"));

if (leadsfromLocalStorage) {
    myLeads = leadsfromLocalStorage;
    render(myLeads);
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads" , JSON.stringify(myLeads))
        render(myLeads);
    })
})

deleteBtn.addEventListener("dblclick" , function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})

inputBtn.addEventListener("click" , function (){
    myLeads.push(inputEl.value);
    inputEl.value = "";

    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    render(myLeads);
})

function render(leads){
    let listIteam="";
    for(let i=0;i<leads.length ;i++){


        // listIteam += "<li> <a target ='_blank' href ='"+ myLeads[i] + "'>"+myLeads[i] + "</a></li>";

    listIteam += `
        <li>
            <a target ='_blank' href ='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>`        
    } 
    ulEl.innerHTML = listIteam;
}