import { TODOS_CREATE_MUTATION, TODOS_DELETE_MUTATION, TODOS_UPDATE_MUTATION } from '../graphQl/mutations/todos'
import { TODOS_GET_QUERY, TODOS_LIST_QUERY, TODOS_SHORT_LIST_QUERY } from '../graphQl/queries/todos'

export const documentsConfig = {
  todos: {
    listQuery: TODOS_LIST_QUERY,
    getQuery: TODOS_GET_QUERY,
    queryListName: 'todosList',
    createMutationName: 'todosCreateMutation',
    deleteMutation: TODOS_DELETE_MUTATION,
    updateMutation: TODOS_UPDATE_MUTATION,
    createMutation: TODOS_CREATE_MUTATION,
    createVariables: ({ title }: any) => ({ params: { title } }),
    deleteVariables: ({ id }: any) => ({ params: { id } }),
    updateVariables: ({ id, title, description }: any) => ({ params: { id, title, description } }),
    getVariables: ({ id }: any) => ({ params: { id } }),
    listVariables: () => ({}),
    getOptimisticCreate: ({ title, description }: any) => ({
      todosCreateMutation: {
        id: `${title}_optimistic`,
        title,
        description,
        __typename: 'TodoItem',
      },
    }),
  },
  todosShort: {
    listQuery: TODOS_SHORT_LIST_QUERY,
    getQuery: TODOS_GET_QUERY,
    queryListName: 'todosList',
    createMutationName: 'todosCreateMutation',
    deleteMutation: TODOS_DELETE_MUTATION,
    updateMutation: TODOS_UPDATE_MUTATION,
    createMutation: TODOS_CREATE_MUTATION,
    createVariables: ({ title, description }: any) => ({ params: { title, description } }),
    deleteVariables: ({ id }: any) => ({ params: { id } }),
    updateVariables: ({ id, title, description }: any) => ({ params: { id, title, description } }),
    getVariables: ({ id }: any) => ({ params: { id } }),
    listVariables: () => ({}),
    getOptimisticCreate: ({ title, description }: any) => ({
      todosCreateMutation: {
        id: `${title}_optimistic`,
        title,
        description,
        __typename: 'TodoItem',
      },
    }),
  },
}
