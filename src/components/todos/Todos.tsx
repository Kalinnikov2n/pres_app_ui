import React, { memo } from 'react'
import { ApolloOptions } from '../../@types/apolloOptions'
import { TodosType } from '../../@types/common'
import { useList } from '../../hooks/useList/useList'
import Scroll from '../Scroll/Scroll'

const queryOptions: ApolloOptions = { fetchPolicy: 'cache-first' }

const Todos = memo(() => {
  const { list } = useList('todosShort', queryOptions)

  return (
    <div className="todos">
      <Scroll>
        <div className="todos-list">
          {list?.map(({ id, title }: TodosType) => (
            <div key={id}>
              <div>{title}</div>
            </div>
          ))}
        </div>
      </Scroll>
    </div>
  )
})
Todos.displayName = 'Todos'
export default Todos
