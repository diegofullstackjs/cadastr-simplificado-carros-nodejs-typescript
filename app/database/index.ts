import {createConnection} from 'typeorm'

createConnection().then( x => console.log("DATABASE CONNECTED"))