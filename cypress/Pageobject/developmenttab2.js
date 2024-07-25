class devtab2
{
    inputสิ่งที่พนักงานได้รับ='#Tab2Input4'
    inputคำมั่นสัญญา='#Tab2Input5'
    inputค่าใช้จ่าย='#Tab2Input6'
    datestart='/html/body/div[2]/div[2]/div/div/div/div[2]/div[2]/div/div[12]'
    dateend='/html/body/div[2]/div[2]/div/div/div/div[2]/div[2]/div/div[16]'
    
    add()
    {
        cy.contains(' เพิ่มเรื่องที่ต้องพัฒนา >> ').click();
    }
    addเรื่องที่ต้องพัฒนา()
    {
        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[4]/div/form/div/div[2]/div/div/div/div').click()
        .get('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(4) > div:nth-child(1)').click();
    }
    addinput()
    {
        cy.get(this.inputสิ่งที่พนักงานได้รับ).type('money')
        cy.get(this.inputคำมั่นสัญญา).type('6month')
        cy.get(this.inputค่าใช้จ่าย).type('20000')
    }
    adddate()
    {
        cy.xpath('//*[@id="Tab2Input7"]/div/div/div').click()
        .xpath(this.datestart).click();
        
        cy.xpath('//*[@id="Tab2Input8"]/div/div/div').click()
        .xpath(this.dateend).click();

        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[4]/div/form/div/div[11]/div/div/div[2]/button').click();
    }


    
}
export default devtab2