const box1 = document.querySelector('#box-1');
const box2 = document.querySelector('#box-2');
const submitBtn = document.querySelector('.btn-primary-custom');
const succesBtn = document.querySelector('.btn-secondary-custom');
const input = document.querySelector('input');

submitBtn.addEventListener('click', () => {
    if (input.value == '') {
        input.style.backgroundColor = '#ff625771';
        return false
    } else {
        box1.style.display = 'none';
        box2.style.display = 'block';
        event.preventDefault();
    }
})

succesBtn.addEventListener('click', () => {
    box1.style.display = 'block';
    box2.style.display = 'none';
})


