const students = [
  { name: 'Kai Tan', nric: 'S1234567A', gender: 'Male', birthdate: '01-01-2016', school: 'Nanyang Primary School', level: 'P1' },
  { name: 'Sandy Lim', nric: 'S1234567B', gender: 'Female', birthdate: '02-02-2015', school: 'Raffles Primary School', level: 'P2' },
  { name: 'Jia Wei', nric: 'S1234567C', gender: 'Male', birthdate: '03-03-2014', school: 'Hwa Chong Primary School', level: 'P3' },
  { name: 'Ming Chen', nric: 'S1234567D', gender: 'Male', birthdate: '04-04-2016', school: 'Nanyang Primary School', level: 'P1' },
  { name: 'Jasmine Ng', nric: 'S1234567E', gender: 'Female', birthdate: '05-05-2015', school: 'Singapore Chinese Girls\' School', level: 'P2' },
  { name: 'Ricky Lee', nric: 'S1234567F', gender: 'Male', birthdate: '06-06-2014', school: 'Anglo-Chinese School', level: 'P3' },
  { name: 'Aisha Rahman', nric: 'S1234567G', gender: 'Female', birthdate: '07-07-2016', school: 'Bukit Panjang Government High School', level: 'P1' },
  { name: 'Ryan Ho', nric: 'S1234567H', gender: 'Male', birthdate: '08-08-2015', school: 'Nan Hua Primary School', level: 'P2' },
  { name: 'Lina Tan', nric: 'S1234567I', gender: 'Female', birthdate: '09-09-2014', school: 'Maris Stella High School', level: 'P3' },
  { name: 'Hui Ling', nric: 'S1234567J', gender: 'Female', birthdate: '10-10-2016', school: 'Nanyang Primary School', level: 'P1' },
  { name: 'Zhang Wei', nric: 'S1234567K', gender: 'Male', birthdate: '11-11-2015', school: 'Singapore American School', level: 'P2' },
  { name: 'Nina Ong', nric: 'S1234567L', gender: 'Female', birthdate: '12-12-2014', school: 'Dunman High School', level: 'P3' },
  { name: 'Daniel Goh', nric: 'S1234567M', gender: 'Male', birthdate: '13-01-2016', school: 'Kuo Chuan Presbyterian Primary School', level: 'P1' },
  { name: 'Chen Li', nric: 'S1234567N', gender: 'Female', birthdate: '14-02-2015', school: 'Raffles Girls\' Primary School', level: 'P2' },
  { name: 'Felicia Yeo', nric: 'S1234567O', gender: 'Female', birthdate: '15-03-2014', school: 'Hwa Chong International School', level: 'P3' },
  { name: 'Kenny Lee', nric: 'S1234567P', gender: 'Male', birthdate: '16-04-2016', school: 'Nanyang Primary School', level: 'P1' },
  { name: 'Siti Aishah', nric: 'S1234567Q', gender: 'Female', birthdate: '17-05-2015', school: 'Singapore Chinese Girls\' School', level: 'P2' },
  { name: 'Alex Lim', nric: 'S1234567R', gender: 'Male', birthdate: '18-06-2014', school: 'Anglo-Chinese School', level: 'P3' },
  { name: 'Zoe Tan', nric: 'S1234567S', gender: 'Female', birthdate: '19-07-2016', school: 'Nan Hua Primary School', level: 'P1' },
  { name: 'Farhan Ahmad', nric: 'S1234567T', gender: 'Male', birthdate: '20-08-2015', school: 'Dunman High School', level: 'P2' }
];

function populateStudentList() {
  const nameList = document.getElementById('nameList');

  // Clear existing list
  nameList.innerHTML = '';

  // Loop through the student data and create list items
  students.forEach(student => {
    const li = document.createElement('li');
    li.textContent = student.name;

    // Add click event to each list item to set patient details
    li.addEventListener('click', () => {
      setPatient(student.name, student.nric, student.gender, student.birthdate, student.school, student.level);
    });

    // Append the new list item to the list
    nameList.appendChild(li);
  });
}

// Call the function to populate the list when the page is loaded
document.addEventListener('DOMContentLoaded', populateStudentList);

document.addEventListener('DOMContentLoaded', () => {
  // Set today's date in the header box of the first component
  const visitDateElement = document.getElementById('visitDateHeader');
  visitDateElement.textContent = 'Visit Date: ' + new Date().toLocaleDateString();
});

document.getElementById("withPinholeScreeningForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  var form = document.getElementById("withPinholeScreeningForm");
  var formData = new FormData(form);

  fetch("http://127.0.0.1:5000/submit2", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        alert(data.message); // Show success message
        form.reset(); // Reset the form fields
      } else if (data.error) {
        alert("Error: " + data.error); // Show error message
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
});

document.getElementById("withoutPinholeScreeningForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  var form = document.getElementById("withoutPinholeScreeningForm");
  var formData = new FormData(form);

  fetch("http://127.0.0.1:5000/submit1", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        alert(data.message); // Show success message
        form.reset(); // Reset the form fields
      } else if (data.error) {
        alert("Error: " + data.error); // Show error message
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
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

document.addEventListener('DOMContentLoaded', () => {
  // Set today's date
  const visitDateElement = document.getElementById('visitDateHeader');
  visitDateElement.textContent = 'Visit Date: ' + new Date().toLocaleDateString();
});

// Initialize QuaggaJS for barcode scanning
document.getElementById('startScanButton').addEventListener('click', () => {
  const scannerContainer = document.getElementById('scannerContainer');
  scannerContainer.style.display = 'block'; // Show video container

  Quagga.init(
    {
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: document.querySelector('#scannerContainer'),
      },
      decoder: {
        readers: ['code_128_reader'], // Add necessary barcode types
      },
    },
    function(err) {
      if (err) {
        console.error(err);
        alert('Error initializing the scanner');
        return;
      }
      Quagga.start();
    }
  );

  // Handle the detected barcode
  Quagga.onDetected((result) => {
    const barcodeResult = result.codeResult.code;
    document.getElementById('barcodeResult').textContent = `Detected Barcode: ${barcodeResult}`;
    alert(`Detected Barcode: ${barcodeResult}`); // Notify user of the detected barcode
    Quagga.stop(); // Stop scanner after detecting
    scannerContainer.style.display = 'none'; // Hide video container

    const person = students.find(s => s.name === barcodeResult);

    if (person) {
      // Update the name and other sections of the page with the person's details
      setPatient(person.name, person.nric, person.gender, person.birthdate, person.school, person.level);
    } else {
      alert('Person not found for this barcode');
    }
  });
});
