import { useEffect, useState } from 'react';
import { fetchTodos } from '../api/fetchTodos';
import { formatTodo } from '../utils/formatTodo';
import { Todos } from '../types';

// すべてのTodoを取得するカスタムフック
export const useTodos = () => {
  const [todos, setTodos] = useState<Todos[]>([]);

  //formatで成形してsetする
  useEffect(() => {
    fetchTodos().then(fetchedTodos => {
      const formattedTodos = fetchedTodos.map(todo => formatTodo(todo));
      setTodos(formattedTodos);
    });
  }, []);

  return { todos };
};
