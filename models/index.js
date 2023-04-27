import { FileStorage } from './engine/file_storage.js'

export const storage = new FileStorage();
storage.reload();
