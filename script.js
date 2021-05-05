var selector = document.getElementById("mycolor");
selector.addEventListener("change",function(){
	var index = this.selectedIndex;
	var myreal = this.options[index].value;
	//alert("background color is about to be changed" +myreal);
	console.log(typeof(myreal));
document.getElementById("creation").style.backgroundColor = myreal;
});