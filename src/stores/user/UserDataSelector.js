import { createSelector } from 'reselect';
 
export const makeSelectUserDetails = createSelector(
    state => state.user.userDetails ,
    (allData ) =>(allData ? allData.data[0] : {})
)
