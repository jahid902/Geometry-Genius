let sum = 0;
document.getElementById("tri-btn").addEventListener("click", function(){
   
    const value1 = document.getElementById("tri-1").value;
    const value2 = document.getElementById("tri-2").value;
    const title = justInnerText("tri-title");
    const input1 = inputFieldValue("tri-1");
    const input2 = inputFieldValue("tri-2");
    const totalArea = 0.5 * input1 * input2; 
    const totalAreaFix = totalArea.toFixed(2);   
    if(input1 <= 0 || input2 <= 0 || value1 == "" || value2 == ""){
        return alert("type a number, which is positive");
    }
    sum += 1;   
    setTableData(sum, title, totalAreaFix);    
})















function inputFieldValue(id){
    const inputCapture = document.getElementById(id);
    const inputValue = inputCapture.value;
    const inputConvert = parseFloat(inputValue);
    inputCapture.value = "";
    return inputConvert;
}

function setTableData(sum, elementName, resultValue){
    const table = document.getElementById("table-body");
    const tr = document.createElement("tr");       
    tr.innerHTML = `
    <td>${sum}</td>
    <td>${elementName}</td>
    <td>${resultValue}</td>
    <button class="btn bg-blue-400 lowercase p-1.5 mt-2 rounded-md text-white">convert to m2</button>
    `     
    table.appendChild(tr);
 }

 function justInnerText(id){
    const elementCapture = document.getElementById(id);
    const elementText = elementCapture.innerText;
    return elementText;
}