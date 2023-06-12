import { Typography, Avatar, IconButton } from "@mui/material";
import "./AppStore.css";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import AvatarPic from "../../assets/Avatar.jpg";
import ConstellationPic from "../../assets/constellation.png";
// import SplatterApp from "../../assets/splatter.jpeg";
// import BreadApp from "../../assets/bread.jpeg";

import EditorChoiceTabs from "./Components/EditorChoiceTabs";
import SpacePic from "../../assets/space.jpg";
import { useState } from "react";

function AppStore() {

    const [currentEditor, setCurrentEditor] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentEditor(newValue);
    }

    return (
        <div className="ASBacker">
            <div className="ASAvatar">
                <Avatar src={AvatarPic}></Avatar>
            </div>
            <div
                style={{ background: `url(${SpacePic})`, backgroundSize: 'cover' }}
                className="ASWrapper"
            >
                <div className="ASTitleSection">
                    <Typography
                        variant="h2"
                        fontFamily={"Roboto"}
                        fontSize={16}
                        letterSpacing={0.5}
                        className="ASAccentTitle"
                    >
                        EDITORS' CHOICE
                    </Typography>
                    <Typography
                        variant="h6"
                        fontFamily={"Roboto"}
                        fontSize={40}
                        className="ASTitle"
                    >
                        Explore the Cosmos
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Roboto"}
                        fontSize={14}
                        letterSpacing={0.3}
                        className="ASSubTitle"
                    >
                        Immerse yourself in a stargazing experience that's out of this world.
                    </Typography>

                </div>
                <div className="ASPromotedApp">
                    <Avatar src={ConstellationPic} className="ASPromotedAppIcon" sx={{ height: 58, width: 58 }} />
                    <div className="ASPromotedAppTitle">
                        <Typography
                            variant="h6"
                            fontFamily={"Roboto"}
                            fontSize={14}
                            lineHeight={1.2}
                            letterSpacing={.4}
                        >
                            Sky Guide
                        </Typography>
                        <Typography
                            variant="body2"
                            fontFamily={"Roboto"}
                            fontSize={12}
                            fontWeight={300}
                            letterSpacing={.4}
                        >
                            Star gaze constellation finder
                        </Typography>
                    </div>
                    <div className="ASPromotedAppButton">
                        <button className="AppButton">
                            <Typography
                                variant="h6"
                                fontFamily={"Roboto"}
                                fontSize={14}
                            >
                                GET
                            </Typography>
                        </button>
                        <Typography
                            variant="body2"
                            fontFamily={"Roboto"}
                            fontSize={9}
                            letterSpacing={0.5}
                        >
                            In-App Purchases
                        </Typography>
                    </div>
                </div>
                <EditorChoiceTabs currentEditor={currentEditor} handleTabChange={handleTabChange} maxEditorTabs={5} />
                <div className="ASAppSlider">
                    <div className="ASAppSliderTitle">
                        <Typography
                            variant="h6"
                            fontFamily={"Roboto"}
                        >
                            Get Started
                        </Typography>
                        <IconButton sx={{ color: 'white', background: 'rgba(255, 255, 255, 0.2)', height: 24, width: 24 }}><ChevronRightIcon /></IconButton>
                    </div>
                    <div className="ASAppSliderApps">
                        <div className="ASAppSliderApp"></div>
                        <div className="ASAppSliderApp"></div>
                        <div className="ASAppSliderApp"></div>
                        <div className="ASAppSliderApp"></div>
                        <div className="ASAppSliderApp"></div>
                    </div>
                </div>
                <div className="ASAppSlider">
                    <div className="ASAppSliderTitle">
                        <Typography
                            variant="h6"
                            fontFamily={"Roboto"}
                        >
                            Family Favorites
                        </Typography>
                        <IconButton sx={{ color: 'white', background: 'rgba(255, 255, 255, 0.2)', height: 24, width: 24 }}><ChevronRightIcon /></IconButton>
                    </div>
                    <div className="ASAppSliderApps">
                        <div className="ASAppSliderApp"></div>
                        <div className="ASAppSliderApp"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppStore;