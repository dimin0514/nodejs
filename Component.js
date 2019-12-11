function InputText(){
	this.make = function(){
		const input = document.createElement('input')
		input.setAttribute('type','text')
		input.setAttribute('id','val')
		return input
	}
}
function InputButton(){
	this.make = function(){
		const input = document.createElement('input')
		input.setAttribute('type','button')
		input.setAttribute('value','버튼')
		input.setAttribute('id','btn')
		return input
	}
}	
function Br(){
	this.make = function(){
		const br = document.createElement('br')
		return br
	}
}		
function Factory(type){
	switch(type){
		case 'inputText' : return new InputText()
		case 'inputButton' : return new InputButton()
		case 'br' : return new Br()
	}
}