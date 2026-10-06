import { ObjectId } from "mongodb";
import db from "../config/db.js";


const posts = db.collection("posts")

export const getAllPosts = async () => {
    const results = await posts.find().toArray()
    console.log(results)
}

//Get all post created by a specific user
const userId = new ObjectId('6ac36300000004bd9cad3c2d')

export const getPostsByASpecificUser = async () => {
    const results = await posts.find({ userId: userId }).toArray()
    console.log(results)
}

//Get post data as well as user data 

export const getPostAndUserData = async () => {
    const result = await posts.aggregate([
        { $match: { title: "React vs Next.js" } },
        {
            $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "user"
            }
        }, {
            $unwind: "$user"
        }, {
            $project: {
                title: 1,
                detail: 1,
                "user.name": 1,
                "user.email": 1
            }
        }
    ]).toArray()
    console.log(result)
}

//Count number of posts by a user 
export const getTotalPostsByUser=async()=>{
    const result = await posts.aggregate([
  {
    $group: {
      _id: '$userId',
      totalPosts: { $sum: 1 }
    }
  },{
    $lookup:{
        from:"users",
        localField:"_id",
        foreignField:"_id",
        as:"user"
    }
  },{
    $unwind: "$user"
  },{
    $project:{
        "user.email":1,
        totalPosts:1
    }
  },{
    $sort:{
        totalPosts:1
    }
  }
]).toArray()

console.log(result)
}

//Get user with most number of posts
export const findUserWithMostPosts=async()=>{
const result = await posts.aggregate([
  {
    $group: {
      _id: '$userId',
      totalPosts: { $sum: 1 }
    }
  },
  {
    $sort: {
      totalPosts: -1
    }
  },
  {
    $limit: 1
  },
  {
    $lookup: {
      from: 'users',
      localField: '_id',
      foreignField: '_id',
      as: 'user'
    }
  },
  {
    $unwind: '$user'
  },
  {
    $project: {
      'user.name': 1,
      'user.email': 1,
      totalPosts: 1
    }
  }
]).toArray()
console.log(result)
}

// Get a post with its author AND all comments on that post, including the users who wrote those comments.

export const getPostWithCompleteDetails = async () => {
  const results = await posts.aggregate([
    // Get post author
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'author'
      }
    },
    {
      $unwind: '$author'
    },

    // Get all comments of the post
    {
      $lookup: {
        from: 'comments',
        localField: '_id',
        foreignField: 'postId',
        as: 'comments'
      }
    },

    // Process each comment separately
    {
      $unwind: '$comments'
    },

    // Get user of each comment
    {
      $lookup: {
        from: 'users',
        localField: 'comments.userId',
        foreignField: '_id',
        as: 'commentUser'
      }
    },
    {
      $unwind: '$commentUser'
    },

    // Put comments back into an array
    {
      $group: {
        _id: '$_id',
        title: { $first: '$title' },
        detail: { $first: '$detail' },

        author: {
          $first: {
            name: '$author.name',
            email: '$author.email'
          }
        },

        comments: {
          $push: {
            content: '$comments.content',
            user: {
              name: '$commentUser.name',
              email: '$commentUser.email'
            }
          }
        }
      }
    }
  ]).toArray()

  console.log(JSON.stringify(results, null, 2))
}