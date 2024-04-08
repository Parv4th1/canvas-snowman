let canv = document.getElementById("snowman-canvas");
let ctx = canv.getContext("2d");

function drawSnowman()
{
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'gray';

    ctx.beginPath();
    ctx.arc(250, 330, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(250, 270, 30, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(250, 230, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(240, 225, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(260, 225, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.moveTo(240, 245);
    ctx.lineTo(245, 235);
    ctx.lineTo(255, 235);
    ctx.fill();

    ctx.strokeStyle = 'burlywood';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(230, 260);
    ctx.lineTo(200, 250);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(270, 260);
    ctx.lineTo(300, 250);
    ctx.stroke();

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(250, 270, 2, 0, 2 * Math.PI);
    ctx.arc(250, 260, 2, 0, 2 * Math.PI);
    ctx.arc(250, 280, 2, 0, 2 * Math.PI);
    ctx.fill();
}

let y = 145;
let dy = 5;
function drawHat()
{
    ctx.fillStyle = 'black';
    ctx.fillRect(225, y, 50, 10); 
    ctx.fillRect(235, y-25, 30, 30); 
}
drawSnowman();
drawHat();

function myAnimation()
{
    //move the hat up and down
    ctx.clearRect(0,0,canv.width,canv.height);
    drawSnowman();
    drawHat();
    if (y==205)
    {
        y = 145;
    }
    else
    { 
        y+=dy;
    }
    setTimeout(()=>requestAnimationFrame(myAnimation),300);
}
