
import fs from "fs";

// ─── Text File ─────────────────────────────────────────────

const readStream = fs.createReadStream("input.txt", {
    encoding: "utf-8",
    highWaterMark: 50,
});

const writeStream = fs.createWriteStream("output.txt");

readStream.on("data", (chunk) => {
    console.log("Chunk:", chunk);
});

readStream.on("end", () => {
    console.log("Finished reading input.txt");
});

writeStream.on("finish", () => {
    console.log("Finished writing output.txt");
});

readStream.on("error", (err) => {
    console.error("Read error:", err);
});

writeStream.on("error", (err) => {
    console.error("Write error:", err);
});

readStream.pipe(writeStream);


// ─── Video File ────────────────────────────────────────────

const readStream1 = fs.createReadStream("video.mp4");

const writeStream1 = fs.createWriteStream("video1.mp4");

readStream1.on("error", (err) => {
    console.error("Video read error:", err);
});

writeStream1.on("error", (err) => {
    console.error("Video write error:", err);
});

writeStream1.on("finish", () => {
    console.log("Video copied successfully!");
});

readStream1.pipe(writeStream1);

