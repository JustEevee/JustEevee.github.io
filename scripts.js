document.addEventListener("DOMContentLoaded", () => {
    let currentChapter = 1; // Start with the first chapter
    const viewer = document.getElementById('storyViewer');
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');

    function checkChapterAvailability(chapter) {
        // Attempt to fetch the next chapter
        fetch(`StoryChapter-${chapter}.txt`)
            .then(response => {
                if(response.ok) {
                    // If the chapter exists, ensure the next button is visible
                    nextButton.style.display = 'inline';
                } else {
                    // If the chapter doesn't exist, hide the next button
                    nextButton.style.display = 'none';
                }
            }).catch(() => {
                // In case of any other errors, hide the next button
                nextButton.style.display = 'none';
            });
    }

    function loadStory(chapter) {
        fetch(`StoryChapter-${chapter}.txt`).then(response => {
            if(response.ok) {
                return response.text();
            } else {
                // If the chapter doesn't exist, adjust UI accordingly
                prevButton.style.display = chapter === 1 ? 'none' : 'inline';
                return 'Chapter not found.';
            }
        }).then(text => {
            viewer.innerHTML = text;
            // Check if the next chapter is available every time you load a story
            checkChapterAvailability(chapter + 1);
        });
    }

    // Load the initial story chapter
    loadStory(currentChapter);

    // Event listeners for navigation
    prevButton.addEventListener('click', () => {
        if(currentChapter > 1) {
            currentChapter--;
            loadStory(currentChapter);
        }
    });

    nextButton.addEventListener('click', () => {
        // Instead of incrementing first, check if next is available
        checkChapterAvailability(currentChapter + 1);
        currentChapter++;
        loadStory(currentChapter);
    });
});
