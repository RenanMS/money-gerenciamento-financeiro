import { createServer, Model } from 'miragejs';

export function mirageJS() {
  createServer({
    // Criando modelos de banco de dados
    models: {
      transaction: Model,
    },
  
    // Inicando banco com dados insertados manualmente
    seeds(server){
      server.db.loadData({
        transactions: [ // nome da model no plural
          {
            id: 1,
            title: 'Freelance de website',
            typeTransaction: 'deposit',
            category: 'Dev',
            amount: 6000,
            createAt: new Date('2022-01-05 21:34:00')
          },
          {
            id: 2,
            title: 'Lanche',
            typeTransaction: 'withdraw',
            category: 'Comida',
            amount: 55,
            createAt: new Date('2022-01-05 22:34:00')
          }
        ]
      })
    },
  
    // Rotas da API
    routes() {
      this.namespace = 'api';
  
      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })
  
      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)
  
        return schema.create('transaction', data);
      })
    }
  })
  
}
