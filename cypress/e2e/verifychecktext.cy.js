import login from "../Pageobject/loginpage";
import selectrole from "../Pageobject/rolepage";
describe('Navigate and Compare Text', () => {
  it('should compare text between two elements on different pages', () => {
    cy.visit('/');

    cy.logintoidp();
    const role = new selectrole();
    role.selectrole();
    role.btn();
    role.verifyrolee();

    //text table1
    let textFromFirstElement;
    cy.visit('http://10.35.29.184/development/64070507231');

    cy.get('#app > div > div > main > div > div > div.v-card.v-theme--myCustomLightTheme.v-card--density-default.v-card--variant-elevated.mt-10.border.border-danger > div.v-card-text.py-5.px-5 > div > div > div.v-window-item.v-window-item--active > div.v-skeleton-loader.v-theme--myCustomLightTheme > div > div.v-card.v-theme--myCustomLightTheme.v-card--density-default.v-card--variant-flat.ma-4.pa-0 > div.v-row > div > div > div.v-row.text-left.ma-2.pa-0.align-center > div:nth-child(2) > div > div:nth-child(1)')
      .invoke('text').then((text1) => {
        textFromFirstElement = text1;

        cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[1]/div[1]/div/div[4]/div[2]/div/div/div[2]/div[2]/div/div[2]/span').click();
        cy.get('#app > div > div > main > div > div > nav.v-navigation-drawer.v-navigation-drawer--right.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--myCustomLightTheme.v-navigation-drawer--mobile > div > div > div.v-list-item.v-theme--myCustomLightTheme.v-list-item--density-default.v-list-item--one-line.v-list-item--variant-text.mt-5.mx-10 > div > div:nth-child(4) > div:nth-child(2) > span > div > li:nth-child(1)')
          .should(($el) => {
            const text2 = $el.text();
            expect(textFromFirstElement).to.equal(text2);
          });



        //text table2
        let textSecondElement;
        cy.visit('http://10.35.29.184/development/64070507231');

        cy.get('#app > div > div > main > div > div > div.v-card.v-theme--myCustomLightTheme.v-card--density-default.v-card--variant-elevated.mt-10.border.border-danger > div.v-card-text.py-5.px-5 > div > div > div.v-window-item.v-window-item--active > div.v-skeleton-loader.v-theme--myCustomLightTheme > div > div.v-card.v-theme--myCustomLightTheme.v-card--density-default.v-card--variant-flat.ma-4.pa-0 > div.v-row > div > div > div.v-row.text-left.ma-2.pa-0.align-center > div:nth-child(2) > div > div:nth-child(2)')
          .invoke('text').then((text3) => {
            textSecondElement = text3;

            cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[1]/div[1]/div/div[4]/div[2]/div/div/div[2]').click();
            cy.get('#app > div > div > main > div > div > nav.v-navigation-drawer.v-navigation-drawer--right.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--myCustomLightTheme.v-navigation-drawer--mobile > div > div > div.v-list-item.v-theme--myCustomLightTheme.v-list-item--density-default.v-list-item--one-line.v-list-item--variant-text.mt-5.mx-10 > div > div:nth-child(4) > div:nth-child(2) > span > div > li:nth-child(2)')
              .then(($el) => {
                const text4 = $el.text();
                expect(textSecondElement).to.equal(text4);


          
          //text table3
          let textthirdElement;
          cy.visit('http://10.35.29.184/development/64070507231');
            
          cy.get('#app > div > div > main > div > div > div.v-card.v-theme--myCustomLightTheme.v-card--density-default.v-card--variant-elevated.mt-10.border.border-danger > div.v-card-text.py-5.px-5 > div > div > div.v-window-item.v-window-item--active > div.v-skeleton-loader.v-theme--myCustomLightTheme > div > div.v-card.v-theme--myCustomLightTheme.v-card--density-default.v-card--variant-flat.ma-4.pa-0 > div.v-row > div > div > div.v-row.text-left.ma-2.pa-0.align-center > div:nth-child(3) > div:nth-child(1)')
            .invoke('text').then((text5) => {
              textthirdElement = text5;

            
            
            cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[1]/div[1]/div/div[4]/div[2]/div/div/div[2]/div[2]/div/div[2]/span').click();
            cy.get('#app > div > div > main > div > div > nav.v-navigation-drawer.v-navigation-drawer--right.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--myCustomLightTheme.v-navigation-drawer--mobile > div > div > div.v-list-item.v-theme--myCustomLightTheme.v-list-item--density-default.v-list-item--one-line.v-list-item--variant-text.mt-5.mx-10 > div > div:nth-child(6) > div:nth-child(2) > span > div > li:nth-child(1)')
              .then(($el) => {
              const text6 = $el.text();
              
              expect(textthirdElement)
              .to.equal(text6);


            
              //text table4
              let textfourElement;
              cy.visit('http://10.35.29.184/development/64070507231');
                
              cy.get('#app > div > div > main > div > div > div.v-card.v-theme--myCustomLightTheme.v-card--density-default.v-card--variant-elevated.mt-10.border.border-danger > div.v-card-text.py-5.px-5 > div > div > div.v-window-item.v-window-item--active > div.v-skeleton-loader.v-theme--myCustomLightTheme > div > div.v-card.v-theme--myCustomLightTheme.v-card--density-default.v-card--variant-flat.ma-4.pa-0 > div.v-row > div > div > div.v-row.text-left.ma-2.pa-0.align-center > div:nth-child(3) > div:nth-child(2) > p')
                .invoke('text').then((text7) => {
                  textfourElement = text7;
                
                cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[1]/div[1]/div/div[4]/div[2]/div/div/div[2]/div[2]/div/div[2]/span').click();
                cy.get('#app > div > div > main > div > div > nav.v-navigation-drawer.v-navigation-drawer--right.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--myCustomLightTheme.v-navigation-drawer--mobile > div > div > div.v-list-item.v-theme--myCustomLightTheme.v-list-item--density-default.v-list-item--one-line.v-list-item--variant-text.mt-5.mx-10 > div > div:nth-child(6) > div:nth-child(2) > span > div > li:nth-child(2)')
                  .should(($el) => {
                  const text8 = $el.text();
                  expect(textfourElement)
                  .to.equal(text8);



            

              //text table5
              let textfiveElement;
              cy.visit('http://10.35.29.184/development/64070507231');
                
              cy.get('#app > div > div > main > div > div > div.v-card.v-theme--myCustomLightTheme.v-card--density-default.v-card--variant-elevated.mt-10.border.border-danger > div.v-card-text.py-5.px-5 > div > div > div.v-window-item.v-window-item--active > div.v-skeleton-loader.v-theme--myCustomLightTheme > div > div.v-card.v-theme--myCustomLightTheme.v-card--density-default.v-card--variant-flat.ma-4.pa-0 > div.v-row > div > div > div.v-row.text-left.ma-2.pa-0.align-center > div:nth-child(3) > div:nth-child(2) > p')
                .invoke('text').then((text9) => {
                  textfiveElement = text9;
                
                cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[1]/div[1]/div/div[4]/div[2]/div/div/div[2]/div[2]/div/div[2]/span').click();
                cy.get('#app > div > div > main > div > div > nav.v-navigation-drawer.v-navigation-drawer--right.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--myCustomLightTheme.v-navigation-drawer--mobile > div > div > div.v-list-item.v-theme--myCustomLightTheme.v-list-item--density-default.v-list-item--one-line.v-list-item--variant-text.mt-5.mx-10 > div > div:nth-child(6) > div:nth-child(2) > span > div > li:nth-child(2)')
                  .should(($el) => {
                  const text10 = $el.text();
                  expect(textfiveElement)
                  .to.equal(text10);
                });
              });
            });
          });
        });
      });      
    });              
  });              
              });
          });
      });
  