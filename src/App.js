import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";



function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('toDoList')) || [
      {id: 1, name: "eat some mushroom", checked: false},
      {id: 2, name: "run around the world", checked: false},
      {id: 3, name: "destroy capitalism", checked: false},
    ])

  const [newItems, setNewItems] = useState("");
  const [searchItem, setSearchItem] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    if (!newItems) {
      return
    } else {
      addItem(newItems)
    }
    setNewItems("")
  }

    const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
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
    
    const addItem = name => {
      const id = items.length ? (items[items.length - 1].id + 1) : 1;
      const myNewTask = {id, name, checked: false};
      const listItems = [...items, myNewTask];
      setAndSaveItems(listItems)
    }

  return (
    <div className="App">
      <Header />
      <AddItem 
        newItems={newItems}
        setNewItems={setNewItems}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />
      <Content
        items={items.filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase()))}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
