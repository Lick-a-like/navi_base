let naviText = ['네번째그림', '작품들', '문의'];
let naviLink = ['/company.html', '/work.html', '/board.html'];

let naviTag = '';

for(var i in naviText){
naviTag +='<a href=\"'+naviLink[i]+'\">'+naviText[i]+'</a>';
}
//  <a href="/company.html">네번째그림</a>

console.log("1."+naviTag);


naviTag = '';

let naviArr = [
    ['네번째그림', '/company.html'],
    ['작품들', '/work.html'],
    ['문의', '/board.html']
]

for(var i in naviArr){
naviTag +='<a href=\"'+naviArr[i][1]+'\">'+naviArr[i][0]+'</a>';
}

console.log("2."+naviTag);

// class NaviObj {}
let naviObj = [
    {
        text : "네번째그림",
        link : "/company.html"
    },
    {
        text : "작품들",
        link : "/work.html"
    },
    {
        text : "문의",
        link : "/board.html"
    }
]

naviTag = '';

for(var i in naviObj){
    naviTag +='<a href=\"'+naviObj[i].link+'\">'+naviObj[i].text+'</a>';
    }

console.log("3."+naviTag);