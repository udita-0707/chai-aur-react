import React from "react"
// function Card(props){
//     return(
//         <>
//         <div className="card mt-4 bg-pink-400 w-96 shadow-xl">
//             <figure>
//                 <img
//                 src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                 alt="Shoes" />
//             </figure>
//             <div className="card-body">
//                 <h2 className="card-title">{props.name}</h2>
//                 <p>{props.description}</p>
//                 <div className="card-actions justify-end">
//                 <button className="btn btn-primary">{props.btn || "Connect Now"}</button>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

function Card({name, description, btn="Connect Now"}){
    return(
        <>
        <div className="card mt-4 bg-pink-400 w-96 shadow-xl">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">{btn}</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card