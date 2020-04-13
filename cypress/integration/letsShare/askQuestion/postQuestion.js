/// <reference types ="cypress"/>

import LoginPage from '../../../support/page_data/loginpage/login_page'
import PostQuestion from '../../../support/page_data/postQuestion/post_question'

const loginPage = new LoginPage()
const postQuestion = new PostQuestion()

beforeEach('read test data', function () {
    cy.fixture('testCase').then((data) => {
        this.data001 = data['TC001']
        this.data002 = data['TC002']
        this.data003 = data['TC003']
    })
    cy.visit('https://' + Cypress.env('env'))
})

describe('Post Question', function () {

    it("Enter data in all field and click on post button", function () {
        loginPage.enterUserNamePassword(this.data001.userName, this.data001.passWord)
        postQuestion.clickAskQuestion();
        postQuestion.fillAskQuestionWithValidData(this.data003.topic, this.data003.topicvalue, this.data003.title,
            this.data003.description, this.data003.questionsavedmsg)
        loginPage.clickLogout()
    })
    it("To verify when user keep description field blank and click on post button", function () {
        loginPage.enterUserNamePassword(this.data001.userName, this.data001.passWord)
        postQuestion.clickAskQuestion();
        postQuestion.fillAskQuestionWithInValidData(this.data003.keepdescriptionblankmsg, )
        loginPage.clickLogout()
    })
})