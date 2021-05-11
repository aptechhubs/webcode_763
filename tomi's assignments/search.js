var user = new Object();
user.sentence = "I love coding";

user.search = function () {
    var mysearch = document.getElementById("search").value;

    if (user.sentence.indexOf(mysearch) != -1) {
        alert(mysearch + " is found in the sentence");
    } else {
        alert(mysearch + " is not found in the sentence");
    }
}