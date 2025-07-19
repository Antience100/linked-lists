import { LinkedList } from "./LinkedList.js";

const list = LinkedList();

list.prepend("Monkey");
list.append("Dog");
list.append("Turkey");
list.append("Duck");
list.append("Cow");
list.append("Tiger");
list.append("Gorilla");
list.append("Lion");
list.append("Elephant");

// console.log(list.tail());
// list.pop();
// console.log(list.tail());
// list.pop();
// list.pop();
// list.pop();
// console.log(list.tail());
// console.log(list.at(1));

console.log(list.contains("Tiger"));
