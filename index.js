// Open and close the nav
const openNav = () => {
    document.getElementById('myNav')
    .style.height="100%";
}

const closeNav = () => {
    document.getElementById('myNav')
    .style.height="0%";
}

// Toggle the password
function Toggle() {
    var toggle = document.getElementById('typepass');
    if (toggle.type === 'password') {
        toggle.type = 'text';
    }
    else {
      toggle.type = 'password';
    }
}

// typed text
// https://cdnjs.com/libraries/typed.js
let typed = new Typed(".typing", {
    strings: ["Code Essentials ke", "Micah Wolf", "James Bond", "John Smith"],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true
});

// LINKS
// https://cdnjs.com/libraries/font-awesome

