
export const getStainsFromApi = async () => {
    const request = fetch('stain')
    const response = await request
    return response.json()
};