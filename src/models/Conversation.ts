import Model from 'models/Model';

interface IConversation {
  title: string;

  thumbnail: string;

  participants: string[];
}

export default Model<IConversation>({
  path: 'conversations',
}, {
  title: '',

  thumbnail: '',

  participants: [],
});
