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
	if (other.gameObject.tag == "GravPanel")
	{
		canMove = false;
		//orb will stay there
		//logic for after the orb sticks
	}
	if (other.gameObject.tag == "EnemyMove")
	{
		Destroy(gameObject);
		Destroy(other.gameObject);
	}
}





