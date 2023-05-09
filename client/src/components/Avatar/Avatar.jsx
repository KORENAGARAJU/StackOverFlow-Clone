import React from "react"

const Avatar = ({children , color , backgroundColor , px , py , borderRadius , fontSize , textAlign , cursor}) =>{
    let style = {
        color : `${color}` || 'black' ,
        backgroundColor,
        padding: `${py} ${px}` ,
        cursor : cursor || null ,  
        borderRadius,
        fontSize ,
        textAlign: 'centre' 
    }
    return(
        <div style={style}>
           {children} 
        </div>
    ) ;
}
export default Avatar ;