function preload()
{

}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tint1 = "";
}

function draw()
{
    image(video,0,20,500,480);
    tint(tint1);
    rect(0, 0, 501, 32);
    rect(0, 0, 30, 509);
    rect(0, 454, 501, 54);
    rect(500, 0, 30, 509);
    

}

function filter1()
{
    tint1 = document.getElementById("color1").value;
}

function take_snapshot()
{
    save("filter.jpg");
}