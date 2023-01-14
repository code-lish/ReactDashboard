import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/apiSlice";

const faqAdapter = createEntityAdapter({
  sortComparer: (a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1,
});

const initialState = faqAdapter.getInitialState();

export const faqApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFaqs: builder.query({
      query: () => ({
        url: "/admin/faq",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        const loadedFaqs = responseData.map((faq) => {
          faq.id = faq._id;
          return faq;
        });

        return faqAdapter.setAll(initialState, loadedFaqs);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Faq", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Faq", id })),
          ];
        } else return [{ type: "Faq", id: "LIST" }];
      },
    }),
    getSingleFaq: builder.query({
      query: (id) => ({
        url: `/admin/faq/${id}`,
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (response) => {
        const data = [];
        data.push(
          {
            id: response._id,
            question: response.question.en,
            answer: response.answer.en,
            category: response.category,
          },
          {
            id: 2,
            question: response.question.ps,
            answer: response.answer.ps,
            category: response.category,
          },
          {
            id: 3,
            question: response.question.fa,
            answer: response.answer.fa,
            category: response.category,
          }
        );
        return data;
      },
      providesTags: () => {
        return [{ type: "Faq", id: "LIST" }];
      },
    }),
    // addNewNote: builder.mutation({
    //     query: initialNote => ({
    //         url: '/notes',
    //         method: 'POST',
    //         body: {
    //             ...initialNote,
    //         }
    //     }),
    //     invalidatesTags: [
    //         { type: 'Note', id: "LIST" }
    //     ]
    // }),
    updateFaq: builder.mutation({
      query: ({ id, ...faq }) => ({
        url: `/admin/faq/${id}`,
        method: "PUT",
        body: {
          ...faq,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Faq", id: arg.id }],
    }),
    // deleteNote: builder.mutation({
    //     query: ({ id }) => ({
    //         url: `/notes`,
    //         method: 'DELETE',
    //         body: { id }
    //     }),
    //     invalidatesTags: (result, error, arg) => [
    //         { type: 'Note', id: arg.id }
    //     ]
    // }),
  }),
});

export const {
  useGetFaqsQuery,
  useGetSingleFaqQuery,
  // useAddNewNoteMutation,
  useUpdateFaqMutation,
  // useDeleteNoteMutation,
} = faqApiSlice;

// returns the query result object
export const selectFaqsResult = faqApiSlice.endpoints.getFaqs.select();

// creates memoized selector
const selectFaqsData = createSelector(
  selectFaqsResult,
  (faqsResult) => faqsResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllFaqs,
  selectById: selectFaqById,
  selectIds: selectFaqIds,
  // Pass in a selector that returns the notes slice of state
} = faqAdapter.getSelectors((state) => selectFaqsData(state) ?? initialState);
