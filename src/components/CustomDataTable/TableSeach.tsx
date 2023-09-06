'use client'
import { Input, InputProps } from '@/components/ui/input'
import React from 'react'

interface TableSeachProps extends InputProps {
    debounce?: number
  }

function TableSeach({
    onChange,
    debounce = 500,
    ...props
  }: TableSeachProps) {

    const [value, setValue] = React.useState(props.value ?? "")
  const [debouncedValue, setDebouncedValue] = React.useState(value)

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    []
  )

  React.useEffect(() => {
    setValue(props.value ?? "")
  }, [props.value])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, debounce)

    return () => {
      clearTimeout(timeout)
    }
  }, [value, debounce])

  React.useEffect(() => {
    if (debouncedValue !== props.value) {
      // @ts-expect-error debouncedValue is not React.ChangeEvent<HTMLInputElement>
      onChange?.(debouncedValue)
    }
  }, [debouncedValue, onChange, props.value])


  return (
    <Input {...props} value={value} onChange={handleChange} />
  )
}

export default TableSeach