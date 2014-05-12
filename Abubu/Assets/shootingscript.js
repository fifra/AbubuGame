#pragma strict
var orb:Rigidbody;
var rotation:Quaternion;


function Start () {

}

function Update () {
	
	var currentOrb = GameObject.FindGameObjectWithTag("Orb");
	if (Input.GetMouseButton(0))
	{
	   //var currentOrb = GameObject.FindGameObjectWithTag("Orb");
	   if (currentOrb != null)
	   {
	    Destroy(currentOrb);
	   }
	   Instantiate(orb,transform.position,transform.rotation);
	}
	else if (Input.GetMouseButton(1))
	{
	Debug.Log("right click");
	 //pull towards the orb.  Create a force relative to the orb	
	//create a relative force towards the orb.
	var Player= GameObject.FindGameObjectWithTag("Player");
	
	
	
	rotation = Player.transform.rotation;
	
	Player.transform.LookAt(currentOrb.transform);
	
	//var currentOrb = GameObject.FindGameObjectWithTag("Orb");
	Player.GetComponent(Rigidbody).AddRelativeForce(Vector3.forward * 500);	
	}
	else {
	Player.transform.rotation = rotation;
		}
}