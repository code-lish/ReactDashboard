import { store } from '../../app/store'
import { Outlet } from 'react-router-dom';

const Prefetch = () => {

    // store.dispatch(faqApiSlice.util.prefetch('getFaq', 'faqsList', { force: true }))

    return <Outlet />
}

export default Prefetch