DKVDB
Distributed Key Value Database

/chain/[block hash].torrent get
/chain/head.torrent get
/chain/head.txt get
/db/[key] get
/untrusted/[hash] get
/peers get
/addpeer post
/rmpeer post
/trusted get
/trust post
/untrust post
/config/[key] get/post
/+/[key] post
/-/[key] post

Block structure
OL,key,value,timestamp,who,hash,sig

Untrusted block structure
OPCODE,key,value,timestamp,hash

OL : OPCODE ~ LAST HASH

OPCODES
+:add
key:value
-:subtract
key:value
A: add peer
nickname:host:port/root
R: remove peer
nickname:reason
S: set config
key:value
T: trust gpg
nickname:gpg magnet
U: untrust gpg
nickname:reason

Config
channel:db
untrusted-timeout:48hrs
allow-untrusted:true

Head.txt - mnemonic magnet link

CLI
dkvdb [mnemonic/channel]
dkvdb new
dkvdb clone [mnemonic/channel]

Commands
head
get [key]
get -u [key]
peers
addpeer [nickname] [host:port/root]
rmpeer [nickname] [reason]
trusted
trust [nickname] [file.asc]
untrust [nickname] reason
config [key] [value]
+ [key] [value]
- [key] [value]


