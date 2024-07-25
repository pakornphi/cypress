class devtab3
{
    editbtn='//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[3]/div[1]/div[3]/div[4]/div/div/div[2]/div[6]/button[1]';
    feedback='#Tab3Input1';
    reflection='#Tab3Input2';
    fileInput = '//*[@id="input-99"]';

    add()
    {
        cy.xpath(this.editbtn).click()
    }
    addfeedback()
    {
        cy.get(this.feedback).type('test')
    }
    addreflection()
    {
        cy.get(this.reflection).type('test')
    }
    addfile(filename)
    {
        cy.xpath(this.fileInput).attachFile(filename);
    }
    btnsave()
    {
        cy.get('#app > div > div > main > div > div > nav.v-navigation-drawer.v-navigation-drawer--right.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--myCustomLightTheme.v-navigation-drawer--mobile > div > form > div > div:nth-child(10) > div > div > div.v-col.v-col-6.text-right > button').click();
    }
}
export default devtab3