class login
{
    txtUsername="#username";
    txtPassword='#password';
    btn='#app > div > div > main > div > div > div > div > div:nth-child(4) > form > div.text-center.mt-5 > button';
    lblmsg='body > div.v-overlay-container > div > div > div > div.v-card-text.custom-font-style > div.v-row.text-center.mt-5 > div:nth-child(1) > h1';


    visit()
    {
        cy.visit('http://10.35.29.184/login')
    }

    setUsername(username)
    {
        
        cy.get(this.txtUsername).should('not.be.disabled').type(username);
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).should('not.be.disabled').type(password);
    }

    clicksubmit()
    {
        cy.get(this.btn).click();
    }

    // verifylogin()
    // {
    //     cy.get(this.lblmsg).should('have.text','เลือกบทบาทของคุณ')
    // }
}
export default login

