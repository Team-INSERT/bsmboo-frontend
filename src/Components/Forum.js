import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import '../Style/Forum.scss';
import PostItem from './PostItem';

const Forum = () => {
    const [allowPost, setAllowPost] = useState();

    useEffect(() => {
        (async () => {
            try {
                let data = await getAllowPostInfo();
                data = data.data;
                data.sort((a, b) => {
                    a = a.updatedAt;
                    b = b.updatedAt;
                    if (a > b) return -1;
                    else if (a < b) return 1;
                    else return 0;
                })
                setAllowPost([...data])
            } catch (error) {
                if (error instanceof AxiosError && error.response?.status >= 400) {
                    setAllowPost((prev) => ({ ...prev, isLogin: false }));
                }
            }
        })();
    }, []);

    const getAllowPostInfo = () => {
        return axios.get(process.env.REACT_APP_BOARD_URL, { withCredentials: true });
    };

    return (
        <div className='forum_wrap'>
            <div className='article_title_box'>
                <h1 className='article_title' style={{ color: '#E5EDF5' }}>
                    모든 제보
                </h1>
            </div>
            <div>
                {allowPost && allowPost?.map((post, index) => (
                    <PostItem
                        key={post.boardCode}
                        num={allowPost.length - index}
                        contents={post.contents}
                        name={post.User.name}
                        date={post.createdAt}
                    />
                ))}
            </div>
        </div>
    );
};

export default Forum;