document.addEventListener('DOMContentLoaded', () => {
    const orderBtn = document.getElementById('orderBtn');
    const titleBtn = document.getElementById('titleBtn');
    const colorBtn = document.getElementById('colorBtn');
    const imageBtn = document.getElementById('imageBtn');
    const divContent = document.querySelector('.content');
    const headerTitle = document.querySelector('.header h1');
    const cityTitles = document.querySelectorAll('.cartas h2');
    const cityParagraphs = document.querySelectorAll('.cartas p');
    const footer = document.querySelector('.footer');

    // Boton para ordenar de columnas a filas 
    orderBtn.addEventListener('click', () => {
        divContent.classList.toggle('flex-column');
    });

    // Boton para cambiar texto del header
    titleBtn.addEventListener('click', () => {
        headerTitle.textContent = 'HTML & CSS: Curso practico avanzado';
    });

    // Boton para cambiar los colores 
    colorBtn.addEventListener('click', () => {
        cityTitles.forEach(title => {
            title.style.color = '#bae521ff';
        });
        cityParagraphs.forEach(paragraph => {
            paragraph.style.color = '#900d51ff';
        });
    });

    // Boton para agregar la imagen 
    imageBtn.addEventListener('click', () => {
        const existingImage = footer.querySelector('.footer-image');
        if (existingImage) {
            existingImage.remove();
        } else {
            const newImage = document.createElement('img');
            newImage.src = "../Imagen/Mar.jpg";
            newImage.alt = 'A placeholder image';
            newImage.classList.add('footer-image');
            footer.appendChild(newImage);
        }
    });
});