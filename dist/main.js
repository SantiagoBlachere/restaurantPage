/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });


function contact() {
    const rootDiv = document.querySelector('#content');

    const contactContainer = document.createElement('section');
    contactContainer.classList.add('contact');

    const titleContact = document.createElement('h2');
    titleContact.innerText = 'CONTACTO';
    contactContainer.appendChild(titleContact);

    const contacts = document.createElement('p');
    contacts.innerText = `Dirección: Calle de la Desilusión, No. 123
    Ciudad: Ciudad Desastre
    Teléfono: (555) 123-4567
    Correo electrónico: info@pancheriaosvaldo.com`
    contactContainer.appendChild(contacts);

    rootDiv.appendChild(contactContainer);
}

/***/ }),

/***/ "./src/firstComponent.js":
/*!*******************************!*\
  !*** ./src/firstComponent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ component)
/* harmony export */ });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



function component() {
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
        ;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }

    const menuBtn = document.createElement('button');
    menuBtn.innerText = 'MENU';
    menuBtn.onclick = () => {
        clearContent();
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }

    const contactBtn = document.createElement('button');
    contactBtn.innerText = 'CONTACT';
    contactBtn.onclick = () => {
        clearContent();
        (0,_contact__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }


    rootDiv.appendChild(navBar);
    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn)
    navBar.appendChild(contactBtn)
    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();

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

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });



function home() {
    
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

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });



function menu() {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firstComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstComponent */ "./src/firstComponent.js");




(0,_firstComponent__WEBPACK_IMPORTED_MODULE_0__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmdDO0FBQ047QUFDQTtBQUNYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQUk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQUk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQU87QUFDZjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFJOztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9DZTtBQUNmO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOd0M7Ozs7QUFJeEMsMkRBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvZmlyc3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gICAgY29uc3Qgcm9vdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgY29uc3QgdGl0bGVDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZUNvbnRhY3QuaW5uZXJUZXh0ID0gJ0NPTlRBQ1RPJztcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFjdCk7XG5cbiAgICBjb25zdCBjb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0cy5pbm5lclRleHQgPSBgRGlyZWNjacOzbjogQ2FsbGUgZGUgbGEgRGVzaWx1c2nDs24sIE5vLiAxMjNcbiAgICBDaXVkYWQ6IENpdWRhZCBEZXNhc3RyZVxuICAgIFRlbMOpZm9ubzogKDU1NSkgMTIzLTQ1NjdcbiAgICBDb3JyZW8gZWxlY3Ryw7NuaWNvOiBpbmZvQHBhbmNoZXJpYW9zdmFsZG8uY29tYFxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdHMpO1xuXG4gICAgcm9vdERpdi5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcbn0iLCJpbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tZW51XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJQQU5DSE9TIE9TVkFMRE9cIlxuICAgIFxuICAgIGNvbnN0IG9zdmFsZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBvc3ZhbGRvLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vaS55dGltZy5jb20vdmkvQkZ0bUdDVGpmUk0vbWF4cmVzZGVmYXVsdC5qcGcnKTtcbiAgICBvc3ZhbGRvLmNsYXNzTGlzdC5hZGQoJ29zdmFsZG8nKVxuICAgIHJvb3REaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHJvb3REaXYuYXBwZW5kQ2hpbGQob3N2YWxkbyk7XG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2QmFyJylcblxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnRuLmlubmVyVGV4dCA9ICdIT01FJztcbiAgICBob21lQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpXG4gICAgICAgIGhvbWUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi5pbm5lclRleHQgPSAnTUVOVSc7XG4gICAgbWVudUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgbWVudSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnRuLmlubmVyVGV4dCA9ICdDT05UQUNUJztcbiAgICBjb250YWN0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICBjb250YWN0KCk7XG4gICAgfVxuXG5cbiAgICByb290RGl2LmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnRuKVxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnRuKVxuICAgIGhvbWUoKTtcblxuICAgIGNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG4gICAgICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuICAgICAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKVxuICAgICAgICBpZiAoaG9tZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgaG9tZUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVudUNvbnRhaW5lcikge1xuICAgICAgICAgICAgbWVudUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGFjdENvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFjdENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB9IiwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBcbiAgICBjb25zdCByb290RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIFxuICAgIGNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKVxuXG4gICAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBob21lVGl0bGUuaW5uZXJUZXh0ID0gJ0JJRU5WRU5JRE8gQSBMQSBQQU5DSEVSw41BIERFIE9TVkFMRE8hJztcbiAgICBcbiAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCLCoUJpZW52ZW5pZG9zIGEgJ1BhbmNoZXLDrWEgT3N2YWxkbycg4oCTIGVsIGRlc3Rpbm8gZGVmaW5pdGl2byBwYXJhIGFxdWVsbG9zIHF1ZSBidXNjYW4gdW5hIGNhdMOhc3Ryb2ZlIGN1bGluYXJpYSEgTnVlc3Ryb3MgcGFuY2hvcyBzb24gdW4gdmVyZGFkZXJvIHRlc3RpbW9uaW8gZGUgbGEgZmFsdGEgZGUgc2Fib3IsIGNvbiBjYXJuZXMgbWlzdGVyaW9zYXMgc29icmVjb2NpZGFzLCBwYW5lcyByYW5jaW9zIHkgdW5hIHNlbGVjY2nDs24gZGVzb3JkZW5hZGEgZGUgY29uZGltZW50b3MgdmVuY2lkb3MuIE51ZXN0cm8gJ2NoZWYnIGhhIHBlcmZlY2Npb25hZG8gZWwgYXJ0ZSBkZSBjb2NpbmFyIGVuIGVsIG1pY3Jvb25kYXMsIGFzZWd1cmFuZG8gcXVlIGNhZGEgcGFuY2hvIGVzdMOpIHRpYmlvIGVuIGVsIG1lam9yIGRlIGxvcyBjYXNvcy4gQ29uIHVuIGFtYmllbnRlIGRlIGNvbWVkb3IgcXVlIGdyaXRhICdlc3RhY2nDs24gZGUgc2VydmljaW8gYWJhbmRvbmFkYScgeSB1biBwZXJzb25hbCBpZ3VhbG1lbnRlIGRlc2ludGVyZXNhZG8gZW4gdHUgc2F0aXNmYWNjacOzbiwgUGFuY2hlcsOtYSBPc3ZhbGRvIGVzIGVsIGx1Z2FyIGRvbmRlIHR1cyBwYXBpbGFzIGd1c3RhdGl2YXMgdmFuIGEgbW9yaXIuIMKhQWNvbXDDocOxYW5vcyBwYXJhIHVuYSBleHBlcmllbmNpYSBpbm9sdmlkYWJsZSBlbiBsYSBkZXNlc3BlcmFjacOzbiBnYXN0cm9uw7NtaWNhIVwiXG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIGNvbnN0IHNjaGVkdWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NoZWR1bGVEaXYuY2xhc3NMaXN0LmFkZCgnc2NoZWR1bGUnKVxuICAgIGNvbnN0IHNjaGVkdWxlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHNjaGVkdWxlV2Vla0RheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgc2NoZWR1bGVXZWVrRW5kcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHNjaGVkdWxlVGl0bGUuaW5uZXJUZXh0ID0gJ0hPUkFSSU9TJ1xuICAgIHNjaGVkdWxlV2Vla0RheXMuaW5uZXJUZXh0ID0gYEx1bmVzIGEgVmllcm5lczpcblxuICAgIEFwZXJ0dXJhOiAxMDowMCBBTVxuICAgIEFsbXVlcnpvOiAxMjowMCBQTSAtIDI6MDAgUE1cbiAgICBDZW5hOiA2OjAwIFBNIC0gODowMCBQTVxuICAgIENpZXJyZTogOTowMCBQTWBcbiAgICBzY2hlZHVsZVdlZWtFbmRzLmlubmVyVGV4dCA9IGBTw6FiYWRvIHkgRG9taW5nbzpcbiAgICBcbiAgICBBcGVydHVyYTogMTE6MDAgQU1cbiAgICBBbG11ZXJ6bzogMTI6MzAgUE0gLSAzOjAwIFBNXG4gICAgQ2VuYTogNjozMCBQTSAtIDk6MDAgUE1cbiAgICBDaWVycmU6IDEwOjAwIFBNXCJgXG4gICAgXG4gICAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQoc2NoZWR1bGVXZWVrRGF5cyk7XG4gICAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQoc2NoZWR1bGVXZWVrRW5kcylcbiAgICBcbiAgICBcblxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKTtcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmREaXYpO1xuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NoZWR1bGVUaXRsZSlcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjaGVkdWxlRGl2KTtcblxuICAgIHJvb3REaXYuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG4gICAgXG5cbn0iLCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnN0IHJvb3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIFxuICAgIFxuXG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudScpXG4gICAgXG4gICAgY29uc3QgdHJhZ2ljSG90RG9nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRyYWdpY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0cmFnaWNUaXRsZS5pbm5lclRleHQgPSAnUGFuY2hvcyBUcsOhZ2ljb3M6ICdcbiAgICBjb25zdCB0cmFnaWNNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRyYWdpY01lbnUuaW5uZXJUZXh0ID0gXG4gICAgYFBhbmNobyBSYW5jaW8gLSAkMi45OVxuICAgIFBhbmNobyBkZSBsYSBEZXNpbHVzacOzbiAtICQzLjQ5XG4gICAgUGFuY2hvIE1pc3Rlcmlvc28gLSAkNC45OVxuICAgIGA7XG4gICAgdHJhZ2ljSG90RG9nc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0cmFnaWNUaXRsZSk7XG4gICAgdHJhZ2ljSG90RG9nc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0cmFnaWNNZW51KTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHRyYWdpY0hvdERvZ3NDb250YWluZXIpXG4gICAgcm9vdERpdi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjb21wb25lbnQgZnJvbSAnLi9maXJzdENvbXBvbmVudCdcblxuXG5cbmNvbXBvbmVudCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9