
const endpoint =`https://gauravgitacc.github.io/postAppData/auctionData.json`
const container =document.getElementById("container");

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

// function randerAuction(card){
//     console.log(card)
// }


function renderUi(data){
// console.log(data)
    data.forEach(item => {
        let {status,caseNumber, date, fromLocation, toLocation , fare} = item;

        function navigate(){
            // randerAuction(item)
            let a = document.createElement("a");
            a.href=`./auction.html`
            document.cookie =`caseNumber=${caseNumber}; path=/auction.html`
            a.click();

        }
        


        let card = document.createElement("div");
        card.className="card";
        card.addEventListener("click",navigate);
    
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


    

        container.appendChild(card);

    });

   
}


async function fetchData(){

    try {
        
        let response = await fetch(endpoint)
        let data = await response.json();
        renderUi(data)
    } 
    catch (error) {
        console.log(error.message);
    }

}

fetchData()




