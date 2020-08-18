import fs from "fs";
import path from "path";

function relativeRootPath(p, rootPath = process.cwd()) {
  return path.resolve(rootPath, p)
}

export function getPageInfo(generateID = `${process.env.NEXT_PUBLIC_GENERATE_ID}`) {
  try {
    const jsonFileStr = fs.readFileSync(
      relativeRootPath(`./data/pages-json/${generateID}.json`),
      "utf-8"
    )
    return JSON.parse(jsonFileStr)
  } catch (err) {
    console.log(generateID)
    console.log('xxx')

    console.error(`${generateID} cannot found json file`)
    throw err
  }
}