import useStoreItem from "./store"

export default function Counter(){
    const [count, setCountItem] = useStoreItem('count', 0)
    return (
        <div>
            Counter: { count } <button onClick={() => setCountItem(count+1) }>+</button>
        </div>
    )
}