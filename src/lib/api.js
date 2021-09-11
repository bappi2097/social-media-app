const FIREBASE_DOMAIN =
    "https://react-http-4befb-default-rtdb.asia-southeast1.firebasedatabase.app/";

export async function getAllPosts() {
    const response = await fetch(`${FIREBASE_DOMAIN}/Posts.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Could not fetch Posts.");
    }

    const transformedPosts = [];

    for (const key in data) {
        const postObj = {
            id: key,
            ...data[key],
        };

        transformedPosts.push(postObj);
    }

    return transformedPosts;
}

export async function getSinglepost(postId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/Posts/${postId}.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Could not fetch post.");
    }

    const loadedpost = {
        id: postId,
        ...data,
    };

    return loadedpost;
}

export async function addpost(postData) {
    console.log(postData);
    const response = await fetch(`${FIREBASE_DOMAIN}/Posts.json`, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Could not create post.");
    }

    return null;
}

export async function addComment(requestData) {
    const response = await fetch(
        `${FIREBASE_DOMAIN}/comments/${requestData.postId}.json`,
        {
            method: "POST",
            body: JSON.stringify(requestData.commentData),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Could not add comment.");
    }

    return { commentId: data.name };
}

export async function getAllComments(postId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${postId}.json`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Could not get comments.");
    }

    const transformedComments = [];

    for (const key in data) {
        const commentObj = {
            id: key,
            ...data[key],
        };

        transformedComments.push(commentObj);
    }

    return transformedComments;
}
