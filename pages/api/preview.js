const previewHandler = (req, res) => {
  res.setPreviewData({ user: "john" });
  res.redirect(req.query.redirect);
};

export default previewHandler;
