let likeElement = document.getElementById('likes');

function adicionarLike() {
    let likes = Number(likeElement.innerText)
    likes++;

    return likeElement.innerText = likes;
}

let btnLikes = document.getElementById('buttonLike')

btnLikes.addEventListener('click', () => {
    adicionarLike()
})

