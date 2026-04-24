'use client';

import { FC, useActionState } from 'react';
import Link from 'next/link';
import { useUpdate } from '../hooks/useUpdate';
import { TodoId } from '../types';
import { updateAction } from '../action/action';

interface UpdateProps {
  todoId: TodoId;
}

// appからparameterを受け取る
export const Update: FC<UpdateProps> = ({ todoId }) => {
  const [state, formAction, isPending] = useActionState(updateAction.bind(null, todoId), { error: '' });
  
  const { update, loading, error } = useUpdate(todoId);

  if(state.error) return <p>エラー: {state.error}</p>;
  if (isPending) return <p>更新中...</p>;
  
  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error.message}</p>;
  if (!update) return <p>データがありません</p>;
  return (
    <div>
      <Link href='/todos'>← Back to list</Link>
      <form action={formAction}>
        <input type="hidden" name="id" value={update.id} />
        <label>
          タイトル:
          <input type="text" name="title" defaultValue={update.title} />
        </label>
        <label>
          説明:
          <textarea name="description" defaultValue={update.description} />
        </label>
        <label>
          完了:
          <input type="checkbox" name="completed" defaultChecked={update.completed} />
        </label>
        <button type="submit" disabled={isPending}>
          更新
        </button>
      </form>
    </div>
  );
};
