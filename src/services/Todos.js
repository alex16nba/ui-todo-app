import {
  deleteApiRequest, getApiRequest, postApiRequest, updateApiRequest,
} from '../utils/api';

export function getTodos(params) {
  return getApiRequest('/todos', params);
}

export function createTodo(data) {
  return postApiRequest('/todos', data);
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
