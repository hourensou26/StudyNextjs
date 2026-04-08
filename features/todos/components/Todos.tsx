'use client';

import Link from 'next/link';

import { useTodos } from '../hooks/useTodos';

export const Todos = () => {
  const { todos } = useTodos();

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
