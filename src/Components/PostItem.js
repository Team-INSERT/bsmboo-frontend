import React, { useEffect, useState } from 'react';
import '../Style/PostItem.scss';

const PostItem = ({ text, id, date }) => {

    return (
        <div className='content_box_wrap'>
            <div className='content_box'>
                <div className='header_info_box'>
                    <span className='count_text'>대나무숲 #{id}번째 제보</span>
                    <div className='date_text_box'>
                        <span className='date_text'>{'date'}</span>
                    </div>
                    <div className='author_text_box'>
                        <span className='author_text'>{'박우빈'}</span>
                    </div>
                </div>
                <div className='text_box'>
                    <span className='content_text'>{text}</span>
                </div>
            </div>
        </div >
    );
};

export default React.memo(PostItem);