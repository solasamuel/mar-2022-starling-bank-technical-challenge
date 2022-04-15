import React , { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import Loader from './layout/Loader'
import Account from './Account'

import { useDispatch, useSelector } from 'react-redux'
import { getAccounts } from '../Actions'

const Home = () => {

    const dispatch = useDispatch()

    const { loading, accounts, error } = useSelector(state => state.accounts)

    useEffect(() => {
        if (error) {
            console.log(error)
        }

        dispatch(getAccounts())

    }, [dispatch, error])

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Choose Account'}/>
                    <h1>Accounts</h1>
                    <section id="accounts" className="container mt-5">
                        <div className="row">
                            {accounts && accounts.map(account => (
                                <Account key={account.accountUid} account={account} />
                            ))}
                        </div>
                    </section>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Home