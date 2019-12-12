function InputText(){
	this.make = function(id, type){
		const input = document.createElement('input')
		input.setAttribute('type',type)
		input.setAttribute('id',id)
		return input
	}
}
function InputButton(){
	this.make = function(id,type,val){
		const input = document.createElement('input')
		input.setAttribute('type',type)
		input.setAttribute('value',val)
		input.setAttribute('id',id)
		return input
	}
}	
function Br(){
	this.make = function(){
		const br = document.createElement('br')
		return br
	}
}
function Div(){
	this.make = function(id){
		const div = document.createElement('div')
		div.setAttribute('id',id)
		div.setAttribute('style','border : 1px solid red')
		// div.textContent = text
		return div
	}
}			

function Factory(type){
	switch(type){
		case 'inputText' : return new InputText()
		case 'inputButton' : return new InputButton()
		case 'br' : return new Br()
		case 'div' : return new Div()
	}
}

// 위에 모든 것들이 삽질이었음!! 공유하는 프로퍼티가 없는데 왜 생성자 함수를 쓰냐 객체리터럴 확장 기능을 쓰자~
//이렇게 되면 new 필요가 없다. 
const compo = {
	div(id){
		const div = document.createElement('div')
		div.setAttribute('id',id)
		div.setAttribute('style','border : 1px solid red')
		// div.textContent = text
		return div
	},
	inputText(id, type){
		const input = document.createElement('input')
		input.setAttribute('type',type)
		input.setAttribute('id',id)
		return input
	},
	inputButton(id,type,val){
		const input = document.createElement('input')
		input.setAttribute('type',type)
		input.setAttribute('value',val)
		input.setAttribute('id',id)
		return input
	},
	br(){
/* 		const br = document.createElement('br')
		return br */
		// 위에처럼 const 사용하면 안좋음. 메모리에 계속 남아서 최소한으로 줄여야함!!
		return document.createElement('br')
	}
}