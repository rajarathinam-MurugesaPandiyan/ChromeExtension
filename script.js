


const injectElement = document.createElement('div')
const injectElement2 = document.createElement('button')


const init = function (){
    
    injectElement.className = "rustyZone";
    injectElement.innerHTML = `
    <div class = "Links">
    <a href = https://www.facebook.com/ target = "blank">Facebook</a>
    <a  href = https://www.linkedin.com/ target = "blank">Linked In</a> 
    <a  href = https://fibonalabs.com/ target = "blank">Fibonalabs</a> 
    <a  href = https://www.google.co.in/ target = "blank">Google</a> 
    <a  href = https://www.ibm.com/us-en/ target = "blank">IBM</a> 
    <a  href = https://developer.chrome.com/ target = "blank">Chrome Dev</a>
    <div>`
   
    document.body.appendChild(injectElement);
   
}

const Button = function (){
    injectElement2.innerHTML = "toggle"
    injectElement2.className = "rusty";
    document.body.appendChild(injectElement2); 
}
 

// function Alert (){
//     window.alert("toggle")
// }



init();
Button();

var condition = false


function toggleAction (){
   if (condition === true)
       injectElement.style.display = "none";
   else
      injectElement.style.display = "block";
}

injectElement2.onclick = function(){
    condition = !condition;
    toggleAction();
}

// Alert();

