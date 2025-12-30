import { fakerPT_BR as faker } from '@faker-js/faker'


export function dadosNovoUsuario() {
    return {
        
        nome: faker.person.firstName(),
        sobrenome: faker.person.lastName(),
        email: faker.internet.email(),
        senha: faker.internet.password(),
        
    }
}