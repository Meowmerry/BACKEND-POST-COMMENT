module.exports = (app,db) =>{
    app.get("/posts", (req, res) => {
        db.post
        .findAll({
          include: [{model: db.comment}]
        })
          .then(result => {
            res.status(200).json(result);
          })
          .catch(err => {
            console.error(err);
            res.status(400).json({ message: err.message });
          });
      });
      app.post('/post', (req,res) => {
        db.post.create({
          author: req.body.author,
          text: req.body.text,
          picture: req.body.picture
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
