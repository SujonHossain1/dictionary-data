const fs = require('fs');
const path = require('path');


// const filePath = path.join(__dirname, `data.json`);
// const streamData = fs.readFileSync(filePath, { encoding: 'utf-8' });
// const { data } = JSON.parse(streamData);


const allData={
    data: []
};
const all = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z']

for (let i = 0; i < all.length; i++) {
    const itemFileName = all[i];
    const filePath = path.join(__dirname, `/data/${itemFileName}.json`);

    fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
        if (!err) {
            const newData = JSON.parse(data);
            const keys = Object.keys(newData);

            allData.data.push(...keys);

            fs.writeFile("data.json", JSON.stringify(allData), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });

        } else {
            console.log(err);
        }
    });

}


console.log(all.length);





// class Search {
//     constructor() {
//         this.dictionary = {};
//     }

    // assign(word) {
    //     let obj = this.dictionary;

    //     for (let i = 0; i < word.length; ++i) {
    //         let char = word[i];
    //         if (!(char in obj)) {
    //             obj[char] = {
    //                 next: {
    //                     words: new Set()
    //                 }
    //             }
    //         }
    //         obj[char]['next']['words'].add(word);
    //         obj = obj[char].next;

    //     }
    //     obj['done'] = true;
    // }

    // find(word) {
    //     let currentDictionary = this.dictionary;

    //     for (let i = 0; i < word.length; i++) {
    //         const char = word[i];
    //         if (currentDictionary[char]) {
    //             currentDictionary = currentDictionary[char].next
    //         } else return false;
    //     }

    //     return currentDictionary['done'] || false;
    // };

//     delete(word) {
//         let currentDictionary = this.dictionary;

//         for (let i = 0; i < word.length; i++) {
//             const char = word[i];
//             if (currentDictionary[char]) {
//                 currentDictionary = currentDictionary[char].next
//             } else return false;
//         }

//         currentDictionary['done'] = false;
//     }

//     elasticSearch(word) {
//         let currentDictionary = this.dictionary;
//         let words = {};

//         for (let i = 0; i < word.length; i++) {
//             const char = word[i];

//             if (currentDictionary[char]) {
//                 words = currentDictionary[char]['next']['words'];
//                 currentDictionary = currentDictionary[char]['next'];
//             } else {
//                 return words = {}
//             }
//         }

//         return words;
//     }

// };

// const search = new Search();

// for (let i = 0; i < data.length; i++) {
//     const item = data[i];
//     search.assign(item);
// }


// console.log(search.dictionary);

// fs.writeFileSync("dictionary.json", JSON.stringify(search.dictionary));