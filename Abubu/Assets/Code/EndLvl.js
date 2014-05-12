#pragma strict

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "Player")
	{

		Application.LoadLevel ("lvl1"); 

	}
}

function Start () {

}

function Update () {

}