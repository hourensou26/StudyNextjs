export type Todo_id = string;

export type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
};

export type Todos = {
  id: number;
  title: string;
  completed: boolean;
};

export interface TodoResponse {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}
