import extensible from '../../assets/extensible.png'
import versatile from '../../assets/versatile.png'
import progressive from '../../assets/progressive.png'


import style from "./highlight.module.css"

export default function Highlight(props) {

    return (
        <div className={style.containerHighlight}>
           <div className={style.wrapperHighlight}>
            <div className={style.boxHighlight} >
              <img src={extensible} />
             <h5>Extensible</h5>
               <p> Gives you true flexibility by allowing use of any other libraries thanks to modular architecture. </p>
             </div>
             <div className={style.boxHighlight} >
             <img src={versatile} />
             <h5>Versatile</h5>
               <p>  An adaptable ecosystem that is a fully-fledged backbone for all kinds of server-side applications.  </p>
             </div>
             <div className={style.boxHighlight} >
             <img src={progressive} />
             <h5>Progressive</h5>
               <p>  Takes advantage of latest JavaScript features, bringing design patterns and mature solutions to Node.js world. </p>
             </div>
          </div>
        </div>
    )
}