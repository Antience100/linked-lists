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
    append,
    prepend,
    size: () => {
      return size;
    },
    head: () => {
      return head.value;
    },
    tail: () => {
      return tail.value;
    },
    at,
  };
}
