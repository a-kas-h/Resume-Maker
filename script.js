let currentSection = 0;

function showSection(index) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, i) => {
        section.classList.toggle('active', i === index);
    });
}

function nextSection() {
    if (validateSection(currentSection)) {
        const sections = document.querySelectorAll('.section');
        if (currentSection < sections.length - 1) {
            currentSection++;
            showSection(currentSection);
        }
    }
}

function previousSection() {
    if (currentSection > 0) {
        currentSection--;
        showSection(currentSection);
    }
}

function validateSection(index) {
    const section = document.querySelectorAll('.section')[index];
    const inputs = section.querySelectorAll('input, textarea, select');
    let valid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.setCustomValidity('This field cannot be empty');
            input.reportValidity();
            valid = false;
        } else if (input.type === 'url' && !isValidURL(input.value)) {
            input.setCustomValidity('Please enter a valid URL');
            input.reportValidity();
            valid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            input.setCustomValidity('Please enter a valid email address');
            input.reportValidity();
            valid = false;
        } else if (input.type === 'number' && !isValidPhoneNumber(input.value)) {
            input.setCustomValidity('Please enter a valid phone number');
            input.reportValidity();
            valid = false;
        } else {
            input.setCustomValidity(''); // Clear any previous custom validity message
        }
    });

    return valid;
}

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhoneNumber(phone) {
    // This is a simple check. You might want to use a more comprehensive regex
    // depending on the phone number format you want to accept
    return /^\d{10,}$/.test(phone.replace(/\D/g, ''));
}

function addExperience() {
    const experienceDiv = document.createElement('div');
    experienceDiv.innerHTML = `
        <p>___________________________________________________________________<p>
        <label for="jobTitle">Job Title:</label>
        <input type="text" name="jobTitle" required><br><br>
        <label for="company">Company:</label>
        <input type="text" name="company" required><br><br>
        <label for="tenure">Tenure:</label>
        <input type="text" name="tenure" required><br><br>
        <label for="location">Location:</label>
        <input type="text" name="location" required><br><br>
        <label for="responsibilities">Additional notes:</label>
        <textarea name="responsibilities" rows="4" cols="50"></textarea><br><br><br>
    `;
    document.getElementById('experience-container').appendChild(experienceDiv);
}

function addSkill() {
    const container = document.getElementById('skills-container');
    const labels = container.getElementsByTagName('label');
    const skillCount = labels.length + 1; // Number of labels equals number of skills
    const label = document.createElement('label');
    label.setAttribute('for', `skill${skillCount}`);
    label.textContent = `${skillCount}.`;
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', `skill${skillCount}`);
    input.setAttribute('required', true);
    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
}

function addEducation() {
    const eduDiv = document.createElement('div');
    eduDiv.innerHTML = `
            <p>___________________________________________________________________<p>
            <label for="degree">Degree:</label>
            <input type="text" id="degree" required><br><br>
            <label for="university">University/School:</label>
            <input type="text" id="university" required><br><br>
            <label for="years">Years spent:</label>
            <input type="text" id="years" required><br><br>
            <label for="gpa">GPA/Percentage:</label>
            <input type="text" id="gpa" required><br><br><br>
    `;
    document.getElementById('education-container').appendChild(eduDiv);
}

function addLanguage() {
    const langDiv = document.createElement('div');
    langDiv.innerHTML = `
            <p>___________________________________________________________________<p>
            <label for="language">Language spoken:</label>
            <input type="text" id="language" required><br><br>
            <label for="proficiency">Proficiency:</label>
            <select id="proficiency" required>
                <option value="native">native/billingual</option>
                <option value="professional proficiency">professional proficiency</option>
                <option value="ltd proficiency">limited working proficiency</option>
                <option value="elementary">elementary proficiency</option>
            </select><br><br><br>`;
    document.getElementById('languages-container').appendChild(langDiv);
}

document.addEventListener('DOMContentLoaded', () => {
    showSection(currentSection);
});
