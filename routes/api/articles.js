const express = require("express");
const router = express.Router();

// Load Article model
const Article = require("../../model/Article");

// @route GET api/articles/test
// @description tests articles route
// @access Public
router.get("/test", (req, res) => res.send("article route testing!"));

// @route GET api/articles
// @description Get all articles
// @access Public
router.get("/", (req, res) => {
  if (req.query.status) {
    Article.find({ status: req.query.status })
      .then((articles) => res.json(articles))
      .catch((err) =>
        res.status(404).json({ noarticlefound: "No article found" })
      );
  } else {
    Article.find()
      .then((articles) => res.json(articles))
      .catch((err) =>
        res.status(404).json({ noarticlefound: "No article found" })
      );
  }
});

// @route GET api/articles/:id
// @description Get single article by id
// @access Public
router.get("/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) =>
      res.status(404).json({ noarticlefound: "No article found" })
    );
});

// @route GET api/articles
// @description add/save article
// @access Public
router.post("/", async (req, res) => {
  try {
    console.log("article post request", req.body);
    const newArticle = await Article.create(req.body);
    res.send({ newArticle });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route GET api/articles/:id
// @description Update article
// @access Public
router.put("/:id", (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then((article) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/articles/:id
// @description Delete article by id
// @access Public
router.delete("/:id", (req, res) => {
  Article.findByIdAndRemove(req.params.id, req.body)
    .then((article) => res.json({ mgs: "Article entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such article" }));
});

module.exports = router;
