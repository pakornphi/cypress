class devtab4
{
    เลือกภารกิจ='.v-list-item-title'
    เลือกเรื่องที่ต้องพัฒนา='.v-list-item-title'
    ความเห็นhrbp='#Tab4Input3'

    addภารกิจ()
    {
        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[7]/div/form/div/div[2]/div/div[7]/div/div/div/div').click()
        .get(this.เลือกภารกิจ).click();
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