import { createServer } from "http";
import express from 'express'
import { makeDir } from "./utils";
import { creatExpressApp } from "./express";
import type { MongoDB } from "./mongodb";
import { connectAndUseDB } from "./mongodb";
import { getPubilcDirPath } from "./config";

makeDir(getPubilcDirPath())

const hostname = '0.0.0.0', port = 4000

// prettier-ignore
const app = express()
    .get('/',(req, res) => {
        res.json({message: 'Hello express World'})
    })

createServer(app).listen(port, () => console.log(`connect http://${hostname}:${port}`))