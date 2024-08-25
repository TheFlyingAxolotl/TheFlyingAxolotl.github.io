document.addEventListener('DOMContentLoaded', () => {
  // Set today's date in the header box of the first component
  const visitDateElement = document.getElementById('visitDateHeader');
  visitDateElement.textContent = 'Visit Date: ' + new Date().toLocaleDateString();
});

// Function to set patient details
function setPatient(name, nric, gender, birthdate, school, level) {
  document.getElementById('patientName').textContent = name;
  document.getElementById('patientNRIC').textContent = nric;
  document.getElementById('patientGender').textContent = gender;
  document.getElementById('patientBirthdate').textContent = birthdate;
  document.getElementById('patientSchool').textContent = school;
  document.getElementById('patientLevel').textContent = level;

}

document.querySelectorAll('.left-panel li').forEach(item => {
  item.addEventListener('click', function() {
    // Remove active class from all buttons
    document.querySelectorAll('.left-panel li').forEach(button => {
      button.classList.remove('active');
    });
    // Add active class to the clicked button
    this.classList.add('active');
  });
});

