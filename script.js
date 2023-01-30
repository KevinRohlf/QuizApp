function linkFocused(link) {
    let index = document.getElementById(link);
    let links = ['HTML', 'CSS', 'JS', 'Java'];
    let check = links.indexOf(link);

    links.splice(check, 1);
    for (let i = 0; i < links.length; i++) {
        let b = links[i];
        let c = document.getElementById(b);
        c.classList.remove('linkFocused');
    }
    index.classList.add('linkFocused');
} 