function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 450)
    canvas.position(670, 110);

    poseNet = ml5.poseNet(video ,modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function draw()
{
    background("#a1a5bf")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
    }
}