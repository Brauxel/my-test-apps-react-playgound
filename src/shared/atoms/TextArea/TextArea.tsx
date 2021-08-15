import { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLTextAreaElement>

export const TextArea: React.FC<Props> = ({ ...inputProps }) => (
  <div className="input-field">
    <textarea {...inputProps} />
  </div>
)
