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

console.log(list.find("Turkey"));