function songsPrint(array) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
    }

    const numberOfSongs = array.shift()
    const listType = array.pop()

    array.forEach(element => {
        let [typeList, name, time] = element.split('_')
        if (typeList === listType || listType === 'all') {
            console.log(`${name}`)
        }
       
    });

}


songsPrint([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])
console.log('-------------------------------')
songsPrint([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',   
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])
console.log('-------------------------------')
songsPrint([2,

    'like_Replay_3:15',
    
    'ban_Photoshop_3:48',
    
    'all'])