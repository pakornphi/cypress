class selectrole
{
    adminrole="body > div.v-overlay-container > div > div > div > div.v-card-text.custom-font-style > div.v-row.text-center.mt-5 > div.v-col.v-col-12.mt-0 > div > div > div > div:nth-child(3) > div"
    nextbtn="body > div.v-overlay-container > div > div > div > div.v-card-text.custom-font-style > div:nth-child(3) > div:nth-child(3) > button"
    verifyrole="#app > div > div > main > div > div > div.v-row.mt-8 > h1"

    selectrole()
    {
        cy.get(this.adminrole).click();
    }
    btn()
    {
        cy.get(this.nextbtn).click();
    }
    verifyrolee()
    {
        cy.get(this.verifyrole).should('have.text','ระบบวางแผนพัฒนารายบุคคล')
    }
}
export default selectrole