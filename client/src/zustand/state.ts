import { User } from "firebase/auth";
import { create } from "zustand";

interface State {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUser = create<State>()((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
}));
