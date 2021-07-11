import React, { ChangeEventHandler } from 'react'
import { Container } from './styles'

interface InputProps {
  type?: string
  nameId: string
  label?: string
  value: string | number
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  onChangeTextArea?: ChangeEventHandler<HTMLTextAreaElement> | undefined
  min?: number
  textArea?: boolean
  rows?: number
}

export const Input = ({ type, nameId, label, value, onChange, onChangeTextArea, min, textArea, rows }: InputProps) => {
  return (
    <Container>
      <label htmlFor={nameId}>{label}</label>
      {!textArea ? (
        <input type={type} name={nameId} id={nameId} value={value} onChange={onChange} min={min} />
      ) : (
        <textarea name={nameId} id={nameId} value={value} onChange={onChangeTextArea} rows={rows}></textarea>
      )}
    </Container>
  )
}
