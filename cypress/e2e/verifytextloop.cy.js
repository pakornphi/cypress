import login from "../Pageobject/loginpage";
import selectrole from "../Pageobject/rolepage";
import paths from '../fixtures/paths.json';
import pathtable2 from '../fixtures/pathtable2.json';
import pathtable3 from '../fixtures/pathtable3.json';

describe('verify text', () => {
  it('text table1', () => {
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

    
    const intvalues = [4,5,6]; 

    cy.visit('http://10.35.29.184/development/64070507231');

    intvalues.forEach((int) => {
      const path1 = paths.path1.replace('${int}', int);
      const path15 = paths.path15.replace('${int}',int)
      const path2 = paths.path2;

      cy.xpath(path1)
        .invoke('text')
        .then((text1) => {
          text1 = text1.trim(); 

          cy.xpath(path15)
            .click();
    
          cy.xpath(path2)
            .invoke('text')
            .then((text2) => {
              text2 = text2.trim(); 
              expect(text1).to.equal(text2);
              cy.visit('http://10.35.29.184/development/64070507231');
            });
      
        });
    });
  }) 
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

    intValues.forEach((int) => {

      const path11 = pathtable2.path11.replace('${int}', int);
      const path115 = pathtable2.path115.replace('${int}', int);
      const path21 = pathtable2.path21

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

              // Revisit the page before the next iteration
              if (int !== intValues[intValues.length - 1]) {
                cy.visit('http://10.35.29.184/development/64070507231');
              }
          })
        })
      });
  })  
  it.only('text table3', () => {
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
  })
});
    

