import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { ComForm } from './ComForm'

export const ComApp = () => {
    return (
        <ChakraProvider>
            <ComForm/>
        </ChakraProvider>
    )
}