import { create } from 'zustand';

type Memo = {
  id: number;
  content: string;
};

type Store = {
  memos: Memo[];
  addMemo: (content: string) => void;
};

export const useMemoStore = create<Store>((set) => ({
  memos: [],
  addMemo: (content) =>
    set((state) => ({
      memos: [
        ...state.memos,
        { id: Date.now(), content },
      ],
    })),
}));