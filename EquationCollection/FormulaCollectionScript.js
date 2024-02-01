let lastClickedButton = null; // Track the last clicked button

document.querySelectorAll('.styled-button-equation-group').forEach(button => {
    button.addEventListener('click', function() {
        const container = document.getElementById('equationContainer');

        // Check if the current button was the last clicked button
        if (this === lastClickedButton) {
            // Clear the container and reset lastClickedButton
            container.innerHTML = '';
            lastClickedButton = null;
        } else {
            // Update lastClickedButton to the current button
            lastClickedButton = this;
            // Clear the container before displaying new equations
            container.innerHTML = '';

            // Traverse to the parent node and then find the child '.Equation' elements
            const equations = this.parentNode.querySelectorAll('.Equation');

            equations.forEach(eq => {
                // Clone the equation element
                const displayEq = eq.cloneNode(true);
                // Set the display style to 'block' to make it visible
                displayEq.style.display = 'block';
                // Append the cloned equation to the container
                container.appendChild(displayEq);
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        content.classList.toggle('shifted');
    });
});
