let navi = [
    {
        d1nm : "회사소개",
        d1link : "/company.html",
        d2 : [
            {
                d2nm : "CEO인사말",
                d2link : "/ceo.html",
            },
            {
                d2nm : "연혁",
                d2link : "/history.html",
            },
            {
                d2nm : "오시는길",
                d2link : "/way.html",
            }
        ]
    },
    {
        d1nm : "제품소개",
        d1link : "/product.html",
        d2 :[
            {
                d2nm : "이벤트상품",
                d2link : "/event.html",
            },
            {
                d2nm : "신상품",
                d2link : "/new.html",
            }
        ]
    },
    {
        d1nm : "견적문의",
        d1link : "/estimate.html",
    }
];

window.onload = () =>{
    let naviTag = "";
    for(let i in navi){
        naviTag +=`<li>
        <a href="${navi[i].d1link}">${navi[i].d1nm}</a>
        <ul class='d2'>`;
            for(let j in navi[i].d2){
                naviTag += `<li>
                <a href="${navi[i].d2[j].d2link}">${navi[i].d2[j].d2nm}</li>`;
            }
            //j for 문 마침
        naviTag += `</ul>
                    </li>`;
    }
    //i for 문 마침
    document.getElementById('gnb').innerHTML = naviTag;
}