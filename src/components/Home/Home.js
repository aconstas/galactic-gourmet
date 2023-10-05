import RestaurantPic from '../../assets/images/restaurant.png';
// import './Home.css';

export default function loadRestaurantInfo () {
    const RestaurantContainer = document.getElementById('content');
    
    const restaurantImage = document.createElement('img');
    restaurantImage.src = RestaurantPic;
    RestaurantContainer.appendChild(restaurantImage);

    const review = document.createElement('p');
    review.innerText = "Absolutely out of this world, 'Galactic Gourmet' on planet Nebulon-5 is a dining experience like no other! Nestled on the shimmering plains of Crystalline Valley, this restaurant boasts a menu infused with the rarest ingredients from across the galaxy."
    
    RestaurantContainer.appendChild(review);

    return RestaurantContainer;
}