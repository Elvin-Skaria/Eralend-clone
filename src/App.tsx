import { useMemo, useState } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppHeader from './component/Header';
import MainBody from './section';


const App = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  const mainTheme = useMemo(() => {
    if (toggle) {
      return createTheme({
        palette: {
          mode: 'dark',
        },
        components: {
          MuiAccordion: {
            styleOverrides: {
              root: {
                background: 'none',
              }
            }
          }
        }
      })
    } else {
      return createTheme({
        palette: {
          mode: 'light',
        },
      })
    }
  }, [toggle])

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <AppHeader toggle setToggle={() => setToggle(!toggle)} />
      <MainBody />
    </ThemeProvider>
  );
};

export default App;
