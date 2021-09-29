import gql from 'graphql-tag.macro'

export const TODOS_CREATE_MUTATION = gql`
  mutation todosCreateMutation($params: TodoCreateParams) {
    todosCreateMutation(params: $params) {
      id
      title
      description
    }
  }
`
export const TODOS_DELETE_MUTATION = gql`
  mutation todosDeleteMutation($params: TodoDeleteParams) {
    todosDeleteMutation(params: $params) {
      id
      title
      description
    }
  }
`

export const TODOS_UPDATE_MUTATION = gql`
  mutation todosUpdateMutation($params: TodoUpdateParams) {
    todosUpdateMutation(params: $params) {
      id
      title
      description
    }
  }
`
