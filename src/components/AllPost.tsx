import axios from 'axios'
import React, { useState } from 'react'
import AllowPostType from '../types/AllowPostType'
import '../style/AllPost.scss'
import { useQuery } from 'react-query'
import PostItem from './PostItem'
import dateParser from '../util/etc/dateParser'

const AllPost = () => {
	const [postData, setPostData] = useState([])

	useQuery('getPost', async () => (await axios.get('/post')).data, {
		onSuccess: (res) => {
			setPostData(res.data.reverse())
		},
		onError: (err) => {
			console.log(err)
		},
	})

	return (
		<div className="forum_wrap">
			<div className="article_title_box">
				<span className="article_title">모든 이야기들</span>
			</div>
			<React.Suspense>
				{postData.map((data: AllowPostType) => (
					<PostItem
						key={data.post.postCode}
						category={data.post.category}
						isAnonymous={data.post.isAnonymous}
						contents={data.post.contents}
						allowCode={data.AllowedCode}
						image={data.post.Image}
						user={data.post.user}
						createdAt={dateParser(data.post.createdAt)}
					/>
				))}
			</React.Suspense>
		</div>
	)
}

export default AllPost
