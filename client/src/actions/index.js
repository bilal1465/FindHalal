export const getRestInfo = () => {
    return {
        type: 'getInfo'
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