import { deleteApiRequest, getApiRequest, updateApiRequest } from '../utils/api';

export function getTodos() {
  return getApiRequest('/todos');
}

export function markTodoCompleted(todoId) {
  return updateApiRequest(`/markTodoCompleted/${todoId}`);
}

export function markTodoUncompleted(todoId) {
  return updateApiRequest(`/markTodoUncompleted/${todoId}`);
}

export function deleteTodo(todoId) {
  return deleteApiRequest(`/todos/${todoId}`);
}
