#pragma strict
var LvlNum:int;

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "Player")
	{

		Application.LoadLevel ("lvl"+LvlNum); 

	}
}

function Start () {

}

function Update () {

}