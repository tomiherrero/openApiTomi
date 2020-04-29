const {ProvinceController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(ProvinceController.fetch)
        .post(ProvinceController.create);
    router.route('/:id')
        .get(ProvinceController.fetchOne)
        .put(ProvinceController.save)
        .delete(ProvinceController.delete);
    return router;
};
