document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navigation').classList.add('showContent');
});

document.getElementById('close-menu').addEventListener('click', () =>{
    document.getElementById('navigation').classList.remove('showContent')
    document.getElementById('navigation').classList.add("hidden");
});