import { MoviesCart } from './MoviesCart'
import {datas} from './data/movies.js'
import './style/movies.css'
export const Movies = () => {
    return(
        <div className="movies">
            <h3>Кино Жагсаалт</h3>
                <span className='cartPart'> 
                {
                    datas.map((e , i) => {
                        
                        return(
                            <MoviesCart data={e} key={i}/>
                        )
                    })
                }
                </span>
        </div>
    )
}