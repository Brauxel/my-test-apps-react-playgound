import { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement>

export const BasicInput: React.FC<Props> = ({ ...inputProps }) => (
  <div className="input-field">
    <input {...inputProps} />
  </div>
)
