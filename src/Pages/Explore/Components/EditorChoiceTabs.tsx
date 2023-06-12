import "./EditorChoiceTabs.css";
import { Tabs, Tab, styled } from "@mui/material";

const StyledTab = styled(Tab)({
    '&.MuiTab-root': {
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.4))',
        borderRadius: '150px',
        margin: '5px',
        padding: '5px',
        minWidth: '12px',
        minHeight: '12px',
        transition: 'all 200ms',
    },

    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },

    '&.Mui-selected': {
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9))',
        transition: 'all 200ms'
    },
})

interface EditorChoiceTabsProps {
    currentEditor: number,
    handleTabChange: (event: React.SyntheticEvent, newValue: number) => void,
    maxEditorTabs: number,
}

function EditorChoiceTabs({ currentEditor, handleTabChange, maxEditorTabs }: EditorChoiceTabsProps) {

    return (
        <div className="EditorTabs">
            <Tabs value={currentEditor} onChange={handleTabChange}
                TabIndicatorProps={{
                    style: { display: 'none' }
                }}
                sx={{ minHeight: '12px' }}
            >
                {
                    Array.from({ length: maxEditorTabs }, () => (
                        <StyledTab />
                    ))
                }
                {/* <StyledTab />
                <StyledTab />
                <StyledTab />
                <StyledTab />
                <StyledTab /> */}
            </Tabs>
        </div>
    )
}

export default EditorChoiceTabs;