import { Contact } from 'components/ChatWindow/model';
import { internet, lorem, random } from 'faker';

export default function useChat() {
  const getContactList = () => Array.from(Array(10)).map(() => ({
    name: internet.userName(),
    lastMessage: lorem.words(),
    unreadMessages: random.number({ min: 0, max: 50, precision: 1 }),
  } as Contact));

  return {
    getContactList,
  };
}
