// app/todos/[todo_id]/page.tsx
import { Todo } from '@/features/todo';

export default async function TodoPage({ params }: { params: Promise<{ todo_id: string }> }) {
  const { todo_id } = await params;

  return <Todo todoId={todo_id} />;
}
