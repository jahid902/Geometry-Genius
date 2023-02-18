// some outside works such as number change and superscript text-------------

let sum = 0;
const text = 'cm';
const text2 = '2';
const upText = text2.sup();
const up2Text = text + upText;
const finalText = up2Text;

const newText = 'm';
const text3 = '2';
const upText3 = text3.sup();
const up3Text = newText + upText3;
const finalText3 = up3Text;

// Click event works ------------------------------------------------

document.getElementById("divert-btn").addEventListener("click", function(){

    window.location.href = "divert-page.html";
})

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

document.getElementById("rect-btn").addEventListener("click", function(){
   
    const value1 = document.getElementById("rect-1").value;
    const value2 = document.getElementById("rect-2").value;
    const title = justInnerText("rect-title");
    const input1 = inputFieldValue("rect-1");
    const input2 = inputFieldValue("rect-2");
    const totalArea = input1 * input2; 
    const totalAreaFix = totalArea.toFixed(2);   
    if(input1 <= 0 || input2 <= 0 || value1 == "" || value2 == ""){
        return alert("type a number, which is positive");
    }
    sum += 1;   
    setTableData(sum, title, totalAreaFix);    
})

document.getElementById("para-btn").addEventListener("click", function(){
   
    const value1 = document.getElementById("para-1").value;
    const value2 = document.getElementById("para-2").value;
    const title = justInnerText("para-title");
    const input1 = inputFieldValue("para-1");
    const input2 = inputFieldValue("para-2");
    const totalArea = input1 * input2; 
    const totalAreaFix = totalArea.toFixed(2);   
    if(input1 <= 0 || input2 <= 0 || value1 == "" || value2 == ""){
        return alert("type a number, which is positive");
    }
    sum += 1;   
    setTableData(sum, title, totalAreaFix);    
})
document.getElementById("rhom-btn").addEventListener("click", function(){
   
    const value1 = document.getElementById("rhom-1").value;
    const value2 = document.getElementById("rhom-2").value;
    const title = justInnerText("rhom-title");
    const input1 = inputFieldValue("rhom-1");
    const input2 = inputFieldValue("rhom-2");
    const totalArea = 0.5 * input1 * input2; 
    const totalAreaFix = totalArea.toFixed(2);   
    if(input1 <= 0 || input2 <= 0 || value1 == "" || value2 == ""){
        return alert("type a number, which is positive");
    }
    sum += 1;   
    setTableData(sum, title, totalAreaFix);    
})
document.getElementById("pent-btn").addEventListener("click", function(){
   
    const value1 = document.getElementById("pent-1").value;
    const value2 = document.getElementById("pent-2").value;
    const title = justInnerText("pent-title");
    const input1 = inputFieldValue("pent-1");
    const input2 = inputFieldValue("pent-2");
    const totalArea = 0.5 * input1 * input2; 
    const totalAreaFix = totalArea.toFixed(2);   
    if(input1 <= 0 || input2 <= 0 || value1 == "" || value2 == ""){
        return alert("type a number, which is positive");
    }
    sum += 1;   
    setTableData(sum, title, totalAreaFix);    
})
document.getElementById("ellip-btn").addEventListener("click", function(){
   
    const value1 = document.getElementById("ellip-1").value;
    const value2 = document.getElementById("ellip-2").value;
    const title = justInnerText("ellip-title");
    const input1 = inputFieldValue("ellip-1");
    const input2 = inputFieldValue("ellip-2");
    const totalArea = 3.14 * input1 * input2; 
    const totalAreaFix = totalArea.toFixed(2);   
    if(input1 <= 0 || input2 <= 0 || value1 == "" || value2 == ""){
        return alert("type a number, which is positive");
    }
    sum += 1;   
    setTableData(sum, title, totalAreaFix);    
})

// Random color functions ------------------------------------------

$(function(){
    var $container = $('#container');

    $container.mouseenter(function(){
      var rgb = [
        parseInt(Math.random() * 255),
        parseInt(Math.random() * 255),
        parseInt(Math.random() * 255)
      ]; 
      $container
        .css('background-color', 'rgb(' + rgb.join(',') + ')')
        .css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');
    });
  });
$(function(){
    var $container = $('#container-1');

    $container.mouseenter(function(){
      var rgb = [
        parseInt(Math.random() * 255),
        parseInt(Math.random() * 255),
        parseInt(Math.random() * 255)
      ]; 
      $container
        .css('background-color', 'rgb(' + rgb.join(',') + ')')
        .css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');
    });
  });
$(function(){
    var $container = $('#container-2');

    $container.mouseenter(function(){
      var rgb = [
        parseInt(Math.random() * 255),
        parseInt(Math.random() * 255),
        parseInt(Math.random() * 255)
      ]; 
      $container
        .css('background-color', 'rgb(' + rgb.join(',') + ')')
        .css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');
    });
  });
$(function(){
    var $container = $('#container-3');

    $container.mouseenter(function(){
      var rgb = [
        parseInt(Math.random() * 255),
        parseInt(Math.random() * 255),
        parseInt(Math.random() * 255)
      ]; 
      $container
        .css('background-color', 'rgb(' + rgb.join(',') + ')')
        .css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');
    });
  });
$(function(){
    var $container = $('#container-4');

    $container.mouseenter(function(){
      var rgb = [
        parseInt(Math.random() * 255),
        parseInt(Math.random() * 255),
        parseInt(Math.random() * 255)
      ]; 
      $container
        .css('background-color', 'rgb(' + rgb.join(',') + ')')
        .css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');
    });
  });
$(function(){
    var $container = $('#container-5');

    $container.mouseenter(function(){
      var rgb = [
        parseInt(Math.random() * 255),
        parseInt(Math.random() * 255),
        parseInt(Math.random() * 255)
      ]; 
      $container
        .css('background-color', 'rgb(' + rgb.join(',') + ')')
        .css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');
    });
  });



// common functions used in this project -----------------------------------
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
    <td>${resultValue}${finalText}</td>
    <button class="btn bg-blue-400 lowercase p-1.5 mt-2 rounded-md text-white">
    convert to ${finalText3}</button>
    `     
    table.appendChild(tr);
 }

 function justInnerText(id){
    const elementCapture = document.getElementById(id);
    const elementText = elementCapture.innerText;
    return elementText;
}