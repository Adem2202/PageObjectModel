import { Selector } from "testcafe";



class Hosting{
    constructor(){
        this.cookies = Selector(`.button`)
        this.webEssential = Selector('a[aria-label="Web Essentials"]')
       // this.hostingDrop = Selector('a[title][href="/hosting"]')
        this.getStarted = Selector("div").withText('Get yourname@yourbusiness.com')
        this.basicPlan = Selector("#MailPricingTables > div > div > div > div > div > div > div > div.fourPlans > div > div:nth-child(1) > div > ul > li.alice-carousel__stage-item.__active.__target > div > div > div.CheckoutLink > span > a > button > div")
        this.domainName = Selector('input[name="search"]')
        this.searchButton = Selector('div[class="linearForm-submit linearForm-submit-transparent"]')
        this.addCart = Selector('button[id="balu.guru"]')
        this.continuebtn = Selector('#main > div.CheckoutPage > div > div > div.TransitionView-Container.TransitionView-show > div > div.Checkout-flow-column.Checkout-flow-content > div.CheckoutStep.CheckoutStep-active > div > div.CheckoutStep-content > div.CheckoutStepButton.CheckoutStepButton-active > div > div > div > div > button > div')
        this.loginbtn = Selector('span').withText('Log in here')
        this.userName = Selector('input[name="userid"]')
        this.password = Selector('input[name="passwd"]')
        this.signIn = Selector('div').withExactText('Sign in')
    }
}
export default new Hosting();