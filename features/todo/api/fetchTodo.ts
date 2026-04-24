import { getTodo } from "@/shared/api/getTodo";

export const fetchTodo = async (todo_id: string) => {
  return await getTodo(todo_id);
};