import http from "./";
import * as RNFS from 'react-native-fs';

export const fetchLayers = async () => {

    try {
        const {data} = await http.get(`${http.url}/layers/`);

        // console.log('22222222222222222')

        // console.log((data[0].firehydrants))

        var path = RNFS.ExternalDirectoryPath + '/firehydrants.js';

        RNFS.writeFile(path, 'var firehydrants='+(data[0].firehydrants))

        var path = RNFS.ExternalDirectoryPath + '/conex.js';

        RNFS.writeFile(path, 'var conex='+(data[0].conex))

        // console.log((data[0].h))

        // console.log('1111111111111111111')

        // console.log((data[0].h))

        // console.log((data[0].pl))

        var path = RNFS.ExternalDirectoryPath + '/h.js';

        RNFS.writeFile(path, 'var h='+(data[0].h))


        .then(() => console.log('FILE WRITTEN!'))
        .catch((err) => console.log(err.message));
        return data;

    } catch (err) {
        console.log(err);
    }
};
