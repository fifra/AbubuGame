#pragma strict

function Start () {

}

function Update () {
	if (Input.GetMouseButtonDown(1))
	{
		if(Time.timeScale == 1.0)
		{
			Time.timeScale=0.3;
		}
		else
		{
			Time.timeScale = 1.0;
		}
	}
}