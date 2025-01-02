// import React from "react";

// const Greet = ()=>{
//     return (
//         <h1>Hello World</h1>
//     )
// }

// export default Greet;


import React from "react";

type GreetProps={
    name?:string
}


const Greet:React.FC<GreetProps> = ({name})=>{
    return (<span>{`Hello ${name}`}</span>)
}

export default Greet