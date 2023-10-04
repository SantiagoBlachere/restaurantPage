
export default function component() {
    const rootDiv = document.querySelector('#content')
    
    const title = document.createElement('h1');
    title.innerText = "PANCHOS OSVALDO"
    
    const osvaldo = document.createElement('img');
    osvaldo.setAttribute('src', 'https://i.ytimg.com/vi/BFtmGCTjfRM/maxresdefault.jpg');
    osvaldo.classList.add('osvaldo')
    rootDiv.appendChild(title);
    rootDiv.appendChild(osvaldo)
    }