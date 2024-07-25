///<reference types = "Cypress" />

describe('get api user tests', ()=>{

    let accessToken = '2ccc65341777e4fb7cde7c1e576ab193dadf59791c00deed806e72ce6c5efc61'

    it('get users',() => {

        cy.request({

            method : 'GET',
            url :   'https://gorest.co.in/public-api/users',
            headers : {
                'authorization' : "Bearer" + accessToken
            }


        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(10)
        })

  })

    it('get users by id test',() => {

        cy.request({

            method : 'GET',
            url :   'https://gorest.co.in/public-api/users/7020329',
            headers : {
                'authorization' : "Bearer" + accessToken
            }


        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Anusuya Varma')
        })

})

})