import RestaurantPic from '../../assets/images/restaurant.webp';
import ViewPic from '../../assets/images/dinner-view.webp';
import Dessert from '../../assets/images/dessert.webp';

export default function loadHome () {
    const contentDiv = document.getElementById('content');
    
    const title = document.createElement('p');
    title.innerText = "GALACTIC GOURMET";
    title.id = 'title';
    contentDiv.appendChild(title);


    const reviewContainer = document.createElement('div');
    contentDiv.appendChild(reviewContainer).classList.add('container');

    const restaurantImage = document.createElement('img');
    restaurantImage.src = RestaurantPic;
    restaurantImage.alt = "Inside view of restaurant"
    reviewContainer.appendChild(restaurantImage);
    const review = document.createElement('p');
    review.innerText = "Absolutely out of this world, 'Galactic Gourmet' on planet Nebulon-5 is a dining experience like no other! Nestled on the shimmering plains of Crystalline Valley, this restaurant boasts a menu infused with the rarest ingredients from across the galaxy."
    reviewContainer.appendChild(review);

    const text1Container = document.createElement('div');
    contentDiv.appendChild(text1Container).classList.add('container');

    const viewImage = document.createElement('img');
    viewImage.src = ViewPic;
    viewImage.alt = "View from dining area";
    text1Container.appendChild(viewImage);
    const text1 = document.createElement('p');
    text1.innerText = "As you savor dishes that dance with cosmic flavors, large glass domes offer panoramic views of the breathtaking Nebulon skies, where meteor showers serve as your candlelight.";
    text1Container.appendChild(text1);
    
    const text2Container = document.createElement('div');
    contentDiv.appendChild(text2Container).classList.add('container');

    const dessertImage = document.createElement('img');
    dessertImage.src = Dessert;
    dessertImage.alt = "Image of galactic dessert";
    text2Container.appendChild(dessertImage);
    const text2 = document.createElement('p');
    text2.innerText = "If the exquisite cuisine doesn't transport you to another dimension, the zero-gravity dessert room surely will. A trip to Galactic Gourmet is not just a meal; it's an interstellar journey for your taste buds!";
    text2Container.appendChild(text2);

    return contentDiv;
}
