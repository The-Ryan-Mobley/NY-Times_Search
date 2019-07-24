$(window).on("load",()=>{
    var search_term=$("#search-term");
    var num_of_articles = $("#number-records");
    var start_year_element = $("#start-year");
    var end_year_element = $("#end-year");
    var limit=5;
    var year_start ="20000101";
    var year_end = "20150101";
    var term = "social";
    var ny_url_conditions="https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date="+year_start+
    "&end_date="+year_end+"&q="+term+"&api-key=FgQwXVCpv81qt1OY2S84n9YTqjLVHlvD";

    var ny_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+term+"&api-key=FgQwXVCpv81qt1OY2S84n9YTqjLVHlvD";
    
    
    $("#search-btn").on('click',(element)=>{
        term = search_term.html();
        limit = num_of_articles.html();
        start = start_year_element.html();
        end = end_year_element.html();


        ny_url_conditions="https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20120101&end_date=20190101&q=election&api-key=FgQwXVCpv81qt1OY2S84n9YTqjLVHlvD";
        console.log(ny_url_conditions);
        
        //"https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date="+year_start+
        //"&end_date="+year_end+"&q="+term+"&api-key=FgQwXVCpv81qt1OY2S84n9YTqjLVHlvD";



        console.log(ny_url_conditions);
        $.ajax({
            url: ny_url_conditions,
            method: "GET"
        }).then((response)=>{
            console.log(response);
            for(let i=0; i < limit;i++){
                //response.docs[i]
                let article_body = $("<div>");
                let article_title =$("<h1>");
                let article_year =$("<p>");
                let article_paragraph = $("<p>");
                article_title.html(response.docs[i].headline.main);
                article_year.html(response.docs[i].pub_date);
                article_paragraph.html(response.docs[i].snippet);
                article_title.appendTo(article_body);
                article_year.appendTo(article_body);
                article_paragraph.appendTo(article_body);
                article_body.appendTo($(".card-body"));


            }
            

        });

    });




});