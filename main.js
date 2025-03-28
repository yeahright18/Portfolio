// const typed = new Typed('.multiple-text', {
//   strings: ['Cybersecurity Practitioner', 'Student', 'IT specialist'],
//   typeSpeed: 70,
//   backSpeed: 70,
//   backDelay: 1000,
//   loop: true,
// });

document.getElementById('show-more-btn').addEventListener('click', function() {
  var hiddenProjects = document.querySelector('.hidden-projects');
  if (hiddenProjects.style.display == 'none') {
      hiddenProjects.style.display = 'grid';  
      this.textContent = 'Show Less';  
  } else {
      hiddenProjects.style.display = 'none';
      this.textContent = 'Show More'; 
  }
});


function showContactInfo() {
  var modal = document.getElementById("contactModal");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("contactModal");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  var contactButton = document.querySelector(".contact-btn");
    
    contactButton.addEventListener("click", function(event) {
      event.preventDefault();  
      showContactInfo(); 
    });

    
    var closeButton = document.querySelector(".close-btn");
    closeButton.addEventListener("click", closeModal);
});