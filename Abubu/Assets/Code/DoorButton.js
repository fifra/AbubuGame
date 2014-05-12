#pragma strict
var OpenDoor:boolean;
var InRange:boolean;
var timer:float = 0;
public var DoorInstance:GameObject;

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "Player")
	{
		InRange = true;
	}
}
function OnTriggerExit (other : Collider)  
{
	if(other.gameObject.tag == "Player")
	{
		InRange = false;
	}
}

function Start () {
	renderer.material.color = Color(255,0,0);
	OpenDoor = false;
	InRange = false;
}

function Update () {
	if ((Input.GetKey("e"))&&(InRange == true)) 
	{
    	OpenDoor = true;
    	renderer.material.color = Color(0,255,0);
    	timer = 11;
  	} 
  	timer -= Time.deltaTime;
  	if (timer <= 0)
  	{
  		OpenDoor = false;
  		renderer.material.color = Color(255,0,0);
  	}
  	if ((OpenDoor==true)&&(DoorInstance.transform.position.y >= -2.41))
  	{
  		DoorInstance.transform.Translate(Vector3.down * 3 * Time.deltaTime);
  	}
  	else if ((OpenDoor==false)&&(DoorInstance.transform.position.y <= 1.42))
  	{
  		DoorInstance.transform.Translate(Vector3.up * 3 * Time.deltaTime);
  	}
   Debug.Log (InRange);
}