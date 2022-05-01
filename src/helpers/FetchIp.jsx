import axios from "axios"



export const fetchApi = async(ip) => {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip.toString().trim()}`

    try {
        const data = await axios(url)
        return data
        
    } catch (error) {
        return false
    }

    
}