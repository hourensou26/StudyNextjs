'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { useTodo } from '../hooks/useTodo';
import { TodoId } from '../types';

interface TodoProps {
  todoId: TodoId;
}

// appからparameterを受け取る
export const Todo: FC<TodoProps> = ({ todoId }) => {
  const { todo, loading, error } = useTodo(todoId);

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error.message}</p>;
  if (!todo) return <p>データがありません</p>;

  return (
    <div>
      <div>
        <Link href='/todos'>← Back to list</Link>
        <p>タイトル：{todo.title}</p>
        <p>説明：{todo.description}</p>
        <p>完了：{todo.completed ? 'Yes' : 'No'}</p>
        <p>作成日：{new Date(todo.createdAt).toLocaleDateString()}</p>
      </div>
      <div>
      <Link href={`/todos/${todoId}/update`}>Edit</Link>
      </div>
    </div>
  );
};
