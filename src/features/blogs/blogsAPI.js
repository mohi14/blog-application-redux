import axios from "../../utils/axios"

export const getBlogs = async (sort, isSaved) => {
    let queryString = ""

    if (sort !== "") {
        queryString += `_sort=${sort}&_order=desc`
    }
    if (isSaved === true) {
        queryString += `&isSaved=true`
    }


    const response = await axios.get(`/blogs/?${queryString}`)
    return response.data
}