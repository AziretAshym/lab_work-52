import './App.css';
import {useState} from "react";
import ClassCard from "./lib/classCard.ts";
import classCardDeck from "./lib/classCardDeck.ts";


const App = () => {
    const [hand, setHand] = useState<ClassCard[]>([]);


    const dealCards = () => {
        const deck = new classCardDeck();
        const dealtCards = deck.getCards(5);
        setHand(dealtCards);
    }

    return (
        <div className="container">
            {hand.length > 0 && (
                <div className="playingCards faceImages">
                    {hand.map((card, index) => (
                        <span key={index} className={`card rank-${card.rank.toLowerCase()} ${card.suit}`}>
                          <span className="rank">{card.rank}</span>
                            <span className="suit">
                                {card.suit === 'diams' ? '♦' :
                                    card.suit === 'hearts' ? '♥' :
                                        card.suit === 'clubs' ? '♣' : '♠'}
                          </span>
                        </span>
                    ))}
                </div>
            )}
            <button onClick={dealCards} className="dealBtn">Deal cards</button>
        </div>
    );
};

export default App;
