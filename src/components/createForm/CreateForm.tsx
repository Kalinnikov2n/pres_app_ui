import React, { memo, useState } from 'react'
import { useCreate } from '../../hooks/useCreate/useCreate'

const CreateForm = memo(() => {
  const [value, setValue] = useState(() => '')

  const { handleCreate } = useCreate('todosShort')
  const resetValue = () => setValue('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setValue(value)
  }

  const handleSave = () => {
    handleCreate({ title: value, description: '' })
    resetValue()
  }

  return (
    <div className="create-form">
      <input className="create-form-input" placeholder="Название таска" onChange={handleChange} value={value} />
      <button className="create-form-btn" onClick={handleSave}>
        Создать
      </button>
      <div className="fuck-it-container">
        <div className="fuck-it"></div>
        <div className="fuck-it2"></div>
        <div className="fuck-it3"></div>
      </div>
    </div>
  )
})

CreateForm.displayName = 'CreateForm'

export default CreateForm
