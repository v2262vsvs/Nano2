//let { id } = require("./allClientsData/dimaId.json")
// Include the chrome driver
require("chromedriver");


let { data11 } = require("./clientsMonday.json")
let { data22 } = require("./clientsTuesday.json")
let { data33 } = require("./clientsWednesday.json")
let { data44 } = require("./clientsThursday.json")
let { data55 } = require("./clientsFriday.json")


let Data = data11;
const MicrosoftWorkspace = `[value='msteams-fibo']`
const KoneWorkspace = `[data-shared-channel='kone']`
const PandaWorspace = `[data-shared-channel='pandacoachbot']`
const BrainlyWorkspace = `[data-shared-channel='shared-brainly-2']`

const morningSession = "6200d57014d1b95a4c82dc68"
const eveningSession = "61b65debfe32175adb317233"



async function run(id, Workspace, Session) {
    let { email, pass } = require("./logpas.json");
    // Include selenium webdriver
    let swd = require("selenium-webdriver");
    let browser = new swd.Builder();
    let tab = browser.forBrowser("chrome").build();
    // Get the credentials from the JSON file
    let tabToOpen = tab.get("https://www.fibofy.com/signin/?redir=/panda/admin/");

    tabToOpen
        .then(function () {
            console.log(`1/////////`)
            // Timeout to wait if connection is slow
            let findTimeOutP =
                tab.manage().setTimeouts({
                    implicit: 10000, // 10 seconds
                });
            return findTimeOutP;
        })
        .then(function () {
            // Step 2.-1 - Finding the Sign In button
            let promiseFormBtn = tab.findElement(
                swd.By.css("#login-fibo")
            );
            return promiseFormBtn;
        })
        .then(function (FormBtn) {
            // Step 2.0 - Clicking the Sign In button
            let promiseClickFormIn = FormBtn.click();
            return promiseClickFormIn;
        })

        .then(function () {
            // Step 2.1 - Finding the username input
            let promiseUsernameBox =
                tab.findElement(swd.By.css("[name='username']"));
            return promiseUsernameBox;
        })
        .then(function (usernameBox) {
            // Step 3 - Entering the username
            let promiseFillUsername =
                usernameBox.sendKeys(email);
            return promiseFillUsername;
        })
        .then(function () {
            // Step 4 - Finding the password input
            let promisePasswordBox =
                tab.findElement(swd.By.css("[name='password']"));
            return promisePasswordBox;
        })
        .then(function (passwordBox) {
            // Step 5 - Entering the password
            let promiseFillPassword =
                passwordBox.sendKeys(pass);
            return promiseFillPassword;
        })
        .then(function () {
            // Step 6 - Finding the Sign In button
            let promiseSignInBtn = tab.findElement(
                swd.By.css("#next")
            );
            return promiseSignInBtn;
        })
        .then(function (signInBtn) {
            // Step 7 - Clicking the Sign In button
            let promiseClickSignIn = signInBtn.click();
            return promiseClickSignIn;
        })
        .then(function () {
            console.log("Successfully signed in fibo Panda!");
        })
        .then(function () {
            // Step 6 - Finding the Fetch Button
            let promiseDropDown = tab.findElement(
                swd.By.css(".select_workspace")
            );
            return promiseDropDown;
        })
        .then(function (DropDown) {

            // Step 7 - Clicking the Fetch Button
            let promiseClickOption = DropDown.click();
            return promiseClickOption;
        })
        .then(function () {
            // Step 6 - Finding the Fetch Button
            let promiseDropDown2 = tab.findElement(
                swd.By.css(`${Workspace}`)
            );
            return promiseDropDown2;
        })
        .then(function (DropDown2) {

            // Step 7 - Clicking the Fetch Button
            let promiseClickOption2 = DropDown2.click();
            return promiseClickOption2;
        })
        .then(function () {
            // Step 6 - Finding the Fetch Button
            let promiseFetchBtn = tab.findElement(
                swd.By.css("#fetchUserBtn")
            );
            return promiseFetchBtn;
        })
        .then(function (FetchBtn) {

            // Step 7 - Clicking the Fetch Button
            let promiseClickFetch = FetchBtn.click();
            return promiseClickFetch;
        })
        .then(function () {
            // Timeout to wait if connection is slow
            let findTimeOutP =
                tab.manage().setTimeouts({
                    implicit: 10000, // 10 seconds
                });
            return findTimeOutP;
        })

        .then(function () {
            // Step 6 - Finding the user by id
            console.log(`/////////${id}/////////`)
            let promiseFindUser = tab.findElement(
                swd.By.css(`[data-userid='${id}']`)
            );
            return promiseFindUser;
        })
        .then(function (FindUser) {
            let promiseClickFind = FindUser.click();
            return promiseClickFind;
        })
        .then(function () {
            // Timeout to wait if connection is slow
            let findTimeOutP =
                tab.manage().setTimeouts({
                    implicit: 1000, // 10 seconds
                });
            return findTimeOutP;
        })
        .then(function () {
            // Timeout to wait if connection is slow
            let findTimeOutP =
                tab.manage().setTimeouts({
                    implicit: 10000, // 10 seconds
                });
            return findTimeOutP;
        })

        .then(function () {
            let promiseMessageBox =
                tab.findElement(swd.By.css("#start_flow_id"));
            return promiseMessageBox;
        })
        .then(function (MessageBox) {
            let promiseFillMessage =
                MessageBox.sendKeys(Session);
            return promiseFillMessage;
        })
        .then(function () {
            let promiseSendBtn = tab.findElement(
                swd.By.css("[class='send_flow']")
            );
            return promiseSendBtn;
        })
        
        .then(function (SendBtn) {
            let promiseClickSend = SendBtn.click();
            console.log("Message is on the way!");
            return promiseClickSend;
        })
        .catch(function (err) {
            console.log("Error ", err, " occurred!");
        })
        .then(function () {
            let findTimeOutP = tab.sleep(7000)
            return findTimeOutP;
        })
        .then(function () {
            let findTimeOutP3 = tab.close();
            return findTimeOutP3;
        })
}



    setInterval(() => {
        var date = new Date();
        
        let wait = 0;
        const expr = date.getDay();
        switch (expr) {
            case 1:
                console.log("Today is Monday");
                Data = data11;
                break;
            case 2:
                console.log("Today is Tuesday");
                Data = data22;
                break;
            case 3:
                console.log("Today is Wednesday");
                Data = data33;
                break;
            case 4:
                console.log("Today is Thursday");
                Data = data44;
                break;
            case 5:
                console.log("Today is Friday");
                Data = data55;
                break;
            case 6:
                console.log("Today is Saturday");
                break;
            case 0:
                console.log("Today is Sunday");
                break;
            default:
                console.log(`Sorry, we are out of ${expr}.`);
        }
        
        console.log(date.toISOString().slice(0, 10), " hours: " + date.getHours(), " minutes: " + date.getMinutes(), " day " + date.getDay())
        for (let index = 0; index < Data.length; index++) {
            const element = Data[index];
            if (element.hours === date.getHours() && element.minutes === date.getMinutes()) {

                setTimeout(() => {
                    run(element.id, element.workspace, element.session);
                }, wait * 9000);
                wait += 1
            }

        }
    }, 60000);

