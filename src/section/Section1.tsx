import React from 'react'
import Container from '../component/Container'
import { Box, Button } from '@mui/material'
import TextWrapper from '../component/TextWrapper'
import BasicAccordion from '../component/Accordian'

const Section1 = () => {
    return (
        <Container>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                borderBottom={1}
                borderRadius={10}
                marginBottom={4}>
                <Box
                    marginX={3}
                    width={'80%'} >
                    <TextWrapper
                        text={'EraLend Stellar Program'}
                        fontSize={24}
                    />
                    <TextWrapper
                        text={'The program is our new loyalty scheme that rewards contributions from our active user and community member base. With this program, you can accumulate points, enjoy unique benefits, and earn exciting rewards.'}
                    />
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} paddingRight={3} width={'20%'}>
                    <Button variant="contained">
                        Learn More
                    </Button>
                </Box>
            </Box>
            <Box marginX={3}>
                <BasicAccordion />
            </Box>
        </Container>
    )
}

export default Section1