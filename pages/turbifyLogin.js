import { Selector,t } from "testcafe";

class Turbify{
    constructor(){
        this.cookies = Selector('.button')
        this.login = Selector('a').withText('Login')
        this.userName = Selector('input[id="s-user"]')
        this.password = Selector('input[id="s-pass"]')
        this.buttonlogin = Selector('button[id="btnLogin"]')
    }


}



export default new Turbify();
