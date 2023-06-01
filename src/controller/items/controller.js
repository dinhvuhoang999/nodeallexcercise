const data = [{
  id: 1,
  name: 'cars 1',
},
{
  id: 2,
  name: 'cars 2',
},
{
  id: 3,
  name: 'cars 3',
}];

module.exports = {
  getListItems: (req, res, next) => {
    try {
      return res.json({ data })
    } catch (error) {
      next(error);
    }
  },
  newItem: (req, res, next) => {
    try {
      const { id, name } = req.body;
      console.log('req.body', id);
      data.push({ id, name });

      return res.json({ data })
    } catch (error) {
      next(error);
    }
  },
  updateItem: (req, res, next) => {
    try {
      const { id, name } = req.params;
      objIndex = data.findIndex((obj => obj.id === +id));

      data[objIndex].name = name
      return res.json({ data })
    } catch (error) {
      next(error);
    }
  },
  deleteItem: (req, res, next) => {
    try {
      const { id } = req.params;
      objIndex = data.findIndex((obj => obj.id === +id));
      data.splice(objIndex, 1);
      return res.json({ data })
    } catch (error) {
      next(error);
    }
  }
}