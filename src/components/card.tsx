import * as React from "react";
import ClassCardDeck from "../lib/classCardDeck.ts";

export interface CardProps {
    rank: string;
    suit: object;
}

const Card: React.FC<CardProps> = ({rank, suit}) => {
    const suitsObj = {
        diams: '♦',
        hearts: '♥',
        clubs: '♣',
        spades: '♠'
    };

    const hand = new ClassCardDeck();



    const oneCard = hand.getCard();
    console.log(oneCard);

    const severalCards = hand.getCards(5);
    console.log(severalCards);

    return (
        <div>
            <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
                <span className="rank">{rank}</span>
                <span className="suit">{suitsObj[suit]}</span>
            </span>
        </div>
    );
};

export default Card;