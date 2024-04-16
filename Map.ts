import fs from 'fs/promises';

export default class Map {
	private _mapData;



    constructor(){

    }

    registerForShots(){

    }

    printMap(){
        return this._mapData;
    }

    async readData(filePath: string): Promise <string>{
         return await fs.readFile("./data.json", "utf8")
        

    }
}