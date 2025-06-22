// store/memoStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MemoState {
  memos: string[];
  addMemo: (memo: string) => void;
}

export const useMemoStore = create<MemoState>()(
  persist(
    (set) => ({
      memos: [],
      addMemo: (memo) => set((state) => ({ memos: [...state.memos, memo] }))
    }),
    {
      name: 'memo-storage', // localStorageのキー
    }
  )
);
