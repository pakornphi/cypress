class devtab4
{
    เลือกภารกิจ='body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1)'
    เลือกเรื่องที่ต้องพัฒนา='.v-list-item-title'
    ความเห็นhrbp='#Tab4Input3'

    addภารกิจ()
    {
        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[7]/div/form/div/div[2]/div/div[7]/div/div/div/div').click()
        cy.wait(3000)
        cy.xpath("//div[contains(text(),'เป้าหมายที่ 1 : ภารกิจที่ 3: test3')]").click();
    }
    addเรื่องที่ต้องพัฒนา()
    {
        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[7]/div/form/div/div[2]/div/div[8]/div/div/div/div').click()
        .get(this.เลือกเรื่องที่ต้องพัฒนา).click();
    }
    addความเห็น()
    {
        cy.get(this.ความเห็นhrbp).type('test');
        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[7]/div/form/div/div[4]/div/div/div[2]/button').click();
    }
}
export default devtab4