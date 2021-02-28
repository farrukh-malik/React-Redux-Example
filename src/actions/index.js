const increment = (no) => {
    return {
        type: "INCREMENT",
        payload: no
    }
}

const decrement = (no) => {
    return {
        type: "DECREMENT",
        payload: no
    }
}

export {
    increment,
    decrement
}