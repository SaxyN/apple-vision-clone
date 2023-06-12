import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import Input from "@mui/material/Input";
import Collapse from "@mui/material/Collapse";

import FastRewindRoundedIcon from '@mui/icons-material/FastRewindRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import FastForwardRoundedIcon from '@mui/icons-material/FastForwardRounded';

import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import LyricsRoundedIcon from '@mui/icons-material/LyricsRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';

import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import MicNoneRoundedIcon from '@mui/icons-material/MicNoneRounded';
import AlbumRoundedIcon from '@mui/icons-material/AlbumRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

import ContinuumPic from "../../assets/continuum.jpg";
import { useState } from "react";

import "./AppleMusic.css";

interface AppleMusicProps {
    currentIndex: number;
    handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

function AppleMusic({ }: AppleMusicProps) {

    const [open, setOpen] = useState(true);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
            <div className='ALMainWindowLeftMenu'>
                {/* Title + Subtitle + Options */}
                <div className='ALMainWindowLeftMenuUpper'>
                    <div className='ALMainWindowLeftMenuUpperText'>
                        <Typography
                            variant="h4"
                            sx={{ color: 'rgba(255, 255, 255, 1.0)' }}
                            fontFamily={"Roboto"}
                            fontSize={26}
                            fontWeight={700}
                        >
                            Library
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ color: 'rgba(255, 255, 255, 1.0)' }}
                            fontFamily={"Roboto"}
                            fontSize={16}
                            fontWeight={300}
                        >
                            All Music
                        </Typography>
                    </div>
                    <IconButton sx={{ color: 'white' }}><MoreHorizRoundedIcon sx={{ p: 0.5 }} /></IconButton>
                </div>
                {/* List of options */}
                <div className='ALMainWIndowLeftMenuList'>
                    <List
                        sx={{ width: '100%' }}
                        component="nav"
                    >
                        <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                            <ListItemIcon
                                sx={{ color: 'white', marginRight: '-10px' }}
                            >
                                <AccessTimeRoundedIcon />
                            </ListItemIcon>
                            <Typography
                                variant="body1"
                                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                fontFamily={"Roboto"}
                                fontWeight={300}
                            >
                                Recently Added
                            </Typography>
                        </ListItemButton>
                        <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                            <ListItemIcon
                                sx={{ color: 'white', marginRight: '-10px' }}
                            >
                                <MicNoneRoundedIcon />
                            </ListItemIcon>
                            <Typography
                                variant="body1"
                                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                fontFamily={"Roboto"}
                                fontWeight={300}
                            >
                                Artists
                            </Typography>
                        </ListItemButton>
                        <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                            <ListItemIcon
                                sx={{ color: 'white', marginRight: '-10px' }}
                            >
                                <AlbumRoundedIcon />
                            </ListItemIcon>
                            <Typography
                                variant="body1"
                                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                fontFamily={"Roboto"}
                                fontWeight={300}
                            >
                                Albums
                            </Typography>
                        </ListItemButton>
                        <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                            <ListItemIcon
                                sx={{ color: 'white', marginRight: '-10px' }}
                            >
                                <MusicNoteRoundedIcon />
                            </ListItemIcon>
                            <Typography
                                variant="body1"
                                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                fontFamily={"Roboto"}
                                fontWeight={300}
                            >
                                Songs
                            </Typography>
                        </ListItemButton>
                        <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                            <ListItemIcon
                                sx={{ color: 'white', marginRight: '-10px' }}
                            >
                                <AccountBoxOutlinedIcon />
                            </ListItemIcon>
                            <Typography
                                variant="body1"
                                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                fontFamily={"Roboto"}
                                fontWeight={300}
                            >
                                Made For You
                            </Typography>
                        </ListItemButton>
                    </List>
                </div>
                <div className='ALMainWindowLeftMenuPlaylists'>
                    {/* Playlists Header/Collapse */}
                    <List component="div">
                        <ListItem
                            sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            onClick={() => setOpen(!open)}
                        >
                            <Typography
                                variant="body1"
                                sx={{ color: 'rgba(255, 255, 255, 1.0)' }}
                                fontFamily={"Roboto"}
                                fontWeight={400}
                            >
                                Playlists
                            </Typography>
                            {open ?
                                <KeyboardArrowUpOutlinedIcon />
                                :
                                <KeyboardArrowDownOutlinedIcon />
                            }
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <div className='ALMainWindowLeftPlaylists'>
                                <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                                    <ListItemIcon
                                        sx={{ color: 'white', marginRight: '-10px' }}
                                    >
                                        <AddBoxRoundedIcon />
                                    </ListItemIcon>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                        fontFamily={"Roboto"}
                                        fontWeight={300}
                                    >
                                        Add Playlist
                                    </Typography>
                                </ListItemButton>
                                <ListItemButton
                                    selected
                                    sx={{
                                        borderRadius: '10px', margin: '10px 0px 10px 0px',
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{ color: 'white', marginRight: '-10px' }}
                                    >
                                        <GridOnOutlinedIcon />
                                    </ListItemIcon>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                        fontFamily={"Roboto"}
                                        fontWeight={300}
                                    >
                                        All Playlists
                                    </Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                                    <ListItemIcon
                                        sx={{ color: 'white', marginRight: '-10px' }}
                                    >
                                        <AlbumRoundedIcon />
                                    </ListItemIcon>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                        fontFamily={"Roboto"}
                                        fontWeight={300}
                                    >
                                        Playlist
                                    </Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                                    <ListItemIcon
                                        sx={{ color: 'white', marginRight: '-10px' }}
                                    >
                                        <AlbumRoundedIcon />
                                    </ListItemIcon>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                        fontFamily={"Roboto"}
                                        fontWeight={300}
                                    >
                                        Playlist
                                    </Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                                    <ListItemIcon
                                        sx={{ color: 'white', marginRight: '-10px' }}
                                    >
                                        <AlbumRoundedIcon />
                                    </ListItemIcon>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                        fontFamily={"Roboto"}
                                        fontWeight={300}
                                    >
                                        Playlist
                                    </Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                                    <ListItemIcon
                                        sx={{ color: 'white', marginRight: '-10px' }}
                                    >
                                        <AlbumRoundedIcon />
                                    </ListItemIcon>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                        fontFamily={"Roboto"}
                                        fontWeight={300}
                                    >
                                        Playlist
                                    </Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                                    <ListItemIcon
                                        sx={{ color: 'white', marginRight: '-10px' }}
                                    >
                                        <AlbumRoundedIcon />
                                    </ListItemIcon>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                        fontFamily={"Roboto"}
                                        fontWeight={300}
                                    >
                                        Playlist
                                    </Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                                    <ListItemIcon
                                        sx={{ color: 'white', marginRight: '-10px' }}
                                    >
                                        <AlbumRoundedIcon />
                                    </ListItemIcon>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                        fontFamily={"Roboto"}
                                        fontWeight={300}
                                    >
                                        Playlist
                                    </Typography>
                                </ListItemButton>
                            </div>
                        </Collapse>
                    </List>
                </div>
            </div>
            {/* Right Playlist Grid */}
            <div className='ALMainWindowRightContent'>
                <div className='ALMainWindowRightMenuUpper'>
                    <div className='ALMainWindowRightMenuUpperText'>
                        <Typography
                            variant="h4"
                            sx={{ color: 'rgba(255, 255, 255, 1.0)' }}
                            fontFamily={"Roboto"}
                            fontSize={26}
                            fontWeight={700}
                        >
                            Playlists
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ color: 'rgba(255, 255, 255, 1.0)' }}
                            fontFamily={"Roboto"}
                            fontSize={16}
                            fontWeight={300}
                        >
                            254 Playlists
                        </Typography>
                    </div>
                    <IconButton sx={{ color: 'white' }}><MoreHorizRoundedIcon sx={{ p: 0.5 }} /></IconButton>
                </div>
                <Input
                    className='ALMainWindowRightContentSearch'
                    disableUnderline
                    name="playlist search"
                    placeholder='Search in Albums'
                    sx={{ color: 'white', fontFamily: 'Roboto' }}
                    startAdornment={
                        <IconButton sx={{ marginRight: '5px', marginLeft: '-10px' }}>
                            <MicNoneRoundedIcon sx={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                        </IconButton>
                    }
                />
                <div className='ALMainWindowRightContentGrid'>
                    <div className='ALAlbum'>
                        <img src={ContinuumPic} alt="" className='ALAlbumImg' />
                        <Typography style={{ margin: '5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={15}>Good Vibes Only</Typography>
                        <Typography style={{ margin: '-5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={13}>Apple Music Dance</Typography>
                    </div>
                    <div className='ALAlbum'>
                        <img src={ContinuumPic} alt="" className='ALAlbumImg' />
                        <Typography style={{ margin: '5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={15}>Indie Anthems</Typography>
                        <Typography style={{ margin: '-5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={13}>Apple Music Indie</Typography>
                    </div>
                    <div className='ALAlbum'>
                        <img src={ContinuumPic} alt="" className='ALAlbumImg' />
                        <Typography style={{ margin: '5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={15}>Family Dance Party</Typography>
                        <Typography style={{ margin: '-5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={13}>Apple Music Family</Typography>
                    </div>
                    <div className='ALAlbum'>
                        <img src={ContinuumPic} alt="" className='ALAlbumImg' />
                        <Typography style={{ margin: '5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={15}>La Formula</Typography>
                        <Typography style={{ margin: '-5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={13}>Apple Music Latin</Typography>
                    </div>
                    <div className='ALAlbum'>
                        <img src={ContinuumPic} alt="" className='ALAlbumImg' />
                        <Typography style={{ margin: '5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={15}>Sold Gold Hits</Typography>
                        <Typography style={{ margin: '-5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={13}>Apple Music Pop</Typography>
                    </div>
                    <div className='ALAlbum'>
                        <img src={ContinuumPic} alt="" className='ALAlbumImg' />
                        <Typography style={{ margin: '5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={15}>Caffeine Country</Typography>
                        <Typography style={{ margin: '-5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={13}>Apple Music Country</Typography>
                    </div>
                    <div className='ALAlbum'>
                        <img src={ContinuumPic} alt="" className='ALAlbumImg' />
                        <Typography style={{ margin: '5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={15}>Melodic Rap</Typography>
                        <Typography style={{ margin: '-5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={13}>Apple Music Hip-Hop</Typography>
                    </div>
                    <div className='ALAlbum'>
                        <img src={ContinuumPic} alt="" className='ALAlbumImg' />
                        <Typography style={{ margin: '5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={15}>Viral Remixed</Typography>
                        <Typography style={{ margin: '-5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={13}>Apple Music</Typography>
                    </div>
                    <div className='ALAlbum'>
                        <img src={ContinuumPic} alt="" className='ALAlbumImg' />
                        <Typography style={{ margin: '5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={15}>Viral Remixed</Typography>
                        <Typography style={{ margin: '-5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={13}>Apple Music</Typography>
                    </div>
                    <div className='ALAlbum'>
                        <img src={ContinuumPic} alt="" className='ALAlbumImg' />
                        <Typography style={{ margin: '5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={15}>Viral Remixed</Typography>
                        <Typography style={{ margin: '-5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={13}>Apple Music</Typography>
                    </div>
                    <div className='ALAlbum'>
                        <img src={ContinuumPic} alt="" className='ALAlbumImg' />
                        <Typography style={{ margin: '5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={15}>Viral Remixed</Typography>
                        <Typography style={{ margin: '-5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={13}>Apple Music</Typography>
                    </div>
                    <div className='ALAlbum'>
                        <img src={ContinuumPic} alt="" className='ALAlbumImg' />
                        <Typography style={{ margin: '5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={15}>Viral Remixed</Typography>
                        <Typography style={{ margin: '-5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={13}>Apple Music</Typography>
                    </div>
                    <div className='ALAlbum'>
                        <img src={ContinuumPic} alt="" className='ALAlbumImg' />
                        <Typography style={{ margin: '5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={15}>Viral Remixed</Typography>
                        <Typography style={{ margin: '-5px 0px 0px 2px' }} variant="h6" fontFamily={'Roboto'} fontWeight={300} fontSize={13}>Apple Music</Typography>
                    </div>
                </div>
            </div>
            {/* Lower Music Controls */}
            <div className='ALMusicControls'>
                {/* Back | Pause | Next */}
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <IconButton sx={{ color: 'white' }} size="small"><FastRewindRoundedIcon sx={{ p: 1 }} /></IconButton>
                    <IconButton sx={{ color: 'white' }} size="small"><PauseRoundedIcon sx={{ p: 1 }} /></IconButton>
                    <IconButton sx={{ color: 'white' }} size="small"><FastForwardRoundedIcon sx={{ p: 1 }} /></IconButton>
                </div>
                {/* Album Cover, Song Name, Artist, + ... */}
                <div className='ALMusicControlsSong'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={ContinuumPic} alt="" className='ALMusicControlsAlbum' style={{ borderRadius: '5px' }} />
                        <div style={{ textAlign: 'left', marginLeft: '7px', marginTop: '-3px' }}>
                            <Typography
                                fontFamily={"Roboto"}
                                fontWeight={300}
                                variant="body1"
                                fontSize={15}
                                sx={{ pt: 0.25 }}
                            >
                                Slow Dancing In A Burning Room
                            </Typography>
                            <Typography
                                fontFamily={"Roboto"}
                                fontWeight={300}
                                variant="body2"
                                fontSize={13}
                                color="lightgray"
                                sx={{ mt: -0.25 }}
                            >
                                John Mayer
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <IconButton sx={{ color: 'white' }} size="small"><MoreHorizRoundedIcon /></IconButton>
                    </div>
                </div>
                {/* Lyrics | Options | Volume */}
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <IconButton sx={{ color: 'white' }}><LyricsRoundedIcon sx={{ p: 0.75 }} /></IconButton>
                    <IconButton sx={{ color: 'white' }}><FormatListBulletedRoundedIcon sx={{ p: 0.75 }} /></IconButton>
                    <IconButton sx={{ color: 'white' }}><VolumeUpRoundedIcon sx={{ p: 0.75 }} /></IconButton>
                </div>
            </div>
        </div>
    )
}

export default AppleMusic;