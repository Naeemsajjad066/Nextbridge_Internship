import db from "./config/db.js";
import { getCommentsAndUsers, getCommentsOfPost } from "./services/comments.js";
import { createComment } from "./services/createComment.js";
import { createPost } from "./services/createPost.js";
import { CreateUser } from "./services/createUser.js";
import { explainIndexDemo } from "./services/explainDemo.js";
import { findUserWithMostPosts, getAllPosts, getPostAndUserData, getPostsByASpecificUser, getPostWithCompleteDetails, getTotalPostsByUser } from "./services/posts.js";
import { findUserByAgeGT25, findUserByEmail, FindUserByMultipleCondition, findUserEitherLivesInLahoreOrKarchi, FindUsersLimited, FindUsersWithCustomFields, getAllUsers } from "./services/users.js";

const users = db.collection('users')
const posts = db.collection('posts')
const comments = db.collection('comments')

// ── Users ──────────────────────────────────────────────
// unique index: findUserByEmail queries by email
const i1 = await users.createIndex({ email: 1 }, { unique: true })

// filter by city ($in:["Lahore","Karachi"])
const i2 = await users.createIndex({ city: 1 })

// filter by age ($gt:25), also used in sort
const i3 = await users.createIndex({ age: 1 })

// compound: FindUserByMultipleCondition filters age + city together
const i4 = await users.createIndex({ age: 1, city: 1 })

// ── Posts ──────────────────────────────────────────────
// getPostsByASpecificUser + all $lookup joins from comments/users use userId
const i5 = await posts.createIndex({ userId: 1 })

// getPostAndUserData does $match by title
const i6 = await posts.createIndex({ title: 1 })

// ── Comments ───────────────────────────────────────────
// getCommentsOfPost + $lookup from posts uses postId
const i7 = await comments.createIndex({ postId: 1 })

// $lookup from comments to users uses userId
const i8 = await comments.createIndex({ userId: 1 })

console.log("Indexes created:", { i1, i2, i3, i4, i5, i6, i7, i8 })

//  CreateUser()
//  createPost()
// createComment()

// getAllUsers()
// findUserByEmail()

// //Find User whos age is > 25 
// findUserByAgeGT25()

// //find User age greater than 25 and lives in Lahore
// FindUserByMultipleCondition()

// //find User Either lives in Lahore or karachi
// findUserEitherLivesInLahoreOrKarchi()

//Find Users with custom required fields with projecttion
// FindUsersWithCustomFields()

// //Find users by condition and use limit to get limited results
// FindUsersLimited()

// //find all posts
// getAllPosts()

// // Get all posts done by a specific user
// getPostsByASpecificUser()


// //Get post data with owner daata
// getPostAndUserData()

// //Get total number of posts done by a user
// getTotalPostsByUser()

// //User with most posts
// findUserWithMostPosts()


// //Get comments of a post
// getCommentsOfPost()

// //Get all comments and its users
// getCommentsAndUsers()

// explain() demo — COLLSCAN before index vs IXSCAN after index
explainIndexDemo()