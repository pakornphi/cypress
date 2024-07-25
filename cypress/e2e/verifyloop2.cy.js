import selectrole from "../Pageobject/rolepage";
import pathtable3 from '../fixtures/pathtable3.json';

describe('verify text', () => {
  it('text table2', () => {
    // Login
    cy.visit('http://10.35.29.184/login');
    cy.get("#username").should('not.be.disabled').type("64070507231");
    cy.get("#password").should('not.be.disabled').type("password");
    cy.get('#app > div > div > main > div > div > div > div > div:nth-child(4) > form > div.text-center.mt-5 > button').click();

    // Role selection
    const role = new selectrole();
    role.selectrole();
    role.btn();
    role.verifyrolee();

    const intValues = [4, 5, 6];

    cy.visit('http://10.35.29.184/development/64070507231');

    intValues.forEach((int, index) => {

      const path11 = pathtable3.path11.replace('${int}', int);
      const path115 = pathtable3.path115.replace('${int}', int);
      const path21 = pathtable3.path21

      cy.xpath(path11)
        .invoke('text')
        .then((text3) => {
          text3 = text3.trim();

          cy.xpath(path115)
            .click()

          cy.xpath(path21)
            .invoke('text')
            .then((text4) => {
              text4 = text4.trim();
              expect(text3).to.equal(text4);
              cy.visit('http://10.35.29.184/development/64070507231');

              })
            });
        });
    });
  });
