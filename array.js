// PROBLEM-1:Manage a Todo list 

let todoList = ["Do laundry", "Pay bills", "Walk the dog"];

// step-1
todoList.push ("Buy groceries")

console.log(todoList);

// step-2
todoList.unshift("Clean room")

console.log(todoList);

// step-3
todoList.pop()
console.log(todoList);

// step-4
console.log(todoList.indexOf("Clean room"));

todoList.shift()
console.log(todoList);

// step-5 
console.log(todoList.length);



// PROBLEM-2:Guest list 

let guests = ["Alice","Bob"];
// step-1
guests.push("Tanjil","Fahim","Tajrimin")

console.log(guests);

// step-2
guests.shift()

console.log(guests);

// step-3
guests.unshift("Ananna")

console.log(guests);

// step-4 
console.log(guests.indexOf("John Doe"));

// step-5 
console.log(guests.length);


// PROBLEM-4:Modify an Array of Colors 

let colors = ["Red","Blue","Green"];

// step -1
colors.push("Yellow")

console.log(colors);

// step-2
colors.shift();
console.log(colors);

// step-3 
colors.unshift("Purple")
console.log(colors);

// step-4 

console.log(colors.indexOf("Blue"));

// step-5 
console.log(colors.length);