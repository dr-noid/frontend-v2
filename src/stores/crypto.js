import { defineStore } from "pinia";

export const useCryptoStore = defineStore({
  id: "crypto",
  state: () => ({
    example: 0,
  }),
  getters: {
    doubleExample: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
