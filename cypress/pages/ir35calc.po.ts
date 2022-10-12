

class calcHP    {
    get RateInput() {
        return cy.get("#_ctl0__ctl0__ctl0_txtRate");
    }
    get calcButton()    {
        return cy.get("#_ctl0__ctl0__ctl0_btnEnter");
    }
    get advanced()  {
        return cy.get("_ctl0__ctl0__ctl0_hlnkShowAdvancedDetails")
    }
    rateType(strValue){
        return cy.get("#_ctl0__ctl0__ctl0_chk" + strValue);
    }
     ir35Status(status)  {
        cy.log("#_ctl0__ctl0__ctl0_chk" + status)
        return cy.get("#_ctl0__ctl0__ctl0_chk" + status);
    }
    resultInside(strValue){
        return cy.get("#_ctl0__ctl0_hlnkNetIncomeInsideIR35").invoke('text').should('equal', strValue);
    }
    result(status, strValue)    {
        return cy.get("#_ctl0__ctl0_hlnkNetIncome"+status+"IR35").invoke('text').should('equal', strValue);
    }

}

export default calcHP;