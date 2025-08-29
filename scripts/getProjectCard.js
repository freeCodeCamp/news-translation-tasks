const PROJECT_QUERY = `
  query ($id: ID!) {
    node(id: $id) {
      ... on Issue {
        projectsV2(first: 1) {
          edges {
            node {
              id
              url
              title
              items(first: 100) {
                edges {
                  node {
                    id
                    content {
                      ... on Issue {
                        id
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * Retrieves project card information for a given issue
 * @param {Object} params - Parameters from GitHub Actions
 * @returns {Object} - Project card information
 */
async function getProjectCard({ github, context, core }) {
  const issueNodeId = context.payload.issue.node_id;
  
  const result = await github.graphql(PROJECT_QUERY, { id: issueNodeId });
  
  console.log(`GraphQL Result: ${JSON.stringify(result)}`);
  
  // Check if project associations exist
  if (!result.node?.projectsV2?.edges?.length) {
    throw new Error('This issue is not associated with any project boards. Please ensure the issue is added to a project before using slash commands.');
  }
  
  const projectEdge = result.node.projectsV2.edges[0];
  
  // Validate project structure
  if (!projectEdge.node?.items?.edges) {
    throw new Error('Project structure is invalid or incomplete. Please contact a repository maintainer.');
  }
  
  // Find the card for this specific issue
  const cardEdge = projectEdge.node.items.edges.find(edge => 
    edge.node?.content?.id === issueNodeId
  );
  
  if (!cardEdge) {
    throw new Error('Could not find the project card for this issue. The issue may not be properly added to the project board.');
  }
  
  const { id: cardId } = cardEdge.node;
  const { url: projectUrl, title: projectName } = projectEdge.node;
  
  console.table({ cardId, projectUrl, projectName });
  
  return { cardId, projectUrl, projectName };
}

/**
 * Main function to get project card and set outputs
 * @param {Object} params - Parameters from GitHub Actions
 */
async function main({ github, context, core }) {
  try {
    const cardInfo = await getProjectCard({ github, context, core });

    console.table({ cardId, projectUrl, projectName });
    
    core.setOutput('card_id', cardInfo.cardId);
    core.setOutput('project_url', cardInfo.projectUrl);
    core.setOutput('project_name', cardInfo.projectName);
  } catch (error) {
    core.setFailed(error.message);
  }
}

export { getProjectCard, main };