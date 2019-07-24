$(window).on("load",()=>{
    var limit=5;
    var year_start ="2015";
    var year_end = "2019";
    var term = "computers";
    var ny_url_conditions="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+term+"&offset="+limit+"&api-key=FgQwXVCpv81qt1OY2S84n9YTqjLVHlvD";

    var ny_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+term+"&api-key=FgQwXVCpv81qt1OY2S84n9YTqjLVHlvD";
    $.ajax({
        url: ny_url,
        method: "GET"
    }).then((response)=>{
        console.log(response);

    });

});