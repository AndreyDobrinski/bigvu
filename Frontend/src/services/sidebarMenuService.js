import Projects from '../assets/icons/projects.svg'
import Pages from '../assets/icons/pages.svg'
import Branding from '../assets/icons/branding.svg'
import Media from '../assets/icons/media.svg'
import Uploads from '../assets/icons/uploads.svg'
import Social from '../assets/icons/social.png'
import Member from '../assets/icons/member.svg'

export const sidebarMenuService = {
    query,
};

async function query() {
    const sidebarMenu = [
        {
            img: Projects,
            desc: 'Projects',
            id: '1'
        },
        {
            img: Pages,
            desc: 'Pages',
            id: '2'
        },
        {
            img: Branding,
            desc: 'Branding',
            id: '3'
        },
        {
            img: Media,
            desc: 'Media Library',
            id: '4'
        },
        {
            img: Uploads,
            desc: 'My Uploads',
            id: '5'
        },
        {
            img: Social,
            desc: 'Social Channels',
            id: '6'
        },
        {
            img: Member,
            desc: 'Add Member',
            id: '7'
        }
    ];
    return sidebarMenu;
}
