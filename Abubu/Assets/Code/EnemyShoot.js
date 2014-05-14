#pragma strict
var bullet:Rigidbody;
var rotation:Quaternion;
var wait:int;
var canShoot:int;

function Start () {
	yield WaitForSeconds(wait);
}

function Update () {
	if (canShoot <= 0)
	{
		Instantiate(bullet,transform.position,transform.rotation);
		canShoot = 90;
	}
	canShoot -= Time.deltaTime;
}

