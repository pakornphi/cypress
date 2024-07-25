import development from "../Pageobject/development";
import login from "../Pageobject/loginpage";
import selectrole from "../Pageobject/rolepage";
import developmentaddภารกิจ from "../Pageobject/developmentaddภารกิจ";
import devtab2 from "../Pageobject/developmenttab2";
import devtab3 from "../Pageobject/dectab3";
import devtab4 from "../Pageobject/devtab4";

describe('first step', () =>{
  it('login test', () => 
    {
      cy.visit('/');

      cy.fixture('loginidp').then((data)=>{
        const log= new login();
        log.setUsername(data.username);
        log.setPassword(data.password);
        log.clicksubmit();
        log.verifylogin();
      }
      )

      const role = new selectrole();
      role.selectrole();
      role.btn();
      role.verifyrolee();

      const dev = new development();
      cy.visit('http://10.35.29.184/development/64070507231');
      // dev.choosetarget();
      // dev.verifytarget();
      // dev.dropdowntarget();
      // dev.btnsave();


      // const devadd = new developmentaddภารกิจ();
      // devadd.add();
      // devadd.adddropdown();

      
      
      // const tab2=  new devtab2();
      // cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[2]/div/div/button[2]').click();
      // tab2.add();
      // tab2.addเรื่องที่ต้องพัฒนา();
      // tab2.addinput();
      // tab2.adddate();

      // const tab3= new devtab3();
      // const filename = 'Report_week4_internship_7231_ปกรณ์ (1) (1).pdf';
      // cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[2]/div/div/button[3]').click();
      // tab3.add();
      // tab3.addfeedback();
      // tab3.addreflection();
      // tab3.addfile(filename);
      // tab3.btnsave();

      // const tab4=new devtab4();
      // cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[2]/div/div/button[4]').click();
      // cy.contains(' แสดงความเห็น ').click();
      // tab4.addภารกิจ();
      // tab4.addเรื่องที่ต้องพัฒนา();
      // tab4.addความเห็น();



   
      // cy.contains('เป้าหมาย/ภารกิจ').click();
      // cy.get('#app > div > div > main > div > div > div.v-card.v-theme--myCustomLightTheme.v-card--density-default.v-card--variant-elevated.mt-10.border.border-danger > div.v-card-text.py-5.px-5 > div > div > div.v-window-item.v-window-item--active > div.v-skeleton-loader.v-theme--myCustomLightTheme > div > div.v-row.text-left.ml-6.mt-2 > div.v-col.v-col-2.text-right > button:nth-child(2)').click();
      // cy.xpath('/html/body/div[2]/div[2]/div[2]/div/div[4]/div/button[1]').click();




    })
  })