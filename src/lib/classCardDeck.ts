import ClassCard from "./classCard.ts";

class ClassCardDeck {
    public deck: ClassCard[];
    constructor() {
        const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];
        this.deck = [];


        for (const suit of suits) {
            for (const rank of ranks) {
                this.deck.push(new ClassCard(rank, suit))
            }
        }
    }

    getCard(): ClassCard {
        if (this.deck.length === 0) {
            return null;
        }

        const randomCard = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(randomCard, 1)[0];
    };

    getCards(howMany: number): ClassCard[] {
        const cards: ClassCard[] = [];
        for (let i= 0; i < howMany; i++) {
            const card = this.getCard();
            if (card) {
                cards.push(card);
            } else {
                break;
            }
        }
        return cards;
    };

    getRestOfCards(): number {
        return this.deck.length
    }
}

export default ClassCardDeck;