import { useEffect, useState } from 'react';
import { fetchTodo } from '../api/fetchTodo';
import { formatTodo } from '../utils/formatTodo';
import { Todo, Todo_id } from '../types';

//IDに基づいて特定のTodoを取得
export const useTodo = (todo_id: Todo_id) => {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    fetchTodo(todo_id).then(fetchedTodo => {
      const formattedTodo = formatTodo(fetchedTodo);
      setTodo(formattedTodo);
    });
    //todo_idが変更されたときに再度データを取得
  }, [todo_id]);

  return { todo };
};
