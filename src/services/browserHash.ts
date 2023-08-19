import { v4 } from 'uuid';

const STORAGE_ITEM_NAME = 'browserHash';

export const getBrowserHash = () => {
  let hash = localStorage.getItem(STORAGE_ITEM_NAME);

  if (hash === null) {
    hash = v4();
    localStorage.setItem(STORAGE_ITEM_NAME, hash);
  }

  return hash;
};
