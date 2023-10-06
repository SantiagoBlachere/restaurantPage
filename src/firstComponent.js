import contact from "./contact";
import home from "./home";
import menu from "./menu";
export default function component() {
    const rootDiv = document.querySelector('#content')
    
    const title = document.createElement('h1');
    title.innerText = "PANCHOS OSVALDO"
    
    const osvaldo = document.createElement('img');
    osvaldo.setAttribute('src', 'https://i.ytimg.com/vi/BFtmGCTjfRM/maxresdefault.jpg');
    osvaldo.classList.add('osvaldo')
    rootDiv.appendChild(title);
    rootDiv.appendChild(osvaldo);

    const navBar = document.createElement('nav');
    navBar.classList.add('navBar')

    const homeBtn = document.createElement('button');
    homeBtn.innerText = 'HOME';
    homeBtn.onclick = () => {
        clearContent()
        home();
    }

    const menuBtn = document.createElement('button');
    menuBtn.innerText = 'MENU';
    menuBtn.onclick = () => {
        clearContent();
        menu();
    }

    const contactBtn = document.createElement('button');
    contactBtn.innerText = 'CONTACT';
    contactBtn.onclick = () => {
        clearContent();
        contact();
    }


    rootDiv.appendChild(navBar);
    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn)
    navBar.appendChild(contactBtn)
    home();

    const clearContent = () => {
        const homeContainer = document.querySelector('.home');
        const menuContainer = document.querySelector('.menu');
        const contactContainer = document.querySelector('.contact')
        if (homeContainer) {
            homeContainer.remove();
        }
        if (menuContainer) {
            menuContainer.remove();
        }
        if (contactContainer) {
            contactContainer.remove();
        }
    }
    }