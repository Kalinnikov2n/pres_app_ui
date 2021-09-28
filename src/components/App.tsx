import React, { FC } from 'react'
import CreateForm from './createForm/CreateForm'
import Todos from './todos/Todos'

const App: FC = () => {
  return (
    <div>
      <CreateForm />
      <Todos />
    </div>
  )
}
App.displayName = 'App'
export default App
