import { useStore } from "./store2"

export default function ShowCounter2(){
    const store = useStore()
    return (
        <div>
            Show Counter: {store.getItem('counter')}
        </div>
    )
}