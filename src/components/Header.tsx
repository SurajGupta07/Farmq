import React from 'react';
import { HeaderProps } from "../types/HeaderProps.types"
export function Header({username, score}: HeaderProps){
    return(
        <div>
            <h1>Farmq</h1>
            <h2>Welcome {username}</h2>
            <h3>Score: {score}</h3>
        </div>
    )
}
