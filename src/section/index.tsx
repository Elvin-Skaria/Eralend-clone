import { Box } from '@mui/material'
import Section1 from './Section1'
import Section2 from './Section2'

const MainBody = () => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            paddingTop={8}
        >
            <Section1 />
            <Section2 />
        </Box >
    )
}

export default MainBody