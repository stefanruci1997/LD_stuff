const Article = require("../models/Article");
const Category = require('../models/Category');


const createArticle = async (req, res, next) => {
  const { title, sub_title, content, category_id,user_id} = req.body;

   Article.create({
      title,
      sub_title,
      content,
      category_id,
      user_id
    }).then(() => {
      res.status(201).json({ message: 'Article created'});
  })
  .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
  });
};

const getAllArticles = async (req, res, next) => {
  Article.findAll()
  .then(articles => {
      res.status(200).json({ articles: articles });
  })
  .catch(err => console.log(err));
};

const getArticleById = async (req, res, next) => {
  Article.findByPk(req.params.id)
  .then(article => {
      if (!article) {
          return res.status(404).json({ message: 'Article not found' });
      }
      res.status(200).json({ article: article });
  })
  .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
  });
};

const getArticlesByCategory = async (req, res, next) => {
 
  const  categoryName = req.params.category
  try {
    // Find the category
    const category = await Category.findOne({ where: { category_name: categoryName } });

    // Check if category exists
    if (!category) {
      return res.status(404).json({ message: 'No such category exists.' });
    }

    // Find articles associated with the category
    const articles = await Article.findAll({ where: { category_id: category.id } });

    // Return response with articles and category details
    return res.status(200).json({ articles, category: category.toJSON() });
  } catch (error) {
    console.log('Error in getting the category', error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};



const updateArticle = async (req, res, next) => {
 
    const article = await Article.findByPk(id);
    if (article) {
   article.update({
        title,
        sub_title: subTitle,
        content,
        category_id: categoryId
      }).then ((updatedArticle)=>{
          return res.status(201).json(updatedArticle);
      })
    .catch((err)=> {
        console.log("ERROR IN UPDATING ARTICLE", err);  
         return res.status(500).send("Server error");
     });
    } else{
       return res.status(404).json({message:"The specified article does not exist."});
    } 
    
 
};

const deleteArticle = async (req, res, next) => {
  try {
    const article = await Article.findByPk(id);
    if (article) {
      await article.destroy();
      return res.status(200).json({ message: 'Deleted successfully' });
    } else {
      return res.status(404).json({ message: 'Not found.' });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error" });  
  }
  
};

module.exports = {

  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  getArticlesByCategory,
  
};
