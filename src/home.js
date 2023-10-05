


export default function home() {
    
    const rootDiv = document.querySelector('#content')
    
    const homeContainer = document.createElement('section')
    homeContainer.classList.add('home')

    const homeTitle = document.createElement('h2');
    homeTitle.innerText = 'BIENVENIDO A LA PANCHERÍA DE OSVALDO!';
    
    const cardDiv = document.createElement('div');
    const description = document.createElement('p');
    description.innerText = "¡Bienvenidos a 'Panchería Osvaldo' – el destino definitivo para aquellos que buscan una catástrofe culinaria! Nuestros panchos son un verdadero testimonio de la falta de sabor, con carnes misteriosas sobrecocidas, panes rancios y una selección desordenada de condimentos vencidos. Nuestro 'chef' ha perfeccionado el arte de cocinar en el microondas, asegurando que cada pancho esté tibio en el mejor de los casos. Con un ambiente de comedor que grita 'estación de servicio abandonada' y un personal igualmente desinteresado en tu satisfacción, Panchería Osvaldo es el lugar donde tus papilas gustativas van a morir. ¡Acompáñanos para una experiencia inolvidable en la desesperación gastronómica!"
    cardDiv.appendChild(description)

    const scheduleDiv = document.createElement('div');
    scheduleDiv.classList.add('schedule')
    const scheduleTitle = document.createElement('h3');
    const scheduleWeekDays = document.createElement('p');
    const scheduleWeekEnds = document.createElement('p')
    scheduleTitle.innerText = 'HORARIOS'
    scheduleWeekDays.innerText = `Lunes a Viernes:

    Apertura: 10:00 AM
    Almuerzo: 12:00 PM - 2:00 PM
    Cena: 6:00 PM - 8:00 PM
    Cierre: 9:00 PM`
    scheduleWeekEnds.innerText = `Sábado y Domingo:
    
    Apertura: 11:00 AM
    Almuerzo: 12:30 PM - 3:00 PM
    Cena: 6:30 PM - 9:00 PM
    Cierre: 10:00 PM"`
    
    scheduleDiv.appendChild(scheduleWeekDays);
    scheduleDiv.appendChild(scheduleWeekEnds)
    
    

    homeContainer.appendChild(homeTitle);
    homeContainer.appendChild(cardDiv);
    homeContainer.appendChild(scheduleTitle)
    homeContainer.appendChild(scheduleDiv);

    rootDiv.appendChild(homeContainer);
    

}