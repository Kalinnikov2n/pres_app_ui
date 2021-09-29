import React, { memo } from 'react'

interface TodoElementProps {
  title: string
  id: string
}
const TodoElement = memo<TodoElementProps>(({ title }) => {
  return (
    <div className="todo-element">
      <div className="todo-element-title">{title}</div>
    </div>
  )
})
TodoElement.displayName = 'TodoElement'
export default TodoElement
