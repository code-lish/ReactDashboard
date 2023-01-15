import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/apiSlice";

const blogAdapter = createEntityAdapter({
  sortComparer: (a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1,
});

const initialState = blogAdapter.getInitialState();

export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: "/admin/blog",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        const loadedBlogs = responseData.map((blog) => {
          blog.id = blog._id;
          return blog;
        });
        return blogAdapter.setAll(initialState, loadedBlogs);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Blog", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Blog", id })),
          ];
        } else return [{ type: "Blog", id: "LIST" }];
      },
    }),
    //   query: (id) => ({
    //     url: `/admin/faq/${id}`,
    //     validateStatus: (response, result) => {
    //       return response.status === 200 && !result.isError;
    //     },
    //   }),
    //   transformResponse: (response) => {
    //     const data = [];
    //     data.push(
    //       {
    //         id: response._id,
    //         question: response.question.en,
    //         answer: response.answer.en,
    //         category: response.category,
    //       },
    //       {
    //         id: 2,
    //         question: response.question.ps,
    //         answer: response.answer.ps,
    //         category: response.category,
    //       },
    //       {
    //         id: 3,
    //         question: response.question.fa,
    //         answer: response.answer.fa,
    //         category: response.category,
    //       }
    //     );
    //     return data;
    //   },
    //   providesTags: () => {
    //     return [{ type: "Faq", id: "LIST" }];
    //   },
    // }),
    addBlog: builder.mutation({
      query: (payload) => ({
        url: "/admin/blog",
        method: "POST",
        body: {
          ...payload,
        },
      }),
      invalidatesTags: [{ type: "Blog", id: "LIST" }],
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...blog }) => {
        return {
          url: `/admin/blog/${id}`,
          method: "PUT",
          body: {
            ...blog,
          },
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: "Blog", id: arg.id }],
    }),
    // updateLocalFaq: builder.mutation({
    //   query: ({ id, ...faq }) => ({
    //     url: `/admin/faq/${id}/update-locals`,
    //     method: "PUT",
    //     body: {
    //       ...faq,
    //     },
    //   }),
    //   invalidatesTags: (result, error, arg) => [{ type: "Faq", id: arg.id }],
    // }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/admin/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Blog", id: arg.id }],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useAddBlogMutation,
  useUpdateBlogMutation,
  // useUpdateLocalFaqMutation,
  useDeleteBlogMutation,
} = blogApiSlice;

// returns the query result object
export const selectBlogsResult = blogApiSlice.endpoints.getBlogs.select();

// creates memoized selector
const selectBlogsData = createSelector(
  selectBlogsResult,
  (blogsResult) => blogsResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllBlogs,
  selectById: selectBlogById,
  selectIds: selectBlogIds,
  // Pass in a selector that returns the notes slice of state
} = blogAdapter.getSelectors((state) => selectBlogsData(state) ?? initialState);
