const main = document.querySelector('main')
const search = document.getElementById('search');


(function () {
    loadPosts();
})();

search.onchange = () => {
    loadPosts();
}


async function loadPosts() {
    try {
        const token =  localStorage.getItem('token') || '';
        const response = await axios.get('http://localhost:3001/posts?title=' + search.value, {headers: {'Authorization': token}});
        main.innerHTML = '';
        response.data.forEach(post => {
            const data = new Date(post.createdAt).toLocaleDateString();
    
            main.insertAdjacentHTML("afterbegin", `
            <article>
                <div class="caixa">
                    <span>${data}</span>
    
                    <img src="/img/coracao.svg" alt="Curtir" />
                </div>
    
                <h3>${post.title}</h3>
    
                <a href="/post.html?id=${post.id}">
                    <button>Leia mais</button>
                </a>
            </article>
            `)
        })
        
    } catch (error) {
        location.href = '/'
    }
}
