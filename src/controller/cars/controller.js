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
  getListCars: (req, res, next) => {
    try {
      return res.json({ data })
    } catch (error) {
      next(error);
    }
  },
  getListCarDetails: (req, res, next) => {
    try {
      const { id } = req.params;
      const detailCar = data.filter(item => item.id === +id);
      return res.json({ data: detailCar })
    } catch (error) {
      next(error);
    }
  },
  newCar: (req, res, next) => {
    try {
      const { id, name } = req.body;
      data.push({ id, name });

      return res.json({ data })
    } catch (error) {
      next(error);
    }
  },
  updateCar: (req, res, next) => {
    try {
      const { id, name } = req.params;
      console.log('adasd');
      objIndex = data.findIndex((obj => obj.id === +id));

      data[objIndex].name = name
      return res.json({ data })
    } catch (error) {
      next(error);
    }
  },
  deleteCar: (req, res, next) => {
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