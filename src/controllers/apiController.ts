import { Request, Response } from 'express';
import { Todo } from '../models/todos';

export const all = async (req: Request, res: Response) => {
    let Tarefas = await Todo.findAll()
    res.json({ Tarefas })
}

export const add = async (req: Request, res: Response) => {
    if (req.body.title) {
        let NovoTodo = await Todo.create({
            title: req.body.title,
            feito: req.body.feito ? true : false
        })
        res.status(201)
        res.json({ NovaTarefa: NovoTodo });
    } else {
        res.json({ error: "Dados não enviados!!" })
    }
}

export const update = async (req: Request, res: Response) => {
    let id = req.params.id;
    let title = req.body.title;
    let feito = req.body.feito ? true : false;
    let GetTodo = await Todo.findByPk(id)
    if (GetTodo) {
        GetTodo.title = title;
        GetTodo.feito = feito;
        await GetTodo.save()
        res.json({ GetTodo })
    } else {
        res.json({ error: "Deu ruim!!!" })
    }
}

export const remove = (req: Request, res: Response) => {
    let id = req.params.id;
    Todo.destroy({ where: { id } })
    res.json({})
}