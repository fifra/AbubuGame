#pragma strict
var canShield:boolean;

function Start () {
	canShield = true;
	
}

function delayShield()
{
	if (canShield)
	{
		this.gameObject.SetActive(true);
	}
	canShield = false;
	yield WaitForSeconds(3);
	canShield = true;
	
}


function Update () {
	
	if (Input.GetKeyDown(KeyCode.LeftShift))
	{
		if(canShield)
		{
			transform.localScale.x = 1.5;
			transform.localScale.y = 1.5;
			transform.localScale.z = 0.1;
			
		}
		else
		{
			transform.localScale.x = 0;
			transform.localScale.y = 0;
			transform.localScale.z = 0;
		
		}
		canShield = !canShield;
	}
}

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "EnemyMove")
	{
		transform.localScale.x = 0;
		transform.localScale.y = 0;
		transform.localScale.z = 0;
		Destroy(other.gameObject);
		delayShield();
	}
}