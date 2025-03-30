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


document.addEventListener('DOMContentLoaded', function() {
    containerLabel.addEventListener('mouseenter', () => {
        labelIcon.style.animation = 'yTranslate 1.5s ease forwards';
        h1organize.style.animation = 'fadeIn 4s ease forwards';
    });
    containerLabel.addEventListener('mouseleave', () => {
        labelIcon.style.animation = 'yTranslateReverse 1.5s ease forwards';
        h1organize.style.animation = 'fadeOut 0.5s ease forwards';
    });

    containerTrash.addEventListener('mouseenter', () => {
        trashIcon.style.animation = 'yTranslate 1.5s ease forwards';
    });
    containerTrash.addEventListener('mouseleave', () => {
        trashIcon.style.animation = 'yTranslateReverse 1.5s ease forwards';
    });

    containerSpam.addEventListener('mouseenter', () => {
        spamIcon.style.animation = 'yTranslate 1.5s ease forwards';
    });
    containerSpam.addEventListener('mouseleave', () => {
        spamIcon.style.animation = 'yTranslateReverse 1.5s ease forwards';
    });

    containerDelete.addEventListener('mouseenter', () => {
        deleteIcon.style.animation = 'yTranslate 1.5s ease forwards';
    });
    containerDelete.addEventListener('mouseleave', () => {
        deleteIcon.style.animation = 'yTranslateReverse 1.5s ease forwards';
    });
});