class Block{
    constructor(index,previousHash,timestamp,data,hash){
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
    }
}

// this.hash = Crypto.SHA256()