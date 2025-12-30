import { fakerPT_BR as faker } from '@faker-js/faker'


export function criarEndereco() {
    return {
        nome: faker.person.firstName(),
        sobrenome: faker.person.lastName(),
        pais: 'Brasil',
        endereco: faker.location.streetAddress(),
        complemento: faker.location.secondaryAddress(),
        cidade: faker.location.city(),
        estado: 'Amazonas',
        cep: faker.location.zipCode('#####-###'),
        telefone: faker.phone.number('## #### ####'),
        emailCadastro: faker.internet.email()
    }
}