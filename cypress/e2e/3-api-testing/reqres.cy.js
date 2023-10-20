describe('API Test Reqres & Gores', () => {

  function randomName(){
    const randomString = Math.random().toString(36).substring(2, 10)
    const name = "User" + randomString
    return name
  }

  function randomEmail(){
    const randomString = Math.random().toString(36).substring(2, 10)
    const email = randomString + "@gmail.com"
    return email
  }

  let emailAddress = randomEmail()
  let username = randomName()
  let bodyData = {
    "name": username,
    "email": emailAddress,
    "gender": "female",
    "status": "active"
}

  it('Get User Lists', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2'
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })
  it('Create User Gores', () => {
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        Authorization: 'Bearer 71b8a9ca7dee570a8a5c5186b7c0b5b1b1fc2baadc8c3ffefa14f6339ba152ff'
      },
      body: bodyData
    }).then((response) => {
      expect(response.status).to.equal(201)
    })
  })
})