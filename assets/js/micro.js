const ajax=function (type, url, data, onSucceed, onFailed, headers, json) {
	if (json === undefined) json=true;
	const header={};
	if (headers === undefined) headers=null;
	if (headers) {
		for (var k in headers) {
			header[k]=headers[k];
		}
	}
	var body=data;
	if (json) {
		request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		body = (data!==undefined && data)? JSON.stringify(data) :''
	}
	return fetch('http://localhost:3000/admin/api', {
		method: type&&type?type.toUpperCase():'POST',
		headers: header,
		body: body
	}).then(onSucceed).catch(onFailed);
}
