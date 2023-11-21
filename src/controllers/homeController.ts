import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { User } from '../models/User';

import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=>{
  let users = await User.findAll({
    where: {
      age: {
            [Op.gte]: 1
        }
    },
        order: ['age']
    
  });
  

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Wagner',
        lastName: 'Kroiss',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};