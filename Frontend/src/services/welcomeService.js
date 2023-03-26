import ScriptStoryIcon from '../assets/icons/script-story-icon.svg'
import ComposerIconWhite from '../assets/icons/composer-icon-white.svg'
import VideoCaptionsIcon from '../assets/icons/video-captions-icon.svg'

export const welcomeService = {
    query,
};

async function query() {
    const welcomeImgs = [
        {
            img: ScriptStoryIcon,
            desc: 'New Script Teleprompter',
            id:'1'
        },
        {
            img: ComposerIconWhite,
            desc: 'Import Video Add Captions',
            id:'2'
        },
        {
            img: VideoCaptionsIcon,
            desc: 'Import Video Change Green Screen',
            id:'3'
        },
    ];
    return welcomeImgs;
}
