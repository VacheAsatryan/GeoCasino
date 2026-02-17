import React from 'react';
import { FooterContainer, FooterContent, FooterBox, FooterPersonImage } from './Footer.styled';
import personImage from '../../assets/images/person.png';
import CasinoRoyal from '../../assets/icons/CasinoRoyal.svg?url';
import Download from '../../assets/icons/Download.svg?url';
import Restrictions from '../../assets/icons/Restrictions.svg?url';
import Instagram from '../../assets/icons/Instagram.svg?url';
import Telegram from '../../assets/icons/Telegram.svg?url';
import Twitter from '../../assets/icons/Twitter.svg?url';
import Mail from '../../assets/icons/Mail.svg?url';

import licence from '../../assets/icons/licence.svg?url';
import { Box, Typography } from '@mui/material';
import { breakpoints } from '../../styles/media/media';
import Button from '../Button/Button';
import GeoDropdown from '../GeoDropdown/GeoDropdown';
import { useGeo } from '../../app/providers/GeoProvider';
import { translations } from '../../translations/translations';

const SOCIAL_LINKS = {
    instagram: 'https://instagram.com',
    telegram: 'https://t.me',
    twitter: 'https://x.com',
    mail: 'mailto:support@geocasino.com',
};

const APP_DOWNLOAD_URL = 'https://geocasino.app/download';

const Footer: React.FC = () => {
    const { geo } = useGeo();
    const t = translations[geo];

    return (
        <FooterContainer>
            <FooterContent>
                <FooterBox $hiddenBox>
                    <FooterPersonImage src={personImage} alt="Person" loading="lazy" />
                </FooterBox>
                <FooterBox $withBorder>
                    <img src={CasinoRoyal} alt="casino royal" width={175} height={80} />
                    <Box
                        sx={{
                            width: 390,
                            mx: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            [`@media (max-width: ${breakpoints.mobile480}px)`]: {
                                width: "fit-content"
                            },
                        }}>
                        <Typography
                            sx={{
                                fontFamily: 'SF Pro, sans-serif',
                                fontWeight: 860,
                                fontStyle: 'normal',
                                fontSize: '32px',
                                lineHeight: '40px',
                                letterSpacing: 0,
                                textAlign: 'center',
                            }}
                        >
                            {t.footerDownloadTitle}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'SF Pro, sans-serif',
                                fontWeight: 590,
                                fontStyle: 'normal',
                                fontSize: '16px',
                                lineHeight: '40px',
                                letterSpacing: 0,
                                color: "#BABABA",
                                textAlign: 'center',
                            }}
                        >
                            {t.footerDownloadSubtitle}
                        </Typography>
                        <Box sx={{ width: "250px" }}>
                            <Button onClick={() => window.open(APP_DOWNLOAD_URL, '_blank', 'noopener,noreferrer')}>
                                <img src={Download} alt="download" /> {t.footerInstallButton}
                            </Button>
                        </Box>
                    </Box>
                </FooterBox>


                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        ml: "64px",
                        [`@media (max-width: ${breakpoints.desktop1440}px)`]: {
                            ml: "40px",
                        },
                        [`@media (max-width: ${breakpoints.desktop1200}px)`]: {
                            ml: 0,
                            flexDirection: "column-reverse",
                            gap: "52px",
                            alignItems: "center",
                            mt: "30px"
                        },

                    }}
                >
                    <FooterBox $flexible>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "24px",

                                [`@media (max-width: ${breakpoints.desktop1200}px)`]: {
                                    gap: "16px",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    width: "100%"
                                },
                                [`@media (max-width: ${breakpoints.mobile480}px)`]: {
                                    gap: "16px",
                                    flexDirection: "column",
                                },
                            }}
                        >
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",

                                [`@media (max-width: ${breakpoints.desktop1200}px)`]: {
                                    gap: "16px",
                                    flexDirection: "column",
                                    width: "287px",

                                },


                            }}>
                                <img src={Restrictions} alt=" Restrictions" />
                                <Typography
                                    sx={{
                                        fontFamily: 'SF Pro, sans-serif',
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        fontSize: '16px',
                                        lineHeight: '40px',
                                        letterSpacing: 0,
                                        color: "#BABABA",
                                        textAlign: 'center',
                                    }}
                                >
                                    {t.footerOnly18}
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                [`@media (max-width: ${breakpoints.desktop1200}px)`]: {
                                    gap: "16px",
                                    flexDirection: "column",
                                },
                            }}>
                                <img src={licence} alt=" licence" />
                                <Typography
                                    sx={{
                                        fontFamily: 'SF Pro, sans-serif',
                                        fontWeight: 400,
                                        maxWidth: "287px",
                                        fontStyle: 'normal',
                                        fontSize: '16px',
                                        lineHeight: '22px',
                                        letterSpacing: 0,
                                        color: "#BABABA",
                                        textAlign: 'start',
                                        [`@media (max-width: ${breakpoints.desktop1200}px)`]: {
                                            textAlign: 'center',

                                        },
                                    }}
                                >
                                    {t.footerLicense}
                                </Typography>
                            </Box>
                        </Box>
                    </FooterBox>
                    <FooterBox>
                        <Box sx={{
                            pt: "55px",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            [`@media (max-width: ${breakpoints.desktop1200}px)`]: {
                                gap: "60px",
                                alignItems: "center",
                                pt: "0",
                            },
                        }}>
                            <GeoDropdown />
                            <Box>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                    alignItems: "flex-end",
                                    [`@media (max-width: ${breakpoints.desktop1200}px)`]: {
                                        alignItems: "center"

                                    },
                                }}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'SF Pro, sans-serif',
                                            fontWeight: 400,
                                            maxWidth: "287px",
                                            fontStyle: 'normal',
                                            fontSize: '16px',
                                            lineHeight: '22px',
                                            letterSpacing: 0,
                                            color: "#BABABA",
                                            textAlign: 'start',
                                        }}>
                                        Us on social media:
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: "2px",
                                        }}
                                    >
                                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                                            <img src={Instagram} alt="Instagram" />
                                        </a>
                                        <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer">
                                            <img src={Telegram} alt="Telegram" />
                                        </a>
                                        <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
                                            <img src={Twitter} alt="Twitter / X" />
                                        </a>
                                        <a href={SOCIAL_LINKS.mail} target="_blank" rel="noopener noreferrer">
                                            <img src={Mail} alt="Email" />
                                        </a>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </FooterBox>
                </Box>
            </FooterContent >
        </FooterContainer >
    );
};

export default Footer;