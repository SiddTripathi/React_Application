// import React, { Component } from 'react'

/*Using React Hooks useEffect here in order to resolve the issue of deprciation due to componentWilMount usage for handling
our error occuring in fetching data from Firebase url. */

import Modal from '../../Components/UI/Modal/Modal'
import React, { useEffect, useState } from 'react';

const withErrorHandler = (WrappedComponent, axios) => {
    const WithErrorHandler = props => {
        const [error, setError] = useState(null);
        const requestInterceptor = axios.interceptors.request.use(
            req => {
                setError(null);
                return req;
            }
        );
        const responseInterceptor = axios.interceptors.response.use(
            res => res,
            error => {
                setError(error);
                console.log('WithErrorHandler: ', error);
                return Promise.reject(error);
            }
        );
        useEffect(
            () => {
                return () => {
                    axios.interceptors.request.eject(requestInterceptor);
                    axios.interceptors.response.eject(responseInterceptor);
                };
            },
            [requestInterceptor, responseInterceptor]
        );
        return <>
            <Modal
                show={error !== null}
                modalClosed={() => setError(null)}
            >
                {error !== null ? error.message : null}
            </Modal>
            <WrappedComponent {...props} />
        </>
    };
    return WithErrorHandler;
};
export default withErrorHandler;






/*old code containing UNSAFE_componentWillMount() method which is now depricated

// import Auxiliary from '../Auxiliary/Auxiliary'

// const withErrorHandler = (WrappedComponent, axios) => {
//     return class extends Component {
//         state = {
//             error: null
//         }
//         UNSAFE_componentWillMount() {
//             axios.interceptors.request.use(req => {
//                 this.setState({ error: null })
//                 return req
//             })
//             axios.interceptors.response.use(res => res, error => {
//                 this.setState({ error: error })
//             })
//         }

//         errorConfirmedHandler = () => {
//             this.setState({ error: null })
//         }

//         render() {
//             return (
//                 <Auxiliary>
//                     <Modal show={this.state.error}
//                         modalClosed={this.errorConfirmedHandler}>
//                         {this.state.error ? this.state.error.message : null}
//                     </Modal>
//                     <WrappedComponent {...this.props} />
//                 </Auxiliary>
//             )
//         }
//     }
// }


// export default withErrorHandler