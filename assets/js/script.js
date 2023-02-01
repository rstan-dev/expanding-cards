const panels = document.querySelectorAll('.panel');
// selects all elements with the class of "panel"
console.log(panels); //shows the node list in the console


panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        console.log(panel); //shows the detail of each panel
        removeActiveClasses(); //func to remove class active
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
};