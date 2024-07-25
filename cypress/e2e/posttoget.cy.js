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
    cy.fixture('createusers').then((payload) => {
      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v1/users/',
        headers: {
          'Authorization': "Bearer " + accessToken
        },
        body: {
          "name": payload.name,
          "gender": payload.gender,
          "email": testemail,
          "status": payload.status
        }
      }).then((res) => {
        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(201)
        expect(res.body.data).to.have.property('email', testemail)
        expect(res.body.data).to.have.property('name', payload.name)
        expect(res.body.data).to.have.property('gender', payload.gender)
        expect(res.body.data).to.have.property('status', payload.status)

        // ตรวจสอบว่าการตอบกลับมีคุณสมบัติตามที่คาดหวังหรือไม่
        if (res && res.body && res.body.data) {
          const userId = res.body.data.id
          cy.log("user id is " + userId)

          // ดึงข้อมูลผู้ใช้ที่สร้างขึ้น
          cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v1/users/' + userId,
            headers: {
              'Authorization': "Bearer " + accessToken
            }
          }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.data).to.have.property('id', userId)
            expect(res.body.data).to.have.property('email', testemail)
            expect(res.body.data).to.have.property('name', payload.name)
            expect(res.body.data).to.have.property('status', payload.status)
          })
        } else {
          throw new Error("POST response does not contain expected properties")
        }
      })
    })
  })
})
