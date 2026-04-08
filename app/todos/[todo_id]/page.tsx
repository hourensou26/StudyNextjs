// app/todos/[todo_id]/page.tsx
import { FC } from 'react';
import { Todo } from '@/features/todo';

export default async function TodoPage({ params }: { params: Promise<{ todo_id: string }> }) {
  const { todo_id } = await params;

  return <Todo todoId={todo_id} />;
}
