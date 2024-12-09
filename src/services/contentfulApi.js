import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const contentfulApi = createApi({
  reducerPath: 'contentfulApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cdn.contentful.com',
  }),
  endpoints: (builder) => ({
    // Fetch products, optionally filter by category
    getProductsByCategory: builder.query({
      query: ({category, sizeFilter, price, tagFilter, searchTerm, limit, page}) => {

        const queryParams = {
          access_token: accessToken,
          content_type: 'products',
          limit: limit,            // Number of items per page
          skip: (page - 1) * limit, // Skip based on the current page
        };

            if(searchTerm){
                queryParams['fields.productTitle[match]'] = searchTerm
                return {
                    url: `/spaces/${spaceId}/environments/master/entries`,
                    params: queryParams,
                  };
            }else{
                if (category) {
                    queryParams['fields.productCategory[in]'] = category;
                  }
                  if (sizeFilter) {
                    queryParams['fields.productSizes[in]'] = sizeFilter;
                  }
          
                  if(price){
                      queryParams['fields.productPrice[gte]'] = price;
                  }

                  if(tagFilter){
                      queryParams['fields.productTags[in]'] = tagFilter;
                  }
                  return {
                    url: `/spaces/${spaceId}/environments/master/entries`,
                    params: queryParams,
                  };
            }
      },

      transformResponse: (data) => {
        console.log(data)
    
        const images = data?.includes?.Asset?.map(item => ({
          id: item.sys.id,
          img: item.fields.file.url
        }));

        const newData = data?.items?.map((item) => ({
          productId: item.sys.id,
          productTitle: item.fields.productTitle,
          productSizes: item.fields.productSizes,
          productPrice: item.fields.productPrice,
          productTags: item.fields.productTags,
          productCategory: item.fields.productCategory,
          productDesc: item.fields.productDesc.content[0].content[0].value,
          productImages: item.fields.productImages.map(image => image.sys.id),
        }));

        const finalData = newData?.map(item => {
          const productImagesWithUrls = item.productImages.map(imageId => {
            const image = images.find(img => img.id === imageId); 
            return image ? image.img : null; 
          }).filter(Boolean);

          return {
            ...item,
            productImages: productImagesWithUrls, 
          };
        });

        return {
           products: finalData,
            total: data.total
        } 
      },
    }),

       // Query to fetch a single product by ID
     getSingleProduct: builder.query({
        query: (value) => {
            const queryParams = {
                access_token: accessToken,
                content_type: 'products',
              };
            queryParams['fields.productTitle[match]'] = value
          return {
            url: `/spaces/${spaceId}/environments/master/entries`,
            params: queryParams
          };
        },

        transformResponse: (data) => {
            const images = data.includes.Asset.map(item => item.fields.file.url)
            const newData = data.items.map((item) =>  ({
                productId: item.sys.id,
                productTitle: item.fields.productTitle,
                productSizes: item.fields.productSizes,
                productPrice: item.fields.productPrice,
                productTags: item.fields.productTags,
                productCategory: item.fields.productCategory,
                productDesc: item.fields.productDesc.content[0].content[0].value,
                productImages: images
            }))
            const finalData = newData[0]
            return finalData;
        },
      }),
  }),
});

export const { useGetProductsByCategoryQuery, useGetSingleProductQuery } = contentfulApi;
export default contentfulApi;