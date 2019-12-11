function Animal(){let _name}
function Human(){Animal.apply(this, arguments)}
function SuperHero(){Human.apply(this, arguments)}
/* function Main(){
	return {
		test : function(){
			Animal.prototype.setName = function(name){this.name = name}
			Animal.prototype.getName = function(){return this.name}
		}
	}
} */