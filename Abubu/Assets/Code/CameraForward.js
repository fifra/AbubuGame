#pragma strict
var zoom : int = 20;
var normal : int = 60;
var smooth : float = 5;
private var isZoomed = false;

function Start () {

}

function Update () {
	 if(Input.GetMouseButtonDown(2)){
          isZoomed = !isZoomed; 
     }
 
     if(isZoomed == true){
          camera.fieldOfView = Mathf.Lerp(camera.fieldOfView,zoom,Time.deltaTime*smooth);
     }
     else{
        camera.fieldOfView = Mathf.Lerp(camera.fieldOfView,normal,Time.deltaTime*smooth);
     }

}