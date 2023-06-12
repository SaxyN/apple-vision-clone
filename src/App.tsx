import { ReactElement, useState } from 'react';
import './App.css'

import SideNav from './SideNav/SideNav';
import AppleMusic from './Pages/ApplyMusic/AppleMusic';
import Explore from './Pages/Explore/AppStore';
import React from 'react';

interface TabPanelProps {
    children: ReactElement<any, any>;
    index: number;
    value: number;
    handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, handleTabChange } = props;

    return (
        <div
            hidden={value !== index}
            className='AMainWindow'
        >
            <SideNav currentIndex={index} handleTabChange={handleTabChange} />
            {children}
        </div>
    );
}


function App() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentIndex(newValue);
    }

    return (
        <div className="AppWrapper">
            <h1>Apple Vision Mock Design</h1>

            <div className="ALWrapper">
                {/* Apple Music Library */}
                <TabPanel value={currentIndex} index={0} handleTabChange={handleTabChange}>
                    <h1>Now Playing?</h1>
                </TabPanel>
                <TabPanel value={currentIndex} index={1} handleTabChange={handleTabChange}>
                    <Explore />
                </TabPanel>
                <TabPanel value={currentIndex} index={2} handleTabChange={handleTabChange}>
                    <h1>Streaming</h1>
                </TabPanel>
                <TabPanel value={currentIndex} index={3} handleTabChange={handleTabChange}>
                    <h1>Connectivity</h1>
                </TabPanel>
                <TabPanel value={currentIndex} index={4} handleTabChange={handleTabChange}>
                    <AppleMusic currentIndex={currentIndex} handleTabChange={handleTabChange} />
                </TabPanel>
                <TabPanel value={currentIndex} index={5} handleTabChange={handleTabChange}>
                    <h1>Search</h1>
                </TabPanel>
            </div>
        </div>
    )
}

export default App;
