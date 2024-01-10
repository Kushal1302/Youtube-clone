import axios from 'axios'
const getData = async (id) => {
    try {
        
        const res = await axios.get(`http://localhost:8000/videos/${id}`)
        return res
        
    } catch (error) {
        console.log(error)
    }
}
const getAllData = async () => {
    try {
        const res = await axios.get('http://localhost:8000/videos')
        return res
    } catch (error) {
        console.log(error)
    }
}
export { getData , getAllData}