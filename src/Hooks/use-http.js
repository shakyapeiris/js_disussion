import { useCallback, useState } from 'react'

const useHttp = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = useCallback(async(urlConfig) => {
        const url = urlConfig.url
        try{
            const response = await fetch(url, {
                method:urlConfig.method ? urlConfig.method : "GET",
                headers : urlConfig.headers ? urlConfig.headers : null,
                body : urlConfig.body ? urlConfig.body : null
            })

            const data = await response.json()
            /*
                If you are using firebase you can use following algorithm

                let data_arr = []

                for (key in data){
                    data_arr.push({id:key, name:data[key].name ....})
                }
                setData(data_arr)
            */
            setLoading(false)
            setData(data)
        }catch(err){
            console.log(err)
        }
    }, [])

    return{
        data,
        loading,
        fetchData
    }
}

export default useHttp