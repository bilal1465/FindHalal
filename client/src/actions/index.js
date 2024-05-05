export const getRestInfo = () => {
    return {
        type: 'GET'
    }
}

export const sendRestInfo = (category, name) => {
    return {
        type: 'SEND',
        payload: {
            restCategory: category,
            restName: name
        }
    }
}