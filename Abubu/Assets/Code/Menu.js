#pragma strict
var keypress:boolean = false;
function Start () {

}

function Update () {
	if (Input.GetKey("e")) 
	{
		Application.LoadLevel ("lvl1");
  	} 
}