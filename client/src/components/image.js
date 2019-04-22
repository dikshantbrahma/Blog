import React from 'react'
import { Image } from 'semantic-ui-react'

export const ImageEx = (props) => 
                        props.shape==='c' 
                        ?<Image style={{margin:'auto'}} src={props.loc} size={props.sz} circular/> : <Image style={{margin:'auto'}} src={props.loc} size={props.sz} square/> 