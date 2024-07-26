class development2
{

    เป้าหมายพัฒนาdropdown="#app > div > div > main > div > div > nav.v-navigation-drawer.v-navigation-drawer--right.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--myCustomLightTheme.v-navigation-drawer--mobile > div > form > div > div.v-list-item.v-theme--myCustomLightTheme.v-list-item--density-default.v-list-item--one-line.v-list-item--variant-text.mt-5.mx-10 > div > div > div";
    verifyตั้งเป้าหมาย="#app > div > div > main > div > div > nav.v-navigation-drawer.v-navigation-drawer--right.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--myCustomLightTheme.v-navigation-drawer--mobile > div > form > div > div:nth-child(2) > div > div:nth-child(1) > div.v-col.v-col-6.text-center > h2"
    btnsavee='#app > div > div > main > div > div > nav.v-navigation-drawer.v-navigation-drawer--right.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--myCustomLightTheme.v-navigation-drawer--mobile > div > form > div > div:nth-child(6) > div > div > div.v-col.v-col-6.text-right > button'
    tablename_ภารกิจ='//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[1]/div[1]/div/div[4]/div[2]/div/div/div[2]/div[1]'
    tablename_ผลลัพธ์ที่ต้องการ='//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[1]/div[1]/div/div[4]/div[2]/div/div/div[2]/div[2]'
    tablename_สมรรถนะที่คาดหวัง='//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[1]/div[1]/div/div[4]/div[2]/div/div/div[2]/div[3]'
    tablename_สิ่งที่ต้นสังกัดจะได้รับ='//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[1]/div[1]/div/div[4]/div[2]/div/div/div[2]/div[4]'
    
    choosetarget()
    {
        cy.contains(" ตั้งเป้าหมาย >> ").click();
    }
    verifytarget()
    {
        cy.get(this.verifyตั้งเป้าหมาย).should("have.text","ตั้งเป้าหมาย")    
    }
    dropdowntarget()
    {
        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[1]/div/form/div/div[2]/div/div/div/div').click()
        .get('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(4) > div:nth-child(1)').click();
    }
    btnsave()
    {
        cy.contains(" ยืนยันเป้าหมาย ").click();
    }
    verifytargetname()
    {
        cy.xpath(this.tablename_ภารกิจ)
    }
}
export default development2