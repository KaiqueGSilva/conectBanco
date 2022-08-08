import { Sequelize } from 'sequelize'

import dotenv from 'dotenv'

dotenv.config()

//Importando uma constante que será a nossa conexão
//Com o DB

export const sequelize = new Sequelize(
    //Aqui vamos receber os parâmetros para noss
    //Banco de dados
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect:'mysql',
        port:parseInt(process.env.MYSQL_PORT as string)
    }
)