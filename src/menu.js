


export default function menu() {
    const rootDiv = document.querySelector('#content');
    
    


    const menuContainer = document.createElement('section');
    menuContainer.classList.add('menu')
    
    const tragicHotDogsContainer = document.createElement('div');
    const tragicTitle = document.createElement('h3');
    tragicTitle.innerText = 'Panchos Trágicos: '
    const tragicMenu = document.createElement('p');
    tragicMenu.innerText = 
    `Pancho Rancio - $2.99
    Pancho de la Desilusión - $3.49
    Pancho Misterioso - $4.99
    `;
    tragicHotDogsContainer.appendChild(tragicTitle);
    tragicHotDogsContainer.appendChild(tragicMenu);
    menuContainer.appendChild(tragicHotDogsContainer)
    rootDiv.appendChild(menuContainer);
}