document.addEventListener("DOMContentLoaded", () => {
    let currentChapter = 1; // Start with the first chapter
    const viewer = document.getElementById('storyViewer');

    // Function to load and display a story chapter
    function loadStory(chapter) {
        // Fetch the story text file
        fetch(`StoryChapter-${chapter}.txt`).then(response => {
            if(response.ok) {
                return response.text();
            } else {
                return 'Chapter not found.';
            }
        }).then(text => {
            viewer.innerHTML = text; // Display in the viewer
        });
    }

    // Load the initial story chapter
    loadStory(currentChapter);

    // Event listeners for navigation
    document.getElementById('prevButton').addEventListener('click', () => {
        if(currentChapter > 1) {
            currentChapter--;
            loadStory(currentChapter);
        }
    });

    document.getElementById('nextButton').addEventListener('click', () => {
        currentChapter++;
        loadStory(currentChapter);
    });
});
