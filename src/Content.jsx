import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('toDoList')) || []
    
  )

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(listItems);
    localStorage.setItem('toDoList', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems);
  }
  return (
    <main>
      { items.length ?
        (<ul>
          {items.map(item => (
            <li className='item' key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={ () => handleCheck(item.id)}
              />
              <label
                style={(item.checked) ? {textDecoration: "line-through", color: "lightblue"} : null}
                onClick={ () => handleCheck(item.id) }  
              >
                {item.name}
              </label>
              <FaTrashAlt
                role='button'
                tabIndex='0' 
                onClick={ () => handleDelete(item.id) }
              />
            </li>
          ))}
        </ul>) : (
          <p
            style={{
              textAlign: "center",
              color: "Green",
              fontSize: "40px",
              marginTop: "40px"
            }}
          >
            You Have No Tasks
          </p>
        )
      }
        
    </main>
  )
}

export default Content