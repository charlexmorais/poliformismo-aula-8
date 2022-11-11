class Product{
    #init = 0
    name = ''
}

class Order{
    #id = 0
    created = 'date'
    #products = []


    constructor(){
        created = new Date()
    }

    addProduct(produto){
        if(!(produto instanceof Product)){
            throw new Error('Produto inválido')
        }else{
            this.#products.push(produto)
        }
    }

    calcularShipping(){
        throw new Error('Método não implantado')
    }
}

class OrderStore extends Order{
    tableNumber = 0

    constructor(tableNumber){
        this.tableNumber = tableNumber
        super()
    }

    calcularShipping(){
       return 0
    }
}


class OrderDelivery extends Order{
    client = client

    constructor(client){
        if(client instanceof Client){
            this.client = client
            super()
        }else{
            throw new Error('Cliente informado inválido')
        }
    }
    calcularShipping(){
        const zipCode = this.client.zipCode
        const firstNumberZipCode = Number.parseInt(zipCode.charAt(0))

        if( firstNumberZipCode >= 0 &&  firstNumberZipCode <= 4 ){

            return  5
        }else if( firstNumberZipCode >= 5  && firstNumberZipCode <= 9 ){

            return  10
        }
        throw new Error('Cep inválido')
    }

}

class Client{
    #id = 0
    name = ''
    address = ''
    zipCode = ''
    active = false
}