import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import '../Style/Header.scss';
import BambooLogo from '../svgs/bambooLogo.svg';

const Header = () => {
    const user = useContext(UserContext)

    function validateURL(url) {
        const parsed = new URL(url)
        return ['https:', 'http:'].includes(parsed.protocol)
    }

    return (
        <div>
            <div className='header_wrap'>
                <div className='team_name'>
                    <Link to={'/'}>
                        <span className='team_name_text' style={{ cursor: 'pointer' }}></span>
                    </Link>
                </div>
                <div className='login_btn'>
                    {user.isLogin ? '' : <><span><a className='login_sub_btn' href={validateURL(process.env.REACT_APP_LOGIN_URL) ? process.env.REACT_APP_LOGIN_URL : ''}>LOGIN</a></span>&nbsp;&nbsp;|&nbsp;&nbsp;</>}
                    <span><Link className='mypage_btn' to={'/mypage'}>MYPAGE</Link></span>
                </div>
            </div>
            <div className='title_box_wrap'>
                <div className='team_image_box'>
                    <img src={BambooLogo} alt='' />
                </div>
                <div className='align_box'>
                    <div className='service_name'>
                        <span className='bamboo_name'>부산소마고 대나무숲</span>
                    </div>
                    <div className='align_boxs'>
                        <div className='image_box'>
                            <svg width="17" height="17" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='location'>
                                <path d="M12.5 23.4375L5.90938 15.6648C5.81781 15.5481 5.72718 15.4307 5.63751 15.3125C4.51171 13.8295 3.90353 12.0181 3.90626 10.1562C3.90626 7.87705 4.81167 5.69119 6.42331 4.07955C8.03495 2.46791 10.2208 1.5625 12.5 1.5625C14.7792 1.5625 16.9651 2.46791 18.5767 4.07955C20.1884 5.69119 21.0938 7.87705 21.0938 10.1562C21.0965 12.0173 20.4886 13.8278 19.3633 15.3102L19.3625 15.3125C19.3625 15.3125 19.1281 15.6203 19.093 15.6617L12.5 23.4375ZM6.88438 14.3711C6.88595 14.3711 7.0672 14.6117 7.1086 14.6633L12.5 21.0219L17.8984 14.6547C17.9328 14.6117 18.1156 14.3695 18.1164 14.3688C19.0361 13.1571 19.5331 11.6774 19.5313 10.1562C19.5313 8.29145 18.7905 6.50302 17.4719 5.18441C16.1532 3.86579 14.3648 3.125 12.5 3.125C10.6352 3.125 8.84678 3.86579 7.52816 5.18441C6.20955 6.50302 5.46876 8.29145 5.46876 10.1562C5.46712 11.6783 5.96468 13.1589 6.88517 14.3711H6.88438Z" fill="#E5EDF5" />
                                <path d="M12.5 14.0625C11.7274 14.0625 10.9722 13.8334 10.3298 13.4042C9.68743 12.975 9.18675 12.3649 8.8911 11.6511C8.59544 10.9373 8.51809 10.1519 8.66881 9.39418C8.81953 8.63644 9.19157 7.94042 9.73787 7.39412C10.2842 6.84782 10.9802 6.47578 11.7379 6.32506C12.4957 6.17434 13.2811 6.25169 13.9949 6.54735C14.7086 6.843 15.3187 7.34368 15.7479 7.98606C16.1772 8.62844 16.4063 9.38367 16.4063 10.1563C16.405 11.1919 15.9931 12.1847 15.2608 12.917C14.5285 13.6493 13.5356 14.0613 12.5 14.0625ZM12.5 7.8125C12.0365 7.8125 11.5833 7.94996 11.1979 8.2075C10.8125 8.46503 10.5121 8.83107 10.3347 9.25934C10.1573 9.6876 10.1109 10.1589 10.2013 10.6135C10.2917 11.0681 10.5149 11.4858 10.8427 11.8135C11.1705 12.1413 11.5881 12.3645 12.0428 12.455C12.4974 12.5454 12.9687 12.499 13.3969 12.3216C13.8252 12.1442 14.1912 11.8438 14.4488 11.4584C14.7063 11.0729 14.8438 10.6198 14.8438 10.1563C14.8431 9.53484 14.596 8.93906 14.1566 8.49966C13.7172 8.06025 13.1214 7.81312 12.5 7.8125Z" fill="#E5EDF5" />
                                <circle cx="12.5" cy="10.1562" r="3.125" fill="#E5EDF5" />
                            </svg>
                        </div>
                        <div className='name_box'>
                            <span className='school_names'>Busan, Software Meister High School</span>
                        </div>
                    </div>
                </div>
                <div className='follow_btn_box_link'>
                    <a className='a_link_button' href='https://www.instagram.com/bssm.forest/' target={'_blank'} rel={'noreferrer'}>Follow</a>
                </div>
            </div>
        </div >
    );
};

export default Header;