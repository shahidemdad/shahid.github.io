// let Button = document.querySelectorAll("x"); 

// function openWindow() { 
//     Button.show(); 
// } 

// function closeWindow() { 
//     Button.close(); 
// } 



const john = {
    firstName: "John",
    lastName: 'Williams',
    birthYear: 1996,
    job: 'student',
    friends: ['Mike', 'Jack', 'Peter',],
    calAge: function() {
        this.age = 2021 - this.birthYear;
        return this.age
    },

    getSummary: function(){
        let name = john.firstName +' '+john.lastName
        const friendsNum = Number(john.friends.length)
        let bestFriend = john.friends[1]
        const statement = name + ' has ' + friendsNum + ' friends, and his best friend is called ' + bestFriend +'.'
        return statement
        // return( 'has', john.friends.length, 'friends, and his best friend is called', john.friends[1],'.')
    }
}
console.log('Task1:')
console.log(john.firstName, john.lastName, 'has', john.friends.length, 'friends, and his best friend is called', john.friends[1],'.')
console.log('Task2:')
console.log(john.getSummary())

var elements = document.getElementsByClassName("button");

var visibleFunction = function() {
  let d = document.getElementById("openModal");
  d.className += " visible";
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', visibleFunction, false);
}

var noSightFunction = function(){
  let d = document.getElementById("openModal");
  d.classList.remove("visible");
}

var closeButton = document.getElementById("closebutton")
closeButton.addEventListener('click', noSightFunction, false)