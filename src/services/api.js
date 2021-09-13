const FIREBASE_DOMAIN =
    "https://social-media-f8e9f-default-rtdb.asia-southeast1.firebasedatabase.app";

export async function signUp(userData) {
    const response = await fetch(`${FIREBASE_DOMAIN}/users.json`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Could not create post.");
    }

    return true;
}

export async function getSingleUser(userId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/users/${userId}.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Could not fetch post.");
    }

    const loadeduser = {
        id: userId,
        ...data,
    };

    return loadeduser;
}

export async function getAllUsers() {
    const response = await fetch(`${FIREBASE_DOMAIN}/users.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Could not fetch Users.");
    }

    const transformedUsers = [];

    for (const key in data) {
        const userObj = {
            id: key,
            ...data[key],
        };
        transformedUsers.push(userObj);
    }

    return transformedUsers;
}

export async function getAllPosts() {
    const response = await fetch(`${FIREBASE_DOMAIN}/users.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Could not fetch Posts.");
    }

    const transformedPosts = [];

    for (const userId in data) {
        for (const key in data[userId].posts) {
            const postObj = {
                id: key,
                ...data[userId].posts[key],
                userName: data[userId].fullName,
                // image: data[userId].image,
            };
            transformedPosts.push(postObj);
        }
    }

    return transformedPosts;
}

export async function getUserPosts(userId) {
    const response = await fetch(
        `${FIREBASE_DOMAIN}/users/${userId}/posts.json`
    );
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

export async function getSinglepost(userId, postId) {
    const response = await fetch(
        `${FIREBASE_DOMAIN}/users/${userId}/posts/${postId}.json`
    );
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
export const addImage = async (image) => {
    const response = await fetch(`${FIREBASE_DOMAIN}/images.json`, {
        method: "POST",
        body: JSON.stringify({ data: image }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Could not create image.");
    }

    return data;
};

export async function addPost(userId, postData) {
    const response = await fetch(
        `${FIREBASE_DOMAIN}/users/${userId}/posts.json`,
        {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Could not create post.");
    }

    return data;
}

export async function addComment(userId, postId, commentData) {
    const response = await fetch(
        `${FIREBASE_DOMAIN}/users/${userId}/posts/${postId}/comments.json`,
        {
            method: "POST",
            body: JSON.stringify(commentData),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Could not add comment.");
    }

    return { data };
}

export async function getAllComments(userId, postId) {
    const response = await fetch(
        `${FIREBASE_DOMAIN}/users/${userId}/posts/${postId}/comments.json`
    );

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

export async function getPostComments(userId, postId) {
    const response = await fetch(
        `${FIREBASE_DOMAIN}/users/${userId}/posts/${postId}/comments.json`
    );

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

export async function likePost(userId, postId, likeData) {
    const response = await fetch(
        `${FIREBASE_DOMAIN}/users/${userId}/posts/${postId}/likes.json`,
        {
            method: "POST",
            body: JSON.stringify(likeData),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Could not add comment.");
    }

    return { data };
}

export async function getPostLikes(userId, postId) {
    const response = await fetch(
        `${FIREBASE_DOMAIN}/users/${userId}/posts/${postId}/likes.json`
    );

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
