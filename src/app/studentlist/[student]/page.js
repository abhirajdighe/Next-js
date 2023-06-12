"use client"
export default function Student(props){
    console.warn(props.params)
    return(
        <div>
            <h1>Student Details</h1>
            <h4>Name : {props.params.student}</h4>
        </div>
    )
}

// you can use this also :

// export default function Student({params}){
//     console.warn(params)
//     return(
//         <div>
//             <h1>Student Details</h1>
//             <h4>Name : {params.student}</h4>
//         </div>
//     )
// }