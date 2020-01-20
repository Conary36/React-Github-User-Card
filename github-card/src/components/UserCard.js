import React from 'react'
import styled from 'styled-components'

 const ImgDiv = styled.div`
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
   position: relative;

 `;
 const Pic = styled.img`
    height: 10vhw;
    width: 10vhw;
 `

export default function UserCard ({name,login,url,followers,location}){

   


    return(
        <section>
            <ImgDiv>
                <Pic src={url} alt='github-user'/>
            </ImgDiv>
            <div>
                <h2>Name: {name}</h2>
                <p>Login: {login}</p>
                <p>Followers: {followers}</p>
                <p>Location: {location}</p>
            </div>
        </section>
    
    )
}