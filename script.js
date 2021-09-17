var button = document.getElementById("button");
var userInput = document.getElementById("input");
var refresList = document.getElementById("refresh");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");


database=[];

function userInputValue() {
   return userInput.value
}

function createListelement() {
    var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

    // CREATE A "DONE" BUTTON ELEMENT, THEN APPEND TEXT TO BUTTON AND APPEND BUTTON TO LIST
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Done!"));
	li.appendChild(button);
    button.classList.add("btn-primary")
    button.classList.add("doneB")
	button.onclick=underlineParent;
   

    // CREATE A "DELETE" BUTTON ELEMENT, THEN APPEND TEXT TO BUTTON AND APPEND BUTTON TO LIST
    var button = document.createElement("button"); 
    button.appendChild(document.createTextNode("Delete!"));
    li.appendChild(button);
    button.classList.add("btn-danger")
    button.classList.add("deleteB")
    button.onclick=removeParent;

 
    // PUSH USER IMPUT ELEMENT TO A DATABASE
    database.push(userInput.value);
    console.log(database)
    input.value = ""
}
 
//************************************************************************/

function underlineParent(event){
	event.target.parentNode.classList.toggle("done");
}


function removeParent(evt){
	evt.target.parentNode.remove();
} 

//************************************************************************/

button.addEventListener("click", function(){
    if(userInputValue() !== ""){        
        createListelement()
    }
});


userInput.addEventListener("keypress", function(event){
    if(userInputValue() !== "" && event.keyCode === 13){        
        createListelement()
    }
});

refresList.addEventListener("click", function(){
    location.reload()
});




