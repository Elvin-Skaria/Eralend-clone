import { Box } from '@mui/material'
import React from 'react'

interface IProps {
    children: any
}

const Container = (props: IProps) => {
    return (
        <Box
            width={'70%'}
            border={1}
            borderColor={'slategray'}
            paddingY={3}
            borderRadius={5}
            marginTop={4}>
            {props.children}
        </Box>
    )
}

export default Container

