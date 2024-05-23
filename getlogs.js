const PCAPNGParser = require('pcap-ng-parser')
const pcapNgParser = new PCAPNGParser()

const fileKeyList = [
    'log_00001_20240523152714',
    // log_00002_20240523150651,
    // log_00003_20240523150653,
];

const fileList = [];
fileKeyList.forEach((fname)=>{
    const fdata = require('fs').createReadStream(`./${fname}`);
    fileList.push(fdata);
});


for(let file of fileList){
    file.pipe(pcapNgParser)
        .on('data', parsedPacket => {
            if(parsedPacket?.data){
                const buffer = Buffer.from(parsedPacket.data, 'binary');
                const text = buffer.toString('utf-8'); 
                const res = {
                    interfaceId: parsedPacket.interfaceId,
                    timestampHigh: parsedPacket.timestampHigh,
                    timestampLow: parsedPacket.timestampLow,
                    data: text,
                };

                if(`${text}`.includes('application/json')){
                    const headers = text.split('\r\n');
                    // console.log(headers);
                    
                    // const findHeader = headers.find(header => header.startsWith('{"0":{"json":'));
                    // console.log(findHeader);

                    console.log(res);
                }
                // console.log(res);
            }
        })
        .on('interface', interfaceInfo => {
            // console.log(interfaceInfo);
        })
}

