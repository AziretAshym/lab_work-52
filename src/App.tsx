import './App.css';
import {useState} from "react";
import ClassCard from "./lib/classCard.ts";
import classCardDeck from "./lib/classCardDeck.ts";
import classCard from "./lib/classCard.ts";


const App = () => {
    const [deck, setDeck] = useState<classCardDeck | null>(new classCardDeck());
    const [cards, setCards] = useState<classCard[]>([]);
    const [restOfCards, setRestOfCards] = useState<number>(52);

    const dealCards = () => {
        if (deck) {
            const dealtCards = deck.getCards(5);
            setCards(dealtCards);
            setRestOfCards(deck.getRestOfCards());

            if (dealtCards.length === 0) {
                setDeck(null);
            }
        }
    };


    return (
        <div className="container">
            <span>Card in the deck: {restOfCards}</span>
            {cards.length > 0 && (
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <span key={index} className={`card rank-${card.rank.toLowerCase()} ${card.suit}`}>
                          <span className="rank">{card.rank}</span>
                            <span className="suit">
                                {card.suit === 'diams' ? '♦' : card.suit === 'hearts' ? '♥' : card.suit === 'clubs' ? '♣' : '♠'}
                          </span>
                        </span>
                    ))}
                </div>
            )}
            <button onClick={dealCards} disabled={!deck} className="dealBtn">{deck ? "Deal cards" : "The deck is empty"}</button>
        </div>
    );
};

export default App;
