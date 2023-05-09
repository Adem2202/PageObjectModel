import { Selector,t } from "testcafe";

class Register{
    constructor(){
        this.genderOption = Selector('#gender-male')
        this.firstName = Selector('#FirstName')
        this.lastName = Selector('#LastName')
        this.dateOfBirthDay = Selector("select[name='DateOfBirthDay']")
        this.dateOfBirthMonth = Selector("select[name='DateOfBirthMonth']")
        this.dateOfBirthYear = Selector("select[name='DateOfBirthYear']")
        this.email = Selector('#Email')
        this.password = Selector('#Password')
        this.confirmPassword = Selector('#ConfirmPassword')
        this.registerButton = Selector('#register-button')
        this.successMessage = Selector('div.result').withText('Your registration completed')

    }

    async SelectDay(day){
        const dayOption =this.dateOfBirthDay.find('option');
        await t
        .click(this.dateOfBirthDay)
        .click(dayOption.withText(day))
    }

    async SelectMonth(month){
        const monthOption = this.dateOfBirthMonth.find('option');
        await t
        .click(this.dateOfBirthMonth)
        .click(monthOption.withText(month));
    }

    async SelectYear(year){
        const yearOption = this.dateOfBirthYear.find('option');
        await t
        .click(this.dateOfBirthYear)
        .click(yearOption.withText(year));
    }
}

export default new Register();

//made some changes