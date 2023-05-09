import { t, ClientFunction } from "testcafe";
import hostingpage from '../pages/new'

const manualClick = ClientFunction((selector) => {
    const element = document.querySelector(selector);
    element.click()
})





/*fixture('First')
    .page("https://www.turbify.com")

test("Drop", async t => {
    await t.maximizeWindow();
    //.debug()

    // Check if the "Accept Cookies" button exists before clicking it
    const acceptCookiesButton =  hostingpage.cookies.with({ visibilityCheck: true, timeout: 5000 });
    if (await acceptCookiesButton.exists && await acceptCookiesButton.visible) {
        await t.click(hostingpage.cookies);
    }

    await t.hover(hostingpage.webEssential);

    await manualClick(
        'a[title][href="/mail"]'
    );

    await t.click(hostingpage.getStarted);
    //await t.eval(() => location.reload());
    await t.wait(90000).click(hostingpage.basicPlan);
    await t.typeText(hostingpage.domainName, 'balu.guru')
    await t.click(hostingpage.searchButton);
    await t.click(hostingpage.addCart);
}).skipJsErrors();*/


fixture('First')
    .page("https://www.turbify.com")

test("Drop", async t => {
    await t.maximizeWindow();
    //.debug()

    // Check if the "Accept Cookies" button exists before clicking it
    const acceptCookiesButton = hostingpage.cookies.with({ visibilityCheck: true, timeout: 5000 });
    if (await acceptCookiesButton.exists && await acceptCookiesButton.visible) {
        await t.click(hostingpage.cookies);
    }

    await t.hover(hostingpage.webEssential);

    await manualClick(
        'a[title][href="/mail"]'
    );

    await t.click(hostingpage.getStarted);
    await t.click(hostingpage.basicPlan);
    await t.typeText(hostingpage.domainName, 'balu.guru')
    await t.click(hostingpage.searchButton);
    await t.click(hostingpage.addCart);
    await t.click(hostingpage.continuebtn);
    await t.click(hostingpage.loginbtn);
    await t.typeText(hostingpage.userName, 'balu@gmail.com');
    await t.typeText(hostingpage.password, '1373');
    await t.click(hostingpage.signIn)

}).skipJsErrors();


/////////new comment