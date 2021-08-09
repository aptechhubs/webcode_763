var mySelector = document.getElementById("myColor");

mySelector.addEventListener('change', function () {
    var index = this.selectedIndex;
    var myReal = this.options[index].value;
    document.body.style.backgroundColor = myReal;
    // console.log(index);
    // console.log("This is " + myReal);
});
