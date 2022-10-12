//import { it } from "mocha";
import ir35calc from "./pages/ir35calc.po.js"
const hp = new ir35calc();

describe("enter data", () =>    {
    beforeEach(() => {
        cy.visit("/ir35calculator.aspx?uid=0&logon=False&psalary=50000&div=1&status=OutsideIR35&pyt=LimitedCompany&expenses=3000&other=0&pension=0&tc=1257L&age=30&salary=8000&rate=25&rt=Hourly&rt2=Hourly&weeks=44&dwpw=5&dwpw2=5&hours=37.5&dni=4000&tty=2022&rate2=25&weeks2=44&hours2=37.5&status2=OutsideIR35&psalary2=50000&mir=0.02&epv=500000&mdp=250000&mp=25&cid=0&vat=1&vi=False&ar=1&gs1=0&gs2=0&gs3=0&gs4=0&nd=1&pbt=1&dpo=14-Jul-2022&dop=01-Jan-0001&inv=1&hpd=11&me=150&vt=Car&mpw=0&mpc=0&pt=Monthly&ace=500&mt=Parasol&wl=InsideLondon&uds=Advanced&Host=LOCAL")
        //hp.advanced.click();
        console.log("On the correct Page");
    })

    it("enters rate data and sets Inside", function () {
        hp.RateInput.clear();
        hp.RateInput.type("625");
        hp.rateType("DailyRate").click({force: true});
        hp.ir35Status("Inside").check({force: true});
        hp.calcButton.click();
        //hp.resultInside("£5,833")
        hp.result("Inside","£5,833")
        

      });

    it("enters rate data and sets Outside", function () {
        hp.RateInput.clear();
        hp.RateInput.type("550");
        hp.rateType("DailyRate").click({force: true});
        hp.ir35Status("Outside").check({force: true});
        hp.calcButton.click();
        hp.result("Outside","£6,514")
    });

});



