import React, { Component } from "react";
import PropTypes from "prop-types";
import Article from "./Articles";

class ArticleData extends Component {
    static PropTypes = {
        article: PropTypes.shape({
            articleImage: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            link: PropTypes.string,
            author: PropTypes.shape({
                name: PropTypes.string,
                image: PropTypes.string,
            })
        })
    };

    render() {
        const {article} = this.props;
        return (
            <table>
                <tbody>
                    <tr>
                        <td> <Article
                        title={article.title}
                        description={article.description}
                        articleImage={article.articleImage}
                        link={article.link}
                        />
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    };
}

export default ArticleData;