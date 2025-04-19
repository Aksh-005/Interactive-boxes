// Select all boxes
const boxes = document.querySelectorAll('.box');

// Add event listener to each box
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    box.classList.toggle('expanded'); // Toggle the expanded state
  });
});

// Handle color and size changes
const colorOptions = document.querySelectorAll('.color-option');
const sizeOptions = document.querySelectorAll('.size-option');

// Change box color when a color button is clicked
colorOptions.forEach((button) => {
  button.addEventListener('click', (e) => {
    const color = e.target.style.backgroundColor;  // Get color of the button
    const box = e.target.closest('.box');  // Find the closest box
    box.style.backgroundColor = color;  // Set box background color
  });
});

// Change box size when a size button is clicked
sizeOptions.forEach((button) => {
  button.addEventListener('click', (e) => {
    const size = e.target.getAttribute('data-size');  // Get size from button
    const box = e.target.closest('.box');  // Find the closest box
    
    if (size === 'small') {
      box.style.width = '200px';
      box.style.height = '200px';
    } else if (size === 'large') {
      box.style.width = '300px';
      box.style.height = '300px';
    }
  });
});