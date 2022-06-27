import { readChairs } from '../../store/chairs'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


// function ChairsPage() {
//     const dispatch = useDispatch();

//     const chairStuff = useSelector(state => state.chairs);
//     const chairArray = Object.values(chairStuff);

//     useEffect (()=> {
//         dispatch(readChairs())
//     }, [dispatch])

//     return (
//         <>
//         {chairStuff && chairArray.map(chair => {
//             return <ul key={chair.id}>
//                 <li>{chair.name}</li>
//             </ul>
//         })}
//         </>
//     )
// }


// export default ChairsPage
