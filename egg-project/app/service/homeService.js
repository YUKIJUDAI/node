const { Service } = require('egg');

class HomeService extends Service {
    getList() {
        return [ 1, 2, 3 ];
    }
}

module.exports = HomeService;
