'use strict';

import fs from 'fs';
import bencode from 'bencode';

const open = (filepath) => {
    return bencode.decode(fs.readFileSync(filepath));
};

const size = torrent => {
    // ..
}

const infoHash = torrent => {
    // ...
}

export default {
    open,
    size,
    infoHash
}