const Category = require('../models/Category');

const createCategory = async (req, res) => {
        const { categoryName } = req.body;
   Category.create({ categoryName })
   .then(() => {
        res.status(201).json({ message: 'Category created'});
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });
       
};

const getAllCategories = async (req, res) => {
    Category.findAll()
      .then((categories) => {
          if (!categories) {    
              return res.status(404).json({ type: 'not found', message: 'No categories were found.' }); 
          }
          res.status(200).json(categories);
      })
      .catch((err) => {
          console.error(err);
          res.status(500).json({ error: 'Error retrieving the list of categories' });
      });
        
};

const getCategoryById = async (req, res) => {
        const { id } = req.params;
       Category.findByPk(id)    
           .then((category) => {
               if(!category){return res.status(404).json({type:'not found', message: `The category with the id ${id} was not found.`})}
res.status  (200).json(category);           
           })
           .catch ((err)=> {
               console.log(err);
               res.status(404).json ({message:'The specified resource could not be found.'})
           })
}


async function updateCategory(req, res) {
    try {
        const { id } = req.params;
        const { categoryName } = req.body;
        const category = await Category.findByPk(id);
        if (category) {
            await category.update({ categoryName });
            res.status(200).send(await Category.build({ categoryName }).validate    ());
        } else {
            res.status(404).json({ message: "Category not found"});
        }   
    } catch (e) {
        res.status(400).json({ message: e.message });
    }  
}

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);
        if (category) {
            await category.destroy();
            res.json({ message: 'Category deleted successfully' });
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
};
