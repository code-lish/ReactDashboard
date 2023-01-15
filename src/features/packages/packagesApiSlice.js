import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/apiSlice";

const packagesAdapter = createEntityAdapter();

const initialState = packagesAdapter.getInitialState();

export const packagesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPackages: builder.query({
            query: () => ({
                url: "/admin/packages",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                },
            }),
            transformResponse: (responseData) => {
                const loadedPackages = responseData.map((pack) => {
                    pack.id = pack._id;
                    return pack;
                });

                return packagesAdapter.setAll(initialState, loadedPackages);
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: "Package", id: "LIST" },
                        ...result.ids.map((id) => ({ type: "Package", id })),
                    ];
                } else return [{ type: "Package", id: "LIST" }];
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
        addFaq: builder.mutation({
            query: payload => ({
                url: '/admin/faq',
                method: 'POST',
                body: {
                    ...payload,
                }
            }),
            invalidatesTags: [
                { type: 'Faq', id: "LIST" }
            ]
        }),
        updateFaq: builder.mutation({
            query: ({ id, ...faq }) => {
                console.log(faq, { faq }, { ...faq });
                return {
                    url: `/admin/faq/${id}`,
                    method: "PUT",
                    body: {
                        ...faq,
                    },
                }
            },
            invalidatesTags: (result, error, arg) => [{ type: "Faq", id: arg.id }],
        }),
        updateLocalFaq: builder.mutation({
            query: ({ id, ...faq }) => ({
                url: `/admin/faq/${id}/update-locals`,
                method: "PUT",
                body: {
                    ...faq,
                },
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Faq", id: arg.id }],
        }),
        deletePackage: builder.mutation({
            query: (id) => ({
                url: `/admin/packages/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Package', id: arg.id }
            ]
        }),
    }),
});

export const {
    useGetPackagesQuery,
    useGetSingleFaqQuery,
    useAddFaqMutation,
    useUpdateFaqMutation,
    useUpdateLocalFaqMutation,
    useDeletePackageMutation,
} = packagesApiSlice;

// returns the query result object
export const selectPackagesResult = packagesApiSlice.endpoints.getPackages.select();

// creates memoized selector
const selectPackagesData = createSelector(
    selectPackagesResult,
    (packagesResult) => packagesResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllPackages,
    selectById: selectPackageById,
    selectIds: selectPackageIds,
    // Pass in a selector that returns the notes slice of state
} = packagesAdapter.getSelectors((state) => selectPackagesData(state) ?? initialState);
