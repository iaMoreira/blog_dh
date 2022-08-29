(function () {
    loadPost();
})()

async function loadPost() {
    try {
        const token =  localStorage.getItem('token') || '';
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const response = await axios.get('http://localhost:3001/posts/' + id, {headers: {'Authorization': token}})
        const main = document.querySelector('main')
        main.innerHTML = '';
        const post = response.data;
        const data = new Date(post.createdAt).toLocaleDateString();
        main.insertAdjacentHTML("afterbegin", `
            <h1> ${post.title} </h1>
            <p>
                ${data}
            </p>
            <p>
                ${post.description}
            </p>
        `)
    } catch (error) {
        location.href = '/'
    }
}