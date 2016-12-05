function filName () {
	var wdTime = new Date(Date.now());
	
	var fileName= (1900 + wdTime.getYear())+"_"+ 
	              (1 + wdTime.getMonth())+"_"+    
	               wdTime.getDate()+"_"+    
	               wdTime.getHours()+"_"+     
	               wdTime.getHours()+".png"
	
	return filName;
}	               