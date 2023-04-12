import { Selector,t } from "testcafe";

class Home{
    constructor(){
        this.subName = Selector('h2').withText('Welcome to our store')
        this.registerLink = Selector('a').withText('Register')
        this.loginLink = Selector('a').withText('Log in')
        this.cartLink = Selector('a').withText('Shopping cart')
        this.accountLink = Selector('a').withText('My account')
        this.logOut = Selector('a').withText('Log out')
        this.currList = Selector('#customerCurrency')
    }

    get productSerach(){
        return Selector('input[id="small-searchterms"]');
    }

    async search(product){
        await t
        .typeText(this.productSerach,product)
        .wait(3000)
        .pressKey('enter')
    }

    async changeCurrency(currency){
        await t
        .click(this.currList)
        .click(Selector('option',{text : currency}));
    }




}
export default new Home();