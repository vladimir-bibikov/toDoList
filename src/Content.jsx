import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = ({ items, setItems, handleCheck, handleDelete }) => {
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
                {item.item}
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