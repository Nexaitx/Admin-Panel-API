exports.getHome = (req, res) => {
  res.sendFile('index.html', { root: 'public' });
};
