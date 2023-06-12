import { styled } from "@mui/material/styles";
import { IconButton, Tab, Tabs } from "@mui/material";

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import BorderAllRoundedIcon from '@mui/icons-material/BorderAllRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import SensorsRoundedIcon from '@mui/icons-material/SensorsRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState } from "react";

import "./SideNav.css";

const StyledTab = styled(Tab)({
    '&.MuiTab-root': {
        // backgroundColor: 'gray',
        borderRadius: '150px',
        margin: '5px',
        padding: '5px',
        minWidth: '48px',
        transition: 'all 200ms'
    },

    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },

    '&.MuiTab-labelIcon': {
        color: 'transparent'
    },

    '&.MuiTab-textColorPrimary': {
        color: 'white'
    },

    '&.Mui-selected': {
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2))',
        transition: 'all 200ms'
    },

    '&.Mui-disabled': {
        // background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2))',
        color: 'gray',
        transition: 'all 200ms'
    },

    '&.MuiTab-iconWrapper': {
        margin: '0px',
        padding: '5px',
    },
})

interface SideNavProps {
    currentIndex: number,
    handleTabChange: (event: React.SyntheticEvent, newValue: number) => void,
}

function SideNav({ currentIndex, handleTabChange }: SideNavProps) {

    return (
        <div className="DetachedSideNav">
            <Tabs value={currentIndex} onChange={handleTabChange} orientation="vertical"
                TabIndicatorProps={{
                    style: { display: 'none' }
                }}
            >
                <StyledTab icon={<PlayCircleOutlineIcon />} disabled />
                <StyledTab icon={<BorderAllRoundedIcon />} />
                <StyledTab icon={<OndemandVideoRoundedIcon />} disabled />
                <StyledTab icon={<SensorsRoundedIcon />} disabled />
                <StyledTab icon={<LibraryMusicRoundedIcon />} />
                <StyledTab icon={<SearchRoundedIcon />} disabled />
            </Tabs>
        </div>
    )
}

export default SideNav;