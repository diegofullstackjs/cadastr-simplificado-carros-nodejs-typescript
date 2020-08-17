export interface IUserCreate {
    name: string,
    password: string | undefined,
    email: string
}
export interface ICarsCreate {
    provider: any
    marca: string
    modelo: string
    ano: string
    combustivel: string
    cor: string
    preco: string
}