#pragma strict

private var chMotor : CharacterMotor;

private var sSprint : boolean = false;
private var sJump : boolean = false;
private var sSlow : boolean = false;

function Start()
{
	chMotor = GetComponent(CharacterMotor);
}


	
function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "JumpPanel")//super jump
	{
		chMotor.jumping.baseHeight = 3;
		chMotor.jumping .extraHeight = 2;	
	}
	else if(other.gameObject.tag == "SpeedPanel")//super speed
	{
		chMotor.movement.maxForwardSpeed = 20;
		chMotor.movement.maxSidewaysSpeed = 20;
		chMotor.movement.maxBackwardsSpeed = 20;
	}
	else if (other.gameObject.tag == "Depower")//remove buffs
	{
		chMotor.jumping.baseHeight = 1;
		chMotor.jumping.extraHeight = 0;	
	
		chMotor.movement.maxForwardSpeed = 6;
		chMotor.movement.maxSidewaysSpeed = 6;
		chMotor.movement.maxBackwardsSpeed = 6;
	}
}

function Update()
{

}