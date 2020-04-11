document.querySelector('.btn__increase').addEventListener('click', () => {
    const element = document.querySelector('body');
    const style = window.getComputedStyle(element);
    
    let currSize = parseInt(style.fontSize.replace('px',''));

    let newSize = currSize + 1;
    element.style.fontSize = `${newSize}px`;
});

document.querySelector('.btn__decrease').addEventListener('click', () => {
    const element = document.querySelector('body');
    const style = window.getComputedStyle(element);
    
    let currSize = parseInt(style.fontSize.replace('px',''));

    let newSize = currSize - 1;
    element.style.fontSize = `${newSize}px`;
});