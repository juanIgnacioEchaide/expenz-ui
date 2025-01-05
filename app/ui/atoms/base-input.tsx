import { inputStyles } from "@/app/styles"
import { useCallback } from "react"

export type BaseInputProps = {
  text?: boolean
  number?: boolean
  value: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  width?: string
}

export const BaseInput = ({
  text,
  number,
  value,
  onChange,
  placeholder,
  width,
}: BaseInputProps) => {

  const inputType = useCallback(() => {
    if (text) return "text"
    if (number) return "number"
    return "text"
  }, [text, number])

  return (
    <input
      type={inputType()}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ width: width ? `${width}vw` : "30vw" }}
      className={inputStyles}
    />
  )
}
