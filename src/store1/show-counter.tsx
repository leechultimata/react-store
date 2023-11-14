import useStoreItem from "./store"

export default function ShowCounter(){
    const [count] = useStoreItem('count')
    return (
        <div>
            Show Counter: {count}
        </div>
    )
}