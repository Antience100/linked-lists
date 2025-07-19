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

console.log(list.tail());
list.pop();
console.log(list.tail());
list.pop();
list.pop();
list.pop();
console.log(list.tail());
console.log(list.at(1));
