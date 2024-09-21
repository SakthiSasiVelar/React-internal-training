import { createTodo, editTodo, getTodos ,deleteTodo} from './axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetTodos = () => {
  return useQuery({
    queryFn: async () => {
      try {
        const data = await getTodos();
        return data;
      } catch (err) {
        console.log({ err });
        throw new Error(err.response.data);
      }
    },
    queryKey: ['Todo'],
  });
};

export const useCreateTodos = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (todo) => {
      try {
        const data = await createTodo(todo);
        return data;
      } catch (err) {
        console.log({ err });
        throw new Error(err.response.data);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Todo'] });
    },
  });
};

export const useEditTodos = () =>{
  const queryClient = useQueryClient();
  return useMutation ({
    mutationFn: async (todo) =>{
      try {
        const data = await editTodo(todo);
        return data;
      } catch (err) {
        console.log({ err });
        throw new Error(err.response.data);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Todo'] });
    },
  })
}


export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (todoId) => {
      try {
        const data = await deleteTodo(todoId);
        return data;
      } catch (err) {
        console.log({ err });
        throw new Error(err.response.data);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Todo'] });
    },
  });
};
