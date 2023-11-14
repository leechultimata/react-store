import { Dispatch, SetStateAction, useState } from "react"

type StoreItem = {
    value: any,
    updaters: Set<Dispatch<SetStateAction<any>>>
}

const store: Map<string, StoreItem> = new Map()

export default function useStoreItem(name: string, initValue?: any): [any, (value: any) => void]{
    let item = store.get(name)
    if(!item) {
        item = {
            value: initValue,
            updaters: new Set()
        }
        store.set(name, item)
    }
    const [, setValue] = useState(item.value)
    item.updaters.add(setValue)
    return [ 
        item.value, 
        (value) => {
            store.set(name,{...item!, value})
            item?.updaters.forEach(updater => updater(value))
        } 
    ]
}