#pragma strict

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "Player")
	{

		Application.LoadLevel ("lvl2"); 

	}
}

function Start () {

}

function Update () {

}