const footer = document.createElement("template");

footer.innerHTML = `
    <footer>
        <p>&copy; 2024 My Blog. All rights reserved.</p>
        <nav>
            <a href="contact.html">Contact  </a>
            <a href="formresponses.html">Responses page</a>
        </nav>
    </footer>
`;

document.body.appendChild(footer.content);
