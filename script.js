window.onload = function() {
    // ECG Graph simulation using canvas
    var canvas = document.getElementById('ecg-graph');
    var ctx = canvas.getContext('2d');
    
    // Function to simulate ECG graph with a sine wave
    function drawECG() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        
        var time = Date.now() / 1000;
        var amplitude = 30;
        var frequency = 2;
        var phase = time * frequency;
        
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
            let y = Math.sin(x * 0.05 + phase) * amplitude + 70;
            ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "#00FF00";  // Green color for the ECG
        ctx.stroke();
    }
    
    // Set interval for ECG simulation
    setInterval(drawECG, 100);
};
