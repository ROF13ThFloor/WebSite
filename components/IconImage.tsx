import Image from 'next/image';

interface Props {
    path: any;
    name: any;
}

const IconImage = ({path, name}: Props): JSX.Element => {
    return (
        <abbr title={name}>
            <Image src={path}
                draggable={false}
                alt={name}
                width={35}
                height={35}
                className="transition dark:invert"
                unoptimized/>
        </abbr>
    );
};

export default IconImage;
