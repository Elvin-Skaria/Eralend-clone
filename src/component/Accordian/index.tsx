import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextWrapper from '../TextWrapper';
import { Box } from '@mui/material';

export default function BasicAccordion() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <TextWrapper text={'More'} fontSize={18} />
                            <ExpandMoreIcon />
                        </Box>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <TextWrapper text={'Rules'} fontSize={24} />
                </AccordionSummary>
                <AccordionDetails>
                    <Box borderTop={1} borderColor={'slategray'}>
                        <TextWrapper text={'Weekly Campaign'} fontSize={24} />
                        <TextWrapper
                            Fcolor='grey'
                            text={'Supply or borrow to accumulate points. Points for this campaign will be tallied weekly, from Monday 0:00 AM to Sunday 12:00 PM (UTC).'} />

                        <Box display={'flex'} justifyContent={'space-between'}>
                            <div className='material-primary w-100 m-r-12'>
                                <TextWrapper text={'Supply Balance:'} />
                                <Box borderTop={1} borderColor={'slategrey'} paddingTop={5}>
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <div>
                                            <TextWrapper text={'between'} margin={0} />
                                            <TextWrapper text={'$50-$1000'} margin={0} />
                                        </div>
                                        <div>
                                            <TextWrapper text={'Over 3 days'} margin={0} />
                                            <TextWrapper text={'Over 5 days'} margin={0} />
                                        </div>
                                        <div>
                                            <TextWrapper text={'+ 5 points'} margin={0} />
                                            <TextWrapper text={'+ 10 points'} margin={0} />
                                        </div>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} paddingTop={2}>
                                        <div>
                                            <TextWrapper text={'between'} margin={0} />
                                            <TextWrapper text={'$50-$1000'} margin={0} />
                                        </div>
                                        <div>
                                            <TextWrapper text={'Over 3 days'} margin={0} />
                                            <TextWrapper text={'Over 5 days'} margin={0} />
                                        </div>
                                        <div>
                                            <TextWrapper text={'+ 5 points'} margin={0} />
                                            <TextWrapper text={'+ 10 points'} margin={0} />
                                        </div>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} paddingTop={2}>
                                        <div>
                                            <TextWrapper text={'between'} margin={0} />
                                            <TextWrapper text={'$50-$1000'} margin={0} />
                                        </div>
                                        <div>
                                            <TextWrapper text={'Over 3 days'} margin={0} />
                                            <TextWrapper text={'Over 5 days'} margin={0} />
                                        </div>
                                        <div>
                                            <TextWrapper text={'+ 5 points'} margin={0} />
                                            <TextWrapper text={'+ 10 points'} margin={0} />
                                        </div>
                                    </Box>
                                </Box>
                            </div>
                            <div className='material-primary w-100'>
                                <TextWrapper text={'Borrow balance:'} />
                                <Box borderTop={1} borderColor={'slategrey'} paddingTop={5}>
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <div>
                                            <TextWrapper text={'between'} margin={0} />
                                            <TextWrapper text={'$50-$1000'} margin={0} />
                                        </div>
                                        <div>
                                            <TextWrapper text={'Over 3 days'} margin={0} />
                                            <TextWrapper text={'Over 5 days'} margin={0} />
                                        </div>
                                        <div>
                                            <TextWrapper text={'+ 5 points'} margin={0} />
                                            <TextWrapper text={'+ 10 points'} margin={0} />
                                        </div>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} paddingTop={2}>
                                        <div>
                                            <TextWrapper text={'between'} margin={0} />
                                            <TextWrapper text={'$50-$1000'} margin={0} />
                                        </div>
                                        <div>
                                            <TextWrapper text={'Over 3 days'} margin={0} />
                                            <TextWrapper text={'Over 5 days'} margin={0} />
                                        </div>
                                        <div>
                                            <TextWrapper text={'+ 5 points'} margin={0} />
                                            <TextWrapper text={'+ 10 points'} margin={0} />
                                        </div>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} paddingTop={2}>
                                        <div>
                                            <TextWrapper text={'between'} margin={0} />
                                            <TextWrapper text={'$50-$1000'} margin={0} />
                                        </div>
                                        <div>
                                            <TextWrapper text={'Over 3 days'} margin={0} />
                                            <TextWrapper text={'Over 5 days'} margin={0} />
                                        </div>
                                        <div>
                                            <TextWrapper text={'+ 5 points'} margin={0} />
                                            <TextWrapper text={'+ 10 points'} margin={0} />
                                        </div>
                                    </Box>
                                </Box>
                            </div>
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
