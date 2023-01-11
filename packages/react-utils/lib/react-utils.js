const isNull = element => {
	if ( null === element ) {
		return true;
	}

	return false;
}

const isUndefined = element => {
	return void 0 === element;
}

const isObject = element => {
	const isObject = 'object' === typeof element;
	const isArray = Array.isArray(element);

	if ( isObject && !isArray ) {
		return true;
	}

	return false;
}

const isArray = element => {
	const isObject = 'object' === typeof element;
	const isArray = Array.isArray(element);

	if ( isObject && isArray ) {
		return true;
	}

	return false;
}

const isBoolean = element => {
	if ( 'boolean' === typeof element ) {
		return true;
	}

	return false;
}

const isEmpty = element => {
	if ( '' !== element ) {
		return false;
	}

	return true;
}

// Publish required function(s).
export { isNull, isUndefined, isObject, isArray, isBoolean, isEmpty }
