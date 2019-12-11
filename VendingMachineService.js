function Initalizer(){
	this.vendingMachine = function(){
		vendingMachine.prototype.setChange = function(change){_change = change}
		vendingMachine.prototype.getChange = function(){return _change}
		vendingMachine.prototype.setItemNo = function(itemNo){_itemNo = itemNo}
		vendingMachine.prototype.getItemNo = function(){return _itemNo}
		vendingMachine.prototype.setItemNoList = function(itemNoList){_itemNoList = itemNoList}
		vendingMachine.prototype.getItemNoList = function(){return _itemNoList}
		vendingMachine.prototype.setItemList = function(itemList){_itemList = itemList}
		vendingMachine.prototype.getItemList = function(){return _itemList}

	}
}
function VendingMachineService(){
	this.intertCoin = function(coin){
		const init = new Initalizer()
		init.vendingMachine()
		const vm = new vendingMachine()
		vm.setChange(coin)
		alert(`${init.getChange()}원을 받음`)
	}
	this.selectItem = function(itemNo, quantity){}
	this.returnChange() = function(){}
	this.handleOrder = function(quantity, price, itemName){}


}