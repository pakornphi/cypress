/// <reference types='Cypress' />
const dataJson = require('../fixtures/createusers')

describe('post user request', () => {
  let randomtext = ''
  let testemail = ''
  const accessToken = '2ccc65341777e4fb7cde7c1e576ab193dadf59791c00deed806e72ce6c5efc61'

  it('create user test', () => {
    // สร้างอีเมลแบบสุ่ม
    const pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < 10; i++) {
      randomtext += pattern.charAt(Math.floor(Math.random() * pattern.length))
    }
    testemail = randomtext + '@gmail.com'

    // ใช้ข้อมูลจากไฟล์ fixture เพื่อสร้างผู้ใช้

      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v1/users/',
        headers: {
          'Authorization': "Bearer " + accessToken
        },
        body: {
          "name": "khunkhunhandsome",
          "email": "helloworldkhunhandsome@cypress.io",
          "gender": "male",
          "status" : "active"
        }
      }).then((res) => {
        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(201)
        expect(res.body.data).to.have.property('email', "helloworldkhunhandsome@cypress.io")
        expect(res.body.data).to.have.property('name', "khunkhunhandsome")
        expect(res.body.data).to.have.property('gender',"male")
        expect(res.body.data).to.have.property('status', "active")

        // ตรวจสอบว่าการตอบกลับมีคุณสมบัติตามที่คาดหวังหรือไม่
        if (res && res.body && res.body.data) {
          const userId = res.body.data.id
          cy.log("user id is " + userId)

          // DELETE
          cy.request({
            method: 'DELETE',
            url: 'https://gorest.co.in/public/v1/users/' + userId,
            headers: {
              'Authorization': "Bearer " + accessToken
            },
          }).then((res) => {
            expect(res.status).to.eq(204)
          })
        } else {
          throw new Error("POST response does not contain expected properties")
        }
      })
  })
    })
