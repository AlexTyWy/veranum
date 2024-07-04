function updateGuestCount(type, increment) {
    const countElement = document.getElementById(`${type}-count`);
    let count = parseInt(countElement.textContent);
    count = Math.max(0, count + increment);
    countElement.textContent = count;
    updateGuestButtonText();
}

function updateGuestButtonText() {
    const adultsCount = parseInt(document.getElementById('adults-count').textContent);
    const childrenCount = parseInt(document.getElementById('children-count').textContent);
    const roomsCount = parseInt(document.getElementById('rooms-count').textContent);
    const guestButton = document.getElementById('guestButton');
    guestButton.textContent = `${adultsCount + childrenCount} huéspedes, ${roomsCount} habitación${roomsCount > 1 ? 'es' : ''}`;
}

function closeDropdown() {
    document.querySelector('.dropdown-content').style.display = 'none';
}

// Cerrar el dropdown al hacer clic fuera
window.onclick = function(event) {
    if (!event.target.matches('#guestButton')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}
