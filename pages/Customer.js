import { Selector } from "testcafe";

class Customer{
    constructor() {
        this.orderLink = Selector('a').withText('Orders')
        this.noOrdersLabel = Selector('div.no-data').with('No orders')
    }
}

export default new Customer();