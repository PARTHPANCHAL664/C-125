left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 500);
    video.position(65,200);
    
    canvas = createCanvas(550,500);
    canvas.position(800,200);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);

}

function draw()
{
    background('#5196e3');
    
    fill("#00ff0a");
    textSize(difference );
    text('PARTH', 50,250)
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized!");
}

function gotPoses(results,error)
{
    if(error){
        console.error(error);
    }

    if(results.length > 0)
     {
        console.log(results);

        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;

        difference = floor(left_wrist_x - right_wrist_x);

       
        console.log("rightwrist_x = " + results[0].pose.rightWrist.x+"rightwrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftwrist_x = " + results[0].pose.leftWrist.x+"leftwrist_y = "+results[0].pose.leftWrist.y);
     }
}