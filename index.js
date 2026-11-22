'use strict';
import * as fs from 'fs';
import bencode from 'bencode';
import tracker from './tracker.js';
import torrentParser from './torrent-parser.js'

const torrent = torrentParser.open('puppy.torrent');

tracker.getPeers(torrent, peers => {
    console.log('list of peers: ', peers)
})