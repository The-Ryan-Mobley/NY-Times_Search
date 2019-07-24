$(window).on("load",()=>{
    var condition = "computers";
    var ny_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+condition+"&api-key=FgQwXVCpv81qt1OY2S84n9YTqjLVHlvD";
    $.ajax({
        url: ny_url,
        method: "GET"
    }).then((response)=>{
        console.log(response);

    });

});