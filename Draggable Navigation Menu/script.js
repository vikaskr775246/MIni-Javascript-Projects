const inductor = document.querySelector('.inductor')
const a = Array.from(document.getElementsByTagName('li'));
a.forEach(elm => {
    elm.addEventListener('click', function () {
        inductor.style.left = `${this.offsetLeft}px`;
        a.forEach(rem => rem.classList.remove('active'))
        this.classList.add('active');
    })
});