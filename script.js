function volSphere()  {  
  var volume;  
  var radius = document.getElementById("r").value;  
  radius = Math.abs(radius);  
  volume = (4/3) * Math.PI * (radius**3);  
  volume = volume.toFixed(4);  
  document.getElementById('vol').value = volume;  
  return false;  
 }   
window.onload = document.getElementById('theForm').onsubmit = volSphere;