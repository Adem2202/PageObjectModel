import { Selector, t } from "testcafe";

class Mail{
    constructor(){
        this.getStarted = Selector('div').withText('Get yourname@yourbusiness.com')
        this.basicPlan = Selector('#MailPricingTables > div > div > div > div > div > div > div > div.fourPlans > div > div:nth-child(1) > div > ul > li.alice-carousel__stage-item.__active.__target > div > div > div.CheckoutLink > span > a')
    }
}

export default new Mail();