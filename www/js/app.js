function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide();
        
        
        
     $('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	});   
    
    $('#swipetext').on("swiperight",function(){
    	$(this).css('color', 'black');
  	});   
        
        
    $('#swipenav').on("swipeleft",function(){
    	$.mobile.navigate( "#pagetwo" );
  	});     
        
    $('#swipenav2').on("swiperight",function(){
    	$.mobile.navigate( "#pageone" );
  	}); 
        
        
    
   
        
        
        
        
    }
}
document.addEventListener("app.Ready", onAppReady, false) ;
// document.addEventListener("deviceready", onAppReady, false) ;
// document.addEventListener("onload", onAppReady, false) ;


