export default function reverseList(list, destination) {
  for (let i = list.children.length - 1; i >= 0; i--) {
    const copy = list.children[i].cloneNode(true);

    destination.appendChild(copy);
  }
}
