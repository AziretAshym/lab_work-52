import * as React from "react";

interface CardProps {
    rank: string;
    suit: object;
}
const Card: React.FC<CardProps> = ({rank, suit}) => {
    const suitsObj = {
        diams: '♦',
        hearts: '♥',
        clubs: '♣',
        spades: '♠'
    }

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