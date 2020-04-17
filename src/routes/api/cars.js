const {CarsController} = include('controllers');


module.exports = router => {
    router.route('/')
        .get(CarsController.fetch);
    router.route('/:id')
        .put(CarsController.save);
    return router;     
};
