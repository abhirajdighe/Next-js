'use client'
export default function Lecture1({params}){

    console.log(params)
    return (
        <div>
            <h1>Day of college {params.lectures[0]}</h1>
            <h4>Lecture No: {params.lectures[1]}</h4>
        </div>
    )
}