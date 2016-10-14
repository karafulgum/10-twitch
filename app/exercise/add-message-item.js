import createMessage from './create-message-item';

export default function addMessageItem(list, data) {
  const li = createMessage(data);
  list.appendChild(li);
}
