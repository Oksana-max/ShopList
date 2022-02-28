function modalOpen() {
    let btnAuth = document.querySelector('.header-actions__user');
    btnAuth.addEventListener('click', (e) => {
        let modalAuth = document.querySelector('.modal-auth');
        modalAuth.classList.toggle("_active");
        event.preventDefault()
    })
}
modalOpen();