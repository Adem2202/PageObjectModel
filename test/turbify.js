import turbifypage from '../pages/turbifyLogin'
import mailPage from '../pages/Mail'
import dropdownpage from '../pages/Drop'

fixture('turbifyLogin')
.page('https://www.turbify.com/')

test.skip("First login", async t =>{
    await t
    .maximizeWindow()
    //.setTestSpeed(0.1)
    //.click(turbifypage.cookies)
    .click(turbifypage.login)
    .typeText(turbifypage.userName,'adembalu220@gmail.com')
    .typeText(turbifypage.password,'pass')
    .click(turbifypage.buttonlogin)

}).skipJsErrors();


test.skip.page("https://www.turbify.com/mail")
("mail", async t =>{
    await t
    .maximizeWindow()
    .wait(20000)
    .click(turbifypage.cookies)
    .click(mailPage.getStarted)
    .click(mailPage.basicPlan)
}).skipJsErrors();


test("web Essentials", async t =>{
    await t
    .maximizeWindow()
    .click(turbifypage.cookies)
    .hover(dropdownpage.webEssentials)
    .pressKey('down')
    .pressKey('down')
    .click(dropdownpage.hostingplan)
    .click('enter')
}).skipJsErrors();