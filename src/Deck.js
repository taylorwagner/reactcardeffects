import React, { useEffect, useState, useRef } from "react";
import Card from './Card';
import axios from "axios";
import './Deck.css';

const API_BASE_URL = "http://deckofcardsapi.com/api/deck";

function Deck() {
    const [deck, setDeck] = useState(null);
    const [drawn, setDrawn] = useState([]);
    const [autoDraw, setAutoDraw] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        async function getData() {
            let newDeck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
            setDeck(newDeck.data);
        }
        getData();
    }, [setDeck]);
}

export default Deck;