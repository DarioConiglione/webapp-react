import Navbar from "./Navbar"


export default function Header() {

    const menu = [
        {
            id: 1,
            text: 'Home',
            link: '/'
        },
        {
            id: 2,
            text: 'Movies',
            link: '/movies'
        },
    ]


    return (
        <>
            <header>
                <Navbar menu={menu} />
            </header>
        </>
    )
}