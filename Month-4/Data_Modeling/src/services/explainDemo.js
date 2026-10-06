import db from "../config/db.js";

const users = db.collection("users");

export const explainIndexDemo = async () => {

    // BEFORE: drop index so MongoDB is forced to do a full collection scan
    try { await users.dropIndex("email_1") } catch {}

    const before = await users.find({ email: "naeem@gmail.com" }).explain("executionStats")
    console.log("BEFORE INDEX:")
    console.log("  stage        :", before.executionStats.executionStages.stage)      // COLLSCAN
    console.log("  docsExamined :", before.executionStats.totalDocsExamined)
    console.log("  docsReturned :", before.executionStats.nReturned)

    // AFTER: create index then run same query
    await users.createIndex({ email: 1 }, { unique: true })

    const after = await users.find({ email: "naeem@gmail.com" }).explain("executionStats")
    console.log("\nAFTER INDEX:")
    console.log("  stage        :", after.executionStats.executionStages.stage)       // IXSCAN
    console.log("  docsExamined :", after.executionStats.totalDocsExamined)
    console.log("  docsReturned :", after.executionStats.nReturned)
}
