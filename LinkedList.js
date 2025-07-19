import { Node } from "./Node.js";

export function LinkedList() {
  let head = null;
  let tail = null;
  let size = 0;

  const append = (value) => {
    const node = Node(value);

    if (head === null) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
    size++;
  };

  const prepend = (value) => {
    const node = Node(value);

    if (head === null) {
      head = node;
      tail = node;
    } else {
      node.next = head;
      head = node;
    }
    size++;
  };

  const at = (index) => {
    if (index < 1 || index > size) {
      console.log("Invalid index value");
      return null;
    }

    let current = head;
    let count = 1;

    while (current !== null) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.next;
    }
    return null;
  };

  const pop = () => {
    if (head === null) {
      console.log("Nothing to pop!");
      return null;
    } else if (head === tail) {
      head = null;
      tail = null;
      size = 0;
    }

    let current = head;
    let prev = head;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    tail = prev;
    tail.next = null;
    size--;
  };

  const contains = (value) => {
    if (head === null) {
      console.log("No list exists to check");
      return null;
    }

    if (value === head.value && size === 1) {
      console.log("Contains " + value + ": " + true);
      return true;
    }

    let current = head;
    while (current.next) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return {
    // Adding new node to end of list
    append,
    // Adding new node to start of list
    prepend,
    // Returns total size of the list
    size: () => {
      return size;
    },
    // Returns the first "head" node of the list
    head: () => {
      if (head !== null) {
        return head.value;
      } else {
        return null;
      }
    },

    // Returns the end "tail" node of the list
    tail: () => {
      if (tail !== null) {
        return tail.value;
      } else {
        return null;
      }
    },
    // Returns the node from a given index/position in list
    at,
    // Removes the end "tail" node from the list
    pop,
    // Returns true if passed in a value that is in the list, otherwise return false
    contains,
  };
}
