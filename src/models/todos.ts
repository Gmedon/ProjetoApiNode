import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface TodoInstance extends Model {
    id: number;
    title: string;
    feito: boolean;
}

export const Todo = sequelize.define<TodoInstance>('todos', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    feito: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'todos',
    timestamps: false
});