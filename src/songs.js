
//Exercise 1: Get the array of all Artists.
function getAllArtists(array){
    let result = array.map(item => item.artist);
    //console.log("Exercise 1 ->", result);
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){   
   let result= array.filter(item => item.artist===artist);
   return result;
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array){
    let result= array.map(item=> item.title);
    result.sort();
    //let newResult= result.filter((sgtitle,ids)=>ids < 10);
    let newResult = result.slice(0,10);
    return newResult;
};

//Exercise 4: Order by year, ascending
function orderByYear(array){
    //Write your code here
    //let result = new Array(...array);
    //result.sort((a, b) => a.year - b.year);
    let result = [...array].sort((a, b) =>  {
        if (a.year === b.year && a.title && b.title) {
            if (a.title > b.title) return 1;
            if (b.title > a.title) return -1;
            return 0;
        }
        return a.year - b.year;
    });
    return result;
};

//Exercise 5: Filter songs by genre
function songsByGenre(arr, genre) {
    //Write your code here
    let result = arr.filter(item => item.genre.includes(genre));
    return result;
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(arr) {
    //Write your code here
    let result = arr.map(item => {
        const durationArray = item.duration.split(" ").map(dur => parseInt(dur))
        item.duration = !durationArray.includes(NaN) ? durationArray[0] * 60 + durationArray[1] : item.duration;
        return item;
    });

    return result;
};

//Exercise 7: Get the longest song
function getLongestSong(arr){
    //Write your code here
    let result = arr.map(item => item.duration.split(" ").map(dur =>parseInt(dur)));
    let durationArray = result[0] *60 + result[1];
    durationArray= Math.max(...durationArray);
    console.log(durationArray);
    return durationArray;
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function




if(typeof module !== 'undefined') {
    module.exports = {
        getAllArtists,
        getSongsFromArtist,
        orderAlphabetically,
        orderByYear,
        songsByGenre,
        minutsToSeconds,
        getLongestSong
    };
};
