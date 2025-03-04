document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 6; i++) {
        document.querySelector('.complete-btn-' + i).addEventListener('click', () => {
            document.querySelector('.complete-btn-' + i).disabled = true;
        });
    }

    const headerTitle = document.getElementById('headerTitle');
    headerTitle.addEventListener('click', () => {
        headerTitle.classList.toggle('bg-blue-200');
    });
});