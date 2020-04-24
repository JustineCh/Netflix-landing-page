let questionsButtons = document.querySelectorAll('.svg-icon');


for(const questionsButton of questionsButtons) {
    questionsButton.addEventListener('click', (e) => {
        let svg = e.currentTarget;
        let listElement = svg.parentElement.parentElement.parentElement;
        let divParagraphs = listElement.querySelector('.bottom-section-div-paragraphs');

        svg.classList.toggle('svg-icon-x');
        divParagraphs.classList.toggle('bottom-section-div-paragraph-show');
    })
}