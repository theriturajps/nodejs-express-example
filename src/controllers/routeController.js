exports.getHome = (req, res) => {
	res.sendFile('index.html', { root: '../../public' });
};

exports.getAbout = (req, res) => {
	res.send('About Page - Simple Express Application');
};