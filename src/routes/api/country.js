const {CountryController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(CountryController.fetch)
        .post(CountryController.create);
    router.route('/:id')
        .get(CountryController.fetchOne)
        .put(CountryController.save)
        .delete(CountryController.delete);
    return router;
};
