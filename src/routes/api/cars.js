
const {CarsController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(CarsController.fetch)
        .post(CarsController.create);
    router.route('/:id')
        .get(CarsController.fetchOne)
        .put(CarsController.save)
        .delete(CarsController.delete);
    return router;
};
