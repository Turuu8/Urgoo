import { datas } from './movies.js'
export const DataMap = () => {
    console.log(datas.map((e ,i ) => {
        return e.name
    }))
}