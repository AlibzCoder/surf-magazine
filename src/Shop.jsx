import board from './assets/img/board.png';
import board1 from './assets/img/board-1.png';
import board2 from './assets/img/board-2.png';


const boards = [
    {
        type: 'Funboards',
        name: 'Chilli Rare Bird',
        price: 890,
        img: board
    },
    {
        type: 'Surfboards',
        name: 'Emery NEM XF',
        price: 950,
        img: board1
    },
    {
        type: 'Funboards',
        name: 'Agency GROM',
        price: 670,
        img: board2
    }
]

const BoardItem = ({ type, name, price, img }) => <div className="board">
    <div className="board-back">
        <img src={img} alt="" />
        <div className="board-content">
            <div className="board-title">
                <p className="uppercase">{type}</p>
                <h4 className="quote-text">{name}</h4>
            </div>
            <div className="board-price">
                <p>${price}</p>
                <a href="/" className="uppercase">Buy</a>
            </div>
        </div>
    </div>
</div>




const Shop = () => {
    return <div className="shop">


        <div className="center">
            <span className="uppercase blue">Shop</span>
            <h1>Surfboards</h1>
        </div>


        <div className="boards">
            {boards.map(board => <BoardItem {...board} />)}
        </div>

        <div className="center" style={{ marginTop: '10em', fontSize: "0.85rem" }}>
            <a href="/" className="uppercase underline">
                Show All
            </a>
        </div>

    </div>
}

export default Shop;