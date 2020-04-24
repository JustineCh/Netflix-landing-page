let questionsButtons = document.querySelectorAll('.svg-icon');


for(const questionsButton of questionsButtons) {
    questionsButton.addEventListener('click', (e) => {
        let svg = e.currentTarget;
        let listElement = svg.parentElement.parentElement.parentElement;
        let divParagraphs = listElement.querySelector('.bottom-section-div-paragraphs');

        if(divParagraphs.classList.contains('bottom-section-div-paragraph-show')){
            svg.classList.remove('svg-icon-x');
            divParagraphs.classList.remove('bottom-section-div-paragraph-show');
        } else {
            svg.classList.add('svg-icon-x');
            divParagraphs.classList.add('bottom-section-div-paragraph-show');
        }
    })
}