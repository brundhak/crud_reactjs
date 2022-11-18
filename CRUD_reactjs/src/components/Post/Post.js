import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/userContext";
import {
	doc,
	query,
	getDocs,
	collection,
	deleteDoc,
	updateDoc,
} from "firebase/firestore";
import SkeletonWrapper from "../Skeleton/SkeletonWrapper";
import { db } from "../firebase/firebase";

import "./Post.css";

const Post = () => {
	const [user, setUser] = useContext(UserContext).user;
	const [docs, setDocs] = useState([]);
	const q = query(collection(db, "posts"));

	const handleDeletePost = async (id) => {
		await deleteDoc(doc(db, "posts", id));
	};

	useEffect(() => {
		setTimeout(async () => {
			const querySnapshot = await getDocs(q);
			setDocs(
				querySnapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
			);
		}, 2000);
	}, [q]);

	return (
		<div>
			{docs.length == 0 && (
				<>
					{" "}
					<SkeletonWrapper /> <SkeletonWrapper />{" "}
				</>
			)}
			{docs.length > 1 &&
				docs.map(({ id, post }) => (
					<div className="post" key={id}>
						<div className="post-header">
							<img src='https://static.thenounproject.com/png/4314581-200.png' alt="profileUrl" />
							<h3 className="username">{post.username}</h3>
							{user && user.displayName === post.username && (
								<button
									className="delete-post"
									onClick={() => handleDeletePost(id)}
								>
									Delete
								</button>
							)}
						</div>
						<div className="post-image">
							<img src={post.photoUrl} alt={post.username} />
						</div>

						<div className="post-caption">
							<span>{post.username}</span>
							<p>{post.post}</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default Post;
