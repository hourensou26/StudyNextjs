import { TodoResponse, TodoId } from '../types';

//responseのdataに一覧があるため、data.data
export const getTodo = async (todo_id: TodoId) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/todos/${todo_id}`);
  if (!res.ok) {
    throw new Error(`Failed : ${res.status}`);
  }

  const data: { data: TodoResponse } = await res.json();

  return data.data;
};
