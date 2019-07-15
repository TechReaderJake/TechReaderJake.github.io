import React from 'react'
import { Link } from 'gatsby'
import Flag from './Flag/Flag'
import TagList from './TagList'
import useSiteMetadata from '../hooks/use-site-config'
import styled from 'styled-components'
import { colors } from '../tokens'

const Post = styled.article`
  border-bottom: 1px solid rgba(214, 209, 230, 0.5);
  padding-bottom: 1.25rem;
`

const ReadPost = styled(Link)`
  display: block;
  font-size: 0.75rem;
  margin-top: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 2;
  color: ${colors.themeBlue500};

  &:hover {
    background-color: ${colors.themeBrown100};
    border-radius: 0.25rem;
    font-weight: 800;
    color: ${colors.themeBlue500};
  }
`

const PostDate = styled.time`
  color: ${colors.textLight};
  &:before {
    content: '🗓';
    margin-right: 0.2rem;
  }
`

const PostHeader = styled.header`
  padding: 1em 0;
`

const Excerpt = styled.p`
  line-height: 1.45;
  padding-bottom: 0.5em;
`

const PostTitleLink = styled(Link)`
  color: ${colors.primary};
  &:hover {
    border-bottom: 1px dotted ${colors.primary};
  }
`

const PostsListItem = props => {
  const { title, excerpt, slug, date, language, tags } = props
  const { multilangPosts } = useSiteMetadata()

  return (
    <Post>
      <PostHeader>
        <h2>
          <PostTitleLink to={`/blog/${slug}`}>
            {multilangPosts && <Flag language={language} />}
            {title}
          </PostTitleLink>
        </h2>
      </PostHeader>
      <section>
        <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
      </section>
      <footer>
        <TagList tags={tags} icon={true} />
        <PostDate>{date}</PostDate>
        <ReadPost to={`/blog/${slug}`} aria-label={`View ${title} article`}>
          Read post ›
        </ReadPost>
      </footer>
    </Post>
  )
}
export default PostsListItem
