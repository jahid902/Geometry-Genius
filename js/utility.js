
function inputFieldValue(id){
    const inputCapture = document.getElementById(id);
    const inputValue = inputCapture.value;
    const inputConvert = parseFloat(inputValue);
    inputCapture.value = "";
    return inputConvert;
}

function setTableData(sum, elementName, resultValue){
   const table = document.getElementById("table-body");
   const btn = document.createElement("button");
   btn.innerText = "convert to m2"
   const td = document.createElement("td");
   td.innerHTML = `
   <td>${sum}</td>
   <td>${elementName}</td>
   <td>${resultValue}</td>
   <td class="px-6 py-3">${btn}</td>
   `
   table.appendChild(td);
}

function justInnerText(id){
    const elementCapture = document.getElementById(id);
    const elementText = elementCapture.innerText;
    return elementText;
}


function setInnerText(id, value){
    document.getElementById(id).innerText = value;    
}



function JustInputValue(id){
    const inputCapture = document.getElementById(id);
    const inputValue = inputCapture.value;
    return inputValue;
}



