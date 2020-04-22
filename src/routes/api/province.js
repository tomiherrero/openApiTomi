const {ProvinceController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(ProvinceController.fetch)
        .post(ProvinceController.save);
    router.route('/:id')
        .get(ProvinceController.fetchOne)
        .put(ProvinceController.save)
        .delete(ProvinceController.delete);
    return router;
};
