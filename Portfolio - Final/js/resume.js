
     // Function to open the modal
function openModal(modalNumber) {
  const modal = document.getElementById(`educationModal${modalNumber}`);
  modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal(modalNumber) {
  const modal = document.getElementById(`educationModal${modalNumber}`);
  modal.style.display = "none"; // Hide the modal
}

// Close modal if the user clicks outside of it
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}