// artifical delay, for development
const sleep = (delay) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}
export default sleep;