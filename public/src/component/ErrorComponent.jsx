import React from 'react'

const ErrorComponent = ({message}) => {
    return (
        <div className={"w-[300px] h-[300px]"}>
            <p className={"text-red-500 text-center font-semibold"}>{message}</p>
        </div>
    )
}
export default ErrorComponent
