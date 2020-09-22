import React, { Component } from 'react';
import Link from './Link';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const FEED_QUERY = gql`
{
  feed {
    links {
      id
      createdAt
      url
      description
	    postedBy {
		    id
		    name
	    }
	    votes {
		    id
		    user {
			    id
		    }
	    }
    }
  }
}
`;

class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
	    if (loading) return 'Loading...';
	    if (error) return `Error ${error.message}`;

	  const linksToRender = data.feed.links
    
          return (
            <div>
		  {linksToRender.map((link, index) => (
			  <Link key={link.id} link={link} index={index} />
		  ))}
            </div>
          )
        }}
      </Query>
    )
  }
};

export default LinkList;
