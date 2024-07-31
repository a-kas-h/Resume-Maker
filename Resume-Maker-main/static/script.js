let currentSection = 0;

function showSection(index) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, i) => {
        section.classList.toggle('active', i === index);
    });
}

function nextSection() {
    const sections = document.querySelectorAll('.section');
    if (currentSection < sections.length - 1) {
        currentSection++;
        showSection(currentSection);
    }
}

function previousSection() {
    if (currentSection > 0) {
        currentSection--;
        showSection(currentSection);
    }
}

function addExperience() {
    const experienceDiv = document.createElement('div');
    experienceDiv.innerHTML = `
        <label for="jobTitle1">Job Title:</label>
        <input type="text" id="jobTitle1" name="jobitles[]"><br><br>
        <label for="company1">Company:</label>
        <input type="text" id="company1" name="companies[]"><br><br>
        <label for="tenure1">Tenure:</label>
        <input type="text" id="tenure1" name="tenures[]"><br><br>
        <label for="location1">Location:</label>
        <input type="text" id="location1" name="locations[]"><br><br>
        <label for="responsibilities1">Additional notes:</label>
        <textarea  id="responsibilities1" name="responsibilities[]" rows="4" cols="50"></textarea><br><br>
    `;
    document.getElementById('Experience').appendChild(experienceDiv);
}
let skillCount = 1;
function addSkill() {
    skillCount++;
    const container = document.getElementById('skills-container');
    const labels = container.getElementsByTagName('label');
    const skillIndex = labels.length + 1; // Number of labels equals number of skills
    const label = document.createElement('label');
    label.setAttribute('for', `skill${skillIndex}`);
    label.textContent = `${skillIndex}.`;
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', `skill${skillIndex}`);
    input.setAttribute('name','user_skill[]');
    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
}

function addEducation() {
    const eduDiv = document.createElement('div');
    eduDiv.innerHTML = `
            <label for="degree">Degree:</label>
            <input type="text" id="degree1" name="degrees[]"><br><br>
            <label for="university">University:</label>
            <input type="text" id="university1" name="universities[]"><br><br>
            <label for="years">Years spent:</label>
            <input type="text" id="years1" name="years[]"><br><br>
            <label for="gpa">GPA:</label>
            <input type="text" id="gpa1" name="gpas[]"><br><br>
    `;
    document.getElementById('Education').appendChild(eduDiv);
}

function addLanguage(){
    const langDiv = document.createElement('div');
    langDiv.innerHTML = `
            <label for="language">Language spoken:</label>
            <input type="text" id="language1" name="languages[]"><br><br>
            <label for="proficiency">Proficiency:</label>
            <input type="text" id="proficiency1" name="proficiency[]"><br><br>
    `;
    document.getElementById('Languages').appendChild(langDiv);

}

document.addEventListener('DOMContentLoaded', () => {
    showSection(currentSection);
});
