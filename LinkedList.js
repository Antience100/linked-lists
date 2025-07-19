import { Node } from "./Node.js";

export function LinkedList() {
  let head = null;
  let tail = null;
  let size = 0;

  // Adding new node to end of list
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

  // Adding new node to start of list
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

  // Returns the node from a given index/position in list
  const at = (index) => {
    if (index < 1 || index > size) {
      console.log("Invalid index value!");
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

  // Removes the end "tail" node from the list
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

  // Returns true if passed in a value that is in the list, otherwise return false
  const contains = (value) => {
    if (head === null) {
      console.log("No list exists to search!");
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

  // Returns the index of a node containing the value, or null if no node found
  const find = (value) => {
    if (head === null) {
      console.log("No list exists to search!");
      return null;
    }

    let current = head;
    let index = 1;
    while (current.next) {
      current = current.next;
      index++;
      if (current.value === value) {
        return index;
      }
    }
    return null;
  };

  // Prints out the lists objects as strings e.g. ( value ) -> ( value ) -> ( value) -> null
  const toString = () => {
    if (head === null) {
      console.log("No list to print out!");
      return null;
    }
    let strings = "";
    let current = head;
    while (current.next) {
      strings += `(${current.value}) -> `;
      current = current.next;
    }
    strings += "null";
    return strings;
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
    // Returns the index of a node containing the value, or null if no node found
    find,
    // Prints out the lists objects as strings e.g. ( value ) -> ( value ) -> ( value) -> null
    toString,
  };
}
