#pragma strict

function Start () {

}

var orbScript:orbController;

function Update () {
	if (Input.GetKeyDown(KeyCode.Q))
	{
		
		orbScript = GameObject.FindGameObjectWithTag("Orb").GetComponent(orbController);
		if ((orbScript.canMove)==false)
		{
			transform.position.x = GameObject.FindGameObjectWithTag("Orb").transform.position.x;
			transform.position.z = GameObject.FindGameObjectWithTag("Orb").transform.position.z;
			transform.position.y = (GameObject.FindGameObjectWithTag("Orb").transform.position.y)-1;
		}
	}
}