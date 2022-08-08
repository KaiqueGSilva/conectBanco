import { Request, Response } from 'express';

import { Product } from '../models/Product';

//Importando o arquivo mysql.ts
import { sequelize } from '../instances/mysql';
import { User } from '../models/User';
import { Op } from 'sequelize';

export const home = async (req: Request, res: Response)=>{

    //Adicionando usuários no banco
    const user = User.build({
        name: 'YarosChatoba',
        age:10
    })

    await user.save()


    //Puxar os usuários que estão no meu Banco de Dados
    /* let users = await User.findAll({
        // attributes: {exclude: ['name']}
        // where:{name: 'Rodinei'}

        where: {
            name: {
                [Op.like]: '%a'
            }

            // age:{
                // [Op.gt]: 20, // > 20 (GT greater than)
                // [Op.gte]: 100, // > 100 (GT greater than or equal)
                // [Op.lt]: 50, // < 50
                // [Op.lte]: 80, // <= 80
                // [Op.between]:[20,100]
         //}
            
        }
    }) */

    res.render('pages/home',{

    })

};