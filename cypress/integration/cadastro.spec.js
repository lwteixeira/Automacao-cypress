import SignupPage from '../pages/SignupPage'

describe('Cadastro', ()=>{
    it('Usuario deve se tornar um entregador', ()=>{

        var deliver = {
            name: 'Lucas Teixeira',
            cpf: '00100140140', 
            email: 'lucas@teste.com',
            whats: '51999999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Bicicleta',
            cnh:'cnh-digital.jpg'
        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectdMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectdMessage)

    })

    it('CPF incorreto', ()=>{

        var deliver = {
            name: 'Lucas Teixeira',
            cpf: '001001401AO', 
            email: 'lucas@teste.com',
            whats: '51999999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Bicicleta',
            cnh:'cnh-digital.jpg'
        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    
})