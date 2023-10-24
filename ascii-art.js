window.onload = function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const ascii = document.getElementById("ascii");
  const img = new Image();
  
  img.src = 'imagelanding.jpg'; // Ensure this path is correct
  
  img.onload = function() {
    const scaleFactor = 0.1; // Adjust this value as needed
    canvas.width = img.width * scaleFactor;
    canvas.height = img.height * scaleFactor;
    
    // Draw image on canvas with scale
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    // Get image data
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    
    // Generate ASCII art
    const asciiArt = generateASCII(imgData, canvas.width, canvas.height);
    ascii.innerText = asciiArt;
  };
  
  function generateASCII(imgData, width, height) {
    const asciiChars = "@%#*+=-:. "; // Adjust this string as needed
    
    let asciiArt = '';
    
    // Loop through pixels
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const index = (y * width + x) * 4;
        const avgColor = (imgData[index] + imgData[index + 1] + imgData[index + 2]) / 3;
        const charIndex = Math.floor(avgColor / 255 * (asciiChars.length - 1));
        asciiArt += asciiChars[charIndex];
      }
      asciiArt += '\n';
    }
    
    return asciiArt;
  }
};
