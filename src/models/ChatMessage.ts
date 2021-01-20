import SubModel from 'models/Submodel';
import Chat from 'models/Chat';
import User from 'models/User';
import Item from 'models/Item';

interface IChatMessage {
  from: typeof User['ref']['doc'] | null;
  content: string | ReturnType<typeof Item>['ref']['doc'];
}

const ChatMessage = SubModel({
  parent: Chat,
  path: 'messages',
}, {
  from: null,

  content: '',
} as IChatMessage);

export default ChatMessage;
