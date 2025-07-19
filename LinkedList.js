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
      console.log("Invalid index");
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
      return head.value;
    },

    // Returns the end "tail" node of the list
    tail: () => {
      return tail.value;
    },
    // Returns the node from a given index/position in list
    at,
  };
}
