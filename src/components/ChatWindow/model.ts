export interface Contact {
  name: string;
  lastMessage: string;
  unreadMessages: number;
}

export interface Chat {
  content: string;
  fromMe: boolean;
}
