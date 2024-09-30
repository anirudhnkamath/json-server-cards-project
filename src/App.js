import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Newcard from './components/Newcard';
import apiRequest from './apiRequest';
import gsap from 'gsap'
import './app.css';

const App = () => {

    const API_URL = "http://localhost:5500/people";

    // required states
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState('');

    // fetches api at load time
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(API_URL);
                if (!response.ok) throw Error("Error Occurred");
                const data = await response.json();
                setCards(data);
            } catch (err) {
                setIsError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        setTimeout(() => {
            fetchData();
        }, 1000);

    }, []);

    // to delete a card
    async function handleDeleteCard(id){
        const newCards = cards.filter(card => card.id !== id);
        setCards(newCards);

        let options = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }

        let requrl = `${API_URL}/${id}`;
        let response = await apiRequest(requrl,options);
        if(response){ 
            console.log(response);
            
            setIsError(response);
        }
    }

    // to add a new card
    async function handleNewCard(e){
        e.preventDefault();

        let newId = cards.length > 0? String(Number(cards[cards.length - 1].id) + 1) : "1";
        let newCard = {id: newId, name: newName, age: newAge};
        let newCards = [...cards, newCard];
        setNewAge('');
        setNewName('');
        setCards(newCards);

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCard)
        };

        let response = await apiRequest(API_URL, options);
        if(response) setIsError(response);
    }

    // to make html entities from cards
    let items = cards.map((card)=>{
        return(
            <div className="card" key={card.id}>
                <h1>{card.name}</h1>
                <p>{card.age} years old.</p>
                <img 
                    src="/images/delete.png"
                    alt="delete" 
                    height={"100px"}
                    width={"100px"}
                    onClick={() => handleDeleteCard(card.id)}
                />
            </div>
        )
    })

    // starting animation for all cards
    useEffect(() => {
        gsap.fromTo('.card',{
            y: "100%",
            opacity: 0
        },{
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2
        });
    }, [isLoading]);

    
    return (
        <>
            <Navbar content={"List Of People"}/>

            <Newcard 
                newName = {newName}
                setNewName = {setNewName}
                newAge = {newAge}
                setNewAge = {setNewAge}
                handleNewCard = {handleNewCard}
            />

            {isLoading && (
                <section className="loading">Loading cards. Please wait.</section>
            )}
            {isError && (
                <section className="error">Error occured. Please try reloading.</section>
            )}
            {!isError && !isLoading && items.length>0 && (
                <Content 
                    items = {items}
                />
            )}
            {!isError && !isLoading && items.length<=0 && (
                <section className="zerocards">No cards. Please add a new card.</section>
            )}
        </>
    );
}

export default App;
