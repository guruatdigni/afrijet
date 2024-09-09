export const APIQuery = (obj) =>{
	let str = "?";
	for(let key in obj){
			let pair = key + "=" + obj[key] + '&';
			str+=pair;
	}
	return str.slice(0,str.length-1);
}