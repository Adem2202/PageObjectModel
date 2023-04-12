import { Selector, t } from "testcafe";

class webEssentials {
    constructor() {
        this.webEssentials = Selector('a[aria-label="Web Essentials"]')
        this.hostingplan = Selector('a[title][href="/hosting"]')
        this.getStarted = Selector('div').withText('Get Started')
        this.plan = Selector('div').withText('Choose plan')
    }

}

export default new webEssentials();