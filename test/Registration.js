import { ClientFunction } from "testcafe";
import registerpage from "../pages/Register";
import homepage from "../pages/Home"
import loginpage from "../pages/Login";
import customerpage from "../pages/Customer";


const URL = 'https://demo.nopcommerce.com/'
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'balu' + randomNumber + '@gmail.com'


fixture("Registration Fixture")
    .page(URL);

test('Assert Home Page Test', async t => {
    await t
    .expect(getURL()).eql(URL)
    //.takeScreenshot()
    .expect(homepage.subName.exists).ok();
})

test("User Registration and Login", async (t) => {
    await t
    .click(homepage.registerLink)
    .expect(getURL()).contains('register')
    .click(registerpage.genderOption)
    .typeText(registerpage.firstName,'Balu')
    .typeText(registerpage.lastName,'Adem')
    await registerpage.SelectDay('5');
    await registerpage.SelectMonth('February');
    await registerpage.SelectYear('2001');
    await t
    .typeText(registerpage.email,userEmail)
    .typeText(registerpage.password,'123456789')
    .typeText(registerpage.confirmPassword,'123456789')
    .click(registerpage.registerButton)
    .expect(registerpage.successMessage.exists).ok();

    
});

test.page("https://demo.nopcommerce.com/")("login page", async t => {
    await t
    .click(homepage.loginLink)
    .typeText(loginpage.emailInput,userEmail)
    .typeText(loginpage.passwordInput,'123456789')
    .click(loginpage.submitButton)
    .click(homepage.accountLink)
    .click(customerpage.orderLink)
    .expect(customerpage.noOrdersLabel.exists).ok();


})
/*test.page("https://demo.nopcommerce.com/")("customer", async t=>{
    await t
    .click(homepage.accountLink)
    .click(customerpage.orderLink)
    .expect(customerpage.noOrdersLabel.exists).ok();
})*/



