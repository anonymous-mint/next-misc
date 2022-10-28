const previewHandler = (req, res) => {
  res.clearPreviewData({});
  res.redirect(req.query.redirect);
};

export default previewHandler;
