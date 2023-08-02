import { Box } from '@mui/material'
import React from 'react'
import TextWrapper from '../component/TextWrapper'

const Section2 = () => {
    return (
        <Box
            width={'70%'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            marginTop={4}
        >
            <Box width={'100%'} marginRight={2}>
                <div className='material-primary'>
                    <TextWrapper
                        text={'My Points'}
                        fontSize={18}
                    />
                    <Box paddingTop={3} borderTop={1} borderColor={'slategray'} display={'flex'} justifyContent={'space-evenly'}>
                        <div className='material-primary w-100 m-r-12'>
                            <TextWrapper text={'Lifetime'} align='center' fontSize={24} />
                            <TextWrapper text={'0'} align='center' fontSize={18} />
                        </div>
                        <div className='material-primary w-100'>
                            <TextWrapper text={'Current Epoch'} align='center' fontSize={24} />
                            <TextWrapper text={'0'} align='center' fontSize={18} />
                        </div>
                    </Box>
                </div>

            </Box>
            <Box width={'100%'}>

            </Box>

        </Box>
    )
}

export default Section2