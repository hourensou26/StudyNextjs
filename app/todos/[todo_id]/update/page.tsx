// app/todos/[todo_id]/update/page.tsx
import { Update } from '@/features/update';

export default async function UpdatePage({ params }: { params: Promise<{ todo_id: string }> }) {
  const { todo_id } = await params;

  return <Update todoId={todo_id} />;
}
