const console = require("console");
require("../utils/DriverSetup.js")

class BasePage {
    async print_data() {
        console.log("===========BasePage==========>")
    }
}

module.exports = {
    base: new BasePage()
}
