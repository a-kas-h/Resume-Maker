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
        <p>___________________________________________________________________<p>
        <label for="jobTitle">Job Title:</label>
        <input type="text" name="jobTitle"><br><br>
        <label for="company">Company:</label>
        <input type="text" name="company"><br><br>
        <label for="tenure">Tenure:</label>
        <input type="text" name="tenure"><br><br>
        <label for="location">Location:</label>
        <input type="text" name="location"><br><br>
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
            <input type="text" id="degree"><br><br>
            <label for="university">University/School:</label>
            <input type="text" id="university"><br><br>
            <label for="years">Years spent:</label>
            <input type="text" id="years"><br><br>
            <label for="gpa">GPA/Percentage:</label>
            <input type="text" id="gpa"><br><br><br>
    `;
    document.getElementById('education-container').appendChild(eduDiv);
}

function addLanguage(){
    const langDiv = document.createElement('div');
    langDiv.innerHTML = `
            <p>___________________________________________________________________<p>
            <label for="language">Language spoken:</label>
            <input type="text" id="language"><br><br>
            <label for="proficiency">Proficiency:</label>
            <select id="proficiency">
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