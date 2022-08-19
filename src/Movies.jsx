import { MoviesCart } from './MoviesCart'
import {datas} from './data/movies.js'
import './style/movies.css'
export const Movies = () => {
    // console.log(datas.map((e, i)=> e))
    return(
        <div className="movies">
            <h3>Кино Жагсаалт</h3>
            <div className='cartPart'> 
            {
                datas.map((e , i) => {
        
                    return(<MoviesCart data={e} key={i}/>)
                })
            }
            </div>
        </div>
    )
}