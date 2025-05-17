export type HeaderProps = {
    title: string;
}

const Header = ({title}: HeaderProps) => {
    return (
        <h2 className="header self-align">{title}</h2>
    );
}
export default Header;