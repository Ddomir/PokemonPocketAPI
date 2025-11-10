import { useState, useEffect } from 'react';

import MainLayout from "../layouts/MainLayout";
import { getCards, getMoves } from "../services/api.ts";

export default function SearchPage() {
    const [cards, setCards] = useState<Array<any>>([]);
    const [moves, setMoves] = useState<Array<any>>([]);

    useEffect(() => {
        async function fetchCards() {
            try {
                const data = await getCards();
                setCards(data);
                console.log("Fetched cards:", data);
            } catch (err) {
                console.error("Error fetching cards:", err);
            }
        }

        async function fetchMoves() {
            try {
                const data = await getMoves();
                setMoves(data);
                console.log("Fetched moves:", data);
            } catch (err) {
                console.error("Error fetching moves:", err);
            }
        }

        fetchCards();
        fetchMoves();
    }, []);

    return (
        <MainLayout>
            <div>
                <h1 className="text-3xl font-bold mb-4">Search Page</h1>
                <ul>
                    {cards.map(card => (
                    <li key={card.id}>
                        {card.name} ({card.cardIdentifier}) - HP: {card.hp}
                    </li>
                    ))}
                </ul>
                <ul>
                    {moves.map(move => (
                    <li key={move.id}>
                        {move.name} - Power: {move.power}
                    </li>
                    ))}
                </ul>
            </div>
        </MainLayout>
        
    );
}