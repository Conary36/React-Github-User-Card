import React from 'react'
import styled from 'styled-components'

export default function UserCard ({name,id,avatar_url,html_url,repos_url}){


    return(
        <section>
            <div>
                <img src={avatar_url} alt='github-user'/>
            </div>
            <div>
                <h1>Name: {name}</h1>
                <p>Id: {id}</p>
                <p>Git-URL: {html_url}</p>
                <p>Repositories: {repos_url}</p>
            </div>
        </section>
    
    )
}