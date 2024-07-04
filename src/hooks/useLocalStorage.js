import React from "react"

export default function useLocalStorage(nameItem, initialItem) {

    const [item, setItem] = React.useState(initialItem)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            try {
                let getTaskFromLocalStorage = localStorage.getItem(nameItem)
                let parsedLocalStorage = !!getTaskFromLocalStorage ? JSON.parse(getTaskFromLocalStorage) : localStorage.setItem(nameItem, JSON.stringify(initialItem));
                console.log("🚀 ~ setTimeout ~ parsedLocalStorage:", parsedLocalStorage)
                setLoading(false)
                setItem(parsedLocalStorage)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }, 2000);
    })

    const saveItems = (tasks) => {

        let taskString = JSON.stringify(tasks)
        localStorage.setItem(nameItem, taskString)
        setItem(tasks)

    }

    return {
        item,
        saveItems,
        loading,
        error
    }
}