import loadHome from "./components/Home/Home";
import loadContact from "./components/Contact/Contact";
import loadMenu from "./components/Menu/Menu";
import '../src/components/Home/Home.css';

loadHome();

const contentDiv = document.getElementById('content');

function clearContent() {
    while (contentDiv.firstChild) {
        contentDiv.firstChild.remove();
    }
}

function setupTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            clearContent();

            switch (e.target.id) {
                case 'menu':
                    loadMenu();
                    break;
                case 'home':
                    loadHome();
                    break;
                case 'contact':
                    loadContact();
                    break;
            }
        });
    });
}

setupTabs();