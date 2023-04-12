import { t,ClientFunction} from "testcafe";
import hostingpage from '../pages/new'

const manualClick = ClientFunction((selector) => {
    const element = document.querySelector(selector);
    element.click()
  })

fixture('First')
.page("https://www.turbify.com")

test("Drop", async t =>{

    await t.maximizeWindow();
    //.debug()
    await t.click(hostingpage.cookies);
    await t.hover(hostingpage.webEssential);
    await manualClick(
        'a[title][href="/mail"]'
    );
    await t.click(hostingpage.getStarted);
    await t.click(hostingpage.basicPlan);
    await t.typeText(hostingpage.domainName,'balu.guru')
    await t.click(hostingpage.searchButton)
    await t.click(hostingpage.addCart)
}).skipJsErrors();