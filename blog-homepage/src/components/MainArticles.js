import React, { Component } from "react";
import missedArticles from "./_data/missed-articles.json";
import yourArticles from "./_data/your-articles.json";
import Article from "./Articles";

class mainArticles extends Component {
  render() {
    const articlesForYou = yourArticles.map((yourArticle) => {
      return (
        <Article article={yourArticle} articleType={'forYou'}/>
      )
    })
    const articleInCase = missedArticles.map((missedArticle) => {
      return (
        <Article article={missedArticle} articleType={'inCaseMissed'}/>
      )
    })
    return (
      
      <div className="MainArticles">
      <h1>For you</h1>
      <table>
        <tr>
          
          <td className="column">
            <div>{articlesForYou[0]}</div>
            <div>{articlesForYou[1]}</div>
            <div>{articlesForYou[2]}</div>
            <div>{articlesForYou[3]}</div>
          </td>
        
        </tr>
      </table>
      <h2>In case you missed it</h2>
      <table>
        <tr>
          
          <td className="column1">
            <div>{articleInCase[0]}</div>
          </td>

          <td className="column2">
            <div>{articleInCase[1]}</div>
          </td>
          
          <td className="column3">
            <div>{articleInCase[2]}</div>
          </td>
        
        </tr>
      </table>
    </div>
    )
  }
}

export default mainArticles;