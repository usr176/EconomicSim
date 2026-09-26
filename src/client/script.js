// range inputs
let supplyIn = document.getElementById("supplyInput")
let demandIn = document.getElementById("demandInput")

// range input spans
let supplyInSpan = document.getElementById("supplyLabel")
let demandInSpan = document.getElementById("demandLabel")

// Result Div spans
let spanPrice = document.getElementById("price")
let spanQuantity = document.getElementById("quantity")
let spanMsg = document.getElementById("message")

// update display values for sliders
supplyIn.addEventListener("input", () => {
    supplyInSpan.textContent = supplyIn.value;
    updateResult();
})
demandIn.addEventListener("input", () => {
    demandInSpan.textContent = demandIn.value; 
    updateResult();
})

// calcuate result fucntion
// sends request to apis/backend and updates on response
async function updateResult() {
    const supply = Number(supplyIn.value);
    const demand = Number(demandIn.value);

    const response = await fetch(
        `${CONFIG.API_URL}/graph`,
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json"
            },
            body:
            JSON.stringify({
                SupplyShift: supply,
                DemandShift: demand
            })
        }
    );

    const data = await response.json();

    spanMsg.textContent = `${data.message}`
    spanPrice.textContent = `$ ${data.price}`
    spanQuantity.textContent = `${data.quantity}`
    

}