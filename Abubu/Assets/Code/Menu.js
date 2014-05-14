#pragma strict
var keypress:boolean = false;
function Start () {

}

function Update () {
	if (Input.GetKey("s")) 
	{
		Application.LoadLevel ("lvl1");
  	}
  	else if (Input.GetKey("q"))
  	{
  		Application.Quit();
  	}
}