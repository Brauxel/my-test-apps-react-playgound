import { ChangeEvent, InputHTMLAttributes, useState } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement>

export const BasicInput: React.FC<Props> = ({ ...inputProps }) => {
  const [value, setValue] = useState(inputProps.value)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <>
      <input {...inputProps} value={value} onChange={handleChange} />
    </>
  )
}
