import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUPLIC_GRAPHCMS_ENDPOINT;

export const getSingleProduct = async (slug) => {
  const query = gql`
    query MyQuery {
      storeProducts(where: {slug: "${slug}"}) {
            id
          collection
          price
          quantity
          slug
          title
          vendor
          productType
          rate
          type
          tags
          image {
            id
            url
          }
          prodImages {
            id
            url
          }
        }
      }
    `;

  const results = await request(graphqlAPI, query);

  return results;
};

export const getProducts = async (type, quantity = 10) => {
  const query = gql`
    query MyQuery {
      storeProducts(where: {type: "${type}"}, first: ${quantity}) {
        id
        collection
        price
        quantity
        slug
        title
        vendor
        productType
        rate
        type
        image {
          id
          url
        }
        prodImages {
          id
          url
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results;
};


export const getAllProd = async () => {
  const query = gql`
    query MyQuery {
      storeProducts(first: 50) {
        id
        collection
        price
        quantity
        slug
        title
        vendor
        productType
        rate
        type
        image {
          id
          url
        }
        prodImages {
          id
          url
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results;
};


export const getCollection = async (collection) => {
  const query = gql`
    query MyQuery {
      storeProducts(first: 50, where: {collection: "${collection}"}) {
        id
        collection
        price
        quantity
        slug
        title
        vendor
        productType
        rate
        type
        image {
          id
          url
        }
        prodImages {
          id
          url
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results;

};
export const getCollectionTypes = async () => {
  const query = gql`
    query MyQuery {
      toreProducts(where: {productType_in: ["Belt","Jeans","Shoes"]}) {
        id
        collection
        price
        quantity
        slug
        title
        vendor
        productType
        rate
        type
        image {
          id
          url
        }
        prodImages {
          id
          url
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results;
};





// query MyQuery {
//   storeProducts(where: {productType: "Shirt"}) {
//     id
//   }
// }
