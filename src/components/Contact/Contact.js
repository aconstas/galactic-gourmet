import ChefImage from '../../assets/images/chef.png';
import OwnerImage from '../../assets/images/owner.png';

export default function loadContact () {

    const contacts = [
        {
            name: "Zorblatt Nebulaflare",
            role: "head chef",
            phone: "1-800-123-XENO",
            email: "zorblatt@milkwaymunchies.galaxy",
            catchphrase: "Cooking with a pinch of stardust and a dash of cosmic flair!",
            image: ChefImage,
        },
        {
            name: "Lirena Starbroker",
            role: "owner",
            phone: "1-888-789-GALX",
            email: "lirena@cosmicventures.galaxy",
            catchphrase: "Transforming nebulous ideas into stellar successes!",
            image: OwnerImage,
        }
    ]

    contacts.forEach(contact => {
        const contentDiv = document.getElementById('content');

        const card = document.createElement('div');
        card.classList.add('container');
        contentDiv.appendChild(card);
    
        const name = document.createElement('p');
        name.innerHTML = `<strong>${contact.name}</strong>, <em>${contact.role}<em>`;
        name.classList.add('name');
        card.appendChild(name);

        const profileImage = document.createElement('img');
        profileImage.classList.add('profile-image');
        profileImage.src = contact.image;
        profileImage.alt = `${contact.name} profile image`;
        card.appendChild(profileImage);
    
        const phone = document.createElement('p');
        phone.innerHTML = `<strong>Phone:</strong> ${contact.phone}`;
        phone.classList.add('phone');
        card.appendChild(phone);
    
        const email = document.createElement('p');
        email.innerHTML = `<strong>Email:</strong> ${contact.email}`;
        email.classList.add('email');
        card.appendChild(email);
    
        const catchphrase = document.createElement('p');
        catchphrase.innerHTML = `<em>"${contact.catchphrase}"</em>`;
        catchphrase.classList.add('catchphrase');
        card.appendChild(catchphrase);
        return contentDiv;
    })
}