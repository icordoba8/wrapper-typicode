import { Utils } from "./util";

class Excel {
    public data:    any[] = [];
    public colunms: any[] = [];
    //"URL","METHOD"
    addColunm(value: string) {
        this.colunms = [
            ...this.colunms,value.toUpperCase(),
        ] 
    }
    addRow(value: string, index: number) {
        this.data[index] = [
            ...this.data[index],value,
        ] 
    }

    async generateColumns(data: any[]) {
        const { records }: any = Utils.row(data)
        const item: any = Utils.row(records)
        for (const key in item) {
            if (typeof item[key] == "object") {
                this.addColunm(key)
                for (const value in item[key]) {
                    this.addColunm(value) 
                }
            }
            else{
                this.addColunm(key) 
            }
        }
    }

    async generateRows(data: any[]) {
        const { records }: any = Utils.row(data)
        for (let index = 0; index < records.length; index++) {
            this.data[index] = [];
            const item = records[index];
            for (const key in item) {
                if (typeof item[key] == "object") {
                    const object = item[key];
                    for (const key_object in object) {
                        if (typeof object[key_object] == "object") {
                            const row = object[key_object];
                            for (const key_row in row) {
                                this.addRow(row[key_row],index) 
                            }
                        }
                        else{
                            this.addRow(object[key_object],index) 
                        }
                       
                    }
                }
                else {
                    this.addRow(item[key],index)
                }
            }
        }
    }

    public async create(records: any[]) {
        
        await this.generateColumns(records);
        await this.generateRows(records);
        this.data.unshift(this.colunms)
        return this.data;
    }
    
    
}

export default Excel;