'use client';
import { Datepicker, TextInput } from 'flowbite-react'
import React from 'react'
import { HiSearch } from 'react-icons/hi'
function InputAndDropdwon() {
  return (
    <div className="flex justify-between w-full items-center">
      <Datepicker/>
      <TextInput
        id="search01"
        type="email"
        icon={HiSearch}
        placeholder="search"
        required
      />
    </div>
  )
}

export default InputAndDropdwon