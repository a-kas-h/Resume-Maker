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
    eduDiv.innerHTML =` 
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
    langDiv.innerHTML =`
            <p>___________________________________________________________________<p>
            <label for="language">Language spoken:</label>
            <input type="text" id="language" required><br><br>
            <label for="proficiency">Proficiency:</label>
            <select id="proficiency" required>
                <option value="native">native/billingual</option>
                <option value="professional proficiency">professional proficiency</option>
                <option value="ltd proficiency">limited working proficiency</option>
                <option value="elementary">elementary proficiency</option>
            </select><br><br><br>
        `;
    document.getElementById('languages-container').appendChild(langDiv);
}

document.addEventListener('DOMContentLoaded', () => {
    showSection(currentSection);
    document.getElementById('submitBtn').addEventListener('click', (event) => {
        if (validateSection(currentSection)) {
            generatePDF(event);
        }
    });
});

// Assume the font has been loaded and is available as 'myFont'
function generatePDF(event) {
    event.preventDefault(); // Prevent form submission

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set font
    ///doc.addFileToVFS("Garamond.ttf", font);
    ///doc.addFont("Garamond.ttf", "Garamond", "normal");
    ///doc.setFont("Garamond");

    // Helper function to add text
    function addText(text, x, y, size = 12, style = 'normal') {
        doc.setFontSize(size);
        doc.setFont("MyFont", style);
        doc.text(text, x, y);
    }

    // Personal Information
    addText(document.getElementById('name').value, 10, 20, 18, 'bold');
    addText(document.getElementById('Country').value + ' | P: ' + document.getElementById('phone').value + ' | ' + document.getElementById('email').value, 10, 30);
    addText(document.getElementById('li').value + ' | ' + document.getElementById('gh').value, 10, 40);

    // Education
    addText('EDUCATION', 10, 55, 14, 'bold');
    let yPos = 65;
    document.querySelectorAll('#education-container > div').forEach((edu, index) => {
        addText(edu.querySelector('[id^="university"]').value, 10, yPos, 12, 'bold');
        addText(edu.querySelector('[id^="degree"]').value + ', GPA: ' + edu.querySelector('[id^="gpa"]').value, 10, yPos + 5);
        addText(edu.querySelector('[id^="years"]').value, 160, yPos, 10);
        yPos += 15;
    });

    // Work Experience
    addText('WORK EXPERIENCE', 10, yPos + 10, 14, 'bold');
    yPos += 20;
    document.querySelectorAll('#experience-container > div').forEach((exp, index) => {
        addText(exp.querySelector('[name="company"]').value, 10, yPos, 12, 'bold');
        addText(exp.querySelector('[name="jobTitle"]').value, 10, yPos + 5, 12, 'italic');
        addText(exp.querySelector('[name="tenure"]').value, 160, yPos, 10);
        
        const responsibilities = exp.querySelector('[name="responsibilities"]').value.split('\n');
        responsibilities.forEach((resp, i) => {
            addText('• ' + resp, 15, yPos + 15 + (i * 5), 10);
        });
        
        yPos += 25 + (responsibilities.length * 5);
    });

    // Projects
    addText('PROJECTS', 10, yPos + 10, 14, 'bold');
    yPos += 20;
    // Add your projects here. Since the form doesn't have a projects section, 
    // you might want to add this to your form or use placeholder text.

    // Skills
    addText('SKILLS', 10, yPos + 10, 14, 'bold');
    yPos += 20;
    let skills = '';
    document.querySelectorAll('#skills-container input').forEach((skill, index) => {
        skills += skill.value + ', ';
    });
    addText('Technical Skills: ' + skills.slice(0, -2), 10, yPos, 10);

    // Languages
    yPos += 10;
    addText('Languages:', 10, yPos, 10, 'bold');
    let languages = '';
    document.querySelectorAll('#languages-container > div').forEach((lang, index) => {
        languages += lang.querySelector('[id^="language"]').value + ' (' + 
                     lang.querySelector('[id^="proficiency"]').value + '), ';
    });
    addText(languages.slice(0, -2), 35, yPos, 10);

    // Save the PDF
    doc.save('resume.pdf');
}

// Add event listener to form submission
document.querySelector('form').addEventListener('submit', generatePDF);