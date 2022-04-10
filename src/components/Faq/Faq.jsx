
import './Faq.css'
import  React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';



const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<AddOutlinedIcon sx={{ fontSize: '2rem', color: 'white' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'light'
            ? 'black'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    

    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        <div className='Faqmaindiv' id='Faq' >

        <h1 className='mAINHEADING' style={{color:'#000'}} >FAQ</h1>
       
        <h1 className='mAINHEADING' >FAQ</h1>
        <div className="mainheadingtext">Frequently Asked Questions</div>

            <div className="innerdiv">

                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="AccodionHeadertext" >
                        <Typography className="AccodionHeadertext">When will Crypto Car Club Game platform be released?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody" >
                        <Typography className="bodytext" >
                        The game will be released in Q3 2022
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" className="AccodionHeadertext" >
                        <Typography className="AccodionHeadertext">What is Crypto Car Club Game?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                            Crypto Car Club is the first Web3 based NFT P2E car game. Members can use their cars to race, participate in car shows, and bid on other players.
                            A weekly announcement for the top 10 fastest and the most winning players.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" className="AccodionHeadertext">
                        <Typography className="AccodionHeadertext">What rewards Crypto Car Club Game offering?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                            The Club is offering daily competitions and daily rewards for the winners. Competitions can involve single and team player challenges. Club members can choose their teammates for the team challenges. A worldwide race every month for
                            the top players across the world joining in a race to celebrate the fastest players.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" className="AccodionHeadertext">
                        <Typography className="AccodionHeadertext">What is Crypto Car Club Ecosystem?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                            Crypto Car Club Ecosystem is consistent in trading and auctioning your NFT on
                            our platform. All members of the Club can bid, buy, sell their NFT inside the platform.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" className="AccodionHeadertext">
                        <Typography className="AccodionHeadertext">What is The Crypto Car Club Ambassador Program?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                        The Crypto Car Club Ambassador Program is designed for members that believe in the project and want to see Crypto Car Club around the world. The Ambassador Program allows individuals to unlock their real connections and be recognized around our community to be the one that made this event happen.
                        Whether the event is in life or online, you are still going to be rewarded in accordance with the event as one of us! 
                        </Typography>
                    </AccordionDetails>
                </Accordion>


                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" className="AccodionHeadertext">
                        <Typography className="AccodionHeadertext">What type of events are Crypto Car Club hosting?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                        The events that suit Crypto Car Club are for car shows and sponsor car dealerships to accept cryptocurrency as a valid method of payment to purchase cars. All the car shows and races in different cities and countries can only be done with strong ties to the community and a great connection with car enthusiasts.                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" className="AccodionHeadertext">
                        <Typography className="AccodionHeadertext">When is the whitelist?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                        Q2 2022
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                    <AccordionSummary aria-controls="panel6d-content" id="panel6d-header" className="AccodionHeadertext">
                        <Typography className="AccodionHeadertext">Can tokens be transferred to different players?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                            Yes, through Crypto Car Club Marketplace.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                    <AccordionSummary aria-controls="panel8d-content" id="panel8d-header" className="AccodionHeadertext">
                        <Typography className="AccodionHeadertext">What can be done at the Crypto Car Club Marketplace?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                            Players can sell, buy, and trade their NFT on our Marketplace.
                            Players can also buy and sell Crypto Car Club Token.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}

