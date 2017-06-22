function supports_html5_storage() {
  try {
    return ('localStorage' in window) && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

function set_language_en(){
	document.body.className='en';
	if(!supports_html5_storage()){
		return false;
	}
	localStorage["document.body.className"] = 'en';
	return true;
}

function set_language_de(){
	document.body.className='de';
	if(!supports_html5_storage()){
		return false;
	}
	localStorage["document.body.className"] = 'de';
	return true;
}

function set_language() {
	if (navigator.language != 'de') {
		document.body.className = 'en';
	} else {
		document.body.className = 'de';
	}
	if (!supports_html5_storage()){
		return false;
	}
	if(localStorage["document.body.className"] != null){
		document.body.className = localStorage["document.body.className"];
		return true;
	} else {
		return false;
	}
}
