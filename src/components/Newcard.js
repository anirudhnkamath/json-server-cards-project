import React from 'react'

const Newcard = ({newName, setNewName, newAge, setNewAge, handleNewCard}) => {
  return (
    <section className="newcard" onSubmit={handleNewCard}>
        <form action="" className="inputform">
            <input 
                required
                type="text" 
                className="name" 
                onChange={(e) => setNewName(e.target.value)}
                value={newName}
                placeholder="Enter name here"
            />
            <input 
                required
                min={0}
                type="number" 
                className="age"
                onChange={(e) => setNewAge(e.target.value)}
                value={newAge} 
                placeholder='Enter Age'
            />
            <button className="submit">Add</button>
        </form>
    </section>
  )
}

export default Newcard
