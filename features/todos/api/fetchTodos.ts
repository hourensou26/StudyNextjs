import { TodoResponse } from '../types';

//responseのdataに一覧があるため、data.data
export const fetchTodos = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/todos`);
  if (!res.ok) {
    throw new Error(`Failed : ${res.status}`);
  }

  const data: { data: TodoResponse[] } = await res.json();

  return data.data;
};
