#pragma strict

function Start () {
	transform.eulerAngles.z = 90;
}

function Update () {
	transform.Translate(Vector3.down * 7.0 * Time.deltaTime);
	Debug.Log(Application.loadedLevelName); 
}

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "Range")
	{
		Destroy(gameObject);
	}
}
