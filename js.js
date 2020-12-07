/**
 * Professional code
 * [[1]] or [[2]], [[3]], [[1], [2]], [[1], [3]], [[2], [3]] or [[1], [2], [3]]] => [[], [], []]
 * 2020-12-07
 */
var tempDeviation = [];
var index = 0;
do {
    if (returnResult[i].Deviation[index]) {
        var code = returnResult[i].Deviation[index].Code;
        if (0 == tempDeviation.length) {
            if (installelse.some(function (item) { return item.Code == code; })) {
                tempDeviation.push(returnResult[i].Deviation[index]);
                index++;
            } else {
                tempDeviation.push([{ Code: '', Description: '' }]);
            }
        } else if (1 == tempDeviation.length) {
            if (hanvisning.some(function (item) { return item.Code == code; })) {
                tempDeviation.push(returnResult[i].Deviation[index]);
                index++;
            } else {
                tempDeviation.push([{ Code: '', Description: '' }]);
            }
        } else if (2 == tempDeviation.length) {
            if (orsaks.some(function (item) { return item.Code == code; })) {
                tempDeviation.push(returnResult[i].Deviation[index]);
                index++;
            } else {
                tempDeviation.push([{ Code: '', Description: '' }]);
            }
        }
    } else {
        while (index < 3) {
            tempDeviation.push([{ Code: '', Description: '' }]);
            index++;
        }
    }
} while (tempDeviation.length <= 2)