#pragma strict
var SlowSound : AudioClip;

function Start () {
}

function Update () {
	if (Input.GetMouseButtonDown(1))
	{
		if(Time.timeScale == 1.0)
		{
			Time.timeScale=10;
		}
		else
		{
			Time.timeScale = 1.0;
			audio.Stop();
		}
	}
	if((Time.timeScale == 10)&&(!audio.isPlaying))
	{
		audio.clip = SlowSound;
    	audio.Play();
	}
}
