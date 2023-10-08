import Appetizer from '../../assets/images/stellar-stew.png';
import Main from '../../assets/images/terran-meal.png';
import Dessert from '../../assets/images/void-velvet-cake.png';

export default function loadMenu() {
    const contentDiv = document.getElementById('content');

    const menu = [
        {
            name: 'Stellar Stew',
            image: Appetizer,
            description: 'A bubbling pot of bioluminescent algae, offering a soft glow and an unexpected spicy kick.',
        },
        {
            name: 'Terran Layered Protein Disk',
            image: Main,
            description: 'A delectable Earth-origin ensemble of stacked ingredients, primarily characterized by its meaty center sandwiched between two soft rounds.',
        },
        {
            name: 'Void Velvet Cake',
            image: Dessert,
            description: 'A pitch-black cake that offers a taste of the void itself, strangely both empty and rich.',
        },
    ]

    const headline = document.createElement('h2');
    headline.innerText = "Current Solunar Cycle's specialties"
    headline.id = 'menu-headline';
    contentDiv.appendChild(headline);

    menu.forEach(meal => {

        const card = document.createElement('div');
        card.classList.add('container');
        contentDiv.appendChild(card);

        const name = document.createElement('h2');
        name.innerText = meal.name;
        name.classList.add('meal-name');
        card.appendChild(name);

        const image = document.createElement('img');
        image.src = meal.image;
        image.alt = `Image of ${meal.image}`;
        card.appendChild(image);

        const description = document.createElement('p');
        description.innerText = meal.description;
        card.appendChild(description);

    })

    const dessertRoomText = document.createElement('p');
    dessertRoomText.innerText = "These selections are offered only for the current Solunar Cycle. Our zero-gravity dessert room is open every cycle in the revolution from 00:00 - 42:00 (GCT - Galactic Core Time)."
    dessertRoomText.id = 'dessertroom-text';
    contentDiv.appendChild(dessertRoomText);

    return contentDiv;
}