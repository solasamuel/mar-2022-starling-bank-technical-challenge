import React from "react";
import { Link } from 'react-router-dom'

const Account = ({ account }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{account.accountType}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{account.name}</h6>
                    <p class="card-text">{account.currency}</p>
                    <Link to={`/roundup/${account.name}`} class="card-link">Calculate this week's round up</Link>
                </div>
            </div>
        </div>
    )
}

export default Account