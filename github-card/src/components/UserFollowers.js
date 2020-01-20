import React from  'react';
import styled from 'styled-components'

export default function UserFollowers({ name,image,followers_url,organizations_url }){
                 return (
                   <section>
                     <div>
                       <img src={image} alt="github-user" />
                     </div>
                     <div>
                       <h2>Name: {name}</h2>
                       <p>Followers: {followers_url}</p>
                       <p>Organizations: {organizations_url}</p>
                     </div>
                   </section>
                 );
               }