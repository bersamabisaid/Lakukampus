import type { QDialog } from 'quasar';

const state = {
  isChatWindowOpen: false,

  position: 'standard' as QDialog['position'],
};

export default state;

export type ChatStateInterface = typeof state;
