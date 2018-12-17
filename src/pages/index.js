import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import arrival from '../img/arrival.jpg'
import treatment from '../img/treatment.jpg'
import leave from '../img/leave.jpg'

function BlogList({ items }) {
  return (
    items
      .map(({ node: post }) => (
        <div
          className="content article-summary"
          key={post.id}
        >
          <p>
            <Link className="has-text-primary" to={post.fields.slug}>
              {post.frontmatter.title}
            </Link>
            <p className="article-summary--date">
              <small>{post.frontmatter.date}</small>
            </p>
          </p>
          <p>
            {post.excerpt}
            <br />
            <br />
            <Link className="button is-small" to={post.fields.slug}>
              Keep Reading →
                    </Link>
          </p>
        </div>
      ))
  );
}

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-one-third">
                <img className="column-image" src={arrival} alt="Person entering hospital" />
                {Boolean(data.leftData) && <BlogList items={data.leftData.edges} />}
              </div>
              <div className="column is-one-third">
                <img className="column-image" src={treatment} alt="Person begin treated in hospital" />
                {Boolean(data.centerData) && <BlogList items={data.centerData.edges} />}
              </div>
              <div className="column">
                <img className="column-image" src={leave} alt="Person leaving hospital" />
                {Boolean(data.rightData) && <BlogList items={data.rightData.edges} />}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    leftData: PropTypes.shape({
      edges: PropTypes.array,
    }),
    centerData: PropTypes.shape({
      edges: PropTypes.array,
    }),
    rightData: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
query IndexQuery {
  leftData: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    filter: { frontmatter: { templateKey: { eq: "blog-post" }, column: { eq: "left" }}}
  ) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        fields {
          slug
        }
        frontmatter {
          column
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
  centerData: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    filter: { frontmatter: { templateKey: { eq: "blog-post" }, column: { eq: "center" }}}
  ) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        fields {
          slug
        }
        frontmatter {
          column
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
  rightData: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    filter: { frontmatter: { templateKey: { eq: "blog-post" }, column: { eq: "right" }}}
  ) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        fields {
          slug
        }
        frontmatter {
          column
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
 }
`
