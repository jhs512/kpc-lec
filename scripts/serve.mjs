import http from 'node:http';
import {readFile, stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.mjs':'text/javascript','.js':'text/javascript','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.json':'application/json'};
http.createServer(async(req,res)=>{try{let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);pathname=pathname.replace(/^\/kpc-lec(?=\/|$)/,'');let path=resolve(root,'.'+pathname);if(path!==root&&!path.startsWith(root+sep))throw Error();if((await stat(path)).isDirectory())path=resolve(path,'index.html');res.setHeader('Content-Type',types[extname(path)]||'application/octet-stream');res.end(await readFile(path));}catch{res.writeHead(404).end('Not found');}}).listen(4173,'127.0.0.1',()=>console.log('Preview http://127.0.0.1:4173/kpc-lec/'));
