import { ConnectButton } from '@rainbow-me/rainbowkit';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, IconButton } from '@mui/material';
import Logo from '../../assets/logo.jpeg';
import Anchor from '../Anchor';

interface IProps {
    toggle: boolean;
    setToggle: () => void;
}


const Header = (props: IProps) => {
    const { toggle, setToggle } = props

    return (

        <Box
            display={"flex"}
            justifyContent={'space-between'}
            alignContent={'center'}
            padding={2}
        >
            <Box
                component="img"
                height={40}
                src={Logo}
            />
            <Anchor href={'https://etherscan.io/token/0x8cc0f052fff7ead7f2edcccac895502e884a8a71'} trackingid={'arth-token'}>ARTH</Anchor>

            <Anchor href={'https://etherscan.io/token/0x745407c86df8db893011912d3ab28e68b62e49b0'} trackingid={'maha-token'}>MAHA</Anchor>
            <Box
                display={"flex"}
                justifyContent={'flex-end'}>
                <ConnectButton />
                <IconButton sx={{ ml: 1 }} onClick={() => setToggle()} color="inherit">
                    {toggle ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>
        </Box>
    );
};

export default Header;
