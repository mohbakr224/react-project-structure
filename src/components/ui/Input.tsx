import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & { label: string }

export function Input({ label, id, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')
  return <label className="field" htmlFor={inputId}>{label}<input id={inputId} {...props} /></label>
}
