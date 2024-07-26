import development from "../Pageobject/development";
import login from "../Pageobject/loginpage";
import selectrole from "../Pageobject/rolepage";
import developmentaddภารกิจ from "../Pageobject/developmentaddภารกิจ";
import devtab2 from "../Pageobject/developmenttab2";
import devtab3 from "../Pageobject/dectab3";
import devtab4 from "../Pageobject/devtab4";
import penciltab1 from "../Pageobject/penciltab1";
import dropdowntab1 from "../Pageobject/dropdowntab1";
import development2 from "../Pageobject/development2";


describe('first step', () =>{
  
  before(() => {
    cy.fixture('loginidp').as('userdata');
    cy.fixture('penciltab1').as('paths');
    cy.fixture('dropdowntab1').as('dropdowndatas');
  });
  it.skip('test1 loop username ,path and dropdown', () => 
    {
      cy.get('@userdata').then((userdata) => {
        cy.get('@paths').then((path) => {
          cy.get('@dropdowndatas').then((dropdownpath) => {
          userdata.forEach((user) => {
            path.forEach((paths) => {
              dropdownpath.forEach((dropdowndatas) => {
              cy.logintoidp(user.username, user.password)
            const role = new selectrole();
            role.selectrole();
            cy.wait
            role.btn();
            role.verifyrolee();
            cy.visit('http://10.35.29.184/development/64070507231');
            
            cy.pencilfunction(paths.pencilpaths);

            cy.get('#app > div > div > main > div > div > nav.v-navigation-drawer.v-navigation-drawer--right.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--myCustomLightTheme.v-navigation-drawer--mobile > div > form > div > div:nth-child(6) > div > div > div > div > div.v-field__append-inner').should('be.visible').click()
            cy.dropdowntab1(dropdowndatas.dropdownpaths);

            cy.get('#app > div > div > main > div > div > nav.v-navigation-drawer.v-navigation-drawer--right.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--myCustomLightTheme.v-navigation-drawer--mobile > div > form > div > div:nth-child(7) > div > div > div > div > div.v-field__append-inner').should('be.visible').click()
            cy.dropdowntab1(dropdowndatas.dropdownpaths);

            cy.wait(1000);

            cy.get('#app > div > div > main > div > div > nav.v-navigation-drawer.v-navigation-drawer--right.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--myCustomLightTheme.v-navigation-drawer--mobile > div > form > div > div:nth-child(8) > div > div > div > div > div.v-field__append-inner').should('be.visible').click()
            cy.dropdowntab1(dropdowndatas.dropdownpaths);

            cy.contains('บันทึกภารกิจ').click();
            cy.logout();

              })
            
            
        })
      })
        
        }); 
      })
    }
  )
  }
)
  it('test2 tab1', () => 
  {
    cy.visit('http://10.35.29.184/login');
    cy.get("#username").should('not.be.disabled').type("64070507231");
    cy.get("#password").should('not.be.disabled').type("password");
    cy.get('#app > div > div > main > div > div > div > div > div:nth-child(4) > form > div.text-center.mt-5 > button').click();

    // Role selection
    const role = new selectrole();
    role.selectrole();
    role.btn();
    role.verifyrolee();

    const dev = new development2();
    cy.visit('http://10.35.29.184/development/64070507231');
    dev.choosetarget();
    dev.verifytarget();
    dev.dropdowntarget();
    dev.btnsave();

    const devadd = new developmentaddภารกิจ();
    devadd.add();
    devadd.adddropdown();
  })
  it('test3 tab2', () => 
    {
      cy.visit('http://10.35.29.184/login');
      cy.get("#username").should('not.be.disabled').type("64070507231");
      cy.get("#password").should('not.be.disabled').type("password");
      cy.get('#app > div > div > main > div > div > div > div > div:nth-child(4) > form > div.text-center.mt-5 > button').click();
      // Role selection
      const role = new selectrole();
      role.selectrole();
      role.btn();
      role.verifyrolee();
  
    cy.visit('http://10.35.29.184/development/64070507231');
    const tab2=  new devtab2();
    cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[2]/div/div/button[2]').click();
    tab2.add();
    tab2.addเรื่องที่ต้องพัฒนา();
    tab2.addinput();
    tab2.adddate();
    


      // cy.contains('เป้าหมาย/ภารกิจ').click();
      // cy.get('#app > div > div > main > div > div > div.v-card.v-theme--myCustomLightTheme.v-card--density-default.v-card--variant-elevated.mt-10.border.border-danger > div.v-card-text.py-5.px-5 > div > div > div.v-window-item.v-window-item--active > div.v-skeleton-loader.v-theme--myCustomLightTheme > div > div.v-row.text-left.ml-6.mt-2 > div.v-col.v-col-2.text-right > button:nth-child(2)').click();
      // cy.xpath('/html/body/div[2]/div[2]/div[2]/div/div[4]/div/button[1]').click();

  })
  it('test4 tab3', () => 
  {
    cy.visit('http://10.35.29.184/login');
    cy.get("#username").should('not.be.disabled').type("64070507231");
    cy.get("#password").should('not.be.disabled').type("password");
    cy.get('#app > div > div > main > div > div > div > div > div:nth-child(4) > form > div.text-center.mt-5 > button').click();
    // Role selection
    const role = new selectrole();
    role.selectrole();
    role.btn();
    role.verifyrolee();

    cy.visit('http://10.35.29.184/development/64070507231');
    const tab3= new devtab3();
    const filename = 'Report_week4_internship_7231_ปกรณ์ (1) (1).pdf';
    cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[2]/div/div/button[3]').click();
    tab3.add();
    tab3.addfeedback();
    tab3.addreflection();
    tab3.addfile(filename);
    tab3.btnsave();


  })
  it.skip('test5 tab4', () => {

    cy.visit('http://10.35.29.184/login');
    cy.get("#username").should('not.be.disabled').type("64070507231");
    cy.get("#password").should('not.be.disabled').type("password");
    cy.get('#app > div > div > main > div > div > div > div > div:nth-child(4) > form > div.text-center.mt-5 > button').click();
    // Role selection
    const role = new selectrole();
    role.selectrole();
    role.btn();
    role.verifyrolee();

    cy.visit('http://10.35.29.184/development/64070507231');
    const tab4=new devtab4();
    cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[2]/div/div/button[4]').click();
    cy.contains(' แสดงความเห็น ').click();
    tab4.addภารกิจ();
    tab4.addเรื่องที่ต้องพัฒนา();
    tab4.addความเห็น();
  })
})