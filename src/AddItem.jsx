import React, { useRef } from 'react'
import { FaPlus } from "react-icons/fa";

const AddItem = ({newItems, setNewItems}) => {
    const inputRef = useRef();
  return (
    <form className='addForm'>
        <input
          type="text"
          autoFocus
          ref={inputRef}
          id='addForm'
          placeholder='Add some Task'
          required
          value={newItems}
        />
        <button
            type='submit'
            aria-label='Add task'
            onClick={ () => inputRef.current.focus() }
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem