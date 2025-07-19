import { LinkedList } from "./LinkedList.js";

const list = LinkedList();

list.append("Monkey");
list.append("Dog");
list.append("Turkey");
list.append("Duck");
list.append("Cow");
list.append("Tiger");

console.log(list.toString());