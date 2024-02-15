import ItemFrut from "./ItemFruit.jsx"

const ListFruts = () => {
    const fruts = ["🍏", "🍌", "🍑", "🍇"]

    return (
        <ul>
            {
                fruts.map((frut, index) => (
                    <ItemFrut key={index} frut={frut} />
                ))
            }
        </ul>
    )

}

export default ListFruts