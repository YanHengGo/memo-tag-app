// lib/store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Memo = {
  id: string;
  content: string;
};

interface MemoState {
  memos: Memo[];
  addMemo: (content: string) => void;
}

export const useMemoStore = create<MemoState>()(
  persist(
    (set) => ({
      memos: [],
      addMemo: (content) =>
        set((state) => ({
          memos: [
            ...state.memos,
            {
              id: Date.now().toString(), // 一意なID（timestamp）
              content,
            },
          ],
        })),
    }),
    {
      name: 'memo-storage',
    }
  )
);