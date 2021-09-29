import { TODOS_LIST_QUERY, TODOS_SHORT_LIST_QUERY } from '../../graphQl/queries/todos'

export const useListConfig = {
  todos: {
    query: TODOS_LIST_QUERY,
    queryName: 'todosList',
    variables: () => ({}),
  },
  todosShort: {
    query: TODOS_SHORT_LIST_QUERY,
    queryName: 'todosList',
    variables: () => ({}),
  },
}
