const urls = {
	help: 'http://omobio.net',
	terms: 'https://www.google.com'
};

const http = {
	POST: 'POST',
	GET: 'GET',
	PUT: 'PUT',
	DELETE: 'DELETE'
};

const dataModel = {
	USER: 'USER',
	AUTH: 'AUTH'
};

const defaultPostType = {
	DEFAULT_POST_TYPE: 'DEFAULT_POST_TYPE'
};

// Index matches `registrationProviders`
const appKeys = [
	null, // Dummy, added just to make this a valid array
	null,
	'608812737725-u8dt1hq7q15kc1rpi3621s6jinm38lnu.apps.googleusercontent.com', // TODO: Read from `google-services.json::client.oauth_client.client_id`
	null
];


export default {
	urls,
	http,
	dataModel,
	defaultPostType,
	appKeys
};
