const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        const linkId = link.id;

        allLinks.forEach(l => l.classList.toggle("active", l === link));
        allTabs.forEach(tab => tab.classList.toggle("active-tab-content", tab.id === linkId));
    });
});

function copyLink(event) {
    event.preventDefault();
    const link = "https://moritzwendt.de";
    navigator.clipboard.writeText(link).then(() => {
        const icon = document.getElementById('copyIcon');
        
        icon.classList.remove('ri-link');
        icon.classList.add('ri-check-double-line');
        
        icon.classList.add('copy-success');
        
        setTimeout(() => {
            icon.classList.remove('copy-success');
            icon.classList.remove('ri-check-double-line');
            icon.classList.add('ri-link');
        }, 1500);
    }).catch(err => {
        console.error("Fehler beim Kopieren:", err);
    });
}