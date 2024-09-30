import React from 'react';

const Footer = () => {
    return (
        <footer className='flex justify-between px-14 pb-8 text-sm pt-32'>
            <p className='footer-mail'>DAQUBEEN@VANGOGH.COM</p>
            <div className='footer-smedia flex gap-7 justify-between'>
                <p>DRIBBLE</p>
                <p>MYSPACE</p>
                <p>GITHUB</p>
                <p>INSTAGRAM</p>
            </div>
        </footer>
    );
};

export default Footer;