import {Entity,Column,PrimaryGeneratedColumn,ManyToOne} from 'typeorm'
import UserModel from './User.model'
@Entity('cars')
class User {
  @PrimaryGeneratedColumn("increment")
  id: number

  @ManyToOne(() => UserModel,{cascade: true})
  provider: UserModel

  @Column({type: "varchar"})
  marca: string
  
  @Column({type: "varchar"})
  modelo: string

  @Column({type: "varchar"})
  ano: string

  @Column({type: "varchar"})
  combustivel: string

  @Column({type: "varchar"})
  cor: string

  @Column({type: "varchar"})
  preco: string

}

export default User;
