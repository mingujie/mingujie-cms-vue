import viewsConfig from './viewsConfig'

function getViewConfig(routeName){
	let rName = routeName,
		viewsConfigLen = viewsConfig.length;

	for(var i=0; i < viewsConfigLen; i++) {
		if(viewsConfig[i]['routeName'] === rName){
			return viewsConfig[i]
			break
		}
	}
}


export {
	getViewConfig
}
