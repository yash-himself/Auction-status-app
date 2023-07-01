
let cookie = document.cookie
const box =document.getElementById("box");
let caseNumber=localStorage.getItem("caseNumber").split("=");
let caseIs =caseNumber[1];

const api = `https://gauravgitacc.github.io/postAppData/auctionData.json`

let colorMap ={
    "APPROVED" :"BLUE",
    "PENDING" :"YELLOW",
    "CANCELLED":"RED",
    "COMPLETED": "GREEN"
}
let fontMap = {
    "APPROVED" :"white",
    "PENDING" :"black",
    "CENCELLED":"white",
    "COMPLETED":"white"
}




function renderDoc(data){

    data.forEach(item => {

        if(caseIs == item.caseNumber){

            let {status,caseNumber, date, fromLocation, toLocation , fare} = item;


            let card = document.createElement("div");
            card.className="card";
        
            card.innerHTML=`<div class="up">
            <div>
                <span style="background-color: ${colorMap[status]}; color: ${fontMap[status]};" id="status">${status} </span>
                <p id="id">${caseNumber}</p>
            </div>
            <div class="date">${date}</div>
        </div>
        <hr>
        <div class="down">
            <p class="toLocation">${fromLocation}</p>
            <p class="fromLocation">${toLocation} </p>
            <p class="fair">${fare}</p>
        </div>`
    
        box.appendChild(card);
        
        }
    })



}

async function fetchData(){

    try {
        
        let response = await fetch(api)
        let data = await response.json();
        renderDoc(data)
    } 
    catch (error) {
        console.log(error.message);
    }

}

fetchData()
