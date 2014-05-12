#pragma strict
var movingLeft:boolean;
var spd:float;
/*
function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "Player")
	{

		Application.LoadLevel ("lvl1");

	}
}*/

function Start () {
 movingLeft = true;
 spd = 1;
}

function Update () {

 
 	if (movingLeft == true)
	{
		transform.Translate(Vector3.left * spd * Time.deltaTime);
		spd += 0.5;
		if (transform.position.x <= 78)
		{
			movingLeft = false;
			spd=0;
		}
	}
	
	if (movingLeft == false)
	{
		transform.Translate(Vector3.right * spd * Time.deltaTime);
		spd += 0.5;
		if (transform.position.x >= 90)
		{
			movingLeft = true;
			spd=0;
		}
	}
}