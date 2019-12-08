module.exports = (app,db)=>  {
    app.get("/comments", (req, res) => {
        db.comment
          .findAll()
          .then(result => {
            res.status(200).json(result);
          })
          .catch(err => {
            console.error(err);
            res.status(400).json({ message: err.message });
          });
      });
      app.post('/comment', (req,res) => {
        db.comment.create({
          author: req.body.author,
          text: req.body.text,
          post_id: req.body.post_id
        })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(err => {
        console.error(err);
        res.status(400).json({ message: err.message})
      })
  })
}