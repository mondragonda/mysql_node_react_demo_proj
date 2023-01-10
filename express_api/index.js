import express from 'express';
import cors from 'cors';
import { env } from './env.js';

import { CommentAPI } from './comment-api.js';

const api = express();

api.use(express.json())
api.use(cors(env.serverConfig.corsConfig));

CommentAPI(api);

api.listen(env.serverConfig.port);