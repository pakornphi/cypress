class developmentaddภารกิจ
{
    ผลลัพธ์ที่ต้องการ='//*[@id="app"]/div/div/main/div/div/nav[2]/div/form/div/div[4]/div/div/div/div'
    dropdown1='body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1)'
    dropdown2='body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1)'
    สมรรถนะที่สนองตอบผลลัพธ์='//*[@id="app"]/div/div/main/div/div/nav[2]/div/form/div/div[5]/div/div/div/div'
    dropdown3='body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(4) > div:nth-child(1)'
    dropdown4='body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1)'
    ส่วนที่หน่วยงานจะได้รับประโยชน์='//*[@id="app"]/div/div/main/div/div/nav[2]/div/form/div/div[6]/div/div/div/div'
    dropdown5='body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(4) > div:nth-child(1)'
    dropdown6='body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1)'
    add()
    {
        cy.contains(' เพิ่มภารกิจ >> ').click();
        cy.get('#Tab1MissionNameInput').type('test1') 
    }
    adddropdown()
    {
        cy.xpath(this.ผลลัพธ์ที่ต้องการ).click();
        cy.get(this.dropdown1).click();
        cy.get(this.dropdown2).click();

        cy.xpath(this.สมรรถนะที่สนองตอบผลลัพธ์).click();
        cy.get(this.dropdown3).click();
        cy.get(this.dropdown4).click();

        cy.xpath(this.ส่วนที่หน่วยงานจะได้รับประโยชน์).click();
        cy.get(this.dropdown5).click();
        cy.get(this.dropdown6).click();

        cy.contains(' บันทึกภารกิจ').click();
    }
}
export default developmentaddภารกิจ