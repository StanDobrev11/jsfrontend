function attachEvents() {
    const msgRequestUrl = 'http://localhost:3030/jsonstore/messenger'

    const refreshButtonElement = document.getElementById('refresh')
    const postButtonElement = document.getElementById('submit')

    const textareaElement = document.getElementById('messages')

    const authorInputElement = document.querySelector('input[name=author]')
    const contentInputElement = document.querySelector('input[name=content]')

    refreshButtonElement.addEventListener('click', async () => {
        textareaElement.textContent = ''
        
        try {
        const msgsResponse = await fetch(msgRequestUrl)
        const msgsData = await msgsResponse.json()
        
        Object.values(msgsData)
            .forEach(msg => {
                textareaElement.textContent += `${msg.author}: ${msg.content}\n`
            })
        } catch(err) {
            console.log(e.msg)
        }

    })

    postButtonElement.addEventListener('click', async () => {
        const author = authorInputElement.value
        const content = contentInputElement.value

        await fetch(msgRequestUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                'author': author,
                'content': content
            })
        })

        textareaElement.textContent += `${author}: ${content}\n`
        authorInputElement.value = ''
        contentInputElement.value = ''
    })

}

attachEvents();