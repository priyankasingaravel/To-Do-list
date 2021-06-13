let input = document.getElementById("userInput");
let button = document.getElementById("enter");

date(); //call date function

function date(){
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth()+1;
    let year = d.getFullYear();
    
    let dateStr = date + "/" + month + "/" + year;
    document.getElementById("date").innerHTML = dateStr;
    
}



function inputLength(){
	return input.value.length;  //returns input length
} 

function createElement(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    let ul = document.getElementById("list");
    ul.appendChild(li);
    
    input.value = ""; //making input clear
    
    function crossOut(){
    li.classList.add("done");
}
li.addEventListener("click",crossOut); //call crossout
    
    //deletebutton
    var delButton = document.createElement("button");
    delButton.appendChild(document.createTextNode("X"));
    li.appendChild(delButton);
    delButton.addEventListener("click",deleteList);
    
    function deleteList(){
        li.classList.add("delete");
    }
}


function addListAfterclick(){
    if(inputLength() > 0)
    {
        createElement();
    }
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		
       createElement(); 
	} 
}


input.addEventListener("keypress", addListAfterKeypress);
button.addEventListener("click",addListAfterclick);