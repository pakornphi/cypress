/// <reference types='Cypress' />
const dataJson = require('../fixtures/createusers')
describe('post user request', () => {

  let randomtext = ''
  let testemail=''
  let accessToken= '2ccc65341777e4fb7cde7c1e576ab193dadf59791c00deed806e72ce6c5efc61';

  it('create user test', () => {

    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for (var i = 0; i<10; i++)
      randomtext += pattern.charAt(Math.floor(Math.random() * pattern.length))
      testemail = randomtext + '@gmail.com'

    //1.create user
    cy.fixture('createusers').then((payload) => {

    cy.request({
      method:'POST',
      url : 'https://gorest.co.in/public/v1/users/',
      headers : {
        'Authorization' : "Bearer " + accessToken
      },
      body : {
          "name": payload.name,
          "gender": payload.gender,
          "email": testemail,
          "status": payload.status
      }
    }).then((res) => {
      cy.log(JSON.stringify(res))
      expect(res.status).to.eq(201)
      expect(res.body.data).has.property('email',testemail)
      expect(res.body.data).has.property('name',payload.name)
      expect(res.body.data).has.property('gender',payload.gender)
      expect(res.body.data).has.property('status',payload.status)


    // Request Chaining (POST then GET)//
    // Request Chaining (POST then GET)//
    // Request Chaining (POST then GET)//
    // Request Chaining (POST then GET)//
    // }).then((res) => {

    //       const userId = res.body.data.id 
    //         cy.log("user id is" + userId)

    //         //2.GET user
    //         cy.request({
    //           method:'GET',
    //           url : 'https://gorest.co.in/public/v1/users/' + userId,
    //           headers : {
    //             'Authorization' : "Bearer " + accessToken
    //           }
    //         }).then((res) => {
    //             expect(res.status).to.eq(200)
    //             expect(res.body.data).has.property('id', userId)
    //             expect(res.body.data).has.property('email',testemail)
    //             expect(res.body.data).has.property('name',payload.name)
    //             expect(res.body.data).has.property('status',payload.status)



      })

    })  
    })

  })


