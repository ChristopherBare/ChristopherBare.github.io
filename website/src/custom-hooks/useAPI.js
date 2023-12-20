import { useState, useEffect } from 'react'

const useAPI = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(url)
                
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`)
                }
                
                const jsonData = await response.json()
                setData(jsonData)
                setIsLoading(false)
            } catch (err) {
                setError(err)
                setIsLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { data, isLoading, error }
}

export default useAPI