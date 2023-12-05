// This is a single line comment

/*

This is a
multiline
comment

*/
const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = documet.getElementById('selectedImage');
const imageIndexes = [1,2,3,4];
const selectedIndex = null;

imageIndexes.forEach(i =>{
    const image = document.createElement('img');
    image.src= '/images/cars.jpg';
    image.classList.add('galleryImg');
    gallery.appendChild(image);
    addEventListener('click',() =>{
        //popup stuff

        
    })
});