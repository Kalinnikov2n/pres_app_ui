import React, { FC } from 'react'
import CreateForm from './createForm/CreateForm'
import Redactor from './redactor/Redactor'
import Todos from './todos/Todos'

const App: FC = () => {
  return (
    <div className="app">
      <div className="area">
        <CreateForm />
        <div className="area-main">
          <Todos />
          <Redactor />
        </div>
      </div>
    </div>
  )
}
App.displayName = 'App'
export default App
