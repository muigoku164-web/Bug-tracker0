export const storage = {
  async get(key) {
    return { value: localStorage.getItem(key) };
  },
  async set(key, value) {
    localStorage.setItem(key, value);
  }
};
