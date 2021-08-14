import { BasicInput } from '../atoms/BasicInput'
import { Button } from '../atoms/Button/Button'

export const Form = () => {
  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <form onSubmit={handleSubmit}>
      <BasicInput />
      <Button />
    </form>
  )
}
