const isNil = (element) => {
	if (null == element) {
		return true;
	}

	return false;
};

const isNull = (element) => {
	if (null === element) {
		return true;
	}

	return false;
};

const isUndefined = (element) => {
	return void 0 === element;
};

const isObject = (element) => {
	const isObject = 'object' === typeof element;
	const isArray = Array.isArray(element);

	if (isObject && !isArray) {
		return true;
	}

	return false;
};

const isArray = (element) => {
	const isObject = 'object' === typeof element;
	const isArray = Array.isArray(element);

	if (isObject && isArray) {
		return true;
	}

	return false;
};

const isBoolean = (element) => {
	if ('boolean' === typeof element) {
		return true;
	}

	return false;
};

const isNumber = (element) => {
	if ('number' === typeof element) {
		return true;
	} else {
		if (!Number.isNaN(element)) {
			return true;
		}
	}

	return false;
};

const isEmpty = (element) => {
	if ('' !== element) {
		return false;
	}

	return true;
};

const isFunction = (element) => {
	return element && {}.toString.call(element) === '[object Function]';
};

const isString = (element) => {
	if ('string' === typeof element) {
		return true;
	}

	return false;
};

// Publish required function(s).
export {
	isNil,
	isNull,
	isUndefined,
	isObject,
	isArray,
	isBoolean,
	isNumber,
	isEmpty,
	isFunction,
	isString,
};
