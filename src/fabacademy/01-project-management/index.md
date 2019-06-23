---
title: 'Project Managemet'
slug: 'project-management'
date: '2019-01-23'
endDate: '2019-01-30'
lastUpdated: '2019-06-22'
hero: './hero.png'
published: true
---

## Tools

For my personal site I am using a Gatsby static site generator which is based on React. I have used a few different generators in the past, but I took the opportunity to improve my JavaScript skills. The tool can be slightly overwhelming at the beginning, especially because of the numerous dependencies and the JavaScript way of structuring websites.

![Gatsby worklow illustration from the project homepage][image-1]

[Gatsby][1] is a very modular and flexible site generator which is highly focused on performance. It does many of the tedious – such as image optimisation, lazy-loading, code splitting, defer loading – without you having to worry about it. Another great thing about Gatsby is that it has a very lively plugin community.

Source plugins in particular are useful because they let you pull in data from any conceivable location or service – from markdown or JSON to Google Sheets, Wordpress, [DatoCMS][2] or my personal favourite [Airtable][3] which I use to pull in items for my personal news feed. Gatsby pools in data from different source and by using GraphQL under-the-hood it allows you to access it using the same syntax no matter where the data came from.

Other tools and services I use to build the site:

- [VS Code][4] with 25+ extensions, such as Prettier for automated code formatting
- [Hyper][5] terminal with zsh shell
- [Zapier][6] for triggering build when new feed post is published on Airtable

## Structure

The website source code follows the structure of a standard React app. Here is a brief overview of some of the key elements:

- `public/` - generated files of the final website
- `src/` - all the custom build parts - `components/` - logical components, i.e. header, footer, widget - `css/` - CSS modules corresponding to logical components and page templates - `data/` - custom static data in JSON - `pages/` - the pages that actually get generated - `templates/` - templates that get applied to auto-generated pages (reflections, fab academy)
- `static/` - static files that get copied to the final generate site
- `gatsby-config.js` - configuration file for Gatsby
- `gatsby-node.js` - configuration for auto-generating pages from input data

Here is a sample code snippet that generates the Fab Academy section of this website from the file `src/pages/fabacademy.js`:

```javascript
// fabacademy.js

import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

// components
import Container from '../components/Container';
import FabLink from '../components/FabLink';

// styles
import styles from '../css/pages/reflections.module.css';

export default ({ data }) => {
  const pageTitle = 'Fab Academy';
  const allPosts = data.allMarkdownRemark.edges;
  const posts = allPosts.map(edge => <FabLink key={edge.node.id} post={edge.node} />);

  return (
    <Container>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="page-title">
        <h1>{pageTitle}</h1>
        <p>A crash course in digital fabrication</p>
      </div>
      <div className={styles.reflections}>{posts}</div>
    </Container>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      limit: 1000
      filter: {
        frontmatter: { published: { eq: true } }
        fileAbsolutePath: { regex: "/fabacademy/" }
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "D MMMM")
            endDate(formatString: "D MMMM YYYY")
            slug
            title
            hero {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
```

## Remote repository

We are using GitLab to host our remote repositories. Great feature of GitLab is that is allows for private repositories on the free plan as well a free build tool that allows anyone to host their static site for free.

I have configured simple shell aliases that allow me to use custom shortcuts for common git tasks:

- **`gs`** = `git status` - allows me to quickly check which files I have changed
- **`ga`** = `git add .` - stages all the changed files
- **`gc ‘commit message’`** = `git commit -m ‘commit message’` - more direct way to write commit messages
- **`gp`** = `git push`

[1]: https://www.gatsbyjs.org/
[2]: https://www.datocms.com/
[3]: https://airtable.com
[4]: https://code.visualstudio.com/
[5]: https://hyper.is
[6]: https://zapier.com
[image-1]: gatsby.png 'Gatsby worklow illustration from the project homepage'
