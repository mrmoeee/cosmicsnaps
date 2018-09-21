```js
entities {
  users: {
    1: {
      id: 1,
      username: 'astro',
      email: 'astro@astro',
      description: 'Tell us something about you',
      pictureId: [1, 2],
      galleryId: [1, 2],
      groupId: [2],
      aboutId: 1
    },
    2: {
      id: 2,
      username: 'stacey',
      email: 'monk@monk',
      description: '',
      pictureId: [3],
      galleryId: [3],
      groupId: [2],
      aboutId: 2
    }
  },

  pictures: {
    1: {
      id: 1,
      title: 'Sorry is the most meaningless word',
      description: 'Cheating Gf :(',
      category: 'heart.break()',
      location: 'Apple Iphone, Denver Colorado',
      takenDate: 'February 14th 2017',
      uploadDate: 'February 15th 2017',
      userId: 1,
      commentId: 1,
      likeId: 1,
      galleryId: 1
    },
    2: {
      id: 2,
      title: 'Solitude',
      description: 'Astronaut drifting',
      category: 'space',
      location: 'Ring of Saturn',
      takenDate: 'December 25th 2020',
      uploadDate: 'January 15th 2021',
      userId: 2,
      commentId: 2,
      likeId: 2,
      galleryId: 3
    }
  },

  likes: {
    1: {
      id: 1,
      userId: 1,
      pictureId: 1
    },
    2: {
      id: 2,
      userId: 2,
      pictureId: 2
    }
  }

  gallery: {
    1: {
      id: 1,
      title: 'Cheater',
      userId: 1,
      pictureId: [1, 3, 5]
    },
    2: {
      id: 2,
      title: 'Space is a sad place',
      userId: 2,
      pictureId: [2, 4, 6]
    }
  }

  about: {
    1: {
      id: 1,
      view_id: [1, 2, 3, 4, 5]
      like_id: [1, 2, 3, 4, 5]
    },
    2: {
      id: 2,
      view_id: [1, 2, 3, 4, 5]
      like_id: [1, 2, 3, 4, 5]
    }
  }
  errors: {
    signUp: ["Username/Email cannot be blank"],
    login: ["Incorrect Username/Email or password"],
    pictures: ["Title or description cannot be blank"]
    gallery: ["Title cannot be blank"]
  },
  session: { currentUserId: 2 }
}
```
