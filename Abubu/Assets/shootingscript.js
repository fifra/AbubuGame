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


}