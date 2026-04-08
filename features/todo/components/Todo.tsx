'use client';

import type { FC } from 'react';
import { useTodo } from '../hooks/useTodo';
import { Todo_id } from '../types';

interface TodoProps {
  todoId: Todo_id;
}

// appからparameterを受け取る
export const Todo: FC<TodoProps> = ({ todoId }) => {
  const { todo } = useTodo(todoId);

  if (!todo) return <div>Loading...</div>;

  return (
    <div>
      <p>タイトル：{todo.title}</p>
      <p>説明：{todo.description}</p>
      <p>完了：{todo.completed ? 'Yes' : 'No'}</p>
      <p>作成日：{new Date(todo.createdAt).toLocaleDateString()}</p>
    </div>
  );
}
