

function start(){
  // writes to console
  console.log("start button pushed");
  // this disables the start button after it is pushed
  document.getElementById("startButton").disabled = true;
  // this enables the stop button after start button is pushed
  document.getElementById("stopButton").disabled = false;
  // this writes reading data to portray it is loading
  document.getElementById("data").rows["seconds"].innerHTML = "Reading Data";
  index = 0; 
  timer = setInterval(updateDisplay, time_interval); 


}

function stop(){
  //writes to console
  
  clearInterval(timer); 

  console.log("stop button pushed")
  document.getElementById("stopButton").disabled = true
  document.getElementById("startButton").disabled = false

  
}

// this function writes the elements to the table for each row when it is called
function dataRow(legend, value, units){
  msg = "<td>"; 
  msg += legend; 
  msg += ": </td><td>";
  msg += value; 
  msg += " " + units; 
  msg += "</td>"; 
  return msg;
}

// this function fetches data for the the rows
function getData(){
  var loadedData = loadData(); 
  return loadedData; 
}

// the following code is for playing sound when the sound button is pressed

// this function is the function the button is linked to 
function playStation(){
  console.log("play station started");

  //this points the instruction to the function below that does the process of uploading and playing the song
  mySound = new sound("us-lab-background.mp3");
  mySound.play(); 
}

// this function carries out the instructions for configuring, uploading, and making the sound audible
function sound(src){
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "audio");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound)

  // this plays the sound
  this.play = function(){
    this.sound.play();
  }

  this.stop = function(){
    this.sound.pause();
  }

}

// this class holds the data
class InputData {
  constructor (
    time_seconds, 
    latitude, 
    longitude, 
    gps_altitude,
    bmpSensor_altitude,
    bmpSensor_pressure, 
    bmpSensor_temp,
    digSensor_temp, 
    cssSensor_temp,
    cssSensor_eCO2,
    cssSensor_TVOC, 
    UV,
    accelX,
    accelY,
    accelZ,
    magneticX, 
    magneticY,
    magneticZ,
    gyroX,
    gyroY,
    gyroZ
  ) {
    this.time_seconds = time_seconds;
    this.latitude = latitude; 
    this.longitude = longitude; 
    this.gps_altitude = gps_altitude; 
    this.bmpSensor_altitude = bmpSensor_altitude; 
    this.bmpSensor_pressure = bmpSensor_pressure; 
    this.bmpSensor_temp = bmpSensor_temp; 
    this.digSensor_temp = digSensor_temp; 
    this.cssSensor_temp = cssSensor_temp;
    this.cssSensor_eCO2 = cssSensor_eCO2; 
    this.cssSensor_TVOC = cssSensor_TVOC; 
    this.UV = UV; 
    this.accelX = accelX;
    this.accelY = accelY; 
    this.accelZ = accelZ; 
    this.magneticX = magneticX; 
    this.magneticY = magneticY;
    this.magneticZ = magneticZ; 
    this.gyroX = gyroX;
    this.gyroY = gyroY; 
    this.gyroZ = gyroZ; 

  }

}



/*var count = 10;
// for loop to iterate through the time in seconds and change the count value accordingly
for (var i = 0; i < 11; i++) {
  
  // if statement to show blastoff when timer reachers 10
  if (i == 10) {
    setTimeout(function () {
      document.getElementById("countdownTimer").innerHTML = "Blastoff!!";
    }, i * 1000);

   // else if statement to change line to include half way warning when the timer hits 5 seconds 
  } else if (i > 4) {
    setTimeout(function () {
      document.getElementById("countdownTimer").innerHTML =
        "Warning Less than ½ way to launch, time left = " + count;
    }, i * 1000);

  // esle statment to countdown normally until either of the other if statment conditions are true
  } else {
    setTimeout(function () {
      document.getElementById("countdownTimer").innerHTML = count;
      count--;
    }, i * 1000);
  }
}
*/



