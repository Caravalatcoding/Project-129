song1 = "";
song2 = "";

LeftWristX = 0;
LeftWristY = 0;

RightWristX = 0;
RightWristY = 0;

function preload()
{
    song1 = loadSound("ImagineDragons - Believer.mp3");
    song2 = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(700, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized.');
}

function draw()
{
  image(video, 0, 0, 600, 500);
  
  stats1= song1.isPlaying();
  stats2 = song2.isPlaying();

  stroke("#FF0000");
  fill("#FF0000");

  if(scoreLeftWrist > 0.2)
  {
    circle(LeftWristX, LeftWristY, 30);
    song2.stop();

    if(cat == false)
    {
      song1.play();
      document.getElementById("heading").innerHTML = "ImagineDragons - Believer";
    }
  }

  if(scoreRightWrist > 0.2)
  {
    circle(RightWristX, RightWristY, 30);
    song1.stop();

    if(stats2 == false)
    {
      song2.play();
      document.getElementById("heading").innerHTML = "music.mp3";
    }
  }
}

function gotPoses(results)
{
    if(results > 0)
    {
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log('scoreRightWrist = ' + scoreRightWrist + 'scoreLeftWrist = ' + scoreLeftWrist); 

        LeftWristX = results[0].pose.LeftWrist.x;
        LeftWristY = results[0].pose.LeftWrist.y;
        console.log("LeftWristX = " + LeftWristX + "LeftWristY = " + LeftWristY);

        RightWristX = results[0].pose.RightWrist.x;
        RightWristY = results[0].pose.RightWrist.y;
        console.log("RightWristX = " + RightWristX + "RightWristY = " + RightWristY);
    }

}

















//if (rightWristY >0 && rightWristY <= 100)
//{
  //  document.getElementById("speed").innerHTML = "Speed = 0.5x";
    //song.rate(0.5);
//}
//else if(rightWristY > 100 && rightWristY <= 200)
//{
    //document.getElementById("speed").innerHTML = "Speed = 1x";
  //  song.rate(1)
//}
//else if(rightWristY > 200 && rightWristY <= 300)
//{
    //document.getElementById("speed").innerHTML = "Speed = 1.5x";
  //  song.rate(1.5);
//}
//else if(rightWristY > 300 && rightWristY <= 400)
//{
    //document.getElementById("speed").innerHTML = "Speed = 2x";
  //  song.rate(2);
//}
//else if(rightWristY > 400 && rightWristY <= 500)
//{
  //  document.getElementById("speed").innerHTML = "Speed = 2x";
    //song.rate(2.5);
//}

//JavaScript excess code for defining the bootstrap classes

