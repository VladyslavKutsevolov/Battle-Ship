console.log('yo')


async function start() {
    return await Promise.resolve('async!!')
}
start().then(console.log)