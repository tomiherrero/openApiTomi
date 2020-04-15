const {ProvinceController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(ProvinceController.fetch);
    return router; 
    }