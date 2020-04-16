const {CarsController} = include('controllers');


module.exports = router => {
    router.route('/')
        .get(CarsController.fetch);
    return router;     
};
