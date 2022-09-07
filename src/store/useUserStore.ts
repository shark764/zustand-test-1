import create from 'zustand';
import { devtools } from 'zustand/middleware';

export interface User {
  name: string;
  age: number;
}

export interface UserState {
  user: User;
  changeUsersAge: (age: number) => void;
  changeUsersName: (name: string) => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    (set) => ({
      // Initial State
      user: {
        name: 'User 1',
        age: 23,
      },

      // Methods to manipulate state
      changeUsersAge: (age: number) => {
        set((state) => ({
          user: {
            ...state.user,
            age,
          },
        }));
      },
      changeUsersName: (name: string) => {
        set((state) => ({
          user: {
            ...state.user,
            name,
          },
        }));
      },
    }),
    { name: 'user-store' }
  )
);
