import gql from 'graphql-tag.macro'

export const TODOS_LIST_QUERY = gql`
  query todosListQuery {
    todosList {
      list {
        id
        title
        description
      }
    }
  }
`
export const TODOS_SHORT_LIST_QUERY = gql`
  query todosListQuery {
    todosList {
      list {
        id
        title
      }
    }
  }
`

export const TODOS_GET_QUERY = gql`
  query todosGetQuery($params: TodoGetParams) {
    todoGet(params: $params) {
      id
      title
      description
    }
  }
`
