import {ReactNode} from 'react';
import ExtLink from './ExtLink';
import IconImage from './IconImage';
import personalInfo from './data/personalInfo.json';
import ReactGA from "react-ga4";

interface BoxProps {
    href: string;
    label: string;
    onClick?: () => void;
    children: ReactNode;
}

const Box = ({ href, label, onClick, children }: BoxProps) => {
    const handleClick = () => {
        console.log("Email Clicked:", href);    
        if (href.startsWith("mailto:")) {
            ReactGA.event({
                category: "Email",
                action: "Click",
                label: href,  
            });
        }
        if (onClick) {
            onClick();
        }
    };

    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 transition hover:scale-105 hover:border-black/20 hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30 dark:hover:bg-white/10"
            onClick={handleClick}
        >
            {children}
        </a>
    );
};

const SupportingBox = (): JSX.Element => {
    return (
        <div className="flex flex-wrap items-center gap-3">
            <Box href="mailto:moazen@kth.se" label="Email">
                <IconImage path="/images/email.svg" name="Email" />
            </Box>
            {/* <Box href="/cv.pdf" label="CV">
                <IconImage path='/images/cv-file-interface-symbol-svgrepo-com.svg' name="CV"/>
            </Box> */}
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
        );
};

export default SupportingBox;



