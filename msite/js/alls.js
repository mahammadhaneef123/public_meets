function toUpperClass(address,json){
	
return new Promise((resolve,reject)=>{
	
		$.post(address,json,function(data){

		resolve(data)
	})
}).then((data)=>{
	
	return data
	
}).catch((err)=>{
	
	return err
	
})
}