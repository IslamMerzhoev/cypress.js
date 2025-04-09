describe('Провепка авторизации', function () {

    it('1.Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проеверяю ,что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
     })
 }) 

 it('2. Востановление пароля', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
   
    cy.get('#forgotEmailButton').click(); // Нажал восстановить пароль
    cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел почту для востстановления
    cy.get('#restoreEmailButton').click(); // Нажал отправить код

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проеверяю на совпадение текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
})



it('3. Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт

    cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
    cy.get('#pass').type('iLoveqastudio2'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажал войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проеверяю ,что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
})


it('4.Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт

    cy.get('#mail').type('german@dolnikovv.ru'); // Ввели неверный логин
    cy.get('#pass').type('iLoveqastudio2'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажал войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проеверяю ,что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
})


it('5. Ввести логин без @', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажал войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проеверяю ,что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
})



it('6. Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт

    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажал войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проеверяю ,что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
})


