import {ReactNode} from 'react';
import ExtLink from './ExtLink';
import IconImage from './IconImage';
import personalInfo from './data/personalInfo.json';

interface BoxProps {
    href: string;
    label: string;
    onClick?: () => void;
    children: ReactNode;
}

const Box = ({href, label, onClick, children}: BoxProps) => (
    <a target="_blank"
        rel="noopener noreferrer"
        href={href}
        aria-label={label}
        className="items-center justify-center cursor-pointer transition-transform transform hover:scale-110 hover:bg-gray-200 rounded-md w-10 h-10"
        onClick={onClick}>
        {children}
    </a>
);

const SupportingBox = (): JSX.Element => {
    return (
        <div className="flex justify-between w-44 dark:invert">
            <div className="flex justify-between w-44">
                <Box href="mailto:moazen@kth.se" label="Email">
                    <IconImage path="/images/email.svg" name="Email" />
                </Box>
                <Box href="/cv.pdf" label="CV">
                    <IconImage path='/images/cv-file-interface-symbol-svgrepo-com.svg' name="CV"/>
                </Box>
                <Box href={personalInfo.socialMedia.Github} label="github">
                    <IconImage path='/images/github.svg' name="github"/>
                </Box>
                <Box href={personalInfo.socialMedia.LinkedIn} label="LinkedIn">
                    <IconImage path='/images/icons8-linkedin.svg' name="LinkedIn"/>
                </Box>
                <Box href={personalInfo.socialMedia.GoogleScholar} label="GoogleScholar">
                    <IconImage path='/images/icons8-google-scholar.svg' name="GoogleScholar"/>
                </Box>
                <Box href={personalInfo.socialMedia.Spotify} label="Spotify">
                    <IconImage path='/images/spotify.svg' name="Spotify"/>
                </Box>
                <Box href={personalInfo.socialMedia.Keybase} label="Keybase">
                    <IconImage path='/images/keybase.svg' name="Keybase"/>
                </Box>
                
            </div>
        </div>
        );
};

export default SupportingBox;



