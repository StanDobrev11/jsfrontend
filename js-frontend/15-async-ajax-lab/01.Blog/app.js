function attachEvents() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts'
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments'

    const loadPostsButtonElement = document.getElementById('btnLoadPosts')
    const selectElement = document.getElementById('posts')
    const viewCommentsButtonElement = document.getElementById('btnViewPost')

    const h1Element = document.getElementById('post-title')
    const pElement = document.getElementById('post-body')
    const ulElement = document.getElementById('post-comments')

    loadPostsButtonElement.addEventListener('click', async () => {
        selectElement.innerHTML = ''
        h1Element.textContent = 'Post Details'
        pElement.innerHTML = ''
        ulElement.textContent = ''
        try {
            const result = await fetch(postsUrl)
            const data = await result.json()
            
            const selectElementFragment = document.createDocumentFragment()
            for (const obj in data) {
                const { id, title } = data[obj]
                const optionElement = document.createElement('option')
                optionElement.value = id
                optionElement.textContent = title.toUpperCase()
                selectElementFragment.appendChild(optionElement)
            }
            selectElement.appendChild(selectElementFragment)
        } catch(err) {
            console.log(err.message)
        }  
    })

    viewCommentsButtonElement.addEventListener('click', () => {
        const optionElement = selectElement.querySelector('option:checked')       
        const id = optionElement.value

        fetch(`${postsUrl}/${id}`)
            .then(res => res.json())
            .then(postData => {
                h1Element.textContent = postData.title.toUpperCase()
                pElement.textContent = postData.body
            })
            .catch(e => console.log(e.message))

        fetch(commentsUrl)
            .then(res => res.json())
            .then(data => {
                ulElement.innerHTML = ''
                const ulElementFragment = document.createDocumentFragment()
                Object
                    .values(data)
                    .filter(comment => comment['postId'] === id)
                    .forEach(comment => {
                        const liElement = document.createElement('li')
                        liElement.setAttribute('id', `${comment['id']}`)
                        liElement.textContent = comment['text']
                        ulElementFragment.appendChild(liElement)
                    })
                
                ulElement.appendChild(ulElementFragment)           

            })
            .catch(e => console.log(e.message))
    })

}

attachEvents();