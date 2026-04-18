'use client';

import { FC, useActionState } from 'react';
import { createAction } from '../actions/action';

export const Create: FC = () => {
  const [state, FormAction, isPending] = useActionState(createAction, { error: '' });

  if (isPending) return <p>作成中...</p>;
  if (state.error) return <p>エラー: {state.error}</p>;

  return (
    <>
      <h2>Create Todo</h2>
      <form action={FormAction}>
        <input
          type='text'
          name='title'
          placeholder='Enter todo title'
        />
        <input
          type='text'
          name='description'
          placeholder='Enter todo description'
        />
        <button type='submit'>Create</button>

        {state.error && <p>{state.error}</p>}
      </form>
    </>
  );
};

