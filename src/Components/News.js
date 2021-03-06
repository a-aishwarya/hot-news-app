import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: "BBC Sport",
      title: "Australia pace bowler Pattinson retires",
      description:
        "Australia fast bowler James Pattinson retires from international cricket after deciding he is not able to push for an Ashes place.",
      url: "http://www.bbc.co.uk/sport/cricket/58980308",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/A464/production/_121148024_pattinson_getty.jpg",
      publishedAt: "2021-10-20T22:22:25.9767255Z",
      content:
        "James Pattinson took 81 wickets in 21 Test appearances for Australia\r\nAustralia fast bowler James Pattinson has retired from international cricket after deciding he is not ready to push for Ashes sel… [+1502 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am harry");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount()
  {
      let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=b1006a832f184f8c98fe0cf3654461c4";
      let data=await fetch(url);
      let parsedData=await data.json()
      console.log(parsedData);
      this.setState({articles:parsedData.articles})
  }

  render()
   {
    return (
        <>
        
        <h2 id="main-heading">TOP HEADLINES OF THE DAY</h2>
        <div className="flex-container">
        
        {this.state.articles.map((element) => {
          return (
            
              <NewsItem key={element.url}
                title={element.title?element.title.slice(0,50):""} 
                description={element.description?element.description.slice(0,60):""}
                imageurl={element.urlToImage}
                newsurl={element.url}>
              </NewsItem>
              
            
          );
        })}
        </div>
      
      </>
      
    );
  }
}

export default News;
