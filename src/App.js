import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";



function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('toDoList')) || [
      {id: 1, item: "eat some mushroom", checked: false},
      {id: 2, item: "run around the world", checked: false},
      {id: 3, item: "destroy capitalism", checked: false},
    ])

    const [newItems, setNewItems] = useState("");
    const [searchItems, setSearchItems] = useState("")

    const handleCheck = (id) => {
      const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item);
      setItems(listItems);
      localStorage.setItem('toDoList', JSON.stringify(listItems))
    }
  
    const handleDelete = (id) => {
      const listItems = items.filter(item => item.id !== id)
      setItems(listItems);
      localStorage.setItem('toDoList', JSON.stringify(listItems))
    }

    const setAndSaveItems = newItems => {
      setItems(newItems);
      localStorage.setItem('toDoList', JSON.stringify(newItems))
    }
    
    const addItem = item => {
      const id = items.length ? (items[items.length - 1].id + 1) : 1;
      const myNewTask = {id, checked: false, item,};
      const listItems= [...items, myNewTask];
      setAndSaveItems(listItems)
    }

    const handleSubmit = e => {
      e.preventDefault();
      if (!newItems) {
        return;
        } else {
        addItem(newItems);
      }
      console.log(newItems);
      setNewItems("");
    }

  return (
    <div className="App">
      <Header />
      <AddItem 
        newItems={newItems}
        setNewItems={setItems}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
