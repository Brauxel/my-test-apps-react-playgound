import { ChangeEvent, FormEvent, useState } from 'react'
import { BasicInput } from '../atoms/BasicInput'
import { Button } from '../atoms/Button/Button'
import { TextArea } from '../atoms/TextArea/TextArea'

const initialFormValues = {
  runTime: '',
  distance: '',
  description: '',
}

export const Form = () => {
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = event
    const { value, name } = target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.info('submit the following:')
    console.info('Run Time:', formValues.runTime)
    console.info('Distance: ', formValues.distance)
    console.info('Description:', formValues.description)
  }

  return (
    <form onSubmit={handleSubmit}>
      <BasicInput
        placeholder="Run Time"
        name="runTime"
        onChange={handleInputChange}
      />
      <BasicInput
        placeholder="Distance"
        name="distance"
        onChange={handleInputChange}
      />
      <TextArea
        placeholder="Description"
        name="description"
        onChange={handleInputChange}
      />
      <Button />
    </form>
  )
}
