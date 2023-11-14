import { useStore } from "./store2"

export default function Counter2(){
    const store = useStore()
    const count = store.getItem('counter', 0)
    return (
        <div>
            Counter: { count } <button onClick={() => store.setItem('counter', count+1) }>+</button>
        </div>
    )
}