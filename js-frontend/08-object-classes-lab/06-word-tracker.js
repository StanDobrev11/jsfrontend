function solve(array) {
    const searchWords = array.shift().split(' ')
    const wordList = []
    searchWords.forEach(searchWord => {
        let wordCount = 0
        array.forEach(word => {
            if (searchWord === word) {
                wordCount += 1
            }
            
        });

        foundWord = {
            name: searchWord,
            count: wordCount,
        }
            

        wordList.push(foundWord)
    });

    wordList
        .sort((a, b) => b.count - a.count)
        .forEach(item => console.log(`${item.name} - ${item.count}`))
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])