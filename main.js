import { LinkedList } from "./LinkedList.js";

const list = LinkedList();

list.append("Turkey");
list.append("Duck");
list.append("Cow");
list.append("Tiger");
list.prepend("Monkey");
list.prepend("Gorilla");
list.prepend("Lion");
list.prepend("Elephant");
list.prepend("Dog");

// console.log("Head: " + list.head());
// console.log("Tail: " + list.tail());
// console.log(list);
// console.log(list.size());
let size = list.size();
let middle = Math.ceil(size / 2);
console.log(size, middle);
console.log(list.at(middle));