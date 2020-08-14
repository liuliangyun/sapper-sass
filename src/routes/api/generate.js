import { exec } from 'child_process'

export async function post(req, res, next) {
    //TODO 1: get page data from json file
    const body = req.body;

    //TODO 2: build page based on template and export static files
    
    // TODO 3: build with generateId and generateMode, export file only related to this id, like next export -o ./data/out/${generateID}
    const cmd = `cd ${process.cwd()} && npm run export`;
    console.log(cmd)
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.error(`执行的错误: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
    
    
    const article = { name: 'tw' };
    if (article !== null) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(article));
    } else {
        next();
    }
}
