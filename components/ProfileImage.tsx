import Image from 'next/image';

const ProfileImage = (): JSX.Element => {
    
    return (
        <Image
            className="rounded-full border border-black/10 shadow-[0_14px_40px_rgba(0,0,0,0.18)] select-none transition-all pointer-events-none dark:border-white/10"
            src="/images/me.jpg"
            // onMouseOver = {e => e.currentTarget.src = "/images/gelo.HEIC"}
            // onMouseOut = {e => e.currentTarget.src = "/images/me.jpg"}
            draggable={false}
            alt="My profile image"
            width={260}
            height={260}/>
    );
};

export default ProfileImage;
