import {debug} from 'debug';
import {config} from 'dotenv';

import {Discord} from './Platforms/Discord';

config({path: './.env'});
debug.enable(process.env.DEBUG || '*');

const d = debug('Index');

d('Ruby is starting...');
Discord();
