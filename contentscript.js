function update() {
    let sections = document.getElementsByTagName('section');
    for(i=0; i<sections.length;i++){
		if(!sections[i].style.width){
			sections[i].setAttribute("style", "resize: horizontal; overflow: auto; ");
		}
    }
}


var observer = new MutationObserver(function(mutations) {
  update();  
});

var config = { attributes: true, childList: true, characterData: true };

function observ(){
	let column = document.getElementsByClassName("app-columns")[0]; 
	
	console.log(column);
	
	if(!column){		
		 window.setTimeout(observ,500)
		return 
	}	
	update();
	observer.observe(column, config);
}

observ();