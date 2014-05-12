#pragma strict

var canMove:boolean;

function Start () {
	canMove = true;
}

function Update () {
	if (canMove)
	{
	transform.Translate(Vector3.forward * 50.0 * Time.deltaTime);
	}
}

function OnTriggerEnter(other:Collider)
{
	Debug.Log("hit object");
	if (other.gameObject.tag == "GravPanel")
	{
		Debug.Log("hit grav panel");
		canMove = false;
		//orb will stay there
		//logic for after the orb sticks
	}
}





