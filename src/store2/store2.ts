import { useSyncExternalStore } from "react"

type Listener = () => void

const Store2 = {
    items: new Map<string, any>(),
    listeners: new Array<Listener>(),
    getItem(name: string, initValue?: any){
        if(!Store2.items.has(name)) this.setItem(name, initValue)
        return Store2.items.get(name)
    },
    setItem(name: string, value: any){
        Store2.items.set(name, value)
        Store2.items = new Map(Store2.items)
        Store2.listeners?.forEach(listener => listener())
    },
    addListener(listener: Listener): () => void{
        Store2.listeners.push(listener)
        return () => Store2.listeners = Store2.listeners.filter(l => l !== listener)
    },
    getItems(){
        return Store2.items
    }
}

export function useStore(){
    useSyncExternalStore(Store2.addListener, Store2.getItems)
    return Store2
}