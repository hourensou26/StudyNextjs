import { TodoResponse, Todo_id } from '../types';

//responseのdataに一覧があるため、data.data
export const fetchTodo = async (todo_id: Todo_id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/todos/${todo_id}`);
  if (!res.ok) {
    throw new Error(`Failed : ${res.status}`);
  }

  const data: { data: TodoResponse } = await res.json();

  return data.data;
};
