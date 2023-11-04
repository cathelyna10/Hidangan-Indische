console.log("saskia");

const modal = document.createElement('div');
modal.id = 'modal';
document.body.appendChild(modal);

document.querySelectorAll('.image').forEach(image => {
    image.addEventListener('click', () => {
        const img = new Image(); // Create an image element
        img.src = image.src;
        img.id = "image";

        while (modal.firstChild) {
            modal.removeChild(modal.firstChild);
        }
        
        modal.appendChild(img);
        modal.classList.add('active');
    });
});

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === modal.querySelector('#image')) {
        modal.classList.remove('active');
    }
});
