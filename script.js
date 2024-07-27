function addExperience() {
    const experienceDiv = document.createElement('div');
    experienceDiv.innerHTML = `
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
    document.getElementById('Experience').appendChild(experienceDiv);
}

function addSkill() {
    const skillDiv = document.createElement('div');
    var numb = Number(document.getElementById('numb').innerHTML)+1;
    document.getElementById('numb').removeAttribute('id');
    var lab = numb.toString();
    skillDiv.innerHTML= `
        <label for="skills" id="numb">${lab}.</label>
        <input type="text" id="skills"><br><br>
    `;
    document.getElementById('Skills').appendChild(skillDiv);
}

function addEducation() {
    const eduDiv = document.createElement('div');
    eduDiv.innerHTML = `
    <label for="degree">Degree:</label>
            <input type="text" id="degree"><br><br>
            <label for="university">University:</label>
            <input type="text" id="university"><br><br>
            <label for="years">Years spent:</label>
            <input type="text" id="years"><br><br>
            <label for="gpa">GPA:</label>
            <input type="text" id="gpa"><br><br>
    `;
    document.getElementById('Education').appendChild(eduDiv);
}