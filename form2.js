// Grabbing the target form
const form2 = document.getElementById("feedback-form");

// attching submit event
form2.addEventListener('submit', (e) => {
    // preventing default behavior
    e.preventDefault();
    // retrieving all form data
    const formData = new FormData(form2);

    // creating feedback Object
    const feedbackObject = {
        name: formData.get('name').trim(),
        email: formData.get('email').toLowerCase(),
        message: formData.get('message').trim(),
        category: formData.get('category'),
        isUrgent: formData.has('urgent'),
        submittedAt: new Date().toISOString()
    };

    // console output
    console.log(feedbackObject);

    // reset the form
    form2.reset();
});