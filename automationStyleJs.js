document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const labelIcon = document.querySelector('#labelIcon');
    const trashIcon = document.querySelector('#trashIcon');
    const spamIcon = document.querySelector('#spamIcon');
    const deleteIcon = document.querySelector('#deleteIcon');

    const containerLabel = document.querySelector('#manageAuto');
    const containerTrash = document.querySelector('#trashAuto');
    const containerSpam = document.querySelector('#spamAuto');
    const containerDelete = document.querySelector('#deleteAuto');

    const h1organize = document.querySelector('#h1manage');
    const h1trash = document.querySelector('#h1trash');
    const h1spam = document.querySelector('#h1spam');
    const h1delete = document.querySelector('#h1delete');

    const porganize = document.querySelector('#pmanage');
    const ptrash = document.querySelector('#ptrash');
    const pspam = document.querySelector('#pspam');
    const pdelete = document.querySelector('#pdelete'); 

    const h2Title = document.querySelector('#h2title');

    function addHoverEffect(container, icon, h1, p) {
        container.addEventListener('mouseenter', () => {
            icon.style.animation = 'yTranslate 1.5s ease forwards';
            h1.style.animation = 'fadeIn 4s ease forwards';
            p.style.animation = 'fadeIn 4s ease forwards';
            h2Title.style.animation = 'fadeOut 0.5s ease forwards';
        });
        
        container.addEventListener('mouseleave', () => {
            icon.style.animation = 'yTranslateReverse 1.5s ease forwards';
            h1.style.animation = 'fadeOut 0.5s ease forwards';
            p.style.animation = 'fadeOut 0.5s ease forwards';
            h2Title.style.animation = 'fadeIn 3s ease forwards';
        });
    }

    addHoverEffect(containerLabel, labelIcon, h1organize, porganize);
    addHoverEffect(containerTrash, trashIcon, h1trash, ptrash);
    addHoverEffect(containerSpam, spamIcon, h1spam, pspam);
    addHoverEffect(containerDelete, deleteIcon, h1delete, pdelete);

    // setTimeout(() => {
    //     if (h2Title) {
    //         h2Title.style.borderRight = 'none';
    //     }
    // }, 4000);
});