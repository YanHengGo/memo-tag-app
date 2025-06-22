'use client';

import { useState } from 'react';
import { useMemoStore } from '../lib/store';

export default function Home() {
  const [input, setInput] = useState('');
  const { memos, addMemo } = useMemoStore();

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">メモ帳 with タグ分類機能</h1>

      <div className="mb-4">
        <textarea
          className="w-full border rounded p-2"
          rows={4}
          placeholder="メモを入力してください"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => {
            if (input.trim() !== '') {
              addMemo(input.trim());
              setInput('');
            }
          }}
        >
          メモを追加
        </button>
      </div>

      <ul className="space-y-2">
        {memos.map((memo) => (
          <li key={memo.id} className="border p-2 rounded">
            {memo.content}
          </li>
        ))}
      </ul>
    </div>
  );
}