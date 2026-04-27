'use client';

import { FC } from 'react';
import Link from 'next/link';
import { useDelete } from '../hooks/useDelete';
import { TodoId } from '../types';

interface DeleteProps {
  todo_id: TodoId;
}


export const Delete: FC<DeleteProps> = ({ todo_id }) => {
  const { deleteResponse, loading, error } = useDelete(todo_id);

  if (loading) return <p>Loading...</p>;
  if (error)  return <p>Error: {error.message}</p>;
  if (!deleteResponse) return <p>No data found.</p>;

  return (
    <div>
      <div>
        <Link href='/todos'>← Back to list</Link>
      </div>
      <div>
        <h1>削除完了</h1>
        <p>Todo ID: {todo_id}</p>
        <p>削除リクエストが正常に完了しました。</p>
        <pre>{JSON.stringify(deleteResponse, null, 2)}</pre>
      </div>
    </div>
  );
};
