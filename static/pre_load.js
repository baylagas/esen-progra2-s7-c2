
/*
preload information to local storage users
*/
function preLoadUsers() {

    var userArray = [{
        user: "bal",
        password: "123"
    }, {
        user: "rod",
        password: "234"
    }, {
        user: "ted",
        password: "345"
    }]

    localStorage.setItem("lUserArray", JSON.stringify(userArray))
}